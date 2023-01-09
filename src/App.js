import './App.css';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  console.log(props.state.profilePage) ///// or const App = () => {} стрілочна функція
  return (
    <div className="container">
      <div>
      <BrowserRouter>
        <div className="">
            <Header/>
            <div className="flex">
            <SideBar login={props.login} />
            <Routes>
            <Route path='/Profile' element={<Profile state={props.state.profilePage} UpdateNewLikePost={props.UpdateNewLikePost} UpdateNewPostText={props.UpdateNewPostText} AddPost={props.AddPost} />}/>
            <Route path='/Dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
          </Routes>
           
            </div>         
       </div>
            </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
