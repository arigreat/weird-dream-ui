export declare const slidebarType: string[];
export declare const slidebarFill: string[];
export declare const slidebarColor: string[];
export declare const slidebarSize: string[];
export declare const slidebarDirection: string[];
export declare const slidebarProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    fill: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    color: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    direction: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    min: {
        type: StringConstructor;
        default: string;
    };
    max: {
        type: StringConstructor;
        default: string;
    };
    step: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
    };
};
