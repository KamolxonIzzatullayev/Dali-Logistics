export const state = () => ({
    indexPageData: {}
})
export const getters = {
    getIndexPageData(state) { return state.indexPageData },
}
export const mutations = {
    SET_INDEX_PAGE_DATA(state, data) {
        state.indexPageData = data;
    },
}
export const actions = {
    async getIndexPageData({ commit }) {
        try {
            this.$axios.get("/index")
                .then((result) => {
                    commit('SET_INDEX_PAGE_DATA', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },
}