import Array "mo:core/Array";
import Debug "mo:core/Debug";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import UserApproval "user-approval/approval";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";

actor {
  // Access control and user approval states
  let accessControlState = AccessControl.initState();
  let approvalState = UserApproval.initState(accessControlState);

  include MixinAuthorization(accessControlState);
  include MixinStorage();

  public type UserRole = {
    #buyer;
    #seller;
    #farm;
    #admin;
  };

  public type Location = {
    address : Text;
    city : Text;
    postalCode : Text;
    region : Text;
    country : Text;
  };

  public type Phone = {
    number : Text;
    countryCode : Text;
  };

  public type UserProfile = {
    id : Principal;
    name : Text;
    email : Text;
    phone : ?Phone;
    location : ?Location;
    role : UserRole;
    isVerified : Bool;
    isBanned : Bool;
    createdAt : Int;
    updatedAt : Int;
  };

  public type FarmDocument = {
    id : Text;
    ownerId : Text;
    documentType : Text;
    documentUrl : Text;
    adminApproved : Bool;
    createdAt : Int;
    updatedAt : Int;
  };

  module FarmDocument {
    public func compareByLastModified(farmDocument1 : FarmDocument, farmDocument2 : FarmDocument) : Order.Order {
      Int.compare(farmDocument1.updatedAt, farmDocument2.updatedAt);
    };
  };

  public shared ({ caller }) func _getProfile() : async UserProfile {
    switch (userProfiles.get(caller)) {
      case (null) { Runtime.trap("User profile not found for caller " # caller.toText()) };
      case (?profile) { profile };
    };
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let farmDocuments = Map.empty<Text, FarmDocument>();

  // Required frontend functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    // Ensure caller can only save their own profile
    if (profile.id != caller) {
      Runtime.trap("Unauthorized: Can only save your own profile");
    };
    userProfiles.add(caller, profile);
  };

  //!
  //!  USER APPROVAL FUNCTIONS
  //!
  public query ({ caller }) func isCallerApproved() : async Bool {
    AccessControl.hasPermission(accessControlState, caller, #admin) or UserApproval.isApproved(approvalState, caller);
  };

  public shared ({ caller }) func requestApproval() : async () {
    UserApproval.requestApproval(approvalState, caller);
  };

  public shared ({ caller }) func setApproval(user : Principal, status : UserApproval.ApprovalStatus) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    UserApproval.setApproval(approvalState, user, status);
  };

  public query ({ caller }) func listApprovals() : async [UserApproval.UserApprovalInfo] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    UserApproval.listApprovals(approvalState);
  };

  //!
  //!  ADMIN FUNCTIONS
  //!
  
  // Admin-only: Get count of all user profiles
  public query ({ caller }) func getUserProfilesCount() : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view user count");
    };
    userProfiles.size();
  };

  // Admin-only: Get all farm documents
  public query ({ caller }) func getAllFarmDocuments() : async [FarmDocument] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all farm documents");
    };
    farmDocuments.values().toArray().sort(FarmDocument.compareByLastModified);
  };

  // Admin-only: Get farm document count
  public query ({ caller }) func getFarmDocumentCount() : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view farm document count");
    };
    farmDocuments.size();
  };
};
