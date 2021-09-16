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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionController = exports.PermissionProperty = exports.PermissionParameter = exports.UserRecord = exports.RelatedRecord = exports.PermissionRequest = exports.PermissionContext = exports.TableMapping = exports.PermissionMigrationConfig = exports.PermissionMigration = exports.PermissionControllerConfig = exports.MigrationTables = exports.MigrationTableMapping = exports.MigrationTableDefinition = exports.MigrationColumnDefinition = void 0;
var PermissionContext_1 = require("./PermissionContext");
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
var PermissionParameter_1 = require("./PermissionParameter");
Object.defineProperty(exports, "PermissionParameter", { enumerable: true, get: function () { return PermissionParameter_1.PermissionParameter; } });
var PermissionProperty_1 = require("./PermissionProperty");
Object.defineProperty(exports, "PermissionProperty", { enumerable: true, get: function () { return PermissionProperty_1.PermissionProperty; } });
var PermissionController = /** @class */ (function () {
    function PermissionController(config) {
        this.config = config;
        this.schemas = [];
    }
    PermissionController.prototype.build = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUse;
            var _this = this;
            return __generator(this, function (_a) {
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
                return [2 /*return*/];
            });
        });
    };
    PermissionController.prototype.getAnonymousUser = function () {
        return new PermissionContext_1.UserRecord(null, null, true);
    };
    PermissionController.prototype.use = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var isGranted, user, urlParts, permissionContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isGranted = false;
                        return [4 /*yield*/, this.config.userResolver(req)];
                    case 1:
                        user = _a.sent();
                        if (user == null) {
                            user = this.getAnonymousUser();
                        }
                        urlParts = (req.originalUrl || req.url).split('/');
                        if (!(urlParts.length > 0)) return [3 /*break*/, 3];
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
                                timestamp: new Date().toISOString(),
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PermissionController.prototype.check = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var isGranted;
            return __generator(this, function (_a) {
                isGranted = false;
                return [2 /*return*/, false];
            });
        });
    };
    return PermissionController;
}());
exports.PermissionController = PermissionController;
//# sourceMappingURL=index.js.map