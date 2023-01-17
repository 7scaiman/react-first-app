import { login } from "./stateLogin";

const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_LIKE_POST = 'UPDATE_LIKE_POST'

 const ProfilePageReducer =  (state,action) => {
    if(action.type === ADD_POST){
        let NewId = state.posts[state.posts.length-1].id + 1;
        let newPost = {
            id: NewId,
            post: state.newPostText,
            likecount: 0,
            nickname: login[0].nickname,
            img: login[0].logo
        }
        state.posts.push(newPost)
      
    }
    else if(action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
    
    }
    else if(action.type === UPDATE_LIKE_POST){
        state.posts[action.id-1].likecount = action.like + 1;
    
    }
    return state;
}
export default ProfilePageReducer
