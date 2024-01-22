import { VueQueryPlugin } from '@tanstack/vue-query'

import '@/store/store'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// store.startLoadingPokemons(); 

const app = createApp(App);

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                gcTime: 1000 * 120, // 2min
                refetchOnReconnect: 'always'
            }
        }
    }
});

// app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')
