import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import redux from './redux/state';
import { reduxFunction } from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = () => {
  root.render(
    <React.StrictMode>
    <App login={redux.login} state={redux.state} reduxFunction={reduxFunction}/>
    {/* second option <App post={state.post} messages={state.messages} dialogs={state.dialogs}/> */}
  </React.StrictMode>
);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
