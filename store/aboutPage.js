export const state = () => ({
    aboutPageData: {}
})
export const getters = {
    getAboutPageData(state) { return state.aboutPageData },
}
export const mutations = {
    SET_ABOUT_PAGE_DATA(state, data) {
        state.aboutPageData = data;
    },
}
export const actions = {
    async getAboutPageData({ commit }) {
        try {
            this.$axios.get("/about")
                .then((result) => {
                    commit('SET_ABOUT_PAGE_DATA', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },
}