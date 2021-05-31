import {v1} from 'uuid';

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
export type StoreType = {
    _state: StateType;
    addPost: () => void;
    subscribe: (f: (s: StoreType) => void) => void;
    _rerender: (s: StoreType) => void;
    getState: () => StateType;
    onChange:(s:string)=>void;
}

const textPost = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio dolore ea exercitationem harum, magni minima nam, non obcaecati officiis praesentium, quisquam quo soluta suscipit veniam? Ducimus esse quos repudiandae.'
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), title: textPost, like: 24},
                {id: v1(), title: textPost, like: 34},
                {id: v1(), title: textPost, like: 12},
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
    addPost() {
        let newPost = {id: v1(), title: this._state.profilePage.newPostText, like: Math.floor(Math.random() * 40 + 1)};
        this._state.profilePage.posts.unshift(newPost);
        this._rerender(this);
    },
    onChange(s:string){
        this._state.profilePage.newPostText=s;
        this._rerender(this);
    }
};
