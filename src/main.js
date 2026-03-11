import { createApp } from 'vue'
//components
import App from './App.vue'

//vuetify
import 'vuetify/styles'
import './style.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
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
                        primary: '#00AAA2',
                        background: '#F5F7F9',
                        surface: '#FFFFFF'
                    }
                }
            }
        }
    }
)


createApp(App)
    .use(vuetify)
    .mount('#app')
