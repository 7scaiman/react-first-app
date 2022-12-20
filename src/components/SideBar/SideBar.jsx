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
let SideBar = () => {
  /// let classes = css.Sliderbar + css.style2 // ClassName={classes} == className ="slidebar style2" 
  /// isActive == SetActive     ? = тернарнйй операто if else
  /// if(IsActive) = css.active else ''   ===  (IsActive) => IsActive ? css.active : ''
  return (
    <div className={css.Sidebar}>
      <div><NavLink to="/Profile" className={({isActive}) => isActive ? css.active : '' }>Profile</NavLink></div>
      <div> <NavLink to="/Dialogs" className={SetActive2}>Message</NavLink></div>
      <div><NavLink to="/News" className={SetActive}>News</NavLink></div>
      <div> <NavLink to="/Music" className={SetActive}>Music</NavLink></div>
      <div><NavLink to="/Setting" className={SetActive}>Setting</NavLink></div>
    </div>
  );
}
export default SideBar;