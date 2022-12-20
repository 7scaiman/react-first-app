import React from "react";
import Post from "./Post/Post";
import css from "./Posts.module.css"


function Posts(props){
    // let postData =[
    //     {id:1,post: 'Mid or feed',likecount:20,nickname:'Pudgekiller228',img:'https://avatars.akamai.steamstatic.com/479102385e9fd0d34ddddda4e0434840a794f7e1_full.jpg'},
    //     {id:2,post: 'Dendi pudge',likecount:10,nickname:'Pudgero',img:'https://i1.sndcdn.com/avatars-000120278070-velp67-t240x240.jpg'},
    //     {id:3,post: 'Pudge number one',likecount:7,nickname:'fires_bacon',img:'https://www.meme-arsenal.com/memes/a729b6d72ebe68f8ced63cfb93ffe164.jpg'} 
    // ]  тепер цей обьект в index.js передається через props
    let postElement = props.postData.map( (el) => <Post nickname={el.nickname} post={el.post} img={el.img} likecount={el.likecount}/> )
    return(
        <div className={css.Posts}>
            
            <div>
                <h3>New post</h3>
                <textarea></textarea>
                <div>
                <button>add post</button>
                </div>
            </div>
        
            <div>
          {postElement}
            </div>
        </div>
    );
}
export default Posts;