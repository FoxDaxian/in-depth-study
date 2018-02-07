import Vue from 'vue'
import Vuex from '../../vuex/src/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: 'fox'
    },
    mutations: {
        changeName(state, Payload) {
            state.name = Payload.name
        }
    }
})