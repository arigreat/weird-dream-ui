export declare const selectDirection: string[];
export declare const selectColor: string[];
export declare const selectProps: {
    id: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    direction: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    color: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
};
