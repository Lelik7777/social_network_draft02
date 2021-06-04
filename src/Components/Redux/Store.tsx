/*
import {v1} from 'uuid';
import profileReducer, {ADD_POST, ON_CHANGE_TEXT} from './profileReducer';


const TEXT_POST = 'Bolek and Lolek are two Polish cartoon characters from the children\'s TV animated comedy series by the same title.[1] They were partially created by Alfred Ledwig before being developed by Władysław Nehrebecki and Leszek Lorek. The series is about two twin brothers and their fun (and sometimes silly) adventures which often involve spending a lot of time outdoors.'

export type PostType = {
    id: string;
    title: string;
    like: number;
}
export type ProfilePageType = {
    posts: PostType[];
    newPostText: string;
}
export type DialogType = {
    id: string;
    name: string;
}
export type MessageType = {
    id: string;
    title: string;
}
export type DialogsPageType = {
    dialog: DialogType[],
    message: MessageType[],
}
export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
}
export type ActionType = AddPostType | OnChangeTextType;

export type AddPostType = {
    type: typeof ADD_POST;
}
export type OnChangeTextType = {
    type: typeof ON_CHANGE_TEXT;
    textNew: string;
}

export type StoreType = {
    _state: StateType;
    subscribe: (f: (s: StateType) => void) => void;
    _rerender: (s: StateType) => void;
    getState: () => StateType;
    dispatch: (action: ActionType) => void;
}
//export type StoreType = typeof store;
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), title: TEXT_POST, like: 24},
                {id: v1(), title: TEXT_POST, like: 34},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialog: [],
            message: []
        },
    },
    _rerender(s: StateType) {
    },
    getState() {
        return this._state
    },
    subscribe(f: (s: StateType) => void) {
        this._rerender = f;
    },
    dispatch(a: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, a);
        this._rerender(this._state);
    },
}*/
//заглушка
const store={};
export default  store;