
import DialogPageReducer from "./DialogPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import SideBarReducer from "./SideBarReducer";
import { login } from "./stateLogin";


export const addPostAction = () => {
    return {
        type: 'ADD-POST'
    }
}
export const UpdateNewPostTextAction = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText:text
    }
}
export const UpdateNewLikePost = (like,id) => {
    return {
        type: 'UPDATE_LIKE_POST',
        like:like,
        id:id
    }
}
export const AddMessageAction = () =>{
    return {
        type: "ADD_MESSAGE"
    }
}
export const UpdateNewMSTextAction = (text) => {
    return {
        type: 'UPDATE_NEW_MS_TEXT',
        newText:text
    }
}


let store = {
    rerender(){console.log("rerender")},
    _state:{
        profilePage: {
            posts: [
                { id: 1, post: 'Mid or feed', likecount: 20, nickname: login[0].nickname, img: login[0].logo },
                { id: 2, post: 'Dendi pudge', likecount: 10, nickname: login[1].nickname, img: login[1].logo },
                { id: 3, post: 'Pudge number one', likecount: 7, nickname: login[2].nickname, img: login[2].logo },
                { id: 4, post: 'radic 24min', likecount: 1000, nickname: login[4].nickname, img: login[4].logo },
                { id: 5, post: 'i canceled tp ', likecount: 1, nickname: login[3].nickname, img: login[3].logo },
                { id: 6, post: 'AAAAAAAAAAAAA!', likecount: 22, nickname: login[5].nickname, img: login[5].logo },
                
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: login[0].nickname, logo: login[0].logo },
                { id: 2, name: login[1].nickname, logo: login[1].logo },
                { id: 3, name: login[2].nickname, logo: login[2].logo },
                { id: 4, name: login[3].nickname, logo: login[3].logo },
                { id: 5, name: login[4].nickname, logo: login[4].logo },
                { id: 6, name: login[5].nickname, logo: login[5].logo }
            ],
            messages: [
                { id: 1, message: 'You dont even try', date: '20/09/2022', time: '17:40', nickname: login[3].nickname,logo: login[3].logo,IdOwner:login[3].id},
                { id: 2, message: '1000-7', date: '03/09/2022', time: '13:33',nickname: login[0].nickname,logo: login[0].logo,IdOwner:login[0].id },
                { id: 3, message: 'Mid or feed', date: '23/07/2022', time: '12:00', nickname: login[2].nickname,logo: login[2].logo,IdOwner:login[2].id},
                { id: 4, message: 'AAAAAAAAA!', date: '01/01/2022', time: '00:10', nickname: login[4].nickname,logo: login[4].logo,IdOwner:login[4].id},
                { id: 5, message: 'MmMm Divine', date: '12/09/2022', time: '18:40', nickname: login[1].nickname,logo: login[1].logo,IdOwner:login[1].id},
                { id: 6, message: 'PITIFUL ALLIES!!', date: '01/09/2022', time: '22:40', nickname: login[5].nickname,logo: login[5].logo,IdOwner:login[5].id}],

                NewMessageText: ""
        },
        sidebar: {}
    },
    GetState(){
        return this._state;
    },  
    AddPost(){
      
        let NewId = this._state.profilePage.posts[this._state.profilePage.posts.length-1].id + 1;
        let newPost = {
            id: NewId,
            post: this._state.profilePage.newPostText,
            likecount: 0,
            nickname: login[0].nickname,
            img: login[0].logo
        }
        this._state.profilePage.posts.push(newPost)
        this.rerender(this._state)
    },
    UpdateNewPostText(newText){  
        this._state.profilePage.newPostText = newText;
        this.rerender(this._state)
        
    },
    UpdateNewLikePost(like, id){
        this.profilePage.posts[id-1].likecount = like + 1;
        this.rerender(this._state);
    },
    subscribe(observer){
        this.rerender=observer; /// observer
    },
    dispatch(action){

    this._state.profilePage = ProfilePageReducer(this._state.profilePage,action)
    this._state.dialogsPage = DialogPageReducer(this._state.dialogsPage,action)
    this._state.sidebar = SideBarReducer(this._state.sidebar,action)
         
    this.rerender(this._state)
    }
}
export default store;

window.store = store