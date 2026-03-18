import { useCallback, useState } from "react";

export type UserRole = "buyer" | "seller" | "farm" | "admin";

export interface UserProfileData {
  name: string;
  phone: string;
  city: string;
  region: string;
  roles: UserRole[];
  activeRole: UserRole;
  isVerified: boolean;
}

const STORAGE_KEY = "mandi_user_profile";

const DEFAULT_PROFILE: UserProfileData = {
  name: "",
  phone: "",
  city: "",
  region: "",
  roles: ["buyer"],
  activeRole: "buyer",
  isVerified: false,
};

export const ROLE_META: Record<
  UserRole,
  {
    label: string;
    icon: string;
    color: string;
    border: string;
    dashPath: string;
  }
> = {
  buyer: {
    label: "Buyer",
    icon: "🛒",
    color: "#E7F4EA",
    border: "#2E7D32",
    dashPath: "/dashboard/buyer",
  },
  seller: {
    label: "Seller",
    icon: "🏪",
    color: "#FEF3E2",
    border: "#D07A2A",
    dashPath: "/dashboard/seller",
  },
  farm: {
    label: "Farm",
    icon: "🌾",
    color: "#E7F4EA",
    border: "#2E7D32",
    dashPath: "/dashboard/farm",
  },
  admin: {
    label: "Admin",
    icon: "⚙️",
    color: "#F5F5F5",
    border: "#9E9E9E",
    dashPath: "/dashboard/admin",
  },
};

function loadProfile(): UserProfileData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<UserProfileData>;
      return { ...DEFAULT_PROFILE, ...parsed };
    }
  } catch {
    // ignore
  }
  return { ...DEFAULT_PROFILE };
}

export function useUserProfile() {
  const [profile, setProfileState] = useState<UserProfileData>(loadProfile);

  const saveProfile = useCallback((updates: Partial<UserProfileData>) => {
    setProfileState((prev) => {
      const updated = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const switchRole = useCallback(
    (role: UserRole) => {
      saveProfile({ activeRole: role });
    },
    [saveProfile],
  );

  const clearProfile = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProfileState({ ...DEFAULT_PROFILE });
  }, []);

  return { profile, saveProfile, switchRole, clearProfile };
}
