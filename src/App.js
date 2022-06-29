import {auth, provider} from "./firebase"
import {useState} from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SideIcons from './components/SideIcons'
import FilesViewer from './components/FilesViewer'
 /*
import FilesViewer from './components/FilesViewer'
*/ 


import './App.css';


function App() {
  const [user,setUser]=useState(null)
  const handleLogin = () => {
    if (!user){
      auth.signInWithPopup(provider).then(result => setUser(result.user))
      .catch(error => alert(error.message))

      
    }
  }
  return (
    <div className="app">
      {!user ? (
        <> 
        <Header userPhoto={user?.photoURL}/>
        <div className="app__main">
        <Sidebar/>
        <FilesViewer/>
        <SideIcons/>
       
        
       </div>     
        </>

      ):(
        <div className="app__login">
          <img src="logo512.png" alt="Storage"/>
          <button onClick={handleLogin}>Log in to Storage</button>
        </div>
      )}
         
    </div>
  );
}

export default App;

/*
<FilesViewer/>
*/ 