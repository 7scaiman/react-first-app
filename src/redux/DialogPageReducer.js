import { login } from "./stateLogin";
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MS_TEXT = 'UPDATE_NEW_MS_TEXT'

 const DialogPageReducer = (state,action) => { 
     if(action.type === ADD_MESSAGE){
            let date = new Date();
           let NewId = state.messages[state.messages.length-1].id + 1;
           let NewMessage = {
            id:NewId,
            message:state.NewMessageText,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}`,
            nickname: login[0].nickname,
            logo: login[0].logo,
            IdOwner: login[0].id
           }
           state.messages.push(NewMessage)
         
        }
        else if(action.type==UPDATE_NEW_MS_TEXT){
            state.NewMessageText = action.newText;
             
        }
    return state;
}
export default DialogPageReducer