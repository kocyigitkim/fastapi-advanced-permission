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
var TableMapping;
(function (TableMapping) {
    var PermissionMapping;
    (function (PermissionMapping) {
        PermissionMapping[PermissionMapping["Id"] = 0] = "Id";
        PermissionMapping[PermissionMapping["Path"] = 1] = "Path";
        PermissionMapping[PermissionMapping["CreatedBy"] = 2] = "CreatedBy";
        PermissionMapping[PermissionMapping["CreatedDate"] = 3] = "CreatedDate";
        PermissionMapping[PermissionMapping["ModifiedBy"] = 4] = "ModifiedBy";
        PermissionMapping[PermissionMapping["ModifiedDate"] = 5] = "ModifiedDate";
        PermissionMapping[PermissionMapping["IsDeleted"] = 6] = "IsDeleted";
        PermissionMapping[PermissionMapping["DeletedBy"] = 7] = "DeletedBy";
        PermissionMapping[PermissionMapping["DeletedDate"] = 8] = "DeletedDate";
    })(PermissionMapping = TableMapping.PermissionMapping || (TableMapping.PermissionMapping = {}));
    var RoleMapping;
    (function (RoleMapping) {
        RoleMapping[RoleMapping["Id"] = 0] = "Id";
        RoleMapping[RoleMapping["Name"] = 1] = "Name";
        RoleMapping[RoleMapping["CreatedBy"] = 2] = "CreatedBy";
        RoleMapping[RoleMapping["CreatedDate"] = 3] = "CreatedDate";
        RoleMapping[RoleMapping["ModifiedBy"] = 4] = "ModifiedBy";
        RoleMapping[RoleMapping["ModifiedDate"] = 5] = "ModifiedDate";
        RoleMapping[RoleMapping["IsDeleted"] = 6] = "IsDeleted";
        RoleMapping[RoleMapping["DeletedBy"] = 7] = "DeletedBy";
        RoleMapping[RoleMapping["DeletedDate"] = 8] = "DeletedDate";
    })(RoleMapping = TableMapping.RoleMapping || (TableMapping.RoleMapping = {}));
    var RolePermissionMapping;
    (function (RolePermissionMapping) {
        RolePermissionMapping[RolePermissionMapping["Id"] = 0] = "Id";
        RolePermissionMapping[RolePermissionMapping["RoleId"] = 1] = "RoleId";
        RolePermissionMapping[RolePermissionMapping["PermissionId"] = 2] = "PermissionId";
        RolePermissionMapping[RolePermissionMapping["CreatedBy"] = 3] = "CreatedBy";
        RolePermissionMapping[RolePermissionMapping["CreatedDate"] = 4] = "CreatedDate";
        RolePermissionMapping[RolePermissionMapping["ModifiedBy"] = 5] = "ModifiedBy";
        RolePermissionMapping[RolePermissionMapping["ModifiedDate"] = 6] = "ModifiedDate";
        RolePermissionMapping[RolePermissionMapping["IsDeleted"] = 7] = "IsDeleted";
        RolePermissionMapping[RolePermissionMapping["DeletedBy"] = 8] = "DeletedBy";
        RolePermissionMapping[RolePermissionMapping["DeletedDate"] = 9] = "DeletedDate";
    })(RolePermissionMapping = TableMapping.RolePermissionMapping || (TableMapping.RolePermissionMapping = {}));
    var UserMapping;
    (function (UserMapping) {
        UserMapping[UserMapping["Id"] = 0] = "Id";
    })(UserMapping = TableMapping.UserMapping || (TableMapping.UserMapping = {}));
    var UserDeputationMapping;
    (function (UserDeputationMapping) {
        UserDeputationMapping[UserDeputationMapping["Id"] = 0] = "Id";
        UserDeputationMapping[UserDeputationMapping["RequestedBy"] = 1] = "RequestedBy";
        UserDeputationMapping[UserDeputationMapping["RequestedTo"] = 2] = "RequestedTo";
        UserDeputationMapping[UserDeputationMapping["CreatedBy"] = 3] = "CreatedBy";
        UserDeputationMapping[UserDeputationMapping["CreatedDate"] = 4] = "CreatedDate";
        UserDeputationMapping[UserDeputationMapping["IsDeleted"] = 5] = "IsDeleted";
        UserDeputationMapping[UserDeputationMapping["DeletedBy"] = 6] = "DeletedBy";
        UserDeputationMapping[UserDeputationMapping["DeletedDate"] = 7] = "DeletedDate";
    })(UserDeputationMapping = TableMapping.UserDeputationMapping || (TableMapping.UserDeputationMapping = {}));
    var UserRoleMapping;
    (function (UserRoleMapping) {
        UserRoleMapping[UserRoleMapping["Id"] = 0] = "Id";
        UserRoleMapping[UserRoleMapping["UserId"] = 1] = "UserId";
        UserRoleMapping[UserRoleMapping["RoleId"] = 2] = "RoleId";
        UserRoleMapping[UserRoleMapping["CreatedBy"] = 3] = "CreatedBy";
        UserRoleMapping[UserRoleMapping["CreatedDate"] = 4] = "CreatedDate";
        UserRoleMapping[UserRoleMapping["IsDeleted"] = 5] = "IsDeleted";
        UserRoleMapping[UserRoleMapping["DeletedBy"] = 6] = "DeletedBy";
        UserRoleMapping[UserRoleMapping["DeletedDate"] = 7] = "DeletedDate";
    })(UserRoleMapping = TableMapping.UserRoleMapping || (TableMapping.UserRoleMapping = {}));
    var UserPermissionMapping;
    (function (UserPermissionMapping) {
        UserPermissionMapping[UserPermissionMapping["Id"] = 0] = "Id";
        UserPermissionMapping[UserPermissionMapping["UserId"] = 1] = "UserId";
        UserPermissionMapping[UserPermissionMapping["PermissionId"] = 2] = "PermissionId";
        UserPermissionMapping[UserPermissionMapping["RelatedName"] = 3] = "RelatedName";
        UserPermissionMapping[UserPermissionMapping["RelatedId"] = 4] = "RelatedId";
        UserPermissionMapping[UserPermissionMapping["CreatedBy"] = 5] = "CreatedBy";
        UserPermissionMapping[UserPermissionMapping["CreatedDate"] = 6] = "CreatedDate";
        UserPermissionMapping[UserPermissionMapping["IsDeleted"] = 7] = "IsDeleted";
        UserPermissionMapping[UserPermissionMapping["DeletedBy"] = 8] = "DeletedBy";
        UserPermissionMapping[UserPermissionMapping["DeletedDate"] = 9] = "DeletedDate";
    })(UserPermissionMapping = TableMapping.UserPermissionMapping || (TableMapping.UserPermissionMapping = {}));
    var TeamMapping;
    (function (TeamMapping) {
        TeamMapping[TeamMapping["Id"] = 0] = "Id";
    })(TeamMapping = TableMapping.TeamMapping || (TableMapping.TeamMapping = {}));
    var TeamUserMapping;
    (function (TeamUserMapping) {
        TeamUserMapping[TeamUserMapping["Id"] = 0] = "Id";
        TeamUserMapping[TeamUserMapping["TeamId"] = 1] = "TeamId";
        TeamUserMapping[TeamUserMapping["UserId"] = 2] = "UserId";
        TeamUserMapping[TeamUserMapping["CreatedBy"] = 3] = "CreatedBy";
        TeamUserMapping[TeamUserMapping["CreatedDate"] = 4] = "CreatedDate";
        TeamUserMapping[TeamUserMapping["IsDeleted"] = 5] = "IsDeleted";
        TeamUserMapping[TeamUserMapping["DeletedBy"] = 6] = "DeletedBy";
        TeamUserMapping[TeamUserMapping["DeletedDate"] = 7] = "DeletedDate";
    })(TeamUserMapping = TableMapping.TeamUserMapping || (TableMapping.TeamUserMapping = {}));
    var TeamRoleMapping;
    (function (TeamRoleMapping) {
        TeamRoleMapping[TeamRoleMapping["Id"] = 0] = "Id";
        TeamRoleMapping[TeamRoleMapping["TeamId"] = 1] = "TeamId";
        TeamRoleMapping[TeamRoleMapping["RoleId"] = 2] = "RoleId";
        TeamRoleMapping[TeamRoleMapping["CreatedBy"] = 3] = "CreatedBy";
        TeamRoleMapping[TeamRoleMapping["CreatedDate"] = 4] = "CreatedDate";
        TeamRoleMapping[TeamRoleMapping["IsDeleted"] = 5] = "IsDeleted";
        TeamRoleMapping[TeamRoleMapping["DeletedBy"] = 6] = "DeletedBy";
        TeamRoleMapping[TeamRoleMapping["DeletedDate"] = 7] = "DeletedDate";
    })(TeamRoleMapping = TableMapping.TeamRoleMapping || (TableMapping.TeamRoleMapping = {}));
    var TeamPermissionMapping;
    (function (TeamPermissionMapping) {
        TeamPermissionMapping[TeamPermissionMapping["Id"] = 0] = "Id";
        TeamPermissionMapping[TeamPermissionMapping["TeamId"] = 1] = "TeamId";
        TeamPermissionMapping[TeamPermissionMapping["PermissionId"] = 2] = "PermissionId";
        TeamPermissionMapping[TeamPermissionMapping["RelatedName"] = 3] = "RelatedName";
        TeamPermissionMapping[TeamPermissionMapping["RelatedId"] = 4] = "RelatedId";
        TeamPermissionMapping[TeamPermissionMapping["CreatedBy"] = 5] = "CreatedBy";
        TeamPermissionMapping[TeamPermissionMapping["CreatedDate"] = 6] = "CreatedDate";
        TeamPermissionMapping[TeamPermissionMapping["IsDeleted"] = 7] = "IsDeleted";
        TeamPermissionMapping[TeamPermissionMapping["DeletedBy"] = 8] = "DeletedBy";
        TeamPermissionMapping[TeamPermissionMapping["DeletedDate"] = 9] = "DeletedDate";
    })(TeamPermissionMapping = TableMapping.TeamPermissionMapping || (TableMapping.TeamPermissionMapping = {}));
})(TableMapping = exports.TableMapping || (exports.TableMapping = {}));
var MigrationTables = /** @class */ (function () {
    function MigrationTables() {
    }
    MigrationTables.DefaultPermissionTable = new MigrationTableDefinition("Permission", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("Path", "nvarchar(MAX)", false, null),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("ModifiedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("ModifiedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultRoleTable = new MigrationTableDefinition("Role", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null),
        new MigrationColumnDefinition("Name", "nvarchar(MAX)", false, null),
        new MigrationColumnDefinition("CreatedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("CreatedDate", "datetime", false, null),
        new MigrationColumnDefinition("ModifiedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("ModifiedDate", "datetime", false, null),
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
        new MigrationColumnDefinition("ModifiedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("ModifiedDate", "datetime", false, null),
        new MigrationColumnDefinition("IsDeleted", "bit", false, null),
        new MigrationColumnDefinition("DeletedBy", "uniqueidentifier", false, "User.Id"),
        new MigrationColumnDefinition("DeletedDate", "datetime", false, null)
    ]);
    MigrationTables.DefaultUserTable = new MigrationTableDefinition("User", [
        new MigrationColumnDefinition("Id", "uniqueidentifier", true, null)
    ]);
    MigrationTables.DefaultUserDeputation = new MigrationTableDefinition("UserDeputation", [
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
    function MigrationTableMapping(permission, role, rolePermission, user, userDeputation, userRole, userPermission, team, teamUser, teamRole, teamPermission) {
        if (permission === void 0) { permission = null; }
        if (role === void 0) { role = null; }
        if (rolePermission === void 0) { rolePermission = null; }
        if (user === void 0) { user = null; }
        if (userDeputation === void 0) { userDeputation = null; }
        if (userRole === void 0) { userRole = null; }
        if (userPermission === void 0) { userPermission = null; }
        if (team === void 0) { team = null; }
        if (teamUser === void 0) { teamUser = null; }
        if (teamRole === void 0) { teamRole = null; }
        if (teamPermission === void 0) { teamPermission = null; }
        this.permission = permission;
        this.role = role;
        this.rolePermission = rolePermission;
        this.user = user;
        this.userDeputation = userDeputation;
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
        if (!userDeputation)
            this.userDeputation = TableMapping.UserDeputationMapping;
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
    function PermissionMigrationConfig(permissionTable, roleTable, rolePermissionTable, userTable, userRoleTable, userPermissionTable, teamTable, teamUserTable, teamRoleTable, teamPermissionTable, userPermissionEnabled, teamPermissionEnabled, userRelatedPermissionEnabled, teamRelatedPermissionEnabled, TableMapping) {
        if (permissionTable === void 0) { permissionTable = null; }
        if (roleTable === void 0) { roleTable = null; }
        if (rolePermissionTable === void 0) { rolePermissionTable = null; }
        if (userTable === void 0) { userTable = null; }
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
        if (TableMapping === void 0) { TableMapping = null; }
        this.permissionTable = permissionTable;
        this.roleTable = roleTable;
        this.rolePermissionTable = rolePermissionTable;
        this.userTable = userTable;
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
    function PermissionControllerConfig(migration, userResolver, migrationEnabled) {
        this.migration = migration;
        this.userResolver = userResolver;
        this.migrationEnabled = migrationEnabled;
    }
    return PermissionControllerConfig;
}());
exports.PermissionControllerConfig = PermissionControllerConfig;
//# sourceMappingURL=PermissionControllerConfig.js.map