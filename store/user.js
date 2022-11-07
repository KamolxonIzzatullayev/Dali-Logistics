export const state = () => ({
    profile: [
        {
            id: 0,
            name: 'user',
            menu: [
                {
                    id: 0,
                    title: 'Home',
                    path: '',
                    status: true
                },
                {
                    id: 1,
                    title: 'My applications',
                    path: 'applications',
                    status: false,
                },
                {
                    id: 2,
                    title: 'My addresses',
                    path: 'addresses',
                    status: false,
                },
                {
                    id: 3,
                    title: 'Directory',
                    path: 'directory',
                    status: false,
                },
                {
                    id: 4,
                    title: 'My addresses',
                    path: 'addresses',
                    status: false,
                },
                {
                    id: 5,
                    title: 'Chat with an operator',
                    path: 'chat-operator',
                    status: false,
                },
                {
                    id: 5,
                    title: 'Settings',
                    path: 'settings',
                    status: false,
                },
            ]
        },
        {
            id: 0,
            name: 'logist',
            menu: [
                {
                    id: 0,
                    title: 'General applications',
                    path: 'general-applications',
                    status: true,
                },
                {
                    id: 1,
                    title: 'My applications',
                    path: 'my-applications',
                    status: false,
                },
                {
                    id: 2,
                    title: 'Directory',
                    path: 'directory',
                    status: false,
                },
                {
                    id: 3,
                    title: 'Chat with an operator',
                    path: 'chat-operator',
                    status: false,
                },
                {
                    id: 4,
                    title: 'Chat with an administrator',
                    path: 'chat-admin',
                    status: false,
                },
            ]
        },
        {
            id: 0,
            name: 'operator',
            menu: [
                {
                    id: 0,
                    title: 'General applications',
                    path: 'general-applications',
                    status: true,
                },
                {
                    id: 1,
                    title: 'My applications',
                    path: 'my-applications',
                    status: false,
                },
                {
                    id: 2,
                    title: 'Directory',
                    path: 'directory',
                    status: false,
                },
                {
                    id: 3,
                    title: 'Chat with an operator',
                    path: 'chat-operator',
                    status: false,
                },
            ]
        }
    ]
})
export const getters = {
    getProfile(state) { return state.profile },
}
export const mutations = {
    SET_PROFILE(state, name, id) {
        state.profile.forEach(element => {
            if (element.name == name) {
                element.menu.forEach(elem => {
                    elem.status = false;
                })
            }
        });
        state.profile.forEach(element => {
            if (element.name == name) {
                element.menu.forEach(elem => {
                    if (elem.id == id) {
                        elem.status = true;
                    }
                })
            }
        });
    }
}
export const actions = {

}