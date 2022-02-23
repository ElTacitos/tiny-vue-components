import { PropType } from "vue";
import { IColor, IStyle } from "../interfaces";
declare const _default: {
    emits: string[];
    name: string;
    props: {
        color: {
            default: string;
            type: String | PropType<IColor>;
        };
        handleColor: {
            default: string;
            type: String | PropType<IColor>;
        };
        width: {
            default: string;
            type: StringConstructor;
        };
        value: {
            default: boolean;
            type: BooleanConstructor;
        };
    };
    setup(props: any, context: any): {
        color: import("vue").ComputedRef<string>;
        currentX: import("vue").ComputedRef<number>;
        handleColor: import("vue").ComputedRef<string>;
        onClick: () => void;
        style: import("vue").ComputedRef<IStyle>;
    };
};
export default _default;
