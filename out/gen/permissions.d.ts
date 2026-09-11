export type PermissionsCommand = Permissions.SetPermission;
export declare namespace Permissions {
  type PermissionDescriptor = {
    name: string;
  };
}
export declare namespace Permissions {
  const PermissionState: {
    readonly Granted: 'granted';
    readonly Denied: 'denied';
    readonly Prompt: 'prompt';
  };
  type PermissionState = (typeof PermissionState)[keyof typeof PermissionState];
}
export declare namespace Permissions {
  type SetPermission = {
    method: 'permissions.setPermission';
    params: Permissions.SetPermissionParameters;
  };
}
export declare namespace Permissions {
  type SetPermissionParameters = {
    descriptor: Permissions.PermissionDescriptor;
    state: Permissions.PermissionState;
    origin: string;
    embeddedOrigin?: string;
    userContext?: string;
  };
}
