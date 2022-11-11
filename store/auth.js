import Cookie from 'js-cookie'
export const state = () => ({
    token: null,
    user: {},
    role: null,
})
export const getters = {
    getToken(state) { return state.token },
    getUser(state) { return state.user },
    getRole(state) { return state.role },
    authenticated() { return Cookie.get('token') && Cookie.get('user') }
}
export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    SET_USER(state, user) {
        state.user = user
    },
    SET_ROLE(state, role) {
        state.role = role
    }
}
export const actions = {
    async login({ dispatch }, credentials) {
        try {
            this.$axios.post("/login", credentials)
                .then((result) => {
                    dispatch('attempt', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },

    async attempt({ commit }, data) {
        commit('SET_TOKEN', data.access_token);
        Cookie.set('token', data.access_token)
        commit('SET_USER', data.user)
        Cookie.set('user', data.user)
        commit('SET_ROLE', data.role)
        Cookie.set('role', data.role)
    }
}