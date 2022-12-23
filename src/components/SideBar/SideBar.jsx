import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Sidebar.module.css"
const SetActive = ({isActive}) => isActive ? css.active : '' ;
const SetActive2 = ({isActive}) =>{                  /// SetActive == SetActive2
  if(isActive)
  return css.active
  else
  return ''
  
  return ''
}
let SideBar = (props) => {
  /// let classes = css.Sliderbar + css.style2 // ClassName={classes} == className ="slidebar style2" 
  /// isActive == SetActive     ? = тернарнйй операто if else
  /// if(IsActive) = css.active else ''   ===  (IsActive) => IsActive ? css.active : ''
  console.log(props.login[1].logo)
  return (
    <div className={css.Sidebar}>
     <div className={css.content}>
      <div><NavLink to="/Profile" className={({isActive}) => isActive ? css.active : '' }>Profile</NavLink></div>
      <div> <NavLink to="/Dialogs" className={SetActive2}>Message</NavLink></div>
      <div><NavLink to="/News" className={SetActive}>News</NavLink></div>
      <div> <NavLink to="/Music" className={SetActive}>Music</NavLink></div>
      <div><NavLink to="/Setting" className={SetActive}>Setting</NavLink></div>
      <div><NavLink to="/friends" className={SetActive}>Friends</NavLink></div>
      
       <div className={css.flexer}>
        <div className={css.flex_item}><img src={props.login[1].logo} className={css.logo}/><h4>{props.login[1].nickname}</h4></div>
        <div className={css.flex_item}><img src={props.login[0].logo} className={css.logo}/><h4>{props.login[0].nickname}</h4></div>
        <div className={css.flex_item}><img src={props.login[4].logo} className={css.logo}/><h4>{props.login[4].nickname}</h4></div>
       </div>

     </div>
    </div>
  );
}
export default SideBar;