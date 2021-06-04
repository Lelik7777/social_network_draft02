import {v1} from 'uuid';

export const ADD_POST = 'ADD-POST';
export const ON_CHANGE_TEXT = 'ON-CHANGE-TEXT';
const TEXT_POST = 'Bolek and Lolek are two Polish cartoon characters from the children\'s TV animated comedy series by the same title.[1] They were partially created by Alfred Ledwig before being developed by Władysław Nehrebecki and Leszek Lorek. The series is about two twin brothers and their fun (and sometimes silly) adventures which often involve spending a lot of time outdoors.'

export type ActionType = AddPostType | OnChangeTextType;
export type AddPostType = {
    type: typeof ADD_POST;
}
export type OnChangeTextType = {
    type: typeof ON_CHANGE_TEXT;
    newText: string;
}
export type PostType = {
    id: string;
    title: string;
    like: number;
}
export type ProfilePageType = {
    posts: PostType[],
    newPostText: string;
}
const initialState: ProfilePageType = {
    posts: [
        {id: v1(), title: TEXT_POST, like: 24},
        {id: v1(), title: TEXT_POST, like: 34},
    ],
    newPostText: '',
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            console.log(typeof ADD_POST);
            if (state.newPostText.trim()) {
                let newPost = {
                    id: v1(),
                    title: state.newPostText.trim(),
                    like: Math.floor(Math.random() * 40 + 1)
                };
                state.posts.unshift(newPost);
                state.newPostText = '';
            }
            return state;
        case ON_CHANGE_TEXT:
            if (action.newText) {
                state.newPostText = action.newText;
            }
            return state;
        default:
            return state;
    }
}
export default profileReducer;

export const createAddPostAction = (): AddPostType => ({type: ADD_POST});
export const createOnChangeTextAction = (s: string): OnChangeTextType => ({type: ON_CHANGE_TEXT, newText: s});
