const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
                {id: 1, message: 'Hi'},
                {id: 1, message: 'Yo!'},
                {id: 1, message: 'Yo!'},
                {id: 1, message: 'Yo!'},
                {id: 1, message: 'Yo!'},
            ],
        },
        sitebar: {
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostChange,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostChange = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostChange = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store;

window.store = store;