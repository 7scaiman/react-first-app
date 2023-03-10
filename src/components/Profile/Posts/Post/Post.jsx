import React, { useState } from "react";
import { UpdateNewLikePost } from "../../../../redux/state";
import css from "./Post.module.css"

function  Post(props){
    let [likecounter,setlikecounter] = useState(props.likecount)

    return(
        
        <div className={css.item}>
            <img src={props.img} alt="" />
            <div className="">
            <div className={css.nickname}>{props.nickname}</div>
            <div>{props.post}</div>
            <div><input type="image" src="https://phonoteka.org/uploads/posts/2021-05/thumbs/1620256442_29-phonoteka_org-p-palets-vverkh-fon-32.jpg" 
            onClick={()=>
     {
         
            setlikecounter(likecounter+1)
            props.dispatch(UpdateNewLikePost(likecounter,props.id))
        }
    }
        />{likecounter}</div>
            </div>
        </div>
    );

}
export default Post;