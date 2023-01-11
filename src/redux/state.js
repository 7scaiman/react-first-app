

export let login = [
    { id: 1, nickname: "Pudgekiller228", password: "123q", logo: "https://avatars.akamai.steamstatic.com/479102385e9fd0d34ddddda4e0434840a794f7e1_full.jpg" },
    { id: 2, nickname: "Pudgero", password: "123q", logo: "https://i1.sndcdn.com/avatars-000120278070-velp67-t240x240.jpg" },
    { id: 3, nickname: "fires_bacon", password: "123q", logo: "https://www.meme-arsenal.com/memes/a729b6d72ebe68f8ced63cfb93ffe164.jpg" },
    { id: 4, nickname: "Anti hooker", password: "123q", logo: "https://cdn.oneesports.gg/cdn-data/2021/09/Anti-Mage_Guilt-of-the-Survivor-1024x576.jpg" },
    { id: 5, nickname: "talant", password: "123q", logo: "https://i1.sndcdn.com/artworks-JUwkm3SiCcPKGYZr-OUzMmQ-t500x500.jpg" },
    { id: 6, nickname: "Arthas", password: "123q", logo: "https://static4.tgstat.ru/channels/_0/e1/e148986e6924746d6ffc0e0cda229eeb.jpg" }
]





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
                { id: 1, message: 'You dont even try', date: '20/09/2022', time: '17:40', },
                { id: 2, message: '1000-7', date: '03/09/2022', time: '13:33', },
                { id: 3, message: 'Mid or feed', date: '23/07/2022', time: '12:00', },
                { id: 4, message: 'AAAAAAAAA!', date: '01/01/2022', time: '00:10', },
                { id: 5, message: 'MmMm Divine', date: '12/09/2022', time: '18:40', },
                { id: 6, message: 'PITIFUL ALLIES!!', date: '01/09/2022', time: '22:40', }]
        }
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
        if(action.type === "AddPost"){
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
        }
        else if(action.type === "UpdateNewPostText"){
            this._state.profilePage.newPostText = action.newText;
            this.rerender(this._state)
        }
        else if(action.type === "UpdateNewLikePost"){
            this._state.profilePage.posts[action.id-1].likecount = action.like + 1;
            this.rerender(this._state);
        }
        else{
           alert("ERROR dispatch")
        }

    }
}



export default store;

window.store = store