export declare const JoystickColor: string[];
export declare const JoystickSize: string[];
export declare const joystickProps: {
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
    valueX: {
        type: NumberConstructor;
    };
    valueY: {
        type: NumberConstructor;
    };
};
