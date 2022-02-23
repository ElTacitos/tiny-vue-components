import { App, Plugin } from 'vue';
import Toggle from './components/Toggle.vue';

// The Install function used by Vue to register the plugin
export const TogglePlugin: Plugin = {
    install(app: App) {
        // register Headline as a global component, so you can use it wherever you want in your app
        app.component('Toggle', Toggle)
    }
}
