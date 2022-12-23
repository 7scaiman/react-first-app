import React from "react";
import img1 from "../../img/cosmos.png";
import css from "./Profile.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
let Profile = (props) =>{
   
   
    return (
        <body className={css.Content}>
           <div>
            <ProfileInfo/>
              <Posts postData={props.state.posts} addPost={props.reduxFunction.AddPost}/>
           </div>
        </body>
      );
}
export default Profile;