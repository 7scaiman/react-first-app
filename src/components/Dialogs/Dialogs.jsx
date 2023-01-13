import React from "react";
import css from "./Dialogs.module.css";
import SideBar from "../SideBar/SideBar";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/MessageItem";
import { AddMessageAction, UpdateNewMSTextAction } from "../../redux/state";
const SetActive = ({ isActive }) => isActive ? css.active : css.noActive; 

const TextRef = React.createRef()


const Dialogs = (props) => {
const onChange = () => { 
  props.dispatch(UpdateNewMSTextAction( TextRef.current.value))

}
const AddMessage = () => { 
  if(props.state.NewMessageText.trim() === "")
  return alert("the text can't be empty")
  else
  props.dispatch(AddMessageAction())
}
  let dialogsMapElements = props.state.dialogs.map( (el) => <DialogItem name={el.name} logo={el.logo} /> ) ////map
  
  let messageMapElements = props.state.messages.map( (el) => <MessageItem message={el.message} logo={el.logo} nickname={el.nickname} IdOwner={el.IdOwner}/>) ////map
  return (
    <div>
      <p>Dialogs</p>
      <div className={css.dialogs}>
        <div className={css.dialogs_items}>
          {dialogsMapElements}
        </div>

          <div className={css.messageBar}>
        <div className={css.messages}>
          {messageMapElements}
        </div>
        <textarea cols="2" rows="4" ref={TextRef} value={props.state.NewMessageText} className={css.textarea} onChange={onChange}></textarea>
        <button onClick={AddMessage}>sent</button>
          </div>
      </div>

    </div>
  );
}





export default Dialogs;