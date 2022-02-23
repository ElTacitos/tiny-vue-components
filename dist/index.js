'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = ({
    emits: ['change', 'update:value'],
    name: "Toggle",
    props: {
        color: {
            "default": "#666666",
            type: Object
        },
        handleColor: {
            "default": "#ffffff",
            type: Object
        },
        width: {
            "default": "auto",
            type: String
        },
        value: {
            "default": false,
            type: Boolean
        }
    },
    setup: function (props, context) {
        var OFF_X = 5;
        var ON_X = 95;
        function onClick() {
            context.emit('update:value', !props.value);
            context.emit('change', !props.value);
            console.log("click", props.value);
        }
        var color = vue.computed(function () {
            if (typeof props.color === "string") {
                return props.color;
            }
            return props.value ? props.color.on : props.color.off;
        });
        var currentX = vue.computed(function () {
            return props.value ? ON_X : OFF_X;
        });
        var handleColor = vue.computed(function () {
            if (typeof props.handleColor === "string") {
                return props.handleColor;
            }
            return props.value ? props.handleColor.on : props.handleColor.off;
        });
        var style = vue.computed(function () {
            return { width: props.width };
        });
        return { color: color, currentX: currentX, handleColor: handleColor, onClick: onClick, style: style };
    }
});

const _hoisted_1 = ["fill"];
const _hoisted_2 = ["fill", "x"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("svg", {
    style: vue.normalizeStyle($setup.style),
    viewBox: "0 0 190 100",
    onClick: _cache[0] || (_cache[0] = (...args) => ($setup.onClick && $setup.onClick(...args)))
  }, [
    vue.createElementVNode("rect", {
      fill: $setup.color,
      x: "0",
      width: "190",
      height: "100",
      rx: "50"
    }, null, 8 /* PROPS */, _hoisted_1),
    vue.createElementVNode("rect", {
      fill: $setup.handleColor,
      x: $setup.currentX,
      y: "5",
      width: "90",
      height: "90",
      rx: "50"
    }, null, 8 /* PROPS */, _hoisted_2)
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "src/components/Toggle.vue";

// The Install function used by Vue to register the plugin
var TogglePlugin = {
    install: function (app) {
        // register Headline as a global component, so you can use it wherever you want in your app
        app.component('Toggle', script);
    }
};

exports.Toggle = script;
exports.TogglePlugin = TogglePlugin;
//# sourceMappingURL=index.js.map
