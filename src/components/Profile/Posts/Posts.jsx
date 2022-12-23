import React from "react";
import Post from "./Post/Post";
import css from "./Posts.module.css"

let  NewPostElement = React.createRef()

let AddPost = () => {
    let text = NewPostElement.current.value; /// current - хтмл елемент
    alert(text)
}

function Posts(props){
    let postElement = props.postData.map( (el) => <Post nickname={el.nickname} post={el.post} img={el.img} likecount={el.likecount}/> )
    return(
        <div className={css.Posts}>
            
            <div>
                <h3>New post</h3>
                <textarea ref={NewPostElement}></textarea>
                <div>
                <button onClick={AddPost}>add post</button>
                </div>
            </div>
        
            <div>
          {postElement}
            </div>
        </div>
    );
}
export default Posts;