import { PermissionControllerConfig } from './PermissionControllerConfig';
import { Application, Request, Response, NextFunction } from 'express';
import { PermissionContext, UserRecord } from './PermissionContext';
export { MigrationColumnDefinition, MigrationTableDefinition, MigrationTableMapping, MigrationTables, PermissionControllerConfig, PermissionMigration, PermissionMigrationConfig, TableMapping } from './PermissionControllerConfig';
export { PermissionContext, PermissionRequest, RelatedRecord, UserRecord } from './PermissionContext';
export { Permission } from './Permission';
export { PermissionParameter } from './PermissionParameter';
export { PermissionProperty } from './PermissionProperty';
export declare class PermissionController {
    config: PermissionControllerConfig;
    private schemas;
    constructor(config: PermissionControllerConfig);
    build(app: Application): Promise<void>;
    getAnonymousUser(): UserRecord;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
    check(ctx: PermissionContext): Promise<Boolean>;
}
//# sourceMappingURL=index.d.ts.map