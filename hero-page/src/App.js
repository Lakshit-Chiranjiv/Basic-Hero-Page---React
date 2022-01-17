import './App.css';
import React ,{ useState} from 'react'

function App() {

  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [subject,setSubject] = useState("");
  const [displayToggle,setDisplayToggle] = useState(false);
  
  const toggleDetails = () =>{
    setDisplayToggle(!displayToggle);
  };

  return (
    <div className="App">
      <h1>Basic Hero Page</h1>
      <div className="formdiv">
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <br />
        <label htmlFor="age">Age</label>
        <input type="number" onChange={(e) => setAge(e.target.value)}/>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <label htmlFor="subject">Subject</label>
        <input type="text" onChange={(e) => setSubject(e.target.value)}/>
      </div>

      <button onClick={toggleDetails}>Toggle Details</button>

      {
        displayToggle && 
      <div className="details">
        <h4>Name : {name}</h4>
        <h4>Age : {age}</h4>
        <h5>Email : {email} </h5>
        <h5>Subject : {subject} </h5>
      </div>
      }
    </div>
  );
}

export default App;
