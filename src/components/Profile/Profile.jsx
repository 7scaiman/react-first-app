import React from "react";
import css from "./Profile.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
let Profile = (props) =>{
   
   
    return (
        <body className={css.Content}>
           <div>
            <ProfileInfo/>
              <Posts postData={props.state.posts} addPost={props.AddPost} newPost={props.state.newPostText}
              UpdateNewLikePost={props.UpdateNewLikePost} UpdateNewPostText={props.UpdateNewPostText} />
           </div>
        </body>
      );
}
export default Profile;