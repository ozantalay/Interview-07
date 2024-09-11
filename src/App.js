  import axios from "axios";
  import React, { useState, useEffect } from "react";
  import './styles.css'

  function App() {
    // KODUNUZ BURAYA GELECEK
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers=users.filter((user)=>`${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase()))

    useEffect(()=>{

      const url="https://randomuser.me/api?results=10"

      const getAllUrl=async()=>{
        try{   
        const response = await axios.get(url)
        console.log(response.data.results)
        setUsers(response.data.results)
      }catch(error){
        console.log('Veri çekilirken hata meydana geldi',error)
      }
    }
    getAllUrl()
    
  },[])
  
  
    return (
      <div className="App">
        <input
        type="text"
        placeholder="isim giriniz"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredUsers.map((user)=>(
            <li key={user.login.uuid}>
              {user.name.title} {user.name.first} {user.name.last}
            </li>
          ))}
        </ul>
      </div>
    )
    

  }

  export default App;
