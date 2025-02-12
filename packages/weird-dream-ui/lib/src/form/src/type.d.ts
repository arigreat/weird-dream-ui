export declare const formLabelPositionType: string[];
export declare const formProps: {
    label: {
        type: StringConstructor;
    };
    labelPosition: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
};
