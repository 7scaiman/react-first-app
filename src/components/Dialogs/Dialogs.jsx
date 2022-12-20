import React from "react";
import css from "./Dialogs.module.css";
import SideBar from "../SideBar/SideBar";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/MessageItem";

const SetActive = ({ isActive }) => isActive ? css.active : css.noActive; 




const Dialogs = (props) => {
  let dialogsMapElements = props.dialogsData.map( (el) => <DialogItem name={el.name} /> ) ////map
  
  let messageMapElements = props.messagesData.map( (el) => <MessageItem message={el.message}/>) ////map
  return (
    <div>
      <p>Dialogs</p>
      <div className={css.dialogs}>

        <div className={css.dialogs_items}>
          {dialogsMapElements}
        </div>

        <div className={css.messages}>
          {messageMapElements}
        </div>
      </div>
    </div>
  );
}





export default Dialogs;