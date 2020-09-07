import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likesCount: '12'},
                {id: '2', message: "It's my first post", likesCount: '22'},
                {id: '3', message: "Blalala", likesCount: '2'},
                {id: '4', message: "Cool", likesCount: '7'},
            ],
            newPostChange: 'it-kamasutra.com',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'Yo!'},
                {id: 5, message: 'Yo!'},
                {id: 6, message: 'Yo!'},
            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: '1', name: 'Andrey'},
                {id: '2', name: 'Sasha'},
                {id: '3', name: 'Masha'},
            ]
        }
    },
    _callSubscriber() {
        console.log()
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

};

export default store;