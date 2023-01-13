import React from "react";
import { NavLink } from "react-router-dom";
import css from "../Dialogs.module.css";

const MessageItem = (props) => {
  let message = props.IdOwner == 1 ? css.ownMessage : css.message;
 
  return ( 
<div className={message}>
  <img src={props.logo}></img> 
  {props.message}
</div>
  );
}






export default MessageItem;