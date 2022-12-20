import React from "react";
import { NavLink } from "react-router-dom";
import css from "../Dialogs.module.css";

const MessageItem = (props) => {
  return ( 
<div className={css.message}>
  {props.message}
</div>
  );
}






export default MessageItem;