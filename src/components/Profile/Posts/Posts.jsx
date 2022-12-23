import React from "react";
import Post from "./Post/Post";
import css from "./Posts.module.css"

let  NewPostElement = React.createRef()

<<<<<<< HEAD

function Posts(props){
    let AddPost = () => {
        let text = NewPostElement.current.value; /// current - хтмл елемент
        props.addPost(text)
    }
=======
let AddPost = () => {
    let text = NewPostElement.current.value; /// current - хтмл елемент
    alert(text)
}

function Posts(props){
>>>>>>> b643113da7c4caa7dbae48ee455771d09e2c38d3
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
        
            <div className={css.PostsFlex}>
          {postElement}
            </div>
        </div>
    );
}
export default Posts;