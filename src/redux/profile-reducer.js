const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: '12'},
            {id: '2', message: "It's my first post", likesCount: '22'},
            {id: '3', message: "Blalala", likesCount: '2'},
            {id: '4', message: "Cool", likesCount: '7'},
        ],
        newPostChange: 'it-kamasutra.com',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostChange,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostChange = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostChange = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;