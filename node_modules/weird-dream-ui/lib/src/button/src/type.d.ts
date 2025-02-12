import { ExtractPropTypes } from 'vue';
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const buttonProps: {
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
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare const ButtonEmits: {
    click: (event: MouseEvent) => MouseEvent;
};
