"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionController = exports.UserRecord = exports.RelatedRecord = exports.PermissionRequest = exports.PermissionContext = exports.TableMapping = exports.PermissionMigrationConfig = exports.PermissionMigration = exports.PermissionControllerConfig = exports.MigrationTables = exports.MigrationTableMapping = exports.MigrationTableDefinition = exports.MigrationColumnDefinition = void 0;
var PermissionContext_1 = require("./PermissionContext");
var uuid_1 = require("uuid");
var PermissionControllerConfig_1 = require("./PermissionControllerConfig");
Object.defineProperty(exports, "MigrationColumnDefinition", { enumerable: true, get: function () { return PermissionControllerConfig_1.MigrationColumnDefinition; } });
Object.defineProperty(exports, "MigrationTableDefinition", { enumerable: true, get: function () { return PermissionControllerConfig_1.MigrationTableDefinition; } });
Object.defineProperty(exports, "MigrationTableMapping", { enumerable: true, get: function () { return PermissionControllerConfig_1.MigrationTableMapping; } });
Object.defineProperty(exports, "MigrationTables", { enumerable: true, get: function () { return PermissionControllerConfig_1.MigrationTables; } });
Object.defineProperty(exports, "PermissionControllerConfig", { enumerable: true, get: function () { return PermissionControllerConfig_1.PermissionControllerConfig; } });
Object.defineProperty(exports, "PermissionMigration", { enumerable: true, get: function () { return PermissionControllerConfig_1.PermissionMigration; } });
Object.defineProperty(exports, "PermissionMigrationConfig", { enumerable: true, get: function () { return PermissionControllerConfig_1.PermissionMigrationConfig; } });
Object.defineProperty(exports, "TableMapping", { enumerable: true, get: function () { return PermissionControllerConfig_1.TableMapping; } });
var PermissionContext_2 = require("./PermissionContext");
Object.defineProperty(exports, "PermissionContext", { enumerable: true, get: function () { return PermissionContext_2.PermissionContext; } });
Object.defineProperty(exports, "PermissionRequest", { enumerable: true, get: function () { return PermissionContext_2.PermissionRequest; } });
Object.defineProperty(exports, "RelatedRecord", { enumerable: true, get: function () { return PermissionContext_2.RelatedRecord; } });
Object.defineProperty(exports, "UserRecord", { enumerable: true, get: function () { return PermissionContext_2.UserRecord; } });
var matchPermission = function (a, b) {
    a = a.filter(function (p) { return p.length > 0; });
    var bParts = b.split('/').map(function (item) { return item.trim(); }).filter(function (p) { return p.length > 0; });
    var count = 0;
    var offset = 0;
    if (bParts.length === 1 && bParts[0] === "*")
        return true; // Granted directly
    for (var _i = 0, bParts_1 = bParts; _i < bParts_1.length; _i++) {
        var part = bParts_1[_i];
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
var formatInsertRecord = function (record) {
    var result = {};
    for (var _i = 0, _a = Object.keys(record); _i < _a.length; _i++) {
        var k = _a[_i];
        result[k.split('.').reverse()[0]] = record[k];
    }
    return result;
};
var PermissionController = /** @class */ (function () {
    function PermissionController(config) {
        this.config = config;
        this.CustomPermission = null;
        this.P_NEWID = false;
        this.R_NEWID = false;
        this.RP_NEWID = false;
        this.UD_NEWID = false;
        this.UR_NEWID = false;
        this.UP_NEWID = false;
        this.TU_NEWID = false;
        this.TR_NEWID = false;
        this.TP_NEWID = false;
        this.P_NEWID_Field = null;
        this.R_NEWID_Field = null;
        this.RP_NEWID_Field = null;
        this.UD_NEWID_Field = null;
        this.UR_NEWID_Field = null;
        this.UP_NEWID_Field = null;
        this.TU_NEWID_Field = null;
        this.TR_NEWID_Field = null;
        this.TP_NEWID_Field = null;
        this.schemas = [];
    }
    PermissionController.prototype.build = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUse, mapping;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.config.apiEndPointEnabled) {
                    app.use(this.config.apiEndPoint + "/set", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                        var user, _a, result, statusCode, oldBody, _i, oldBody_1, item, isGranted, urlParts, relatedRecord, _b, permissionContext;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (!this.config.userResolver) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.config.userResolver(req)];
                                case 1:
                                    _a = _c.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = null;
                                    _c.label = 3;
                                case 3:
                                    user = _a;
                                    if (user == null) {
                                        user = this.getAnonymousUser();
                                    }
                                    result = [];
                                    statusCode = 200;
                                    if (!(req.body && req.body.length > 0)) return [3 /*break*/, 12];
                                    oldBody = req.body;
                                    _i = 0, oldBody_1 = oldBody;
                                    _c.label = 4;
                                case 4:
                                    if (!(_i < oldBody_1.length)) return [3 /*break*/, 11];
                                    item = oldBody_1[_i];
                                    req.body = item;
                                    isGranted = false;
                                    urlParts = (item && item.path || "").split('/').map(function (p) { return p.trim(); }).filter(function (p) { return p.length > 0; });
                                    if (!(urlParts.length > 0)) return [3 /*break*/, 9];
                                    if (!this.config.recordResolver) return [3 /*break*/, 6];
                                    return [4 /*yield*/, this.config.recordResolver(urlParts, req)];
                                case 5:
                                    _b = _c.sent();
                                    return [3 /*break*/, 7];
                                case 6:
                                    _b = null;
                                    _c.label = 7;
                                case 7:
                                    relatedRecord = _b;
                                    permissionContext = new PermissionContext_1.PermissionContext(req, user, new PermissionContext_1.PermissionRequest(urlParts));
                                    return [4 /*yield*/, this.check(permissionContext, relatedRecord, item && item.Id ? true : false)];
                                case 8:
                                    isGranted = _c.sent();
                                    _c.label = 9;
                                case 9:
                                    if (isGranted) {
                                        result.push({
                                            success: true,
                                            message: 'SUCCESS.ACCESSGRANTED',
                                            reason: 'Access granted.',
                                            data: null,
                                            status: 200,
                                            timestamp: new Date()
                                        });
                                    }
                                    else {
                                        result.push({
                                            success: false,
                                            message: 'ERROR.ACCESSDENIED',
                                            reason: 'You do not have permission to access this resource.',
                                            status: 403,
                                            timestamp: new Date(),
                                            data: null
                                        });
                                    }
                                    _c.label = 10;
                                case 10:
                                    _i++;
                                    return [3 /*break*/, 4];
                                case 11:
                                    req.body = oldBody;
                                    return [3 /*break*/, 13];
                                case 12:
                                    statusCode = 204; // no-content
                                    _c.label = 13;
                                case 13:
                                    res.status(statusCode).json(result);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    app.use(this.config.apiEndPoint, function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                        var isGranted, user, _a, urlParts, relatedRecord, _b, permissionContext;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    isGranted = false;
                                    if (!this.config.userResolver) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.config.userResolver(req)];
                                case 1:
                                    _a = _c.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = null;
                                    _c.label = 3;
                                case 3:
                                    user = _a;
                                    if (user == null) {
                                        user = this.getAnonymousUser();
                                    }
                                    urlParts = (req.body && req.body.path || "").split('/').map(function (p) { return p.trim(); }).filter(function (p) { return p.length > 0; });
                                    if (!(urlParts.length > 0)) return [3 /*break*/, 8];
                                    if (!this.config.recordResolver) return [3 /*break*/, 5];
                                    return [4 /*yield*/, this.config.recordResolver(urlParts, req)];
                                case 4:
                                    _b = _c.sent();
                                    return [3 /*break*/, 6];
                                case 5:
                                    _b = null;
                                    _c.label = 6;
                                case 6:
                                    relatedRecord = _b;
                                    permissionContext = new PermissionContext_1.PermissionContext(req, user, new PermissionContext_1.PermissionRequest(urlParts));
                                    return [4 /*yield*/, this.check(permissionContext, relatedRecord, req.body && req.body.Id ? true : false)];
                                case 7:
                                    isGranted = _c.sent();
                                    _c.label = 8;
                                case 8:
                                    if (isGranted) {
                                        res.status(200).json({
                                            success: true,
                                            message: 'SUCCESS.ACCESSGRANTED',
                                            reason: 'Access granted.',
                                            data: null,
                                            status: 200,
                                            timestamp: new Date()
                                        });
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
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                app.use(this.use.bind(this));
                baseUse = app.use;
                app.baseUse = baseUse.bind(app);
                app.use = (function (app) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    if (args.length > 1 && typeof args[0] === 'string') {
                        _this.schemas.push({
                            path: args[0],
                            method: args[1],
                        });
                    }
                    (_a = app).baseUse.apply(_a, args);
                }).bind(this, app);
                if (this.config.migration !== null && this.config.migrationEnabled)
                    this.config.migration.migrate();
                if (this.config.migration) {
                    mapping = this.config.migration.config;
                    this.db = this.config.migration.db;
                    this.RP_Table = mapping.rolePermissionTable.name;
                    this.R_Table = mapping.roleTable.name;
                    this.P_Table = mapping.permissionTable.name;
                    this.UR_Table = mapping.userRoleTable.name;
                    this.UD_Table = mapping.userDelegationTable.name;
                    this.UP_Table = mapping.userPermissionTable.name;
                    this.TU_Table = mapping.teamUserTable.name;
                    this.TR_Table = mapping.teamRoleTable.name;
                    this.TP_Table = mapping.teamPermissionTable.name;
                    this.RP_RoleId = this.RP_Table + "." + mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.RoleId].name;
                    this.RP_PermissionId = this.RP_Table + "." + mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.PermissionId].name;
                    this.RP_IsDeleted = this.RP_Table + "." + mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.IsDeleted].name;
                    this.RP_CreatedBy = this.RP_Table + "." + mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.CreatedBy].name;
                    this.RP_CreatedDate = this.RP_Table + "." + mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.CreatedDate].name;
                    this.RP_DeletedBy = this.RP_Table + "." + mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.DeletedBy].name;
                    this.RP_DeletedDate = this.RP_Table + "." + mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.DeletedDate].name;
                    this.R_Id = this.R_Table + "." + mapping.roleTable.columns[mapping.TableMapping.role.Id].name;
                    this.R_Name = this.R_Table + "." + mapping.roleTable.columns[mapping.TableMapping.role.Name].name;
                    this.R_IsDeleted = this.R_Table + "." + mapping.roleTable.columns[mapping.TableMapping.role.IsDeleted].name;
                    this.R_CreatedBy = this.R_Table + "." + mapping.roleTable.columns[mapping.TableMapping.role.CreatedBy].name;
                    this.R_CreatedDate = this.R_Table + "." + mapping.roleTable.columns[mapping.TableMapping.role.CreatedDate].name;
                    this.R_DeletedBy = this.R_Table + "." + mapping.roleTable.columns[mapping.TableMapping.role.DeletedBy].name;
                    this.R_DeletedDate = this.R_Table + "." + mapping.roleTable.columns[mapping.TableMapping.role.DeletedDate].name;
                    this.P_Id = this.P_Table + "." + mapping.permissionTable.columns[mapping.TableMapping.permission.Id].name;
                    this.P_IsDeleted = this.P_Table + "." + mapping.permissionTable.columns[mapping.TableMapping.permission.IsDeleted].name;
                    this.P_Path = this.P_Table + "." + mapping.permissionTable.columns[mapping.TableMapping.permission.Path].name;
                    this.P_PathFieldName = mapping.permissionTable.columns[mapping.TableMapping.permission.Path].name;
                    this.P_CreatedBy = this.P_Table + "." + mapping.permissionTable.columns[mapping.TableMapping.permission.CreatedBy].name;
                    this.P_CreatedDate = this.P_Table + "." + mapping.permissionTable.columns[mapping.TableMapping.permission.CreatedDate].name;
                    this.P_DeletedBy = this.P_Table + "." + mapping.permissionTable.columns[mapping.TableMapping.permission.DeletedBy].name;
                    this.P_DeletedDate = this.P_Table + "." + mapping.permissionTable.columns[mapping.TableMapping.permission.DeletedDate].name;
                    this.UR_RoleId = this.UR_Table + "." + mapping.userRoleTable.columns[mapping.TableMapping.userRole.RoleId].name;
                    this.UR_UserId = this.UR_Table + "." + mapping.userRoleTable.columns[mapping.TableMapping.userRole.UserId].name;
                    this.UR_IsDeleted = this.UR_Table + "." + mapping.userRoleTable.columns[mapping.TableMapping.userRole.IsDeleted].name;
                    this.UR_CreatedBy = this.UR_Table + "." + mapping.userRoleTable.columns[mapping.TableMapping.userRole.CreatedBy].name;
                    this.UR_CreatedDate = this.UR_Table + "." + mapping.userRoleTable.columns[mapping.TableMapping.userRole.CreatedDate].name;
                    this.UR_DeletedBy = this.UR_Table + "." + mapping.userRoleTable.columns[mapping.TableMapping.userRole.DeletedBy].name;
                    this.UR_DeletedDate = this.UR_Table + "." + mapping.userRoleTable.columns[mapping.TableMapping.userRole.DeletedDate].name;
                    this.UD_RequestedBy = this.UD_Table + "." + mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.RequestedBy].name;
                    this.UD_RequestedTo = this.UD_Table + "." + mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.RequestedTo].name;
                    this.UD_CreatedBy = this.UD_Table + "." + mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.CreatedBy].name;
                    this.UD_CreatedDate = this.UD_Table + "." + mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.CreatedDate].name;
                    this.UD_IsDeleted = this.UD_Table + "." + mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.IsDeleted].name;
                    this.UD_DeletedBy = this.UD_Table + "." + mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.DeletedBy].name;
                    this.UD_DeletedDate = this.UD_Table + "." + mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.DeletedDate].name;
                    this.UP_UserId = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.UserId].name;
                    this.UP_IsDeleted = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.IsDeleted].name;
                    this.UP_PermissionId = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.PermissionId].name;
                    this.UP_RelatedName = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.RelatedName].name;
                    this.UP_RelatedId = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.RelatedId].name;
                    this.UP_CreatedBy = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.CreatedBy].name;
                    this.UP_CreatedDate = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.CreatedDate].name;
                    this.UP_DeletedBy = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.DeletedBy].name;
                    this.UP_DeletedDate = this.UP_Table + "." + mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.DeletedDate].name;
                    this.TU_UserId = this.TU_Table + "." + mapping.teamUserTable.columns[mapping.TableMapping.teamUser.UserId].name;
                    this.TU_TeamId = this.TU_Table + "." + mapping.teamUserTable.columns[mapping.TableMapping.teamUser.TeamId].name;
                    this.TU_IsDeleted = this.TU_Table + "." + mapping.teamUserTable.columns[mapping.TableMapping.teamUser.IsDeleted].name;
                    this.TU_CreatedBy = this.TU_Table + "." + mapping.teamUserTable.columns[mapping.TableMapping.teamUser.CreatedBy].name;
                    this.TU_CreatedDate = this.TU_Table + "." + mapping.teamUserTable.columns[mapping.TableMapping.teamUser.CreatedDate].name;
                    this.TU_DeletedBy = this.TU_Table + "." + mapping.teamUserTable.columns[mapping.TableMapping.teamUser.DeletedBy].name;
                    this.TU_DeletedDate = this.TU_Table + "." + mapping.teamUserTable.columns[mapping.TableMapping.teamUser.DeletedDate].name;
                    this.TR_RoleId = this.TR_Table + "." + mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.RoleId].name;
                    this.TR_TeamId = this.TR_Table + "." + mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.TeamId].name;
                    this.TR_IsDeleted = this.TR_Table + "." + mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.IsDeleted].name;
                    this.TR_CreatedBy = this.TR_Table + "." + mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.CreatedBy].name;
                    this.TR_CreatedDate = this.TR_Table + "." + mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.CreatedDate].name;
                    this.TR_DeletedBy = this.TR_Table + "." + mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.DeletedBy].name;
                    this.TR_DeletedDate = this.TR_Table + "." + mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.DeletedDate].name;
                    this.TP_PermissionId = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.PermissionId].name;
                    this.TP_TeamId = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.TeamId].name;
                    this.TP_IsDeleted = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.IsDeleted].name;
                    this.TP_RelatedId = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.RelatedId].name;
                    this.TP_RelatedName = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.RelatedName].name;
                    this.TP_CreatedBy = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.CreatedBy].name;
                    this.TP_CreatedDate = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.CreatedDate].name;
                    this.TP_DeletedBy = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.DeletedBy].name;
                    this.TP_DeletedDate = this.TP_Table + "." + mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.DeletedDate].name;
                    if (mapping.permissionTable.columns[mapping.TableMapping.permission.Id].type === 'uniqueidentifier') {
                        this.P_NEWID = true;
                        this.P_NEWID_Field = mapping.permissionTable.columns[mapping.TableMapping.permission.Id].name;
                    }
                    if (mapping.roleTable.columns[mapping.TableMapping.role.Id].type === 'uniqueidentifier') {
                        this.R_NEWID = true;
                        this.R_NEWID_Field = mapping.roleTable.columns[mapping.TableMapping.role.Id].name;
                    }
                    if (mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.RoleId].type === 'uniqueidentifier') {
                        this.RP_NEWID = true;
                        this.RP_NEWID_Field = mapping.rolePermissionTable.columns[mapping.TableMapping.rolePermission.RoleId].name;
                    }
                    if (mapping.userRoleTable.columns[mapping.TableMapping.userRole.Id].type === 'uniqueidentifier') {
                        this.UR_NEWID = true;
                        this.UR_NEWID_Field = mapping.userRoleTable.columns[mapping.TableMapping.userRole.Id].name;
                    }
                    if (mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.Id].type === 'uniqueidentifier') {
                        this.UD_NEWID = true;
                        this.UD_NEWID_Field = mapping.userDelegationTable.columns[mapping.TableMapping.userDelegation.Id].name;
                    }
                    if (mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.Id].type === 'uniqueidentifier') {
                        this.UP_NEWID = true;
                        this.UP_NEWID_Field = mapping.userPermissionTable.columns[mapping.TableMapping.userPermission.Id].name;
                    }
                    if (mapping.teamUserTable.columns[mapping.TableMapping.teamUser.Id].type === 'uniqueidentifier') {
                        this.TU_NEWID = true;
                        this.TU_NEWID_Field = mapping.teamUserTable.columns[mapping.TableMapping.teamUser.Id].name;
                    }
                    if (mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.Id].type === 'uniqueidentifier') {
                        this.TR_NEWID = true;
                        this.TR_NEWID_Field = mapping.teamRoleTable.columns[mapping.TableMapping.teamRole.Id].name;
                    }
                    if (mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.Id].type === 'uniqueidentifier') {
                        this.TP_NEWID = true;
                        this.TP_NEWID_Field = mapping.teamPermissionTable.columns[mapping.TableMapping.teamPermission.Id].name;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    PermissionController.prototype.getAnonymousUser = function () {
        return new PermissionContext_1.UserRecord(null, null, true);
    };
    PermissionController.prototype.getCurrentUser = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.config.userResolver(req)];
                    case 1:
                        user = _a.sent();
                        if (user == null) {
                            user = this.getAnonymousUser();
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    PermissionController.prototype.createPermission = function (req, path) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, permissionList, record;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        permissionList = this.db(this.P_Table).where((_a = {},
                            _a[this.P_Path] = path,
                            _a[this.P_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(!permissionList || permissionList.length === 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.P_Path] = path,
                            _b[this.P_CreatedBy] = currentUser.id,
                            _b[this.P_CreatedDate] = new Date(),
                            _b[this.P_IsDeleted] = false,
                            _b);
                        if (this.P_NEWID) {
                            record[this.P_NEWID_Field] = (0, uuid_1.v4)();
                        }
                        return [4 /*yield*/, this.db(this.P_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.deletePermission = function (req, id) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, permissionList, record;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _d.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        permissionList = this.db(this.P_Table).where((_a = {},
                            _a[this.P_Id] = id,
                            _a[this.P_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(permissionList && permissionList.length > 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.P_IsDeleted] = true,
                            _b[this.P_DeletedBy] = currentUser.id,
                            _b[this.P_DeletedDate] = new Date(),
                            _b);
                        return [4 /*yield*/, this.db(this.P_Table).where((_c = {},
                                _c[this.P_Id] = id,
                                _c)).update(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.getPermissions = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, permissionList;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _b.sent();
                        if (!currentUser.isAnonymous) {
                            permissionList = this.db(this.P_Table).where((_a = {},
                                _a[this.P_IsDeleted] = false,
                                _a)).select().catch(console.error);
                            if (permissionList && permissionList.length > 0) {
                                return [2 /*return*/, permissionList];
                            }
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    PermissionController.prototype.getPermissionByRoleId = function (req, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, permissionList;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _b.sent();
                        if (!currentUser.isAnonymous) {
                            permissionList = this.db(this.RP_Table).where((_a = {},
                                _a[this.RP_RoleId] = roleId,
                                _a[this.RP_IsDeleted] = false,
                                _a)).select().catch(console.error);
                            if (permissionList && permissionList.length > 0) {
                                return [2 /*return*/, permissionList];
                            }
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    PermissionController.prototype.createRole = function (req, name) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, roleList, record;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        roleList = this.db(this.R_Table).where((_a = {},
                            _a[this.R_Name] = name,
                            _a[this.R_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(!roleList || roleList.length === 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.R_Name] = name,
                            _b[this.R_CreatedBy] = currentUser.id,
                            _b[this.R_CreatedDate] = new Date(),
                            _b[this.R_IsDeleted] = false,
                            _b);
                        if (this.R_NEWID) {
                            record[this.R_NEWID_Field] = (0, uuid_1.v4)();
                        }
                        return [4 /*yield*/, this.db(this.R_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.getRoles = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, roleList;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _b.sent();
                        if (!currentUser.isAnonymous) {
                            roleList = this.db(this.R_Table).where((_a = {},
                                _a[this.R_IsDeleted] = false,
                                _a)).select().catch(console.error);
                            return [2 /*return*/, roleList];
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    PermissionController.prototype.getRole = function (req, id) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, roleList;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _b.sent();
                        if (!currentUser.isAnonymous) {
                            roleList = this.db(this.R_Table).where((_a = {},
                                _a[this.R_Id] = id,
                                _a[this.R_IsDeleted] = false,
                                _a)).select().catch(console.error);
                            if (roleList && roleList.length > 0) {
                                return [2 /*return*/, roleList[0]];
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    PermissionController.prototype.deleteRole = function (req, id) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, roleList, record;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _d.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        roleList = this.db(this.R_Table).where((_a = {},
                            _a[this.R_Id] = id,
                            _a[this.R_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(roleList && roleList.length > 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.R_IsDeleted] = true,
                            _b[this.R_DeletedBy] = currentUser.id,
                            _b[this.R_DeletedDate] = new Date(),
                            _b);
                        return [4 /*yield*/, this.db(this.R_Table).where((_c = {},
                                _c[this.R_Id] = id,
                                _c)).update(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.createRolePermission = function (req, roleId, permissionId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, rolePermissionList, record;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        rolePermissionList = this.db(this.RP_Table).where((_a = {},
                            _a[this.RP_RoleId] = roleId,
                            _a[this.RP_PermissionId] = permissionId,
                            _a[this.RP_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(!rolePermissionList || rolePermissionList.length === 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.RP_RoleId] = roleId,
                            _b[this.RP_PermissionId] = permissionId,
                            _b[this.RP_CreatedBy] = currentUser.id,
                            _b[this.RP_CreatedDate] = new Date(),
                            _b[this.RP_IsDeleted] = false,
                            _b);
                        if (this.RP_NEWID) {
                            record[this.RP_NEWID_Field] = (0, uuid_1.v4)();
                        }
                        return [4 /*yield*/, this.db(this.RP_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.removeRolePermission = function (req, roleId, permissionId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, rolePermissionList, record;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _d.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        rolePermissionList = this.db(this.RP_Table).where((_a = {},
                            _a[this.RP_RoleId] = roleId,
                            _a[this.RP_PermissionId] = permissionId,
                            _a[this.RP_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(rolePermissionList && rolePermissionList.length > 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.RP_IsDeleted] = true,
                            _b[this.RP_DeletedBy] = currentUser.id,
                            _b[this.RP_DeletedDate] = new Date(),
                            _b);
                        return [4 /*yield*/, this.db(this.RP_Table).where((_c = {},
                                _c[this.RP_RoleId] = roleId,
                                _c[this.RP_PermissionId] = permissionId,
                                _c)).update(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.assignRoleToTeam = function (req, teamId, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, teamRoleList, record;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        teamRoleList = this.db(this.TR_Table).where((_a = {},
                            _a[this.TR_TeamId] = teamId,
                            _a[this.TR_RoleId] = roleId,
                            _a[this.TR_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(!teamRoleList || teamRoleList.length === 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.TR_TeamId] = teamId,
                            _b[this.TR_RoleId] = roleId,
                            _b[this.TR_CreatedBy] = currentUser.id,
                            _b[this.TR_CreatedDate] = new Date(),
                            _b[this.TR_IsDeleted] = false,
                            _b);
                        if (this.TR_NEWID) {
                            record[this.TR_NEWID_Field] = (0, uuid_1.v4)();
                        }
                        return [4 /*yield*/, this.db(this.TR_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.revokeRoleFromTeam = function (req, teamId, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, teamRoleList, record;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _d.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        teamRoleList = this.db(this.TR_Table).where((_a = {},
                            _a[this.TR_TeamId] = teamId,
                            _a[this.TR_RoleId] = roleId,
                            _a[this.TR_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(teamRoleList && teamRoleList.length > 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.TR_IsDeleted] = true,
                            _b[this.TR_DeletedBy] = currentUser.id,
                            _b[this.TR_DeletedDate] = new Date(),
                            _b);
                        return [4 /*yield*/, this.db(this.TR_Table).where((_c = {},
                                _c[this.TR_TeamId] = teamId,
                                _c[this.TR_RoleId] = roleId,
                                _c)).update(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.assignPermissionToTeam = function (req, teamId, permissionId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, teamPermissionList, record;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        teamPermissionList = this.db(this.TP_Table).where((_a = {},
                            _a[this.TP_TeamId] = teamId,
                            _a[this.TP_PermissionId] = permissionId,
                            _a[this.TP_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(!teamPermissionList || teamPermissionList.length === 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.TP_TeamId] = teamId,
                            _b[this.TP_PermissionId] = permissionId,
                            _b[this.TP_CreatedBy] = currentUser.id,
                            _b[this.TP_CreatedDate] = new Date(),
                            _b[this.TP_IsDeleted] = false,
                            _b);
                        if (this.TP_NEWID) {
                            record[this.TP_NEWID_Field] = (0, uuid_1.v4)();
                        }
                        return [4 /*yield*/, this.db(this.TP_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.assignTeamRelatedPermission = function (req, teamId, related) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, teamPermissionList, record;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        teamPermissionList = this.db(this.TP_Table).where((_a = {},
                            _a[this.TP_TeamId] = teamId,
                            _a[this.TP_IsDeleted] = false,
                            _a[this.TP_RelatedName] = related.name,
                            _a[this.TP_RelatedId] = related.id,
                            _a)).select().catch(console.error);
                        if (!(!teamPermissionList || teamPermissionList.length === 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.TP_TeamId] = teamId,
                            _b[this.TP_RelatedName] = related.name,
                            _b[this.TP_RelatedId] = related.id,
                            _b[this.TP_CreatedBy] = currentUser.id,
                            _b[this.TP_CreatedDate] = new Date(),
                            _b[this.TP_IsDeleted] = false,
                            _b);
                        if (this.TP_NEWID) {
                            record[this.TP_NEWID_Field] = (0, uuid_1.v4)();
                        }
                        return [4 /*yield*/, this.db(this.TP_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.revokePermissionFromTeam = function (req, teamId, permissionId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, teamPermissionList, record;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _d.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        teamPermissionList = this.db(this.TP_Table).where((_a = {},
                            _a[this.TP_TeamId] = teamId,
                            _a[this.TP_PermissionId] = permissionId,
                            _a[this.TP_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(teamPermissionList && teamPermissionList.length > 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.TP_IsDeleted] = true,
                            _b[this.TP_DeletedBy] = currentUser.id,
                            _b[this.TP_DeletedDate] = new Date(),
                            _b);
                        return [4 /*yield*/, this.db(this.TP_Table).where((_c = {},
                                _c[this.TP_TeamId] = teamId,
                                _c[this.TP_PermissionId] = permissionId,
                                _c)).update(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.revokeTeamRelatedPermission = function (req, teamId, related) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, teamPermissionList, record;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _d.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        teamPermissionList = this.db(this.TP_Table).where((_a = {},
                            _a[this.TP_TeamId] = teamId,
                            _a[this.TP_IsDeleted] = false,
                            _a[this.TP_RelatedName] = related.name,
                            _a[this.TP_RelatedId] = related.id,
                            _a)).select().catch(console.error);
                        if (!(teamPermissionList && teamPermissionList.length > 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.TP_IsDeleted] = true,
                            _b[this.TP_DeletedBy] = currentUser.id,
                            _b[this.TP_DeletedDate] = new Date(),
                            _b);
                        return [4 /*yield*/, this.db(this.TP_Table).where((_c = {},
                                _c[this.TP_TeamId] = teamId,
                                _c[this.TP_RelatedName] = related.name,
                                _c[this.TP_RelatedId] = related.id,
                                _c)).update(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.getTeamRoles = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.db(this.TR_Table).where((_a = {},
                            _a[this.TR_TeamId] = teamId,
                            _a[this.TR_IsDeleted] = false,
                            _a)).select(this.UR_RoleId).then(function (p) { return p.map(function (r) { return r[_this.UR_RoleId]; }); }).catch(console.error)];
                    case 1:
                        roles = _b.sent();
                        return [2 /*return*/, roles];
                }
            });
        });
    };
    PermissionController.prototype.getTeamPermissions = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var permissions;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.db(this.TP_Table).where((_a = {},
                            _a[this.TP_TeamId] = teamId,
                            _a[this.TP_IsDeleted] = false,
                            _a)).select(this.UP_PermissionId).then(function (p) { return p.map(function (r) { return r[_this.UP_PermissionId]; }); }).catch(console.error)];
                    case 1:
                        permissions = _b.sent();
                        return [2 /*return*/, permissions];
                }
            });
        });
    };
    PermissionController.prototype.getTeamPermissionsByRole = function (req, teamId, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var permissions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db(this.RP_Table)
                            .join(this.db(this.R_Table).where(this.R_IsDeleted, false), this.R_Id, this.RP_RoleId)
                            .join(this.db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.RP_PermissionId)
                            .whereNotNull(this.R_Id)
                            .whereNotNull(this.P_Id)
                            .where(this.RP_RoleId, roleId)
                            .whereIn(this.RP_RoleId, this.db(this.TR_Table).where(this.TR_TeamId, teamId).where(this.TR_IsDeleted, false).select(this.TR_RoleId))
                            .where(this.RP_IsDeleted, false)
                            .select(this.P_Path).then(function (p) { return p && p.map(function (i) { return i[_this.P_PathFieldName]; }); }).catch(console.error)];
                    case 1:
                        permissions = _a.sent();
                        return [2 /*return*/, permissions];
                }
            });
        });
    };
    PermissionController.prototype.assignUserToTeam = function (req, teamId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, teamUserList, record;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        teamUserList = this.db(this.TU_Table).where((_a = {},
                            _a[this.TU_TeamId] = teamId,
                            _a[this.TU_UserId] = userId,
                            _a[this.TU_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(!teamUserList || teamUserList.length === 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.TU_TeamId] = teamId,
                            _b[this.TU_UserId] = userId,
                            _b[this.TU_CreatedBy] = currentUser.id,
                            _b[this.TU_CreatedDate] = new Date(),
                            _b[this.TU_IsDeleted] = false,
                            _b);
                        if (this.TU_NEWID) {
                            record[this.TU_NEWID_Field] = (0, uuid_1.v4)();
                        }
                        return [4 /*yield*/, this.db(this.TU_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.revokeUserFromTeam = function (req, teamId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, teamUserList, record;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _d.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 3];
                        teamUserList = this.db(this.TU_Table).where((_a = {},
                            _a[this.TU_TeamId] = teamId,
                            _a[this.TU_UserId] = userId,
                            _a[this.TU_IsDeleted] = false,
                            _a)).select().catch(console.error);
                        if (!(teamUserList && teamUserList.length > 0)) return [3 /*break*/, 3];
                        record = (_b = {},
                            _b[this.TU_IsDeleted] = true,
                            _b[this.TU_DeletedBy] = currentUser.id,
                            _b[this.TU_DeletedDate] = new Date(),
                            _b);
                        return [4 /*yield*/, this.db(this.TU_Table).where((_c = {},
                                _c[this.TU_TeamId] = teamId,
                                _c[this.TU_UserId] = userId,
                                _c)).update(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.getUsersByTeam = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.db(this.TU_Table).where((_a = {},
                            _a[this.TU_TeamId] = teamId,
                            _a[this.TU_IsDeleted] = false,
                            _a)).select(this.TU_UserId).then(function (p) { return p.map(function (r) { return r[_this.TU_UserId]; }); }).catch(console.error)];
                    case 1:
                        users = _b.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    PermissionController.prototype.assignUserDelegation = function (req, requestedBy, requestedTo) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, delegationList, record;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.db(this.UD_Table).where((_a = {},
                                _a[this.UD_RequestedBy] = requestedBy.id,
                                _a[this.UD_RequestedTo] = requestedTo.id,
                                _a[this.UD_IsDeleted] = false,
                                _a)).select().catch(console.error)];
                    case 2:
                        delegationList = _c.sent();
                        if (!(!delegationList || delegationList.length === 0)) return [3 /*break*/, 4];
                        record = (_b = {},
                            _b[this.UD_RequestedBy] = requestedBy.id,
                            _b[this.UD_RequestedTo] = requestedTo.id,
                            _b[this.UD_CreatedBy] = currentUser.id,
                            _b[this.UD_CreatedDate] = new Date(),
                            _b[this.UD_IsDeleted] = false,
                            _b);
                        if (this.UD_NEWID) {
                            record[this.UD_NEWID_Field] = (0, uuid_1.v4)();
                        }
                        return [4 /*yield*/, this.db(this.UD_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.revokeUserDelegation = function (req, requestedBy, requestedTo) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, delegationList;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _d.sent();
                        if (!!currentUser.isAnonymous) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.db(this.UD_Table).where((_a = {},
                                _a[this.UD_RequestedBy] = requestedBy.id,
                                _a[this.UD_RequestedTo] = requestedTo.id,
                                _a[this.UD_IsDeleted] = false,
                                _a)).select().catch(console.error)];
                    case 2:
                        delegationList = _d.sent();
                        if (!(delegationList && delegationList.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.db(this.UD_Table).where((_b = {},
                                _b[this.UD_RequestedBy] = requestedBy.id,
                                _b[this.UD_RequestedTo] = requestedTo.id,
                                _b)).update((_c = {},
                                _c[this.UD_IsDeleted] = true,
                                _c[this.UD_DeletedBy] = currentUser.id,
                                _c[this.UD_DeletedDate] = new Date(),
                                _c)).catch(console.error)];
                    case 3:
                        _d.sent();
                        return [2 /*return*/, true];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.assignRoleToUser = function (req, user, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var id, currentUser, record;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = null;
                        if (!!user.isAnonymous) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _b.sent();
                        record = (_a = {},
                            _a[this.UR_RoleId] = roleId,
                            _a[this.UR_UserId] = user.id,
                            _a[this.UR_IsDeleted] = false,
                            _a[this.UR_CreatedDate] = new Date(),
                            _a);
                        if (this.UR_NEWID) {
                            record[this.UR_NEWID_Field] = id = (0, uuid_1.v4)();
                        }
                        if (currentUser) {
                            record[this.UR_CreatedBy] = currentUser.id;
                        }
                        return [4 /*yield*/, this.db(this.UR_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, id];
                }
            });
        });
    };
    PermissionController.prototype.revokeRoleFromUser = function (req, user, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!user.isAnonymous) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        return [4 /*yield*/, this.db(this.UR_Table).where((_a = {},
                                _a[this.UR_UserId] = user.id,
                                _a[this.UR_RoleId] = roleId,
                                _a[this.UR_IsDeleted] = false,
                                _a)).update((_b = {},
                                _b[this.UR_IsDeleted] = true,
                                _b[this.UR_DeletedBy] = currentUser.id,
                                _b[this.UR_DeletedDate] = new Date(),
                                _b)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.getUserRoles = function (req, user) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!user.isAnonymous) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db(this.UR_Table).where((_a = {},
                                _a[this.UR_UserId] = user.id,
                                _a[this.UR_IsDeleted] = false,
                                _a)).select(this.UR_RoleId).then(function (p) { return p.map(function (r) { return r[_this.UR_RoleId]; }); }).catch(console.error)];
                    case 1:
                        roles = _b.sent();
                        return [2 /*return*/, roles];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    PermissionController.prototype.getUserPermissions = function (req, user) {
        return __awaiter(this, void 0, void 0, function () {
            var permissions;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!user.isAnonymous) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db(this.UP_Table).where((_a = {},
                                _a[this.UP_UserId] = user.id,
                                _a[this.UP_IsDeleted] = false,
                                _a)).select(this.UP_PermissionId).then(function (p) { return p.map(function (r) { return r[_this.UP_PermissionId]; }); }).catch(console.error)];
                    case 1:
                        permissions = _b.sent();
                        return [2 /*return*/, permissions];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    PermissionController.prototype.getUserPermissionsByRole = function (req, user, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var permissions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!user.isAnonymous) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db(this.RP_Table)
                                .join(this.db(this.R_Table).where(this.R_IsDeleted, false), this.R_Id, this.RP_RoleId)
                                .join(this.db(this.P_Table).where(this.P_IsDeleted, false), this.P_Id, this.RP_PermissionId)
                                .whereNotNull(this.R_Id)
                                .whereNotNull(this.P_Id)
                                .where(this.RP_RoleId, roleId)
                                .whereIn(this.RP_RoleId, this.db(this.UR_Table).where(this.UR_UserId, user.id).where(this.UR_IsDeleted, false).select(this.UR_RoleId))
                                .where(this.RP_IsDeleted, false)
                                .select(this.P_Path).then(function (p) { return p && p.map(function (i) { return i[_this.P_PathFieldName]; }); }).catch(console.error)];
                    case 1:
                        permissions = _a.sent();
                        return [2 /*return*/, permissions];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    PermissionController.prototype.assignUserPermission = function (req, user, permissionId) {
        return __awaiter(this, void 0, void 0, function () {
            var id, currentUser, record;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = null;
                        if (!!user.isAnonymous) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _b.sent();
                        record = (_a = {},
                            _a[this.UP_PermissionId] = permissionId,
                            _a[this.UP_UserId] = user.id,
                            _a[this.UP_IsDeleted] = false,
                            _a[this.UP_CreatedDate] = new Date(),
                            _a);
                        if (this.UP_NEWID) {
                            record[this.UP_NEWID_Field] = id = (0, uuid_1.v4)();
                        }
                        if (currentUser) {
                            record[this.UP_CreatedBy] = currentUser.id;
                        }
                        return [4 /*yield*/, this.db(this.UP_Table).insert(formatInsertRecord(record)).catch(console.error)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, id];
                }
            });
        });
    };
    PermissionController.prototype.assignUserRelatedPermission = function (req, user, record) {
        return __awaiter(this, void 0, void 0, function () {
            var id, currentUser, permissionRecord;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = null;
                        if (!!user.isAnonymous) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _b.sent();
                        permissionRecord = (_a = {},
                            _a[this.UP_UserId] = user.id,
                            _a[this.UP_IsDeleted] = false,
                            _a[this.UP_CreatedDate] = new Date(),
                            _a[this.UP_RelatedId] = record.id,
                            _a[this.UP_RelatedName] = record.name,
                            _a);
                        if (this.UP_NEWID) {
                            permissionRecord[this.UP_NEWID_Field] = id = (0, uuid_1.v4)();
                        }
                        if (currentUser) {
                            permissionRecord[this.UP_CreatedBy] = currentUser.id;
                        }
                        return [4 /*yield*/, this.db(this.UP_Table).insert(permissionRecord).catch(console.error)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, id];
                }
            });
        });
    };
    PermissionController.prototype.revokeUserPermission = function (req, user, permissionId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!user.isAnonymous) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        return [4 /*yield*/, this.db(this.UP_Table).where((_a = {},
                                _a[this.UP_UserId] = user.id,
                                _a[this.UP_PermissionId] = permissionId,
                                _a[this.UP_IsDeleted] = false,
                                _a)).update((_b = {},
                                _b[this.UP_IsDeleted] = true,
                                _b[this.UP_DeletedBy] = currentUser.id,
                                _b[this.UP_DeletedDate] = new Date(),
                                _b)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.revokeUserRelatedPermission = function (req, user, record) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!user.isAnonymous) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCurrentUser(req)];
                    case 1:
                        currentUser = _c.sent();
                        return [4 /*yield*/, this.db(this.UP_Table).where((_a = {},
                                _a[this.UP_UserId] = user.id,
                                _a[this.UP_RelatedId] = record.id,
                                _a[this.UP_RelatedName] = record.name,
                                _a[this.UP_IsDeleted] = false,
                                _a)).update((_b = {},
                                _b[this.UP_IsDeleted] = true,
                                _b[this.UP_DeletedBy] = currentUser.id,
                                _b[this.UP_DeletedDate] = new Date(),
                                _b)).catch(console.error)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    PermissionController.prototype.use = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var isGranted, user, urlParts, permissionContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (req.method.toUpperCase() === "OPTIONS") {
                            next();
                            return [2 /*return*/];
                        }
                        isGranted = false;
                        return [4 /*yield*/, this.config.userResolver(req)];
                    case 1:
                        user = _a.sent();
                        if (user == null) {
                            user = this.getAnonymousUser();
                        }
                        urlParts = (req.originalUrl || req.url).split('/').map(function (p) { return p.trim(); }).filter(function (p) { return p.length > 0; });
                        if (!urlParts) return [3 /*break*/, 3];
                        permissionContext = new PermissionContext_1.PermissionContext(req, user, new PermissionContext_1.PermissionRequest(urlParts));
                        return [4 /*yield*/, this.check(permissionContext)];
                    case 2:
                        isGranted = _a.sent();
                        _a.label = 3;
                    case 3:
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
                        return [2 /*return*/];
                }
            });
        });
    };
    PermissionController.prototype.check = function (ctx, relatedRecord, isRecordPassed) {
        return __awaiter(this, void 0, void 0, function () {
            var user, record, _a, d, permissions, _i, permissions_1, p, db, permissions, _b, permissions_2, p, permissions, _c, permissions_3, p, permissions, _d, permissions_4, p, teams, permissions, _e, permissions_5, p, permissions, _f, permissions_6, p, permissions, _g, permissions_7, p;
            var _this = this;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        if (!this.CustomPermission) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.CustomPermission(ctx)];
                    case 1:
                        if (_h.sent()) {
                            return [2 /*return*/, true];
                        }
                        _h.label = 2;
                    case 2:
                        user = ctx.user;
                        record = relatedRecord;
                        if (!(isRecordPassed !== true)) return [3 /*break*/, 6];
                        if (!this.config.recordResolver) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.config.recordResolver(ctx.request.urlParts, ctx.req)];
                    case 3:
                        _a = _h.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = null;
                        _h.label = 5;
                    case 5:
                        record = _a;
                        _h.label = 6;
                    case 6:
                        if (ctx.req && ctx.req.session) {
                            d = ctx.req.session.fastapi_ap_permissions_d;
                            if (d && (new Date().valueOf() - d.valueOf()) / 1000.0 < 60.0) {
                                ctx.req.session.fastapi_ap_permissions_d = new Date();
                                permissions = ctx.req.session.fastapi_ap_permissions;
                                if (permissions && permissions.length > 0) {
                                    for (_i = 0, permissions_1 = permissions; _i < permissions_1.length; _i++) {
                                        p = permissions_1[_i];
                                        if (matchPermission(ctx.request.urlParts, p)) {
                                            return [2 /*return*/, true];
                                        }
                                    }
                                }
                                if (!record)
                                    return [2 /*return*/, false];
                            }
                            else {
                                ctx.req.session.fastapi_ap_permissions = [];
                                ctx.req.session.fastapi_ap_permissions_d = 0;
                            }
                        }
                        db = this.db;
                        return [4 /*yield*/, db(this.RP_Table)
                                .join(db(this.R_Table).where(this.R_IsDeleted, false).as(this.R_Table), this.R_Id, this.RP_RoleId)
                                .join(db(this.P_Table).where(this.P_IsDeleted, false).as(this.P_Table), this.P_Id, this.RP_PermissionId)
                                .whereNotNull(this.R_Id)
                                .whereNotNull(this.P_Id)
                                .whereIn(this.RP_RoleId, db(this.UR_Table).where(this.UR_UserId, user.id).where(this.UR_IsDeleted, false).select(this.UR_RoleId))
                                .where(this.RP_IsDeleted, false)
                                .select(this.P_Path).then(function (p) { return p && p.map(function (i) { return i[_this.P_PathFieldName]; }); }).catch(console.error)];
                    case 7:
                        permissions = _h.sent();
                        if (ctx.req && ctx.req.session) {
                            ctx.req.session.fastapi_ap_permissions = (__spreadArray(__spreadArray([], (ctx.req.session.fastapi_ap_permissions || []), true), (permissions || []), true)).filter(function (x, i, a) { return a.indexOf(x) === i; });
                            ctx.req.session.fastapi_ap_permissions_d = new Date();
                        }
                        if (permissions && permissions.length > 0) {
                            for (_b = 0, permissions_2 = permissions; _b < permissions_2.length; _b++) {
                                p = permissions_2[_b];
                                if (matchPermission(ctx.request.urlParts, p)) {
                                    return [2 /*return*/, true];
                                }
                            }
                        }
                        if (!(this.config.migration.config.userRelatedPermissionEnabled || this.config.migration.config.userPermissionEnabled)) return [3 /*break*/, 11];
                        if (!(record && this.config.migration.config.userRelatedPermissionEnabled)) return [3 /*break*/, 9];
                        return [4 /*yield*/, db(this.UP_Table)
                                .join(db(this.P_Table).where(this.P_IsDeleted, false).as(this.P_Table), this.P_Id, this.UP_PermissionId)
                                .where(this.UP_UserId, user.id)
                                .where(this.UP_RelatedName, record.name)
                                .where(this.UP_RelatedId, record.id)
                                .where(this.UP_IsDeleted, false)
                                .select(this.P_Path).then(function (p) { return p && p.map(function (i) { return i[_this.P_PathFieldName]; }); }).catch(console.error)];
                    case 8:
                        permissions = _h.sent();
                        if (permissions && permissions.length > 0) {
                            for (_c = 0, permissions_3 = permissions; _c < permissions_3.length; _c++) {
                                p = permissions_3[_c];
                                if (matchPermission(ctx.request.urlParts, p)) {
                                    return [2 /*return*/, true];
                                }
                            }
                        }
                        return [3 /*break*/, 11];
                    case 9:
                        if (!this.config.migration.config.userPermissionEnabled) return [3 /*break*/, 11];
                        return [4 /*yield*/, db(this.UP_Table)
                                .join(db(this.P_Table).where(this.P_IsDeleted, false).as(this.P_Table), this.P_Id, this.UP_PermissionId)
                                .where(this.UP_UserId, user.id)
                                .whereNull(this.UP_RelatedName)
                                .whereNull(this.UP_RelatedId)
                                .where(this.UP_IsDeleted, false)
                                .select(this.P_Path).then(function (p) { return p && p.map(function (i) { return i[_this.P_PathFieldName]; }); }).catch(console.error)];
                    case 10:
                        permissions = _h.sent();
                        if (ctx.req && ctx.req.session) {
                            ctx.req.session.fastapi_ap_permissions = (__spreadArray(__spreadArray([], (ctx.req.session.fastapi_ap_permissions || []), true), (permissions || []), true)).filter(function (x, i, a) { return a.indexOf(x) === i; });
                            ctx.req.session.fastapi_ap_permissions_d = new Date();
                        }
                        if (permissions && permissions.length > 0) {
                            for (_d = 0, permissions_4 = permissions; _d < permissions_4.length; _d++) {
                                p = permissions_4[_d];
                                if (matchPermission(ctx.request.urlParts, p)) {
                                    return [2 /*return*/, true];
                                }
                            }
                        }
                        _h.label = 11;
                    case 11: return [4 /*yield*/, db(this.TU_Table)
                            .where(this.TU_UserId, user.id)
                            .where(this.TU_IsDeleted, false)
                            .select(this.TU_TeamId).then(function (p) { return p[_this.TU_TeamId]; }).catch(console.error)];
                    case 12:
                        teams = _h.sent();
                        if (!(teams && teams.length > 0)) return [3 /*break*/, 17];
                        return [4 /*yield*/, db(this.P_Table)
                                .whereIn(this.RP_RoleId, db(this.TR_Table).whereIn(this.TR_TeamId, teams).where(this.TR_IsDeleted, false).select(this.TR_RoleId))
                                .where(this.RP_IsDeleted, false)
                                .select().then(function (p) { return p && p.map(function (i) { return i[_this.P_PathFieldName]; }); }).catch(console.error)];
                    case 13:
                        permissions = _h.sent();
                        if (ctx.req && ctx.req.session) {
                            ctx.req.session.fastapi_ap_permissions = (__spreadArray(__spreadArray([], (ctx.req.session.fastapi_ap_permissions || []), true), (permissions || []), true)).filter(function (x, i, a) { return a.indexOf(x) === i; });
                            ctx.req.session.fastapi_ap_permissions_d = new Date();
                        }
                        if (permissions && permissions.length > 0) {
                            for (_e = 0, permissions_5 = permissions; _e < permissions_5.length; _e++) {
                                p = permissions_5[_e];
                                if (matchPermission(ctx.request.urlParts, p)) {
                                    return [2 /*return*/, true];
                                }
                            }
                        }
                        if (!(this.config.migration.config.teamRelatedPermissionEnabled || this.config.migration.config.teamPermissionEnabled)) return [3 /*break*/, 17];
                        if (!(record && this.config.migration.config.teamRelatedPermissionEnabled)) return [3 /*break*/, 15];
                        return [4 /*yield*/, db(this.TP_Table)
                                .join(db(this.P_Table).where(this.P_IsDeleted, false).as(this.P_Table), this.P_Id, this.TP_PermissionId)
                                .whereIn(this.TP_TeamId, teams)
                                .where(this.TP_RelatedName, record.name)
                                .where(this.TP_RelatedId, record.id)
                                .where(this.TP_IsDeleted, false)
                                .select(this.P_Path).then(function (p) { return p && p.map(function (i) { return i[_this.P_PathFieldName]; }); }).catch(console.error)];
                    case 14:
                        permissions = _h.sent();
                        if (permissions && permissions.length > 0) {
                            for (_f = 0, permissions_6 = permissions; _f < permissions_6.length; _f++) {
                                p = permissions_6[_f];
                                if (matchPermission(ctx.request.urlParts, p)) {
                                    return [2 /*return*/, true];
                                }
                            }
                        }
                        return [3 /*break*/, 17];
                    case 15:
                        if (!this.config.migration.config.teamPermissionEnabled) return [3 /*break*/, 17];
                        return [4 /*yield*/, db(this.UP_Table)
                                .join(db(this.P_Table).where(this.P_IsDeleted, false).as(this.P_Table), this.P_Id, this.TP_PermissionId)
                                .whereIn(this.TP_TeamId, teams)
                                .whereNull(this.TP_RelatedName)
                                .whereNull(this.TP_RelatedId)
                                .where(this.TP_IsDeleted, false)
                                .select(this.P_Path).then(function (p) { return p && p.map(function (i) { return i[_this.P_PathFieldName]; }); }).catch(console.error)];
                    case 16:
                        permissions = _h.sent();
                        if (ctx.req && ctx.req.session) {
                            ctx.req.session.fastapi_ap_permissions = (__spreadArray(__spreadArray([], (ctx.req.session.fastapi_ap_permissions || []), true), (permissions || []), true)).filter(function (x, i, a) { return a.indexOf(x) === i; });
                            ctx.req.session.fastapi_ap_permissions_d = new Date();
                        }
                        if (permissions && permissions.length > 0) {
                            for (_g = 0, permissions_7 = permissions; _g < permissions_7.length; _g++) {
                                p = permissions_7[_g];
                                if (matchPermission(ctx.request.urlParts, p)) {
                                    return [2 /*return*/, true];
                                }
                            }
                        }
                        _h.label = 17;
                    case 17: return [2 /*return*/, false];
                }
            });
        });
    };
    return PermissionController;
}());
exports.PermissionController = PermissionController;
//# sourceMappingURL=index.js.map