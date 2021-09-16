"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedPermission = void 0;
var PermissionBuilder_1 = require("./PermissionBuilder");
var PermissionParameter_1 = require("../PermissionParameter");
var RelatedPermission = /** @class */ (function (_super) {
    __extends(RelatedPermission, _super);
    function RelatedPermission(path) {
        var _this = _super.call(this) || this;
        _this.Path = path;
        return _this;
    }
    Object.defineProperty(RelatedPermission.prototype, "Path", {
        get: function () {
            return this.getParameter(PermissionParameter_1.PermissionParameter.Path).value;
        },
        set: function (value) {
            this.getParameter(PermissionParameter_1.PermissionParameter.Path).value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RelatedPermission.prototype, "Record", {
        get: function () {
            return this.getParameter(PermissionParameter_1.PermissionParameter.ById).value;
        },
        set: function (value) {
            this.getParameter(PermissionParameter_1.PermissionParameter.ById).value = value;
        },
        enumerable: false,
        configurable: true
    });
    return RelatedPermission;
}(PermissionBuilder_1.PermissionBuilder));
exports.RelatedPermission = RelatedPermission;
//# sourceMappingURL=RelatedPermission.js.map