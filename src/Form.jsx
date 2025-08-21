import { useState } from "react"


export default function Form(){
    // let [Fullname,setFullname]=useState("");
    //     let [Uname,setUname]=useState("");
    // let changename=(event)=>{
    //    setFullname(event.target.value)

    // }
    //   let username=(event)=>{
    //    setUname(event.target.value)

    // }
    let [formData,setFormData]=useState({
        Fullname:"",
        username:"",                   //as obj passed
        password:"",
    });


    let inputhandlechange=(event)=>{
        let fieldName=event.target.name;
         let newName=event.target.value;
        console.log(newName);

        setFormData((currData)=>{
            // currData[fieldName]=newName;
            return {...currData,[fieldName]:newName}
        });

    }


    


    return(
        <form onSubmit={handlesubmit}>
            <label htmlFor="Fullname">FullName</label>

            <input placeholder="enter your full name" 
            type='text'
             values={formData.Fullname}
            onChange={inputhandlechange}
              id='Fullname'
              name='Fullname'>
            
              </input>
            
            <br></br>
            
            <br></br>

            <label htmlFor="Username">User Name</label>

            <input placeholder="enter your user name" 
            type='text'
             values={formData.username}
              onChange={inputhandlechange}
              id='Username'
              name="username">
               
              </input>

<br></br>
              <label htmlFor="password">Password</label>
              <input placeholder="enter your password" 
            type='text'
             values={formData.password}
              onChange={inputhandlechange}
              id='password'
              name="password">
               
              </input>
            <button>Submit</button>
        </form>
    )
}