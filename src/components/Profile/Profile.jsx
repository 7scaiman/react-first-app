import React from "react";
import css from "./Profile.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
let Profile = (props) =>{
   
   
    return (
        <body className={css.Content}>
           <div>
            <ProfileInfo/>
              <Posts postData={props.state.posts} addPost={props.reduxFunction.AddPost} newPost={props.state.newPostText} reduxFunction={props.reduxFunction}/>
           </div>
        </body>
      );
}
export default Profile;