import React from "react";
import Post from "./Post/Post";
import css from "./Posts.module.css"

let  NewPostElement = React.createRef()



function Posts(props){
    
    let AddPost = () => {
       
        if(props.newPost.trim() === "")
        return alert("the text can't be empty")
        else
        props.dispatch({type: 'AddPost'})
    }
    let onChangeFunct = () => {
        let text = NewPostElement.current.value;/// current - хтмл елемент
        
        props.dispatch({type:'UpdateNewPostText', newText:text})
    }
    
    let postElement = props.postData.map( (el) => <Post nickname={el.nickname} post={el.post} img={el.img} likecount={el.likecount} id={el.id} dispatch={props.dispatch}/> )
    return(
        <div className={css.Posts}>
            
            <div>
                <h3>New post</h3>
                <textarea ref={NewPostElement} value={props.newPost} onChange={onChangeFunct}/>
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