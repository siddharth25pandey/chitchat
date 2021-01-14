import './App.css';
import React, { useState,useEffect} from 'react';
import { FormControl,Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const[input,setInput]=useState('');
  const[messages,setMessages]=useState([{username:'Siddharth',message:'Hello'},{username:'Mohan',message:'Hey'}]);
  const[username,setUsername]=useState('');

  // useState = variable in React
  // useEffect =run code on a condition in React
  useEffect(()=> {

    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=>doc.data()))
    });
  },[])
  useEffect(() => {
    //const username=prompt("Please Enter your Username"); 
    setUsername(prompt("Please Enter your Username"))
  }, []) // condition


  const sendMessage=(event)=>{
    // All the logic to send a Message present here
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    /*setMessages([...messages, {username:username, message:input }]);*/
    setInput('');
  }
    return ( 
        <div className = "App" >


          <img src="https://github.com/siddharth25pandey/sidchat/blob/master/chit-chat.PNG?raw=true"alt="Nologo"/>
       <div class="sid"> CHIT-CHAT PLATFORM</div>
      
       <div class="siduser">Welcome {username}</div>
        <form className="app-form">
        <FormControl className="app-FormControl">
  
        <Input placeholder="Enter a message" value={input} onChange={event=>setInput(event.target.value)}/>

        <IconButton  disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
          <SendIcon/>
        </IconButton>


          
</FormControl></form>
         
        
        {
          messages.map(message=> (
            <Message username ={username} message={message}/>
            /*<p>{message}</p> */
          ))
        }
        <div class="footer">
  <p>All Copyright@2021 reserved to Siddharth Pandey</p>
</div>
        </div>
        
    );
}

export default App;