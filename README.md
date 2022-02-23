# @eltacitos/tiny-vue-toggle
[![npm (scoped)](https://img.shields.io/npm/v/@eltacitos/tiny-vue-components?style=for-the-badge)](￼)
[![NPM Downloads](https://img.shields.io/npm/dw/@eltacitos/tiny-vue-components?style=for-the-badge)](￼)
[![NPM Downloads](https://img.shields.io/github/stars/ElTacitos/tiny-vue-components?style=for-the-badge)](￼)

Just a bundles of tiny Vue 3 components with TypeScript.

Currently, containing only a Toggle Switch.

## Install
```
$ npm i @eltacitos/tiny-vue-toggle
```

### Properties
| Name | Type | Default | Description |  
| --- | --- | --- | --- |
| color | [string, object] | '#666666' | Color for the background of the toggle |
| handle-color | [string, object] | '#ffffff' | Color for the handle on the toggle |
| width | string | auto | Set the width of the toggle |
| value | boolean | false | State of the toggle |

### Events
| Name | Description |
| --- | --- |
| change | Triggered whenever state of the component changes. <br> $event = new state |
| update:value | Same as 'change' but is used with v-model:value |
