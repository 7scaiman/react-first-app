import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, { login } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerender = (state) => {
  root.render(
    <React.StrictMode>
    <App login={login} state={state} dispatch={store.dispatch.bind(store /*bind*/)}/>
    {/* second option <App post={state.post} messages={state.messages} dialogs={state.dialogs}/> */}
  </React.StrictMode>
);
}
rerender(store._state);
store.subscribe(rerender);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
