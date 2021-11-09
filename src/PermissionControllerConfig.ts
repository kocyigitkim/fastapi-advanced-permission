
import { Request } from "express";
import { Knex } from "knex";
import { RelatedRecord, UserRecord } from "./PermissionContext";

export class MigrationColumnDefinition {
    constructor(public name: string, public type: string, public isPrimary: boolean, public reference: string) { }
}
export class MigrationTableDefinition {
    constructor(public name: string, public columns: MigrationColumnDefinition[]) { }
}
export class TableMapping {
    static PermissionMapping = {
        Id: 0,
        Path: 1,
        CreatedBy: 2,
        CreatedDate: 3,
        IsDeleted: 4,
        DeletedBy: 5,
        DeletedDate: 6
    };
    static RoleMapping = {
        Id: 0,
        Name: 1,
        CreatedBy: 2,
        CreatedDate: 3,
        IsDeleted: 4,
        DeletedBy: 5,
        DeletedDate: 6
    };
    static RolePermissionMapping = {
        Id: 0,
        RoleId: 1,
        PermissionId: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    static UserMapping = {
        Id: 0
    };
    static UserDelegationMapping = {
        Id: 0,
        RequestedBy: 1,
        RequestedTo: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    static UserRoleMapping = {
        Id: 0,
        UserId: 1,
        RoleId: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    static UserPermissionMapping = {
        Id: 0,
        UserId: 1,
        PermissionId: 2,
        RelatedName: 3,
        RelatedId: 4,
        CreatedBy: 5,
        CreatedDate: 6,
        IsDeleted: 7,
        DeletedBy: 8,
        DeletedDate: 9
    };
    static TeamMapping = {
        Id: 0
    };
    static TeamUserMapping = {
        Id: 0,
        TeamId: 1,
        UserId: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    static TeamRoleMapping = {
        Id: 0,
        TeamId: 1,
        RoleId: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    static TeamPermissionMapping = {
        Id: 0,
        TeamId: 1,
        PermissionId: 2,
        RelatedName: 3,
        RelatedId: 4,
        CreatedBy: 5,
        CreatedDate: 6,
        IsDeleted: 7,
        DeletedBy: 8,
        DeletedDate: 9
    };
}
export class MigrationTables {
    public static DefaultPermissionTable = new MigrationTableDefinition("Permission", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("Path", "nvarchar(MAX)", false, null),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    public static DefaultRoleTable = new MigrationTableDefinition("Role", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("Name", "nvarchar(MAX)", false, null),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    public static DefaultRolePermissionTable = new MigrationTableDefinition("RolePermission", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("RoleId", "uniqueidentifier", false, "Role.Id"),
        new MigrationColumnDefinition("PermissionId", "uniqueidentifier", false, "Permission.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    public static DefaultUserTable = new MigrationTableDefinition("User", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null)
    ]);
    public static DefaultUserDelegation = new MigrationTableDefinition("UserDelegation", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("RequestedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("RequestedTo", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    public static DefaultUserRole = new MigrationTableDefinition("UserRole", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("UserId", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("RoleId", "uniqueidentifier", false, "Role.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    public static DefaultUserPermissionTable = new MigrationTableDefinition("UserPermission", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("UserId", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("PermissionId", "uniqueidentifier", false, "Permission.Id"),
        new MigrationColumnDefinition("RelatedName", "nvarchar(MAX)", false, null),
        new MigrationColumnDefinition("RelatedId", "uniqueidentifier", false, null),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    public static DefaultTeamTable = new MigrationTableDefinition("Team", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null)
    ]);
    public static DefaultTeamUser = new MigrationTableDefinition("TeamUser", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("TeamId", "uniqueidentifier", false, "Team.Id"),
        new MigrationColumnDefinition("UserId", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    public static DefaultTeamRole = new MigrationTableDefinition("TeamRole", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("TeamId", "uniqueidentifier", false, "Team.Id"),
        new MigrationColumnDefinition("RoleId", "uniqueidentifier", false, "Role.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    public static DefaultTeamPermission = new MigrationTableDefinition("TeamPermission", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("TeamId", "uniqueidentifier", false, "Team.Id"),
        new MigrationColumnDefinition("PermissionId", "uniqueidentifier", false, "Permission.Id"),
        new MigrationColumnDefinition("RelatedName", "nvarchar(MAX)", false, null),
        new MigrationColumnDefinition("RelatedId", "uniqueidentifier", false, null),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
}
export class MigrationTableMapping {
    constructor(
        public permission = TableMapping.PermissionMapping,
        public role = TableMapping.RoleMapping,
        public rolePermission = TableMapping.RolePermissionMapping,
        public user = TableMapping.UserMapping,
        public userDelegation = TableMapping.UserDelegationMapping,
        public userRole = TableMapping.UserRoleMapping,
        public userPermission = TableMapping.UserPermissionMapping,
        public team = TableMapping.TeamMapping,
        public teamUser = TableMapping.TeamUserMapping,
        public teamRole = TableMapping.TeamRoleMapping,
        public teamPermission = TableMapping.TeamPermissionMapping
    ) {
        if (!permission) this.permission = (TableMapping.PermissionMapping as any);
        if (!role) this.role = (TableMapping.RoleMapping as any);
        if (!rolePermission) this.rolePermission = (TableMapping.RolePermissionMapping as any);
        if (!user) this.user = (TableMapping.UserMapping as any);
        if (!userDelegation) this.userDelegation = (TableMapping.UserDelegationMapping as any);
        if (!userRole) this.userRole = (TableMapping.UserRoleMapping as any);
        if (!userPermission) this.userPermission = (TableMapping.UserPermissionMapping as any);
        if (!team) this.team = (TableMapping.TeamMapping as any);
        if (!teamUser) this.teamUser = (TableMapping.TeamUserMapping as any);
        if (!teamRole) this.teamRole = (TableMapping.TeamRoleMapping as any);
        if (!teamPermission) this.teamPermission = (TableMapping.TeamPermissionMapping as any);
    }
}
export class PermissionMigrationConfig {
    constructor(public permissionTable: MigrationTableDefinition = null,
        public roleTable: MigrationTableDefinition = null,
        public rolePermissionTable: MigrationTableDefinition = null,
        public userTable: MigrationTableDefinition = null,
        public userDelegationTable: MigrationTableDefinition = null,
        public userRoleTable: MigrationTableDefinition = null,
        public userPermissionTable: MigrationTableDefinition = null,
        public teamTable: MigrationTableDefinition = null,
        public teamUserTable: MigrationTableDefinition = null,
        public teamRoleTable: MigrationTableDefinition = null,
        public teamPermissionTable: MigrationTableDefinition = null,
        public userPermissionEnabled: Boolean = false,
        public teamPermissionEnabled: Boolean = false,
        public userRelatedPermissionEnabled: Boolean = false,
        public teamRelatedPermissionEnabled: Boolean = false,
        public userDelegationEnabled: Boolean = false,
        public cacheEnabled: Boolean = false,
        public TableMapping: MigrationTableMapping = null
    ) {
        if (!permissionTable) this.permissionTable = MigrationTables.DefaultPermissionTable;
        if (!roleTable) this.roleTable = MigrationTables.DefaultRoleTable;
        if (!rolePermissionTable) this.rolePermissionTable = MigrationTables.DefaultRolePermissionTable;
        if (!userTable) this.userTable = MigrationTables.DefaultUserTable;
        if (!userRoleTable) this.userRoleTable = MigrationTables.DefaultUserRole;
        if (!userDelegationTable) this.userDelegationTable = MigrationTables.DefaultUserDelegation;
        if (!userPermissionTable) this.userPermissionTable = MigrationTables.DefaultUserPermissionTable;
        if (!teamTable) this.teamTable = MigrationTables.DefaultTeamTable;
        if (!teamUserTable) this.teamUserTable = MigrationTables.DefaultTeamUser;
        if (!teamRoleTable) this.teamRoleTable = MigrationTables.DefaultTeamRole;
        if (!teamPermissionTable) this.teamPermissionTable = MigrationTables.DefaultTeamPermission;
        if (!TableMapping) this.TableMapping = new MigrationTableMapping();
    }
}

export class PermissionMigration {
    constructor(public db: Knex, public config: PermissionMigrationConfig) { }
    public migrate() {
        this.up(this.config.permissionTable);
        this.up(this.config.roleTable);
        this.up(this.config.rolePermissionTable);
        this.up(this.config.userTable);
        this.up(this.config.userRoleTable);
        if (this.config.userPermissionEnabled) this.up(this.config.userPermissionTable);
        if (this.config.userRelatedPermissionEnabled && !this.config.userPermissionEnabled) {
            throw new Error("User related permission is enabled but user permission is not enabled");
        }
        this.up(this.config.teamTable);
        this.up(this.config.teamUserTable);
        this.up(this.config.teamRoleTable);
        if (this.config.teamPermissionEnabled) this.up(this.config.teamPermissionTable);
        if (this.config.teamRelatedPermissionEnabled && !this.config.teamPermissionEnabled) {
            throw new Error("Team related permission is enabled but team permission is not enabled");
        }
    }
    private up(definition: MigrationTableDefinition) {
        this.db.schema.hasTable(definition.name).then(exists => {
            if (!exists) {
                this.db.schema.createTable(definition.name, table => {
                    definition.columns.forEach((column: MigrationColumnDefinition) => {
                        var f = table.specificType(column.name, column.type);
                        if (!column.isPrimary) {
                            f.nullable();
                        }
                    });
                }).catch(console.error);
            }
        });
    }

}

interface PermissionUserResolver {
    (req: Request): Promise<UserRecord>;
}
interface RecordReferenceResolver {
    (path: string[], request: any): Promise<RelatedRecord>;
}
export class PermissionControllerConfig {
    constructor(public migration: PermissionMigration, public userResolver: PermissionUserResolver, public recordResolver: RecordReferenceResolver, public migrationEnabled: Boolean, public apiEndPoint: string, public apiEndPointEnabled: Boolean = true) {
        if (!this.apiEndPoint) {
            this.apiEndPoint = "/api/permission/check";
        }
    }
}
