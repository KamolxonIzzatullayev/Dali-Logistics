export const state = () => ({
    token: null,
    user: {},
})
export const getters = {
    getToken(state) { return state.token },
    getUser(state) { return state.user },
    authenticated() { return localStorage.getItem('token') && localStorage.getItem('user') }
}
export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    SET_USER(state, user) {
        state.user = user
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
        localStorage.setItem('token', data.access_token);
        commit('SET_USER', data.user)
        localStorage.setItem('user', data.user);
    }
}