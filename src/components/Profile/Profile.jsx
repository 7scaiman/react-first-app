import React from "react";
import css from "./Profile.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
let Profile = (props) =>{
   
   
    return (
        <body className={css.Content}>
           <div>
            <ProfileInfo/>
              <Posts postData={props.state.posts} newPost={props.state.newPostText} dispatch={props.dispatch}/>
           </div>
        </body>
      );
}
export default Profile;