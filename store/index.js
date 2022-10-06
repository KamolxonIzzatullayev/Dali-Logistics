export const state = () => ({
    selectedTabId: 1,
    tabHeaders: [
        {
            id: 1,
            title: "Авиаперевозки",
            bgImage: "",
            isActive: true,
        },
        {
            id: 2,
            title: "Автоперевозки",
            bgImage: "",
            isActive: false,
        },
        {
            id: 3,
            title: "Железнодорожные перевозки",
            bgImage: "",
            isActive: false,
        },
        {
            id: 4,
            title: "Морские перевозки",
            bgImage: "",
            isActive: false,
        },
        {
            id: 5,
            title: "Складские услуги",
            bgImage: "",
            isActive: false,
        },
        {
            id: 6,
            title: "Экспедирование",
            bgImage: "",
            isActive: false,
        },
        {
            id: 7,
            title: "Оформление таможенных деклараций",
            bgImage: "",
            isActive: false,
        },
        {
            id: 8,
            title: "Перевозка опасных грузов",
            bgImage: "",
            isActive: false,
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