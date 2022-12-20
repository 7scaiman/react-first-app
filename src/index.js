import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postData =[  /// передається через пропси в Posts а імено Index.js>App.js>Profile.jsx>Posts.jsx
  {id:1,post: 'Mid or feed',likecount:20,nickname:'Pudgekiller228',img:'https://avatars.akamai.steamstatic.com/479102385e9fd0d34ddddda4e0434840a794f7e1_full.jpg'},
  {id:2,post: 'Dendi pudge',likecount:10,nickname:'Pudgero',img:'https://i1.sndcdn.com/avatars-000120278070-velp67-t240x240.jpg'},
  {id:3,post: 'Pudge number one',likecount:7,nickname:'fires_bacon',img:'https://www.meme-arsenal.com/memes/a729b6d72ebe68f8ced63cfb93ffe164.jpg'}
]

let dialogsData = [
  {id: 1,name: 'Pudge'}, 
  {id:2,name:'Anti-Mage'},
  {id:3,name:'Shadow Fiend'},
  {id:4,name:'Juggernaut'},
  {id:5,name:'Phantom assasin'},
  {id:6,name:'Writhe king'}
  ]
  
  let messagesData = [
  {id:1,message:'You dont even try',date:'20/09/2022',time:'17:40',Owner:dialogsData[1].name,IdOwner: dialogsData[1].id}, 
  {id:2,message:'1000-7',date:'03/09/2022',time:'13:33',Owner:dialogsData[2].name,IdOwner: dialogsData[2].id},
  {id:3,message:'Mid or feed',date:'23/07/2022',time:'12:00',Owner:dialogsData[0].name,IdOwner: dialogsData[0].id},
  {id:4,message:'AAAAAAAAA!',date:'01/01/2022',time:'00:10',Owner:dialogsData[3].name,IdOwner: dialogsData[3].id},
  {id:5,message:'MmMm Divine',date:'12/09/2022',time:'18:40',Owner:dialogsData[4].name,IdOwner: dialogsData[4].id},
  {id:6,message:'PITIFUL ALLIES!!',date:'01/09/2022',time:'22:40',Owner:dialogsData[5].name,IdOwner: dialogsData[5].id}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
