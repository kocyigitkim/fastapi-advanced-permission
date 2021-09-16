import { Request } from "express";

export class RelatedRecord {
    constructor(public id: string, public name: string) {}
}
export class UserRecord {
    constructor(public id: string, public name: string, public isAnonymous: boolean = null) {
    }
}
export class PermissionRequest {
    constructor(public urlParts: string[]) { }
}
export class PermissionContext {
    constructor(public req: Request, public user: UserRecord, public request: PermissionRequest) {
    }
}
