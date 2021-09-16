import { Request } from "express";
import { Knex } from "knex";
import { UserRecord } from "./PermissionContext";
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
export declare namespace TableMapping {
    enum PermissionMapping {
        Id = 0,
        Path = 1,
        CreatedBy = 2,
        CreatedDate = 3,
        ModifiedBy = 4,
        ModifiedDate = 5,
        IsDeleted = 6,
        DeletedBy = 7,
        DeletedDate = 8
    }
    enum RoleMapping {
        Id = 0,
        Name = 1,
        CreatedBy = 2,
        CreatedDate = 3,
        ModifiedBy = 4,
        ModifiedDate = 5,
        IsDeleted = 6,
        DeletedBy = 7,
        DeletedDate = 8
    }
    enum RolePermissionMapping {
        Id = 0,
        RoleId = 1,
        PermissionId = 2,
        CreatedBy = 3,
        CreatedDate = 4,
        ModifiedBy = 5,
        ModifiedDate = 6,
        IsDeleted = 7,
        DeletedBy = 8,
        DeletedDate = 9
    }
    enum UserMapping {
        Id = 0
    }
    enum UserDeputationMapping {
        Id = 0,
        RequestedBy = 1,
        RequestedTo = 2,
        CreatedBy = 3,
        CreatedDate = 4,
        IsDeleted = 5,
        DeletedBy = 6,
        DeletedDate = 7
    }
    enum UserRoleMapping {
        Id = 0,
        UserId = 1,
        RoleId = 2,
        CreatedBy = 3,
        CreatedDate = 4,
        IsDeleted = 5,
        DeletedBy = 6,
        DeletedDate = 7
    }
    enum UserPermissionMapping {
        Id = 0,
        UserId = 1,
        PermissionId = 2,
        RelatedName = 3,
        RelatedId = 4,
        CreatedBy = 5,
        CreatedDate = 6,
        IsDeleted = 7,
        DeletedBy = 8,
        DeletedDate = 9
    }
    enum TeamMapping {
        Id = 0
    }
    enum TeamUserMapping {
        Id = 0,
        TeamId = 1,
        UserId = 2,
        CreatedBy = 3,
        CreatedDate = 4,
        IsDeleted = 5,
        DeletedBy = 6,
        DeletedDate = 7
    }
    enum TeamRoleMapping {
        Id = 0,
        TeamId = 1,
        RoleId = 2,
        CreatedBy = 3,
        CreatedDate = 4,
        IsDeleted = 5,
        DeletedBy = 6,
        DeletedDate = 7
    }
    enum TeamPermissionMapping {
        Id = 0,
        TeamId = 1,
        PermissionId = 2,
        RelatedName = 3,
        RelatedId = 4,
        CreatedBy = 5,
        CreatedDate = 6,
        IsDeleted = 7,
        DeletedBy = 8,
        DeletedDate = 9
    }
}
export declare class MigrationTables {
    static DefaultPermissionTable: MigrationTableDefinition;
    static DefaultRoleTable: MigrationTableDefinition;
    static DefaultRolePermissionTable: MigrationTableDefinition;
    static DefaultUserTable: MigrationTableDefinition;
    static DefaultUserDeputation: MigrationTableDefinition;
    static DefaultUserRole: MigrationTableDefinition;
    static DefaultUserPermissionTable: MigrationTableDefinition;
    static DefaultTeamTable: MigrationTableDefinition;
    static DefaultTeamUser: MigrationTableDefinition;
    static DefaultTeamRole: MigrationTableDefinition;
    static DefaultTeamPermission: MigrationTableDefinition;
}
export declare class MigrationTableMapping {
    permission: TableMapping.PermissionMapping;
    role: TableMapping.RoleMapping;
    rolePermission: TableMapping.RolePermissionMapping;
    user: TableMapping.UserMapping;
    userDeputation: TableMapping.UserDeputationMapping;
    userRole: TableMapping.UserRoleMapping;
    userPermission: TableMapping.UserPermissionMapping;
    team: TableMapping.TeamMapping;
    teamUser: TableMapping.TeamUserMapping;
    teamRole: TableMapping.TeamRoleMapping;
    teamPermission: TableMapping.TeamPermissionMapping;
    constructor(permission?: TableMapping.PermissionMapping, role?: TableMapping.RoleMapping, rolePermission?: TableMapping.RolePermissionMapping, user?: TableMapping.UserMapping, userDeputation?: TableMapping.UserDeputationMapping, userRole?: TableMapping.UserRoleMapping, userPermission?: TableMapping.UserPermissionMapping, team?: TableMapping.TeamMapping, teamUser?: TableMapping.TeamUserMapping, teamRole?: TableMapping.TeamRoleMapping, teamPermission?: TableMapping.TeamPermissionMapping);
}
export declare class PermissionMigrationConfig {
    permissionTable: MigrationTableDefinition;
    roleTable: MigrationTableDefinition;
    rolePermissionTable: MigrationTableDefinition;
    userTable: MigrationTableDefinition;
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
    TableMapping: MigrationTableMapping;
    constructor(permissionTable?: MigrationTableDefinition, roleTable?: MigrationTableDefinition, rolePermissionTable?: MigrationTableDefinition, userTable?: MigrationTableDefinition, userRoleTable?: MigrationTableDefinition, userPermissionTable?: MigrationTableDefinition, teamTable?: MigrationTableDefinition, teamUserTable?: MigrationTableDefinition, teamRoleTable?: MigrationTableDefinition, teamPermissionTable?: MigrationTableDefinition, userPermissionEnabled?: Boolean, teamPermissionEnabled?: Boolean, userRelatedPermissionEnabled?: Boolean, teamRelatedPermissionEnabled?: Boolean, TableMapping?: MigrationTableMapping);
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
export declare class PermissionControllerConfig {
    migration: PermissionMigration;
    userResolver: PermissionUserResolver;
    migrationEnabled: Boolean;
    constructor(migration: PermissionMigration, userResolver: PermissionUserResolver, migrationEnabled: Boolean);
}
export {};
//# sourceMappingURL=PermissionControllerConfig.d.ts.map