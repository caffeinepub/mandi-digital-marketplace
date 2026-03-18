import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Location {
    region: string;
    country: string;
    city: string;
    postalCode: string;
    address: string;
}
export interface UserApprovalInfo {
    status: ApprovalStatus;
    principal: Principal;
}
export interface Phone {
    countryCode: string;
    number: string;
}
export interface FarmDocument {
    id: string;
    documentType: string;
    documentUrl: string;
    ownerId: string;
    createdAt: bigint;
    updatedAt: bigint;
    adminApproved: boolean;
}
export interface UserProfile {
    id: Principal;
    name: string;
    createdAt: bigint;
    role: UserRole;
    email: string;
    updatedAt: bigint;
    isVerified: boolean;
    isBanned: boolean;
    phone?: Phone;
    location?: Location;
}
export enum ApprovalStatus {
    pending = "pending",
    approved = "approved",
    rejected = "rejected"
}
export enum UserRole {
    admin = "admin",
    farm = "farm",
    seller = "seller",
    buyer = "buyer"
}
export enum UserRole__1 {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole__1): Promise<void>;
    getAllFarmDocuments(): Promise<Array<FarmDocument>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole__1>;
    getFarmDocumentCount(): Promise<bigint>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getUserProfilesCount(): Promise<bigint>;
    isCallerAdmin(): Promise<boolean>;
    isCallerApproved(): Promise<boolean>;
    listApprovals(): Promise<Array<UserApprovalInfo>>;
    requestApproval(): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setApproval(user: Principal, status: ApprovalStatus): Promise<void>;
}
