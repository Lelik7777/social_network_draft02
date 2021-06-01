import {v1} from 'uuid';

export const ADD_POST = 'ADD-POST';
export const ON_CHANGE_TEXT = 'ON-CHANGE-TEXT';
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
//as variant  ActionType
// export type ActionType ={
//     type: 'ADD-POST' | 'ON-CHANGE-TEXT';
//     textNew?:string;
// }
export type ActionType = AddPostType | OnChangeTextType;

type AddPostType = {
    type: typeof ADD_POST;
}
type OnChangeTextType = {
    type: typeof ON_CHANGE_TEXT;
    textNew: string;
}

export type StoreType = {
    _state: StateType;
    subscribe: (f: (s: StoreType) => void) => void;
    _rerender: (s: StoreType) => void;
    getState: () => StateType;
    _onChange: (s: string) => void;
    dispatch: (action: ActionType) => void;
}
//export type StoreType = typeof store;
export const store:StoreType = {
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
    _rerender() {
    },
    getState() {
        return this._state
    },
    subscribe(f) {
        this._rerender = f;
    },

    _onChange(s: string) {
        this._state.profilePage.newPostText = s;
        this._rerender(this);
    },
 /*   dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case ON_CHANGE_TEXT:
                this._onChange(action.textNew)
                break;
        }
    }*/
    dispatch(a){
        switch (a.type) {
            case ADD_POST:
                if (this._state.profilePage.newPostText.trim()) {
                    let newPost = {
                        id: v1(),
                        title: this._state.profilePage.newPostText.trim(),
                        like: Math.floor(Math.random() * 40 + 1)
                    };
                    this._state.profilePage.posts.unshift(newPost);
                    this._state.profilePage.newPostText = '';
                    this._rerender(this);
                }
                break;
            case ON_CHANGE_TEXT:
                if(a.textNew)
                this._onChange(a.textNew);
        }
    }
};
export const createAddPostAction = ():AddPostType => ({type: ADD_POST});
export const createOnChangeTextAction = (s: string) => ({type: ON_CHANGE_TEXT, textNew: s});