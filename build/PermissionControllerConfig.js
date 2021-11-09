"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionControllerConfig = exports.PermissionMigration = exports.PermissionMigrationConfig = exports.MigrationTableMapping = exports.MigrationTables = exports.TableMapping = exports.MigrationTableDefinition = exports.MigrationColumnDefinition = void 0;
var MigrationColumnDefinition = /** @class */ (function () {
    function MigrationColumnDefinition(name, type, isPrimary, reference) {
        this.name = name;
        this.type = type;
        this.isPrimary = isPrimary;
        this.reference = reference;
    }
    return MigrationColumnDefinition;
}());
exports.MigrationColumnDefinition = MigrationColumnDefinition;
var MigrationTableDefinition = /** @class */ (function () {
    function MigrationTableDefinition(name, columns) {
        this.name = name;
        this.columns = columns;
    }
    return MigrationTableDefinition;
}());
exports.MigrationTableDefinition = MigrationTableDefinition;
var TableMapping = /** @class */ (function () {
    function TableMapping() {
    }
    TableMapping.PermissionMapping = {
        Id: 0,
        Path: 1,
        CreatedBy: 2,
        CreatedDate: 3,
        IsDeleted: 4,
        DeletedBy: 5,
        DeletedDate: 6
    };
    TableMapping.RoleMapping = {
        Id: 0,
        Name: 1,
        CreatedBy: 2,
        CreatedDate: 3,
        IsDeleted: 4,
        DeletedBy: 5,
        DeletedDate: 6
    };
    TableMapping.RolePermissionMapping = {
        Id: 0,
        RoleId: 1,
        PermissionId: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    TableMapping.UserMapping = {
        Id: 0
    };
    TableMapping.UserDelegationMapping = {
        Id: 0,
        RequestedBy: 1,
        RequestedTo: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    TableMapping.UserRoleMapping = {
        Id: 0,
        UserId: 1,
        RoleId: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    TableMapping.UserPermissionMapping = {
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
    TableMapping.TeamMapping = {
        Id: 0
    };
    TableMapping.TeamUserMapping = {
        Id: 0,
        TeamId: 1,
        UserId: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    TableMapping.TeamRoleMapping = {
        Id: 0,
        TeamId: 1,
        RoleId: 2,
        CreatedBy: 3,
        CreatedDate: 4,
        IsDeleted: 5,
        DeletedBy: 6,
        DeletedDate: 7
    };
    TableMapping.TeamPermissionMapping = {
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
    return TableMapping;
}());
exports.TableMapping = TableMapping;
var MigrationTables = /** @class */ (function () {
    function MigrationTables() {
    }
    MigrationTables.DefaultPermissionTable = new MigrationTableDefinition("Permission", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("Path", "nvarchar(MAX)", false, null),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultRoleTable = new MigrationTableDefinition("Role", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("Name", "nvarchar(MAX)", false, null),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultRolePermissionTable = new MigrationTableDefinition("RolePermission", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("RoleId", "uniqueidentifier", false, "Role.Id"),
        new MigrationColumnDefinition("PermissionId", "uniqueidentifier", false, "Permission.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultUserTable = new MigrationTableDefinition("User", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null)
    ]);
    MigrationTables.DefaultUserDelegation = new MigrationTableDefinition("UserDelegation", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("RequestedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("RequestedTo", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultUserRole = new MigrationTableDefinition("UserRole", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("UserId", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("RoleId", "uniqueidentifier", false, "Role.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultUserPermissionTable = new MigrationTableDefinition("UserPermission", [
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
    MigrationTables.DefaultTeamTable = new MigrationTableDefinition("Team", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null)
    ]);
    MigrationTables.DefaultTeamUser = new MigrationTableDefinition("TeamUser", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("TeamId", "uniqueidentifier", false, "Team.Id"),
        new MigrationColumnDefinition("UserId", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultTeamRole = new MigrationTableDefinition("TeamRole", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("TeamId", "uniqueidentifier", false, "Team.Id"),
        new MigrationColumnDefinition("RoleId", "uniqueidentifier", false, "Role.Id"),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultTeamPermission = new MigrationTableDefinition("TeamPermission", [
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
    return MigrationTables;
}());
exports.MigrationTables = MigrationTables;
var MigrationTableMapping = /** @class */ (function () {
    function MigrationTableMapping(permission, role, rolePermission, user, userDelegation, userRole, userPermission, team, teamUser, teamRole, teamPermission) {
        if (permission === void 0) { permission = TableMapping.PermissionMapping; }
        if (role === void 0) { role = TableMapping.RoleMapping; }
        if (rolePermission === void 0) { rolePermission = TableMapping.RolePermissionMapping; }
        if (user === void 0) { user = TableMapping.UserMapping; }
        if (userDelegation === void 0) { userDelegation = TableMapping.UserDelegationMapping; }
        if (userRole === void 0) { userRole = TableMapping.UserRoleMapping; }
        if (userPermission === void 0) { userPermission = TableMapping.UserPermissionMapping; }
        if (team === void 0) { team = TableMapping.TeamMapping; }
        if (teamUser === void 0) { teamUser = TableMapping.TeamUserMapping; }
        if (teamRole === void 0) { teamRole = TableMapping.TeamRoleMapping; }
        if (teamPermission === void 0) { teamPermission = TableMapping.TeamPermissionMapping; }
        this.permission = permission;
        this.role = role;
        this.rolePermission = rolePermission;
        this.user = user;
        this.userDelegation = userDelegation;
        this.userRole = userRole;
        this.userPermission = userPermission;
        this.team = team;
        this.teamUser = teamUser;
        this.teamRole = teamRole;
        this.teamPermission = teamPermission;
        if (!permission)
            this.permission = TableMapping.PermissionMapping;
        if (!role)
            this.role = TableMapping.RoleMapping;
        if (!rolePermission)
            this.rolePermission = TableMapping.RolePermissionMapping;
        if (!user)
            this.user = TableMapping.UserMapping;
        if (!userDelegation)
            this.userDelegation = TableMapping.UserDelegationMapping;
        if (!userRole)
            this.userRole = TableMapping.UserRoleMapping;
        if (!userPermission)
            this.userPermission = TableMapping.UserPermissionMapping;
        if (!team)
            this.team = TableMapping.TeamMapping;
        if (!teamUser)
            this.teamUser = TableMapping.TeamUserMapping;
        if (!teamRole)
            this.teamRole = TableMapping.TeamRoleMapping;
        if (!teamPermission)
            this.teamPermission = TableMapping.TeamPermissionMapping;
    }
    return MigrationTableMapping;
}());
exports.MigrationTableMapping = MigrationTableMapping;
var PermissionMigrationConfig = /** @class */ (function () {
    function PermissionMigrationConfig(permissionTable, roleTable, rolePermissionTable, userTable, userDelegationTable, userRoleTable, userPermissionTable, teamTable, teamUserTable, teamRoleTable, teamPermissionTable, userPermissionEnabled, teamPermissionEnabled, userRelatedPermissionEnabled, teamRelatedPermissionEnabled, userDelegationEnabled, cacheEnabled, TableMapping) {
        if (permissionTable === void 0) { permissionTable = null; }
        if (roleTable === void 0) { roleTable = null; }
        if (rolePermissionTable === void 0) { rolePermissionTable = null; }
        if (userTable === void 0) { userTable = null; }
        if (userDelegationTable === void 0) { userDelegationTable = null; }
        if (userRoleTable === void 0) { userRoleTable = null; }
        if (userPermissionTable === void 0) { userPermissionTable = null; }
        if (teamTable === void 0) { teamTable = null; }
        if (teamUserTable === void 0) { teamUserTable = null; }
        if (teamRoleTable === void 0) { teamRoleTable = null; }
        if (teamPermissionTable === void 0) { teamPermissionTable = null; }
        if (userPermissionEnabled === void 0) { userPermissionEnabled = false; }
        if (teamPermissionEnabled === void 0) { teamPermissionEnabled = false; }
        if (userRelatedPermissionEnabled === void 0) { userRelatedPermissionEnabled = false; }
        if (teamRelatedPermissionEnabled === void 0) { teamRelatedPermissionEnabled = false; }
        if (userDelegationEnabled === void 0) { userDelegationEnabled = false; }
        if (cacheEnabled === void 0) { cacheEnabled = false; }
        if (TableMapping === void 0) { TableMapping = null; }
        this.permissionTable = permissionTable;
        this.roleTable = roleTable;
        this.rolePermissionTable = rolePermissionTable;
        this.userTable = userTable;
        this.userDelegationTable = userDelegationTable;
        this.userRoleTable = userRoleTable;
        this.userPermissionTable = userPermissionTable;
        this.teamTable = teamTable;
        this.teamUserTable = teamUserTable;
        this.teamRoleTable = teamRoleTable;
        this.teamPermissionTable = teamPermissionTable;
        this.userPermissionEnabled = userPermissionEnabled;
        this.teamPermissionEnabled = teamPermissionEnabled;
        this.userRelatedPermissionEnabled = userRelatedPermissionEnabled;
        this.teamRelatedPermissionEnabled = teamRelatedPermissionEnabled;
        this.userDelegationEnabled = userDelegationEnabled;
        this.cacheEnabled = cacheEnabled;
        this.TableMapping = TableMapping;
        if (!permissionTable)
            this.permissionTable = MigrationTables.DefaultPermissionTable;
        if (!roleTable)
            this.roleTable = MigrationTables.DefaultRoleTable;
        if (!rolePermissionTable)
            this.rolePermissionTable = MigrationTables.DefaultRolePermissionTable;
        if (!userTable)
            this.userTable = MigrationTables.DefaultUserTable;
        if (!userRoleTable)
            this.userRoleTable = MigrationTables.DefaultUserRole;
        if (!userDelegationTable)
            this.userDelegationTable = MigrationTables.DefaultUserDelegation;
        if (!userPermissionTable)
            this.userPermissionTable = MigrationTables.DefaultUserPermissionTable;
        if (!teamTable)
            this.teamTable = MigrationTables.DefaultTeamTable;
        if (!teamUserTable)
            this.teamUserTable = MigrationTables.DefaultTeamUser;
        if (!teamRoleTable)
            this.teamRoleTable = MigrationTables.DefaultTeamRole;
        if (!teamPermissionTable)
            this.teamPermissionTable = MigrationTables.DefaultTeamPermission;
        if (!TableMapping)
            this.TableMapping = new MigrationTableMapping();
    }
    return PermissionMigrationConfig;
}());
exports.PermissionMigrationConfig = PermissionMigrationConfig;
var PermissionMigration = /** @class */ (function () {
    function PermissionMigration(db, config) {
        this.db = db;
        this.config = config;
    }
    PermissionMigration.prototype.migrate = function () {
        this.up(this.config.permissionTable);
        this.up(this.config.roleTable);
        this.up(this.config.rolePermissionTable);
        this.up(this.config.userTable);
        this.up(this.config.userRoleTable);
        if (this.config.userPermissionEnabled)
            this.up(this.config.userPermissionTable);
        if (this.config.userRelatedPermissionEnabled && !this.config.userPermissionEnabled) {
            throw new Error("User related permission is enabled but user permission is not enabled");
        }
        this.up(this.config.teamTable);
        this.up(this.config.teamUserTable);
        this.up(this.config.teamRoleTable);
        if (this.config.teamPermissionEnabled)
            this.up(this.config.teamPermissionTable);
        if (this.config.teamRelatedPermissionEnabled && !this.config.teamPermissionEnabled) {
            throw new Error("Team related permission is enabled but team permission is not enabled");
        }
    };
    PermissionMigration.prototype.up = function (definition) {
        var _this = this;
        this.db.schema.hasTable(definition.name).then(function (exists) {
            if (!exists) {
                _this.db.schema.createTable(definition.name, function (table) {
                    definition.columns.forEach(function (column) {
                        var f = table.specificType(column.name, column.type);
                        if (!column.isPrimary) {
                            f.nullable();
                        }
                    });
                }).catch(console.error);
            }
        });
    };
    return PermissionMigration;
}());
exports.PermissionMigration = PermissionMigration;
var PermissionControllerConfig = /** @class */ (function () {
    function PermissionControllerConfig(migration, userResolver, recordResolver, migrationEnabled, apiEndPoint, apiEndPointEnabled) {
        if (apiEndPointEnabled === void 0) { apiEndPointEnabled = true; }
        this.migration = migration;
        this.userResolver = userResolver;
        this.recordResolver = recordResolver;
        this.migrationEnabled = migrationEnabled;
        this.apiEndPoint = apiEndPoint;
        this.apiEndPointEnabled = apiEndPointEnabled;
        if (!this.apiEndPoint) {
            this.apiEndPoint = "/api/permission/check";
        }
    }
    return PermissionControllerConfig;
}());
exports.PermissionControllerConfig = PermissionControllerConfig;
//# sourceMappingURL=PermissionControllerConfig.js.map