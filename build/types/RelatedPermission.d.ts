import { PermissionBuilder } from './PermissionBuilder';
import { RelatedRecord } from '../PermissionContext';
export declare class RelatedPermission extends PermissionBuilder {
    get Path(): string;
    set Path(value: string);
    get Record(): RelatedRecord;
    set Record(value: RelatedRecord);
    constructor(path: string);
}
//# sourceMappingURL=RelatedPermission.d.ts.map