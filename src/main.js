import { setTimeout } from 'core-js';
import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment')
                // console.log(context)
            }, 2000);
        },
        increase(context, payload) {
            console.log(context)
            context.commit('increase', payload)
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizeCounter(_, getters) {
            const fanalCounter = getters.finalCounter;
            if (fanalCounter < 0) {
                return 0;
            } if (fanalCounter > 100) {
                return 100;
            }
            return fanalCounter;
        }
    }

})

const app = createApp(App);

app.use(store);

app.mount('#app');
