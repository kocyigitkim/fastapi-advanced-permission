import { Permission } from '../Permission';
import { PermissionParameter } from '../PermissionParameter';
import { PermissionProperty } from '../PermissionProperty';
export declare class PermissionBuilder implements Permission {
    private properties;
    getProperties(): PermissionProperty[];
    add(name: string, value: string): void;
    addParameter(name: PermissionParameter, value: string): void;
    getParameter(parameter: PermissionParameter): PermissionProperty;
    remove(name: string): void;
    clear(): void;
}
//# sourceMappingURL=PermissionBuilder.d.ts.map