import { Request } from "express";
import { Knex } from "knex";
import { RelatedRecord, UserRecord } from "./PermissionContext";
export declare class MigrationColumnDefinition {
    name: string;
    type: string;
    isPrimary: boolean;
    reference: string;
    constructor(name: string, type: string, isPrimary: boolean, reference: string);
}
export declare class MigrationTableDefinition {
    name: string;
    columns: MigrationColumnDefinition[];
    constructor(name: string, columns: MigrationColumnDefinition[]);
}
export declare class TableMapping {
    static PermissionMapping: {
        Id: number;
        Path: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    static RoleMapping: {
        Id: number;
        Name: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    static RolePermissionMapping: {
        Id: number;
        RoleId: number;
        PermissionId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    static UserMapping: {
        Id: number;
    };
    static UserDelegationMapping: {
        Id: number;
        RequestedBy: number;
        RequestedTo: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    static UserRoleMapping: {
        Id: number;
        UserId: number;
        RoleId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    static UserPermissionMapping: {
        Id: number;
        UserId: number;
        PermissionId: number;
        RelatedName: number;
        RelatedId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    static TeamMapping: {
        Id: number;
    };
    static TeamUserMapping: {
        Id: number;
        TeamId: number;
        UserId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    static TeamRoleMapping: {
        Id: number;
        TeamId: number;
        RoleId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    static TeamPermissionMapping: {
        Id: number;
        TeamId: number;
        PermissionId: number;
        RelatedName: number;
        RelatedId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
}
export declare class MigrationTables {
    static DefaultPermissionTable: MigrationTableDefinition;
    static DefaultRoleTable: MigrationTableDefinition;
    static DefaultRolePermissionTable: MigrationTableDefinition;
    static DefaultUserTable: MigrationTableDefinition;
    static DefaultUserDelegation: MigrationTableDefinition;
    static DefaultUserRole: MigrationTableDefinition;
    static DefaultUserPermissionTable: MigrationTableDefinition;
    static DefaultTeamTable: MigrationTableDefinition;
    static DefaultTeamUser: MigrationTableDefinition;
    static DefaultTeamRole: MigrationTableDefinition;
    static DefaultTeamPermission: MigrationTableDefinition;
}
export declare class MigrationTableMapping {
    permission: {
        Id: number;
        Path: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    role: {
        Id: number;
        Name: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    rolePermission: {
        Id: number;
        RoleId: number;
        PermissionId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    user: {
        Id: number;
    };
    userDelegation: {
        Id: number;
        RequestedBy: number;
        RequestedTo: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    userRole: {
        Id: number;
        UserId: number;
        RoleId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    userPermission: {
        Id: number;
        UserId: number;
        PermissionId: number;
        RelatedName: number;
        RelatedId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    team: {
        Id: number;
    };
    teamUser: {
        Id: number;
        TeamId: number;
        UserId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    teamRole: {
        Id: number;
        TeamId: number;
        RoleId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    teamPermission: {
        Id: number;
        TeamId: number;
        PermissionId: number;
        RelatedName: number;
        RelatedId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    };
    constructor(permission?: {
        Id: number;
        Path: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    }, role?: {
        Id: number;
        Name: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    }, rolePermission?: {
        Id: number;
        RoleId: number;
        PermissionId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    }, user?: {
        Id: number;
    }, userDelegation?: {
        Id: number;
        RequestedBy: number;
        RequestedTo: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    }, userRole?: {
        Id: number;
        UserId: number;
        RoleId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    }, userPermission?: {
        Id: number;
        UserId: number;
        PermissionId: number;
        RelatedName: number;
        RelatedId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    }, team?: {
        Id: number;
    }, teamUser?: {
        Id: number;
        TeamId: number;
        UserId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    }, teamRole?: {
        Id: number;
        TeamId: number;
        RoleId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    }, teamPermission?: {
        Id: number;
        TeamId: number;
        PermissionId: number;
        RelatedName: number;
        RelatedId: number;
        CreatedBy: number;
        CreatedDate: number;
        IsDeleted: number;
        DeletedBy: number;
        DeletedDate: number;
    });
}
export declare class PermissionMigrationConfig {
    permissionTable: MigrationTableDefinition;
    roleTable: MigrationTableDefinition;
    rolePermissionTable: MigrationTableDefinition;
    userTable: MigrationTableDefinition;
    userDelegationTable: MigrationTableDefinition;
    userRoleTable: MigrationTableDefinition;
    userPermissionTable: MigrationTableDefinition;
    teamTable: MigrationTableDefinition;
    teamUserTable: MigrationTableDefinition;
    teamRoleTable: MigrationTableDefinition;
    teamPermissionTable: MigrationTableDefinition;
    userPermissionEnabled: Boolean;
    teamPermissionEnabled: Boolean;
    userRelatedPermissionEnabled: Boolean;
    teamRelatedPermissionEnabled: Boolean;
    userDelegationEnabled: Boolean;
    cacheEnabled: Boolean;
    TableMapping: MigrationTableMapping;
    constructor(permissionTable?: MigrationTableDefinition, roleTable?: MigrationTableDefinition, rolePermissionTable?: MigrationTableDefinition, userTable?: MigrationTableDefinition, userDelegationTable?: MigrationTableDefinition, userRoleTable?: MigrationTableDefinition, userPermissionTable?: MigrationTableDefinition, teamTable?: MigrationTableDefinition, teamUserTable?: MigrationTableDefinition, teamRoleTable?: MigrationTableDefinition, teamPermissionTable?: MigrationTableDefinition, userPermissionEnabled?: Boolean, teamPermissionEnabled?: Boolean, userRelatedPermissionEnabled?: Boolean, teamRelatedPermissionEnabled?: Boolean, userDelegationEnabled?: Boolean, cacheEnabled?: Boolean, TableMapping?: MigrationTableMapping);
}
export declare class PermissionMigration {
    db: Knex;
    config: PermissionMigrationConfig;
    constructor(db: Knex, config: PermissionMigrationConfig);
    migrate(): void;
    private up;
}
interface PermissionUserResolver {
    (req: Request): Promise<UserRecord>;
}
interface RecordReferenceResolver {
    (path: string[], request: any): Promise<RelatedRecord>;
}
export declare class PermissionControllerConfig {
    migration: PermissionMigration;
    userResolver: PermissionUserResolver;
    recordResolver: RecordReferenceResolver;
    migrationEnabled: Boolean;
    apiEndPoint: string;
    apiEndPointEnabled: Boolean;
    constructor(migration: PermissionMigration, userResolver: PermissionUserResolver, recordResolver: RecordReferenceResolver, migrationEnabled: Boolean, apiEndPoint: string, apiEndPointEnabled?: Boolean);
}
export {};
//# sourceMappingURL=PermissionControllerConfig.d.ts.map