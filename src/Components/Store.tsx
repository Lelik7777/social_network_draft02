import {v1} from 'uuid';

const textPost = 'Bolek and Lolek are two Polish cartoon characters from the children\'s TV animated comedy series by the same title.[1] They were partially created by Alfred Ledwig before being developed by Władysław Nehrebecki and Leszek Lorek. The series is about two twin brothers and their fun (and sometimes silly) adventures which often involve spending a lot of time outdoors.'

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
    type: 'ADD-POST';
}
export type OnChangeTextType = {
    type: 'ON-CHANGE-TEXT';
    textNew: string;
}
export type StoreType = {
    _state: StateType;
    _addPost: () => void;
    subscribe: (f: (s: StoreType) => void) => void;
    _rerender: (s: StoreType) => void;
    getState: () => StateType;
    _onChange: (s: string) => void;
    dispatch: (action: ActionType) => void;
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), title: textPost, like: 24},
                {id: v1(), title: textPost, like: 34},
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
    _addPost() {
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

    },
    _onChange(s: string) {
        this._state.profilePage.newPostText = s;
        this._rerender(this);
    },
    dispatch(action) {
        if (action.type == 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'ON-CHANGE-TEXT') {
            this._onChange(action.textNew);
        }
    }
};
