import React from "react";
import css from "./Post.module.css"

function  Post(props){
    return(
        
        <div className={css.item}>
            <img src={props.img} alt="" />
            <div className="">
            <div className={css.nickname}>{props.nickname}</div>
            <div>{props.post}</div>
            <div><input type="image" src="https://phonoteka.org/uploads/posts/2021-05/thumbs/1620256442_29-phonoteka_org-p-palets-vverkh-fon-32.jpg"/>{props.likecount}</div>
            </div>
        </div>
    );

}
function counts(count){

}
export default Post;