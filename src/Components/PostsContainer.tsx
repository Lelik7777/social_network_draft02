import React, {useContext} from 'react';
import {Posts} from './Posts';
import {createAddPostAction, createOnChangeTextAction} from './Redux/profileReducer';
import StoreContext from '../StoreContext';


type PostsContainerType = {}
export const PostsContainer: React.FC<PostsContainerType> = ({}) => {
    //const store = useContext(StoreContext)

    return <div><StoreContext.Consumer>{
        (store) => {
            const addPostOnClick = () => store.dispatch(createAddPostAction());
            const onChangeTextarea = (e: string) => store.dispatch(createOnChangeTextAction(e));
            return <Posts data={store} onChange={onChangeTextarea} addPost={addPostOnClick}/>
        }
    }
    </StoreContext.Consumer>

    </div>
};
