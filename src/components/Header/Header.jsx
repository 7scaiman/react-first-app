import React from "react";
import logo from "../../img/logo0.jpg";
import css from "./Header.module.css"
function Header() { ///// or const App = () => {} стрілочна функція
  
    return (
      <header className={css.HeaderGrid}>
          <img src={logo}/>
      </header>
    );
  }
  export default Header;