export declare const inputType: string[];
export declare const inputProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
};
