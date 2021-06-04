import React from 'react';
import {StoreType} from './Redux/store-redux';
import {Posts} from './Posts';
import {createAddPostAction, createOnChangeTextAction} from './Redux/profileReducer';


type PostsContainerType = {
    data: StoreType;
}
export const PostsContainer: React.FC<PostsContainerType> = ({data}) => {

    const addPostOnClick = () => data.dispatch(createAddPostAction());
    const onChangeTextarea = (e: string) => data.dispatch(createOnChangeTextAction(e));
    return <div>
        <Posts data={data} onChange={onChangeTextarea} addPost={addPostOnClick}/>
    </div>
};
