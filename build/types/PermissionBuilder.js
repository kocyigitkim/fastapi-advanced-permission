"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionBuilder = void 0;
var PermissionProperty_1 = require("../PermissionProperty");
var PermissionBuilder = /** @class */ (function () {
    function PermissionBuilder() {
        this.properties = [];
    }
    PermissionBuilder.prototype.getProperties = function () {
        return this.properties;
    };
    PermissionBuilder.prototype.add = function (name, value) {
        this.properties.push(new PermissionProperty_1.PermissionProperty(name, value));
    };
    PermissionBuilder.prototype.addParameter = function (name, value) {
        this.add(name, value);
    };
    PermissionBuilder.prototype.getParameter = function (parameter) {
        var item = this.properties.filter(function (p) { return p.name == parameter; })[0];
        if (!item) {
            this.addParameter(parameter, null);
            return this.getParameter(parameter);
        }
        return item;
    };
    PermissionBuilder.prototype.remove = function (name) {
        this.properties = this.properties.filter(function (p) { return p.name !== name; });
    };
    PermissionBuilder.prototype.clear = function () {
        this.properties = [];
    };
    return PermissionBuilder;
}());
exports.PermissionBuilder = PermissionBuilder;
//# sourceMappingURL=PermissionBuilder.js.map