import api from '@/api'

export default {
    namespaced: true,
    state: {
        user: null,
        token: null
    },
    mutations: {
        SAVE_INFO(state, { user, token }) {
            state.user = user
            state.token = token
        },
        LOGOUT(state) {
            state.user = null
            state.token = null
        }
    },
    getters: {
        user: state => state.user,
        token: state => state.token,
    },
    actions: {
        async login({ commit }, { username, password }) {
            return api.post('/auth/login', { username, password }).then(res => {
                commit('SAVE_INFO', res.data)
            })
        }
    }
}