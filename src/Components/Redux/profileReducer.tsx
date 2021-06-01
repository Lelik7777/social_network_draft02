import {ActionType, AddPostType, OnChangeTextType, ProfilePageType} from './Store';
import {v1} from 'uuid';

export const ADD_POST = 'ADD-POST';
export const ON_CHANGE_TEXT = 'ON-CHANGE-TEXT';
const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
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
            if (action.textNew) {
                state.newPostText = action.textNew;
            }
            return state;
        default:
            return state;
    }
}
export default profileReducer;

export const createAddPostAction = (): AddPostType => ({type: ADD_POST});
export const createOnChangeTextAction = (s: string): OnChangeTextType => ({type: ON_CHANGE_TEXT, textNew: s});
