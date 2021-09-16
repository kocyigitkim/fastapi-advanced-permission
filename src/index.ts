import { PermissionControllerConfig } from './PermissionControllerConfig';
import { Application, Request, Response, NextFunction } from 'express';
import { PermissionContext, PermissionRequest, RelatedRecord, UserRecord } from './PermissionContext';
import { v4 as uuid } from 'uuid';
import { Knex } from 'knex';

export { MigrationColumnDefinition, MigrationTableDefinition, MigrationTableMapping, MigrationTables, PermissionControllerConfig, PermissionMigration, PermissionMigrationConfig, TableMapping } from './PermissionControllerConfig'
export { PermissionContext, PermissionRequest, RelatedRecord, UserRecord } from './PermissionContext'

const matchPermission = (a: string[], b: string) => {
    a = a.filter(p => p.length > 0);
    var bParts = b.split('/').map(item => item.trim()).filter(p => p.length > 0);
    var count = 0;
    var offset = 0;
    if (bParts.length === 1 && bParts[0] === "*") return true; // Granted directly

    for (var part of bParts) {
        if (part === "*") {
            count++;
            continue;
        }
        else if (part === a[offset]) {
            count++;
        }
        offset++;
    }
    return count === bParts.length;
};

export class PermissionController {
    private RP_RoleId: string;
    private RP_PermissionId: string;
    private RP_IsDeleted: string;
    private RP_CreatedBy: string;
    private RP_CreatedDate: string;
    private RP_ModifiedBy: string;
    private RP_ModifiedDate: string;
    private RP_DeletedBy: string;
    private RP_DeletedDate: string;
    private RP_Table: string;
    private R_Id: string;
    private R_Name: string;
    private R_IsDeleted: string;
    private R_CreatedBy: string;
    private R_CreatedDate: string;
    private R_ModifiedBy: string;
    private R_ModifiedDate: string;
    private R_DeletedBy: string;
    private R_DeletedDate: string;
    private R_Table: string;
    private P_Id: string;
    private P_IsDeleted: string;
    private P_Path: string;
    private P_CreatedBy: string;
    private P_CreatedDate: string;
    private P_ModifiedBy: string;
    private P_ModifiedDate: string;
    private P_DeletedBy: string;
    private P_DeletedDate: string;
    private P_Table: string;
    private UR_RoleId: string;
    private UR_UserId: string;
    private UR_IsDeleted: string;
    private UR_CreatedBy: string;
    private UR_CreatedDate: string;
    private UR_ModifiedBy: string;
    private UR_ModifiedDate: string;
    private UR_DeletedBy: string;
    private UR_DeletedDate: string;
    private UR_Table: string;
    private UP_UserId: string;
    private UP_IsDeleted: string;
    private UP_PermissionId: string;
    private UP_RelatedName: string;
    private UP_RelatedId: string;
    private UP_CreatedBy: string;
    private UP_CreatedDate: string;
    private UP_ModifiedBy: string;
    private UP_ModifiedDate: string;
    private UP_DeletedBy: string;
    private UP_DeletedDate: string;
    private UP_Table: string;
    private TU_Table: string;
    private TU_UserId: string;
    private TU_TeamId: string;
    private TU_CreatedBy: string;
    private TU_CreatedDate: string;
    private TU_ModifiedBy: string;
    private TU_ModifiedDate: string;
    private TU_DeletedBy: string;
    private TU_DeletedDate: string;
    private TU_IsDeleted: string;
    private TR_Table: string;
    private TR_RoleId: string;
    private TR_TeamId: string;
    private TR_IsDeleted: string;
    private TR_CreatedBy: string;
    private TR_CreatedDate: string;
    private TR_ModifiedBy: string;
    private TR_ModifiedDate: string;
    private TR_DeletedBy: string;
    private TR_DeletedDate: string;
    private TP_Table: string;
    private TP_PermissionId: string;
    private TP_TeamId: string;
    private TP_IsDeleted: string;
    private TP_RelatedId: string;
    private TP_RelatedName: string;
    private TP_CreatedBy: string;
    private TP_CreatedDate: string;
    private TP_ModifiedBy: string;
    private TP_ModifiedDate: string;
    private TP_DeletedBy: string;
    private TP_DeletedDate: string;

    private P_NEWID: Boolean = false;
    private R_NEWID: Boolean = false;
    private RP_NEWID: Boolean = false;
    private UD_NEWID: Boolean = false;
    private UR_NEWID: Boolean = false;
    private UP_NEWID: Boolean = false;
    private TU_NEWID: Boolean = false;
    private TR_NEWID: Boolean = false;
    private TP_NEWID: Boolean = false;

    private P_NEWID_Field: any = null;
    private R_NEWID_Field: any = null;
    private RP_NEWID_Field: any = null;
    private UD_NEWID_Field: any = null;
    private UR_NEWID_Field: any = null;
    private UP_NEWID_Field: any = null;
    private TU_NEWID_Field: any = null;
    private TR_NEWID_Field: any = null;
    private TP_NEWID_Field: any = null;

    private db: Knex;

    private schemas = [];
    constructor(public config: PermissionControllerConfig) { }
    async build(app: Application) {
        app.use(this.use.bind(this));
        const baseUse = app.use;
        (app as any).baseUse = baseUse.bind(app);
        (app as any).use = ((app: Application, ...args) => {
            if (args.length > 1 && typeof args[0] === 'string') {
                this.schemas.push({
                    path: args[0],
                    method: args[1],
                });
            }
            (app as any).baseUse(...args);
        }).bind(this, app);

        if (this.config.migration !== null && this.config.migrationEnabled) this.config.migration.migrate();
        if (this.config.migration) {
            const mapping = this.config.migration.config;
            this.db = this.config.migration.db;
            this.RP_RoleId = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["RoleId"]].name;
            this.RP_PermissionId = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["PermissionId"]].name;
            this.RP_IsDeleted = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["IsDeleted"]].name;
            this.RP_CreatedBy = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["CreatedBy"]].name;
            this.RP_CreatedDate = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["CreatedDate"]].name;
            this.RP_ModifiedBy = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["ModifiedBy"]].name;
            this.RP_ModifiedDate = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["ModifiedDate"]].name;
            this.RP_DeletedBy = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["DeletedBy"]].name;
            this.RP_DeletedDate = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["DeletedDate"]].name;
            this.RP_Table = mapping.rolePermissionTable.name;
            this.R_Id = mapping.roleTable.columns[mapping.TableMapping.role["Id"]].name;
            this.R_Name = mapping.roleTable.columns[mapping.TableMapping.role["Name"]].name;
            this.R_IsDeleted = mapping.roleTable.columns[mapping.TableMapping.role["IsDeleted"]].name;
            this.R_CreatedBy = mapping.roleTable.columns[mapping.TableMapping.role["CreatedBy"]].name;
            this.R_CreatedDate = mapping.roleTable.columns[mapping.TableMapping.role["CreatedDate"]].name;
            this.R_ModifiedBy = mapping.roleTable.columns[mapping.TableMapping.role["ModifiedBy"]].name;
            this.R_ModifiedDate = mapping.roleTable.columns[mapping.TableMapping.role["ModifiedDate"]].name;
            this.R_DeletedBy = mapping.roleTable.columns[mapping.TableMapping.role["DeletedBy"]].name;
            this.R_DeletedDate = mapping.roleTable.columns[mapping.TableMapping.role["DeletedDate"]].name;
            this.R_Table = mapping.roleTable.name;
            this.P_Id = mapping.permissionTable.columns[mapping.TableMapping.permission["Id"]].name;
            this.P_IsDeleted = mapping.permissionTable.columns[mapping.TableMapping.permission["IsDeleted"]].name;
            this.P_Path = mapping.permissionTable.columns[mapping.TableMapping.permission["Path"]].name;
            this.P_CreatedBy = mapping.permissionTable.columns[mapping.TableMapping.permission["CreatedBy"]].name;
            this.P_CreatedDate = mapping.permissionTable.columns[mapping.TableMapping.permission["CreatedDate"]].name;
            this.P_ModifiedBy = mapping.permissionTable.columns[mapping.TableMapping.permission["ModifiedBy"]].name;
            this.P_ModifiedDate = mapping.permissionTable.columns[mapping.TableMapping.permission["ModifiedDate"]].name;
            this.P_DeletedBy = mapping.permissionTable.columns[mapping.TableMapping.permission["DeletedBy"]].name;
            this.P_DeletedDate = mapping.permissionTable.columns[mapping.TableMapping.permission["DeletedDate"]].name;
            this.P_Table = mapping.permissionTable.name;
            this.UR_RoleId = mapping.userRoleTable.columns[mapping.TableMapping.userRole["RoleId"]].name;
            this.UR_UserId = mapping.userRoleTable.columns[mapping.TableMapping.userRole["UserId"]].name;
            this.UR_IsDeleted = mapping.userRoleTable.columns[mapping.TableMapping.userRole["IsDeleted"]].name;
            this.UR_CreatedBy = mapping.userRoleTable.columns[mapping.TableMapping.userRole["CreatedBy"]].name;
            this.UR_CreatedDate = mapping.userRoleTable.columns[mapping.TableMapping.userRole["CreatedDate"]].name;
            this.UR_ModifiedBy = mapping.userRoleTable.columns[mapping.TableMapping.userRole["ModifiedBy"]].name;
            this.UR_ModifiedDate = mapping.userRoleTable.columns[mapping.TableMapping.userRole["ModifiedDate"]].name;
            this.UR_DeletedBy = mapping.userRoleTable.columns[mapping.TableMapping.userRole["DeletedBy"]].name;
            this.UR_DeletedDate = mapping.userRoleTable.columns[mapping.TableMapping.userRole["DeletedDate"]].name;
            this.UR_Table = mapping.userRoleTable.name;
            this.UP_UserId = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["UserId"]].name;
            this.UP_IsDeleted = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["IsDeleted"]].name;
            this.UP_PermissionId = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["PermissionId"]].name;
            this.UP_RelatedName = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["RelatedName"]].name;
            this.UP_RelatedId = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["RelatedId"]].name;
            this.UP_CreatedBy = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["CreatedBy"]].name;
            this.UP_CreatedDate = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["CreatedDate"]].name;
            this.UP_ModifiedBy = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["ModifiedBy"]].name;
            this.UP_ModifiedDate = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["ModifiedDate"]].name;
            this.UP_DeletedBy = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["DeletedBy"]].name;
            this.UP_DeletedDate = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["DeletedDate"]].name;
            this.UP_Table = mapping.userPermissionTable.name;
            this.TU_Table = mapping.teamUserTable.name;
            this.TU_UserId = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["UserId"]].name;
            this.TU_TeamId = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["TeamId"]].name;
            this.TU_IsDeleted = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["IsDeleted"]].name;
            this.TU_CreatedBy = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["CreatedBy"]].name;
            this.TU_CreatedDate = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["CreatedDate"]].name;
            this.TU_ModifiedBy = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["ModifiedBy"]].name;
            this.TU_ModifiedDate = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["ModifiedDate"]].name;
            this.TU_DeletedBy = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["DeletedBy"]].name;
            this.TU_DeletedDate = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["DeletedDate"]].name;
            this.TR_Table = mapping.teamRoleTable.name;
            this.TR_RoleId = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["RoleId"]].name;
            this.TR_TeamId = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["TeamId"]].name;
            this.TR_IsDeleted = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["IsDeleted"]].name;
            this.TR_CreatedBy = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["CreatedBy"]].name;
            this.TR_CreatedDate = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["CreatedDate"]].name;
            this.TR_ModifiedBy = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["ModifiedBy"]].name;
            this.TR_ModifiedDate = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["ModifiedDate"]].name;
            this.TR_DeletedBy = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["DeletedBy"]].name;
            this.TR_DeletedDate = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["DeletedDate"]].name;
            this.TP_Table = mapping.teamPermissionTable.name;
            this.TP_PermissionId = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["PermissionId"]].name;
            this.TP_TeamId = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["TeamId"]].name;
            this.TP_IsDeleted = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["IsDeleted"]].name;
            this.TP_RelatedId = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["RelatedId"]].name;
            this.TP_RelatedName = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["RelatedName"]].name;
            this.TP_CreatedBy = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["CreatedBy"]].name;
            this.TP_CreatedDate = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["CreatedDate"]].name;
            this.TP_ModifiedBy = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["ModifiedBy"]].name;
            this.TP_ModifiedDate = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["ModifiedDate"]].name;
            this.TP_DeletedBy = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["DeletedBy"]].name;
            this.TP_DeletedDate = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["DeletedDate"]].name;

            if (mapping.permissionTable.columns[mapping.TableMapping.permission["Id"]].type === 'uniqueidentifier') {
                this.P_NEWID = true;
                this.P_NEWID_Field = mapping.permissionTable.columns[mapping.TableMapping.permission["Id"]].name;
            }
            if (mapping.roleTable.columns[mapping.TableMapping.role["Id"]].type === 'uniqueidentifier') {
                this.R_NEWID = true;
                this.R_NEWID_Field = mapping.roleTable.columns[mapping.TableMapping.role["Id"]].name;
            }
            if (mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["RoleId"]].type === 'uniqueidentifier') {
                this.RP_NEWID = true;
                this.RP_NEWID_Field = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission["RoleId"]].name;
            }
            if (mapping.userRoleTable.columns[mapping.TableMapping.userRole["Id"]].type === 'uniqueidentifier') {
                this.UR_NEWID = true;
                this.UR_NEWID_Field = mapping.userRoleTable.columns[mapping.TableMapping.userRole["Id"]].name;
            }
            if (mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["Id"]].type === 'uniqueidentifier') {
                this.UP_NEWID = true;
                this.UP_NEWID_Field = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission["Id"]].name;
            }
            if (mapping.teamUserTable.columns[mapping.TableMapping.teamUser["Id"]].type === 'uniqueidentifier') {
                this.TU_NEWID = true;
                this.TU_NEWID_Field = mapping.teamUserTable.columns[mapping.TableMapping.teamUser["Id"]].name;
            }
            if (mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["Id"]].type === 'uniqueidentifier') {
                this.TR_NEWID = true;
                this.TR_NEWID_Field = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole["Id"]].name;
            }
            if (mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["Id"]].type === 'uniqueidentifier') {
                this.TP_NEWID = true;
                this.TP_NEWID_Field = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission["Id"]].name;
            }
        }
    }
    getAnonymousUser(): UserRecord {
        return new UserRecord(null, null, true);
    }

    async getCurrentUser(req: Request) {
        var user: UserRecord = await this.config.userResolver(req);
        if (user == null) {
            user = this.getAnonymousUser();
        }
        return user;
    }

    async createPermission(req: Request, path: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var permissionList: any = this.db(this.P_Table).where({
                [this.P_Path]: path,
                [this.P_IsDeleted]: false
            }).select().catch(console.error);
            if (!permissionList || permissionList.length === 0) {
                var record = {
                    [this.P_Path]: path,
                    [this.P_CreatedBy]: currentUser.id,
                    [this.P_CreatedDate]: new Date(),
                    [this.P_IsDeleted]: false
                };
                if (this.P_NEWID) {
                    record[this.P_NEWID_Field] = uuid();
                }
                await this.db(this.P_Table).insert(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async deletePermission(req: Request, id: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var permissionList: any = this.db(this.P_Table).where({
                [this.P_Id]: id,
                [this.P_IsDeleted]: false
            }).select().catch(console.error);
            if (permissionList && permissionList.length > 0) {
                var record = {
                    [this.P_IsDeleted]: true,
                    [this.P_DeletedBy]: currentUser.id,
                    [this.P_DeletedDate]: new Date()
                };
                await this.db(this.P_Table).where({
                    [this.P_Id]: id
                }).update(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async createRole(req: Request, name: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var roleList: any = this.db(this.R_Table).where({
                [this.R_Name]: name,
                [this.R_IsDeleted]: false
            }).select().catch(console.error);
            if (!roleList || roleList.length === 0) {
                var record = {
                    [this.R_Name]: name,
                    [this.R_CreatedBy]: currentUser.id,
                    [this.R_CreatedDate]: new Date(),
                    [this.R_IsDeleted]: false
                };
                if (this.R_NEWID) {
                    record[this.R_NEWID_Field] = uuid();
                }
                await this.db(this.R_Table).insert(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async deleteRole(req: Request, id: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var roleList: any = this.db(this.R_Table).where({
                [this.R_Id]: id,
                [this.R_IsDeleted]: false
            }).select().catch(console.error);
            if (roleList && roleList.length > 0) {
                var record = {
                    [this.R_IsDeleted]: true,
                    [this.R_DeletedBy]: currentUser.id,
                    [this.R_DeletedDate]: new Date()
                };
                await this.db(this.R_Table).where({
                    [this.R_Id]: id
                }).update(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async createRolePermission(req: Request, roleId: string, permissionId: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var rolePermissionList: any = this.db(this.RP_Table).where({
                [this.RP_RoleId]: roleId,
                [this.RP_PermissionId]: permissionId,
                [this.RP_IsDeleted]: false
            }).select().catch(console.error);
            if (!rolePermissionList || rolePermissionList.length === 0) {
                var record = {
                    [this.RP_RoleId]: roleId,
                    [this.RP_PermissionId]: permissionId,
                    [this.RP_CreatedBy]: currentUser.id,
                    [this.RP_CreatedDate]: new Date(),
                    [this.RP_IsDeleted]: false
                };
                if (this.RP_NEWID) {
                    record[this.RP_NEWID_Field] = uuid();
                }
                await this.db(this.RP_Table).insert(record).catch(console.error);
                return true;
            }
        }
        return false;
    }

    async assignRoleToTeam(req: Request, teamId: string, roleId: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var teamRoleList: any = this.db(this.TR_Table).where({
                [this.TR_TeamId]: teamId,
                [this.TR_RoleId]: roleId,
                [this.TR_IsDeleted]: false
            }).select().catch(console.error);
            if (!teamRoleList || teamRoleList.length === 0) {
                var record = {
                    [this.TR_TeamId]: teamId,
                    [this.TR_RoleId]: roleId,
                    [this.TR_CreatedBy]: currentUser.id,
                    [this.TR_CreatedDate]: new Date(),
                    [this.TR_IsDeleted]: false
                };
                if (this.TR_NEWID) {
                    record[this.TR_NEWID_Field] = uuid();
                }
                await this.db(this.TR_Table).insert(record).catch(console.error);
                return true;
            }
        }
        return false;
    }

    async revokeRoleFromTeam(req: Request, teamId: string, roleId: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var teamRoleList: any = this.db(this.TR_Table).where({
                [this.TR_TeamId]: teamId,
                [this.TR_RoleId]: roleId,
                [this.TR_IsDeleted]: false
            }).select().catch(console.error);
            if (teamRoleList && teamRoleList.length > 0) {
                var record = {
                    [this.TR_IsDeleted]: true,
                    [this.TR_DeletedBy]: currentUser.id,
                    [this.TR_DeletedDate]: new Date()
                };
                await this.db(this.TR_Table).where({
                    [this.TR_TeamId]: teamId,
                    [this.TR_RoleId]: roleId
                }).update(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async assignPermissionToTeam(req: Request, teamId: string, permissionId: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var teamPermissionList: any = this.db(this.TP_Table).where({
                [this.TP_TeamId]: teamId,
                [this.TP_PermissionId]: permissionId,
                [this.TP_IsDeleted]: false
            }).select().catch(console.error);
            if (!teamPermissionList || teamPermissionList.length === 0) {
                var record = {
                    [this.TP_TeamId]: teamId,
                    [this.TP_PermissionId]: permissionId,
                    [this.TP_CreatedBy]: currentUser.id,
                    [this.TP_CreatedDate]: new Date(),
                    [this.TP_IsDeleted]: false
                };
                if (this.TP_NEWID) {
                    record[this.TP_NEWID_Field] = uuid();
                }
                await this.db(this.TP_Table).insert(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async assignTeamRelatedPermission(req: Request, teamId: string, related: RelatedRecord): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var teamPermissionList: any = this.db(this.TP_Table).where({
                [this.TP_TeamId]: teamId,
                [this.TP_IsDeleted]: false,
                [this.TP_RelatedName]: related.name,
                [this.TP_RelatedId]: related.id
            }).select().catch(console.error);
            if (!teamPermissionList || teamPermissionList.length === 0) {
                var record = {
                    [this.TP_TeamId]: teamId,
                    [this.TP_RelatedName]: related.name,
                    [this.TP_RelatedId]: related.id,
                    [this.TP_CreatedBy]: currentUser.id,
                    [this.TP_CreatedDate]: new Date(),
                    [this.TP_IsDeleted]: false
                };
                if (this.TP_NEWID) {
                    record[this.TP_NEWID_Field] = uuid();
                }
                await this.db(this.TP_Table).insert(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async revokePermissionFromTeam(req: Request, teamId: string, permissionId: string): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var teamPermissionList: any = this.db(this.TP_Table).where({
                [this.TP_TeamId]: teamId,
                [this.TP_PermissionId]: permissionId,
                [this.TP_IsDeleted]: false
            }).select().catch(console.error);
            if (teamPermissionList && teamPermissionList.length > 0) {
                var record = {
                    [this.TP_IsDeleted]: true,
                    [this.TP_DeletedBy]: currentUser.id,
                    [this.TP_DeletedDate]: new Date()
                };
                await this.db(this.TP_Table).where({
                    [this.TP_TeamId]: teamId,
                    [this.TP_PermissionId]: permissionId
                }).update(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async revokeTeamRelatedPermission(req: Request, teamId: string, related: RelatedRecord): Promise<Boolean> {
        const currentUser = await this.getCurrentUser(req);
        if (!currentUser.isAnonymous) {
            var teamPermissionList: any = this.db(this.TP_Table).where({
                [this.TP_TeamId]: teamId,
                [this.TP_IsDeleted]: false,
                [this.TP_RelatedName]: related.name,
                [this.TP_RelatedId]: related.id
            }).select().catch(console.error);
            if (teamPermissionList && teamPermissionList.length > 0) {
                var record = {
                    [this.TP_IsDeleted]: true,
                    [this.TP_DeletedBy]: currentUser.id,
                    [this.TP_DeletedDate]: new Date()
                };
                await this.db(this.TP_Table).where({
                    [this.TP_TeamId]: teamId,
                    [this.TP_RelatedName]: related.name,
                    [this.TP_RelatedId]: related.id
                }).update(record).catch(console.error);
                return true;
            }
        }
        return false;
    }
    async getTeamRoles(teamId: string): Promise<string[]> {
        const roles: string[] = await this.db(this.TR_Table).where({
            [this.TR_TeamId]: teamId,
            [this.TR_IsDeleted]: false
        }).select(this.UR_RoleId).then(p => p.map(r => r[this.UR_RoleId])).catch(console.error) as string[];
        return roles;
    }
    async getTeamPermissions(teamId: string): Promise<string[]> {
        const permissions: string[] = await this.db(this.TP_Table).where({
            [this.TP_TeamId]: teamId,
            [this.TP_IsDeleted]: false
        }).select(this.UP_PermissionId).then(p => p.map(r => r[this.UP_PermissionId])).catch(console.error) as string[];
        return permissions;
    }
    async getTeamPermissionsByRole(req: Request, teamId: string, roleId: string): Promise<string[]> {
        var permissions: string[] = await this.db(this.RP_Table)
            .join(this.db(this.R_Table).where(this.R_IsDeleted, false), this.R_Id, this.RP_RoleId)
            .join(this.db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.RP_PermissionId)
            .whereNotNull(this.R_Id)
            .whereNotNull(this.P_Id)
            .where(this.RP_RoleId, roleId)
            .whereIn(this.RP_RoleId, this.db(this.TR_Table).where(this.TR_TeamId, teamId).where(this.TR_IsDeleted, false).select(this.TR_RoleId))
            .where(this.RP_IsDeleted, false)
            .select(this.P_Path).then(p => p[this.P_Path]).catch(console.error);
        return permissions;
    }

    async assignRoleToUser(req: Request, user: UserRecord, roleId: string): Promise<string> {
        var id: string = null;
        if (!user.isAnonymous) {
            const currentUser = await this.getCurrentUser(req);
            var record = {
                [this.UR_RoleId]: roleId,
                [this.UR_UserId]: user.id,
                [this.UR_IsDeleted]: false,
                [this.UR_CreatedDate]: new Date() as any
            };
            if (this.UR_NEWID) {
                record[this.UR_NEWID_Field] = id = uuid();
            }
            if (currentUser) {
                record[this.UR_CreatedBy] = currentUser.id;
            }
            await this.db(this.UR_Table).insert(record).catch(console.error);
        }
        return id;
    }
    async revokeRoleFromUser(req: Request, user: UserRecord, roleId: string): Promise<Boolean> {
        if (!user.isAnonymous) {
            const currentUser = await this.getCurrentUser(req);
            await this.db(this.UR_Table).where({
                [this.UR_UserId]: user.id,
                [this.UR_RoleId]: roleId,
                [this.UR_IsDeleted]: false
            }).update({
                [this.UR_IsDeleted]: true,
                [this.UR_DeletedBy]: currentUser.id,
                [this.UR_DeletedDate]: new Date() as any
            }).catch(console.error);
            return true;
        }
        return false;
    }
    async getUserRoles(req: Request, user: UserRecord): Promise<string[]> {
        if (!user.isAnonymous) {
            const roles: string[] = await this.db(this.UR_Table).where({
                [this.UR_UserId]: user.id,
                [this.UR_IsDeleted]: false
            }).select(this.UR_RoleId).then(p => p.map(r => r[this.UR_RoleId])).catch(console.error) as string[];
            return roles;
        }
        return [];
    }
    async getUserPermissions(req: Request, user: UserRecord): Promise<string[]> {
        if (!user.isAnonymous) {
            const permissions: string[] = await this.db(this.UP_Table).where({
                [this.UP_UserId]: user.id,
                [this.UP_IsDeleted]: false
            }).select(this.UP_PermissionId).then(p => p.map(r => r[this.UP_PermissionId])).catch(console.error) as string[];
            return permissions;
        }
        return [];
    }
    async getUserPermissionsByRole(req: Request, user: UserRecord, roleId: string): Promise<string[]> {
        if (!user.isAnonymous) {
            var permissions: string[] = await this.db(this.RP_Table)
                .join(this.db(this.R_Table).where(this.R_IsDeleted, false), this.R_Id, this.RP_RoleId)
                .join(this.db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.RP_PermissionId)
                .whereNotNull(this.R_Id)
                .whereNotNull(this.P_Id)
                .where(this.RP_RoleId, roleId)
                .whereIn(this.RP_RoleId, this.db(this.UR_Table).where(this.UR_UserId, user.id).where(this.UR_IsDeleted, false).select(this.UR_RoleId))
                .where(this.RP_IsDeleted, false)
                .select(this.P_Path).then(p => p[this.P_Path]).catch(console.error);
            return permissions;
        }
        return [];
    }

    async assignUserPermission(req: Request, user: UserRecord, permissionId: string): Promise<string> {
        var id: string = null;
        if (!user.isAnonymous) {
            const currentUser = await this.getCurrentUser(req);
            var record = {
                [this.UP_PermissionId]: permissionId,
                [this.UP_UserId]: user.id,
                [this.UP_IsDeleted]: false,
                [this.UP_CreatedDate]: new Date() as any
            };
            if (this.UP_NEWID) {
                record[this.UP_NEWID_Field] = id = uuid();
            }
            if (currentUser) {
                record[this.UP_CreatedBy] = currentUser.id;
            }
        }
        return id;
    }
    async assignUserRelatedPermission(req: Request, user: UserRecord, record: RelatedRecord) {
        var id: string = null;
        if (!user.isAnonymous) {
            var currentUser = await this.getCurrentUser(req);
            var permissionRecord = {
                [this.UP_UserId]: user.id,
                [this.UP_IsDeleted]: false,
                [this.UP_CreatedDate]: new Date() as any,
                [this.UP_RelatedId]: record.id,
                [this.UP_RelatedName]: record.name
            };
            if (this.UP_NEWID) {
                permissionRecord[this.UP_NEWID_Field] = id = uuid();
            }
            if (currentUser) {
                permissionRecord[this.UP_CreatedBy] = currentUser.id;
            }
            await this.db(this.UP_Table).insert(permissionRecord).catch(console.error);
        }
        return id;
    }
    async revokeUserPermission(req: Request, user: UserRecord, permissionId: string): Promise<Boolean> {
        if (!user.isAnonymous) {
            const currentUser = await this.getCurrentUser(req);
            await this.db(this.UP_Table).where({
                [this.UP_UserId]: user.id,
                [this.UP_PermissionId]: permissionId,
                [this.UP_IsDeleted]: false
            }).update({
                [this.UP_IsDeleted]: true,
                [this.UP_DeletedBy]: currentUser.id,
                [this.UP_DeletedDate]: new Date() as any
            }).catch(console.error);
            return true;
        }
        return false;
    }
    async revokeUserRelatedPermission(req: Request, user: UserRecord, record: RelatedRecord): Promise<Boolean> {
        if (!user.isAnonymous) {
            const currentUser = await this.getCurrentUser(req);
            await this.db(this.UP_Table).where({
                [this.UP_UserId]: user.id,
                [this.UP_RelatedId]: record.id,
                [this.UP_RelatedName]: record.name,
                [this.UP_IsDeleted]: false
            }).update({
                [this.UP_IsDeleted]: true,
                [this.UP_DeletedBy]: currentUser.id,
                [this.UP_DeletedDate]: new Date() as any
            }).catch(console.error);
            return true;
        }
        return false;
    }

    async use(req: Request, res: Response, next: NextFunction) {
        var isGranted: Boolean = false;
        var user: UserRecord = await this.config.userResolver(req);
        if (user == null) {
            user = this.getAnonymousUser();
        }
        var urlParts: string[] = (req.originalUrl || req.url).split('/');
        if (urlParts.length > 0) {
            var permissionContext: PermissionContext = new PermissionContext(req, user, new PermissionRequest(urlParts));
            isGranted = await this.check(permissionContext);
        }
        if (isGranted) {
            next();
        }
        else {
            res.status(403).json({
                success: false,
                message: 'ERROR.ACCESSDENIED',
                reason: 'You do not have permission to access this resource.',
                status: 403,
                timestamp: new Date(),
                data: null
            });
        }
    }
    async check(ctx: PermissionContext): Promise<Boolean> {
        const user = ctx.user;
        var record: RelatedRecord = this.config.recordResolver ? await this.config.recordResolver(ctx.request.urlParts, ctx.req.body) : null;

        const db = this.db;
        // Stage1: Basic Permission
        {
            var permissions: string[] = await db(this.RP_Table)
                .join(db(this.R_Table).where(this.R_IsDeleted, false), this.R_Id, this.RP_RoleId)
                .join(db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.RP_PermissionId)
                .whereNotNull(this.R_Id)
                .whereNotNull(this.P_Id)
                .whereIn(this.RP_RoleId, db(this.UR_Table).where(this.UR_UserId, user.id).where(this.UR_IsDeleted, false).select(this.UR_RoleId))
                .where(this.RP_IsDeleted, false)
                .select(this.P_Path).then(p => p[this.P_Path]).catch(console.error);
            for (var p of permissions) {
                if (matchPermission(ctx.request.urlParts, p)) {
                    return true;
                }
            }
        }

        // Stage2: User Related Permission
        if (record) {
            var permissions: string[] = await db(this.UP_Table)
                .join(db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.UP_PermissionId)
                .where(`[${this.UP_Table}].[${this.UP_UserId}]`, user.id)
                .where(`[${this.UP_Table}].[${this.UP_RelatedName}]`, record.name)
                .where(`[${this.UP_Table}].[${this.UP_RelatedId}]`, record.id)
                .where(`[${this.UP_Table}].[${this.UP_IsDeleted}]`, false)
                .select(this.P_Path).limit(1).then(p => p[this.P_Path]).catch(console.error);
            for (var p of permissions) {
                if (matchPermission(ctx.request.urlParts, p)) {
                    return true;
                }
            }
        }
        else {
            var permissions: string[] = await db(this.UP_Table)
                .join(db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.UP_PermissionId)
                .where(`[${this.UP_Table}].[${this.UP_UserId}]`, user.id)
                .whereNull(`[${this.UP_Table}].[${this.UP_RelatedName}]`)
                .whereNull(`[${this.UP_Table}].[${this.UP_RelatedId}]`)
                .where(`[${this.UP_Table}].[${this.UP_IsDeleted}]`, false)
                .select(this.P_Path).limit(1).then(p => p[this.P_Path]).catch(console.error);
            for (var p of permissions) {
                if (matchPermission(ctx.request.urlParts, p)) {
                    return true;
                }
            }
        }

        // Stage3: Team Permission
        var teams = await db(this.TU_Table)
            .where(this.TU_UserId, user.id)
            .where(this.TU_IsDeleted, false)
            .select(this.TU_TeamId).then(p => p[this.TU_TeamId]).catch(console.error);
        {
            var permissions: string[] = await db(this.P_Table)
                .whereIn(this.RP_RoleId, db(this.TR_Table).whereIn(this.TR_TeamId, teams).where(this.TR_IsDeleted, false).select(this.TR_RoleId))
                .where(this.RP_IsDeleted, false)
                .select().then(p => p[this.P_Path]).catch(console.error);
            for (var p of permissions) {
                if (matchPermission(ctx.request.urlParts, p)) {
                    return true;
                }
            }
        }

        // Stage4: Team Related Permission
        if (record) {
            var permissions: string[] = await db(this.TP_Table)
                .join(db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.TP_PermissionId)
                .whereIn(this.TP_TeamId, teams)
                .where(`[${this.TP_Table}].[${this.TP_RelatedName}]`, record.name)
                .where(`[${this.TP_Table}].[${this.TP_RelatedId}]`, record.id)
                .where(`[${this.TP_Table}].[${this.TP_IsDeleted}]`, false)
                .select(this.P_Path).limit(1).then(p => p[this.P_Path]).catch(console.error);
            for (var p of permissions) {
                if (matchPermission(ctx.request.urlParts, p)) {
                    return true;
                }
            }
        }
        else {
            var permissions: string[] = await db(this.UP_Table)
                .join(db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.TP_PermissionId)
                .whereIn(this.TP_TeamId, teams)
                .whereNull(`[${this.TP_Table}].[${this.TP_RelatedName}]`)
                .whereNull(`[${this.TP_Table}].[${this.TP_RelatedId}]`)
                .where(`[${this.TP_Table}].[${this.TP_IsDeleted}]`, false)
                .select(this.P_Path).limit(1).then(p => p[this.P_Path]).catch(console.error);
            for (var p of permissions) {
                if (matchPermission(ctx.request.urlParts, p)) {
                    return true;
                }
            }
        }

        return false;
    }
}