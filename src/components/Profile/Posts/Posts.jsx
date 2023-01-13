import React from "react";
import Post from "./Post/Post";
import css from "./Posts.module.css"
import { addPostAction, UpdateNewPostTextAction,} from "../../../redux/state";

let  NewPostElement = React.createRef()


function Posts(props){
    
    let AddPost = () => {
       
        if(props.newPost.trim() === "")
        return alert("the text can't be empty")
        else
        props.dispatch(addPostAction())
    }
    let onChangeFunct = () => {
        ///  let text = NewPostElement.current.value; ( current - хтмл елемент
        let action = UpdateNewPostTextAction(NewPostElement.current.value)
        props.dispatch(action)
    }
    
    let postElement = props.postData.map( (el) => <Post nickname={el.nickname} post={el.post} img={el.img} likecount={el.likecount} id={el.id} dispatch={props.dispatch}/> )
    return(
        <div className={css.Posts}>
            
            <div>
                <h3>New post</h3>
                { <textarea ref={NewPostElement} value={props.newPost} onChange={onChangeFunct}/>} {/*FLUX */}
                <div>
                <button onClick={AddPost}>add post</button>
                </div>       
            </div>
        
            <div className={css.PostsFlex}>
          {postElement}
            </div>
        </div>
    );
}
export default Posts;