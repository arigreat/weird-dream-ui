import { ExtractPropTypes } from 'vue';
export declare const SwitchColor: string[];
export declare const SwitchSize: string[];
export declare const switchProps: {
    color: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type SwitchProps = ExtractPropTypes<typeof switchProps>;
export declare const SwitchEmits: {
    click: (event: MouseEvent) => MouseEvent;
};
