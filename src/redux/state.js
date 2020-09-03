let rerenderEntireTree = () => {
    console.log()
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostChange,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostChange = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostChange=newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree(observer)
}

export default state;