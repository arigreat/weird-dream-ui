export declare const formitemLabelPositionType: string[];
export declare const formitemProps: {
    label: {
        type: StringConstructor;
    };
    labelPosition: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
};
