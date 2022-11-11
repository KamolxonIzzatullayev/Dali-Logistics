import Cookie from 'js-cookie'
export const state = () => ({
    countryList: {},
    senderCitiesList: {},
    senderRegionsList: {},
    receiverCitiesList: {},
    receiverRegionsList: {},
    conditionList: {},
    methodList: {},
    colliList: {}
})
export const getters = {
    getCountryList(state) { return state.countryList },
    getSenderCitiesList(state) { return state.senderCitiesList },
    getSenderRegionsList(state) { return state.senderRegionsList },
    getConditionList(state) { return state.conditionList },
    getReceiverCitiesList(state) { return state.receiverCitiesList },
    getReceiverRegionsList(state) { return state.receiverRegionsList },
    getMethodList(state) { return state.methodList },
    getColliList(state) { return state.colliList },

}
export const mutations = {
    SET_COUNTRY_LIST(state, data) {
        state.countryList = data;
    },
    SET_SENDER_CITIES_LIST(state, data) {
        state.senderCitiesList = data;
    },
    SET_SENDER_REGIONS_LIST(state, data) {
        state.senderRegionsList = data;
    },
    SET_CONDITION_LIST(state, data) {
        state.conditionList = data;
    },
    SET_RECEIVER_CITIES_LIST(state, data) {
        state.receiverCitiesList = data;
    },
    SET_RECEIVER_REGIONS_LIST(state, data) {
        state.receiverRegionsList = data;
    },
    SET_METHOD_LIST(state, data) {
        state.methodList = data;
    },
    SET_COLLI_LIST(state, data) {
        state.colliList = data;
    },
}
export const actions = {
    async getCountryList({ commit }) {
        try {
            this.$axios.get("/dictionary/country")
                .then((result) => {
                    commit('SET_COUNTRY_LIST', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },
    async getSenderCitiesList({ commit }, payload) {
        try {
            this.$axios.get(`/dictionary/city/${payload}`)
                .then((result) => {
                    commit('SET_SENDER_CITIES_LIST', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },
    async getSenderRegionsList({ commit }, payload) {
        try {
            this.$axios.get(`/dictionary/region/${payload}`)
                .then((result) => {
                    commit('SET_SENDER_REGIONS_LIST', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },
    async getConditionList({ commit }) {
        try {
            this.$axios.get(`/dictionary/condition`)
                .then((result) => {
                    commit('SET_CONDITION_LIST', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },
    async getReceiverCitiesList({ commit }, payload) {
        try {
            this.$axios.get(`/dictionary/city/${payload}`)
                .then((result) => {
                    commit('SET_RECEIVER_CITIES_LIST', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },
    async getReceiverRegionsList({ commit }, payload) {
        try {
            this.$axios.get(`/dictionary/region/${payload}`)
                .then((result) => {
                    commit('SET_RECEIVER_REGIONS_LIST', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },
    async getMethodList({ commit }) {
        try {
            this.$axios.get(`/dictionary/delivery`)
                .then((result) => {
                    commit('SET_METHOD_LIST', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },

    async getColliList({ commit }) {
        try {
            this.$axios.get(`/dictionary/colli`)
                .then((result) => {
                    commit('SET_COLLI_LIST', result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log(error);
        }
    },

    async sendApplication(_, payload) {
        try {
            const token = Cookie.get('token')
            const headers = {
                "Authorization": `Bearer ${token}`,
            }
            console.log(payload);
            if (token) {
                this.$axios.post(`/application`, payload, { headers })
                    .then((result) => {
                        console.log(result);
                    })
                    .catch((err) => {
                        console.log(err);
                    });

            } else {
                this.$axios.post(`/application`, payload)
                    .then((result) => {
                        console.log(result);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

        } catch (error) {
            console.log(error);
        }
    }

}