<template>
  <svg :style="style" viewBox="0 0 190 100" @click="onClick">
    <rect :fill="color" x="0" width="190" height="100" rx="50" />
    <rect
        :fill="handleColor"
        :x="currentX"
        y="5"
        width="90"
        height="90"
        rx="50"
    />
  </svg>
</template>

<script lang="ts">
  import {computed, PropType} from "vue";
  import {IColor, IStyle} from "../interfaces";

  export default ({
    emits: ['change', 'update:value'],
    name: "Toggle",
    props: {
      color: {
        default: "#666666",
        type: Object as PropType<IColor>| String,
      },
      handleColor: {
        default: "#ffffff",
        type: Object as PropType<IColor>| String,
      },
      width: {
        default: "auto",
        type: String,
      },
      value: {
        default: false,
        type: Boolean,
      }
    },
    setup(props, context) {
      const OFF_X = 5;
      const ON_X = 95;

      function onClick(): void {
        context.emit('update:value', !props.value)
        context.emit('change', !props.value)
        console.log("click", props.value)
      }

      const color = computed((): string => {
        if (typeof props.color === "string") {
          return props.color;
        }

        return props.value ? props.color.on : props.color.off;
      })

      const currentX = computed((): number => {
        return props.value ? ON_X : OFF_X;
      })

      const handleColor = computed((): string => {
        if (typeof props.handleColor === "string") {
          return props.handleColor;
        }

        return props.value ? props.handleColor.on : props.handleColor.off;
      })

      const style = computed((): IStyle => {
        return { width: props.width };
      })

      return {color, currentX, handleColor, onClick, style};
    }
  })
</script>
