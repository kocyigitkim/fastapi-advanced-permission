import { Request } from "express";
export declare class RelatedRecord {
    id: string;
    name: string;
    constructor(id: string, name: string);
}
export declare class UserRecord {
    id: string;
    name: string;
    isAnonymous: boolean;
    constructor(id: string, name: string, isAnonymous?: boolean);
}
export declare class PermissionRequest {
    urlParts: string[];
    constructor(urlParts: string[]);
}
export declare class PermissionContext {
    req: Request;
    user: UserRecord;
    request: PermissionRequest;
    constructor(req: Request, user: UserRecord, request: PermissionRequest);
}
//# sourceMappingURL=PermissionContext.d.ts.map