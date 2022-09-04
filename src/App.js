import {useState,useEffect} from 'react';
import './App.css';
import User from './components/User'

function App() {

  const [user, setUser] = useState([]);

  useEffect(()=>{

      fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(json => setUser(json))
      
  },[])

  return (
    <>
      <User githubUsers={user} />
    </>
  );
}

export default App;
