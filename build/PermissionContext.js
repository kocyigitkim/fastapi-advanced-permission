"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionContext = exports.PermissionRequest = exports.UserRecord = exports.RelatedRecord = void 0;
var RelatedRecord = /** @class */ (function () {
    function RelatedRecord(id, name) {
        this.id = id;
        this.name = name;
    }
    return RelatedRecord;
}());
exports.RelatedRecord = RelatedRecord;
var UserRecord = /** @class */ (function () {
    function UserRecord(id, name, isAnonymous) {
        if (isAnonymous === void 0) { isAnonymous = null; }
        this.id = id;
        this.name = name;
        this.isAnonymous = isAnonymous;
    }
    return UserRecord;
}());
exports.UserRecord = UserRecord;
var PermissionRequest = /** @class */ (function () {
    function PermissionRequest(urlParts) {
        this.urlParts = urlParts;
    }
    return PermissionRequest;
}());
exports.PermissionRequest = PermissionRequest;
var PermissionContext = /** @class */ (function () {
    function PermissionContext(req, user, request) {
        this.req = req;
        this.user = user;
        this.request = request;
    }
    return PermissionContext;
}());
exports.PermissionContext = PermissionContext;
//# sourceMappingURL=PermissionContext.js.map