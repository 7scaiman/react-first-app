import React from "react";
import { NavLink } from "react-router-dom";
import css from "../Dialogs.module.css";


const SetActive = ({ isActive }) => isActive ? css.active : css.noActive;

const DialogItem = (props) => {
  return (
    <div className={css.Dialogitem}> <NavLink to={"/Dialogs/" + props.name} className={SetActive}>{props.name}</NavLink></div>
  );
}



 

export default DialogItem;