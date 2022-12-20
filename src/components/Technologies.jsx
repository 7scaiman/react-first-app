import React from "react";
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import "../App.css";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Technologies(){
    return(
            <BrowserRouter>
        <div className="App-Wrapper">
            <Header/>
            <SideBar/>
            <div className="App-Wrapper-Content">
            <Routes>
            <Route path='/Profile' element={<Profile />}/>
            <Route path='/Dialogs/*' element={<Dialogs />}/>
          </Routes>
           
            </div>         
       </div>
            </BrowserRouter>
    )
}
export default Technologies;