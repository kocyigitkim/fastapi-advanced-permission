import { PermissionControllerConfig } from './PermissionControllerConfig';
import { Application, Request, Response, NextFunction } from 'express';
import { PermissionContext, RelatedRecord, UserRecord } from './PermissionContext';
export { MigrationColumnDefinition, MigrationTableDefinition, MigrationTableMapping, MigrationTables, PermissionControllerConfig, PermissionMigration, PermissionMigrationConfig, TableMapping } from './PermissionControllerConfig';
export { PermissionContext, PermissionRequest, RelatedRecord, UserRecord } from './PermissionContext';
export interface FastApiCustomPermissionDelegate {
    (ctx: PermissionContext): Promise<Boolean>;
}
export declare class PermissionController {
    config: PermissionControllerConfig;
    CustomPermission: FastApiCustomPermissionDelegate;
    private RP_RoleId;
    private RP_PermissionId;
    private RP_IsDeleted;
    private RP_CreatedBy;
    private RP_CreatedDate;
    private RP_DeletedBy;
    private RP_DeletedDate;
    private RP_Table;
    private R_Id;
    private R_Name;
    private R_IsDeleted;
    private R_CreatedBy;
    private R_CreatedDate;
    private R_DeletedBy;
    private R_DeletedDate;
    private R_Table;
    private P_Id;
    private P_IsDeleted;
    private P_Path;
    private P_PathFieldName;
    private P_CreatedBy;
    private P_CreatedDate;
    private P_DeletedBy;
    private P_DeletedDate;
    private P_Table;
    private UR_RoleId;
    private UR_UserId;
    private UR_IsDeleted;
    private UR_CreatedBy;
    private UR_CreatedDate;
    private UR_DeletedBy;
    private UR_DeletedDate;
    private UR_Table;
    private UP_UserId;
    private UP_IsDeleted;
    private UP_PermissionId;
    private UP_RelatedName;
    private UP_RelatedId;
    private UP_CreatedBy;
    private UP_CreatedDate;
    private UP_DeletedBy;
    private UP_DeletedDate;
    private UD_Table;
    private UD_RequestedBy;
    private UD_RequestedTo;
    private UD_CreatedBy;
    private UD_CreatedDate;
    private UD_IsDeleted;
    private UD_DeletedBy;
    private UD_DeletedDate;
    private UP_Table;
    private TU_Table;
    private TU_UserId;
    private TU_TeamId;
    private TU_CreatedBy;
    private TU_CreatedDate;
    private TU_DeletedBy;
    private TU_DeletedDate;
    private TU_IsDeleted;
    private TR_Table;
    private TR_RoleId;
    private TR_TeamId;
    private TR_IsDeleted;
    private TR_CreatedBy;
    private TR_CreatedDate;
    private TR_DeletedBy;
    private TR_DeletedDate;
    private TP_Table;
    private TP_PermissionId;
    private TP_TeamId;
    private TP_IsDeleted;
    private TP_RelatedId;
    private TP_RelatedName;
    private TP_CreatedBy;
    private TP_CreatedDate;
    private TP_DeletedBy;
    private TP_DeletedDate;
    private P_NEWID;
    private R_NEWID;
    private RP_NEWID;
    private UD_NEWID;
    private UR_NEWID;
    private UP_NEWID;
    private TU_NEWID;
    private TR_NEWID;
    private TP_NEWID;
    private P_NEWID_Field;
    private R_NEWID_Field;
    private RP_NEWID_Field;
    private UD_NEWID_Field;
    private UR_NEWID_Field;
    private UP_NEWID_Field;
    private TU_NEWID_Field;
    private TR_NEWID_Field;
    private TP_NEWID_Field;
    private db;
    private schemas;
    constructor(config: PermissionControllerConfig);
    build(app: Application): Promise<void>;
    getAnonymousUser(): UserRecord;
    getCurrentUser(req: Request): Promise<UserRecord>;
    createPermission(req: Request, path: string): Promise<Boolean>;
    deletePermission(req: Request, id: string): Promise<Boolean>;
    getPermissions(req: Request): Promise<any[]>;
    getPermissionByRoleId(req: Request, roleId: string): Promise<any[]>;
    createRole(req: Request, name: string): Promise<Boolean>;
    getRoles(req: Request): Promise<any[]>;
    getRole(req: Request, id: string): Promise<any>;
    deleteRole(req: Request, id: string): Promise<Boolean>;
    createRolePermission(req: Request, roleId: string, permissionId: string): Promise<Boolean>;
    removeRolePermission(req: Request, roleId: string, permissionId: string): Promise<Boolean>;
    assignRoleToTeam(req: Request, teamId: string, roleId: string): Promise<Boolean>;
    revokeRoleFromTeam(req: Request, teamId: string, roleId: string): Promise<Boolean>;
    assignPermissionToTeam(req: Request, teamId: string, permissionId: string): Promise<Boolean>;
    assignTeamRelatedPermission(req: Request, teamId: string, related: RelatedRecord): Promise<Boolean>;
    revokePermissionFromTeam(req: Request, teamId: string, permissionId: string): Promise<Boolean>;
    revokeTeamRelatedPermission(req: Request, teamId: string, related: RelatedRecord): Promise<Boolean>;
    getTeamRoles(teamId: string): Promise<string[]>;
    getTeamPermissions(teamId: string): Promise<string[]>;
    getTeamPermissionsByRole(req: Request, teamId: string, roleId: string): Promise<string[]>;
    assignUserToTeam(req: Request, teamId: string, userId: string): Promise<Boolean>;
    revokeUserFromTeam(req: Request, teamId: string, userId: string): Promise<Boolean>;
    getUsersByTeam(teamId: string): Promise<string[]>;
    assignUserDelegation(req: Request, requestedBy: UserRecord, requestedTo: UserRecord): Promise<Boolean>;
    revokeUserDelegation(req: Request, requestedBy: UserRecord, requestedTo: UserRecord): Promise<Boolean>;
    assignRoleToUser(req: Request, user: UserRecord, roleId: string): Promise<string>;
    revokeRoleFromUser(req: Request, user: UserRecord, roleId: string): Promise<Boolean>;
    getUserRoles(req: Request, user: UserRecord): Promise<string[]>;
    getUserPermissions(req: Request, user: UserRecord): Promise<string[]>;
    getUserPermissionsByRole(req: Request, user: UserRecord, roleId: string): Promise<string[]>;
    assignUserPermission(req: Request, user: UserRecord, permissionId: string): Promise<string>;
    assignUserRelatedPermission(req: Request, user: UserRecord, record: RelatedRecord): Promise<string>;
    revokeUserPermission(req: Request, user: UserRecord, permissionId: string): Promise<Boolean>;
    revokeUserRelatedPermission(req: Request, user: UserRecord, record: RelatedRecord): Promise<Boolean>;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
    check(ctx: PermissionContext, relatedRecord?: RelatedRecord, isRecordPassed?: Boolean): Promise<Boolean>;
}
//# sourceMappingURL=index.d.ts.map