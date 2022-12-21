import React from "react";
import { NavLink } from "react-router-dom";
import css from "../Dialogs.module.css";


const SetActive = ({ isActive }) => isActive ? css.active : css.noActive;

const DialogItem = (props) => {
  return (
    <div className={css.Dialogitem}>
       <NavLink to={"/Dialogs/" + props.name} className={SetActive}>
      <div className={css.dialogs} >
        <img src={props.logo} className={css.logo}/>
         {props.name}
        
    </div>
    </NavLink>
    </div>
  );
}



 

export default DialogItem;