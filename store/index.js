export const state = () => ({
    selectedTabId: 1,
    tabHeaders: [
        {
            id: 1,
            title: "Авиаперевозки",
            bgImage: "",
        },
        {
            id: 2,
            title: "Автоперевозки",
            bgImage: "",
        },
        {
            id: 3,
            title: "Железнодорожные перевозки",
            bgImage: "",
        },
        {
            id: 4,
            title: "Морские перевозки",
            bgImage: "",
        },
        {
            id: 5,
            title: "Складские услуги",
            bgImage: "",
        },
        {
            id: 6,
            title: "Экспедирование",
            bgImage: "",
        },
        {
            id: 7,
            title: "Оформление таможенных деклараций",
            bgImage: "",
        },
        {
            id: 8,
            title: "Перевозка опасных грузов",
            bgImage: "",
        },
    ],
})
export const getters = {
    getSelectedTabId(state) { return state.selectedTabId },
    getTabHeaders(state) { return state.tabHeaders }
}
export const mutations = {
    SET_SELECTED_TAB_ID(state, payload) {
        state.selectedTabId = payload;
    }
}
export const actions = () => {

}