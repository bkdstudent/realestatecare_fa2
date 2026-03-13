import { createApp } from 'vue'
//components
import App from './App.vue'
import router from '@/router';

//vuetify
import 'vuetify/styles'
import './style.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icons...
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg' //icons


const vuetify = createVuetify({
        components, directives,
        icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
        theme: {
            defaultTheme: 'recTheme',
            themes: {
                recTheme: {
                    dark: false,
                    colors: {
                        primary: '#00AAA2', // turkoois
                        background: '#F5F7F9', //pagina achtergrond
                        surface: '#FFFFFF', //kaarten, app-bar, sheets, dialogen
                        secondary: '#1E292F'
                    }
                }
            }
        }
    }
)


createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
