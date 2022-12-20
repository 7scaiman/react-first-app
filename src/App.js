import './App.css';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) { ///// or const App = () => {} стрілочна функція
  return (
    <div className="container">
      <div>
      <BrowserRouter>
        <div className="App-Wrapper">
            <Header/>
            <SideBar/>
            <div className="App-Wrapper-Content">
            <Routes>
            <Route path='/Profile' element={<Profile state={props.state.profilePage} />}/>
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
