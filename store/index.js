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
    adminMenu: [
        {
            id: 0,
            name: "My account",
            path: "account",
            icon: "admin-account"
        },
        {
            id: 1,
            name: "Operators",
            path: "operators",
            icon: "admin-operator"
        },
        {
            id: 2,
            name: "Logisticians",
            path: "logisticians",
            icon: "admin-logistician"
        },
        {
            id: 3,
            name: "Sales managers",
            path: "sale-managers",
            icon: "admin-sale-manager"
        },
        {
            id: 4,
            name: "Consultants",
            path: "consultants",
            icon: "admin-consultant"
        },
        {
            id: 5,
            name: "Content managers",
            path: "content-managers",
            icon: "admin-content-manager"
        },
        {
            id: 6,
            name: "Forwarders",
            path: "forwarders",
            icon: "admin-forwarder"
        },
        {
            id: 7,
            name: "Warehouse manager",
            path: "warehouse-manager",
            icon: "admin-warehouse-manager"
        },
        {
            id: 8,
            name: "Agents",
            path: "agents",
            icon: "admin-agent"
        },
        {
            id: 9,
            name: "Financiers",
            path: "financiers",
            icon: "admin-financiers"
        },
        {
            id: 10,
            name: "Brokers",
            path: "brokers",
            icon: "admin-brokers"
        },
        {
            id: 11,
            name: "Declaranty",
            path: "declaranty",
            icon: "admin-declaranty"
        },
        {
            id: 12,
            name: "Web managers",
            path: "web-managers",
            icon: "admin-web-manager"
        },
        {
            id: 13,
            name: "Users",
            path: "users",
            icon: "admin-user"
        },
        {
            id: 14,
            name: "Applications",
            path: "applications",
            icon: "admin-application"
        },
        {
            id: 15,
            name: "Statistics",
            path: "statistics",
            icon: "admin-statistic"
        },
        {
            id: 16,
            name: "Agreements",
            path: "agreements",
            icon: "admin-agreement"
        },
        {
            id: 17,
            name: "Reference books",
            path: "reference-books",
            icon: "admin-reference-book"
        },
        {
            id: 18,
            name: "Online chat",
            path: "online-chat",
            icon: "admin-online-chat"
        },
        {
            id: 19,
            name: "Contract Templates",
            path: "contract-templates",
            icon: "admin-contract-template"
        },
        {
            id: 20,
            name: "Support manager",
            path: "support-manager",
            icon: "admin-support-manager"
        },
    ]
})
export const getters = {
    getSelectedTabId(state) { return state.selectedTabId },
    getTabHeaders(state) { return state.tabHeaders },
    getAdminMenu(state) { return state.adminMenu },
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
export const actions = {

}