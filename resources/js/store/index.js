import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

Vue.use(Vuex)

const ls = new SecureLS({ isCompression: false });

// Modules
import auth from './modules/auth'


export default new Store({
    plugins: [
        createPersistedState({
            storage: {
                getItem: (key) => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: (key) => ls.remove(key),
            },
        }),
    ],
    modules: {
        auth
    }
})