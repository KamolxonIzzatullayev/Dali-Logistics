export const state = () => ({
    selectedTabId: 1,
    tabHeaders: [
        {
            id: 1,
            title: "Авиаперевозки",
            bgImage: "offer-card",
            isActive: true,
            desc: ""
        },
        {
            id: 2,
            title: "Автоперевозки",
            bgImage: "offer-card",
            isActive: false,
            desc: ""
        },
        {
            id: 3,
            title: "Железнодорожные перевозки",
            bgImage: "offer-card",
            isActive: false,
            desc: ""
        },
        {
            id: 4,
            title: "Морские перевозки",
            bgImage: "offer-card",
            isActive: false,
            desc: ""
        },
        {
            id: 5,
            title: "Складские услуги",
            bgImage: "offer-card",
            isActive: false,
            desc: ""
        },
        {
            id: 6,
            title: "Экспедирование",
            bgImage: "offer-card",
            isActive: false,
            desc: ""
        },
        {
            id: 7,
            title: "Оформление таможенных деклараций",
            bgImage: "offer-card",
            isActive: false,
            desc: ""
        },
        {
            id: 8,
            title: "Перевозка опасных грузов",
            bgImage: "offer-card",
            isActive: false,
            desc: ""
        },
    ],
})
export const getters = {
    getSelectedTabId(state) { return state.selectedTabId },
    getTabHeaders(state) { return state.tabHeaders }
}
export const mutations = {
    SET_SELECTED_TAB_ID(state, payload) {
        state.tabHeaders.forEach(element => {
            element.isActive = false;
        });
        state.tabHeaders.forEach(element => {
            if (element.id == payload) {
                element.isActive = true;
            }
        });
        state.selectedTabId = payload;
    }
}
export const actions = () => {

}