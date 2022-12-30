import React from "react";
import img1 from "../../../img/cosmos.png"
import css from "../Profile.module.css"
const ProfileInfo = () => {
    return(
        <div>
        <img src={img1}/>
        <div className={css.descriptionBlock}>
            ava + des
        </div>
        </div>
    );
}
export default ProfileInfo;