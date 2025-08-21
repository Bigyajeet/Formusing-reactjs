import { useState } from "react"

export default function CommentForm({addNewComment}){
    let [formData,setFormData]=useState({
        username:'',
        remarks:'',
        rating:5
    });

    let handleInputchange=(event)=>{
       setFormData((currData)=>{
        return({
            ...currData,[event.target.name]:event.target.value
        })
       })

    }


    let handlesubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        addNewComment(formData);
        
        setFormData({
            username:'',
        remarks:'',
        rating:5

        })
    }



    return(
        <div>
        <h4>Give a Comment</h4>
        <form onSubmit={handlesubmit}>
            <label htmlFor="username">Username</label>
        <input placeholder="username" 
        type='text'values={formData.username} 
        onChange={handleInputchange}
        id='username'
        name='username'></input> 

        <br></br>  <br></br>
           <label htmlFor="remarks">Remarks</label>

        <textarea values={formData.remarks}
        onChange={handleInputchange}
        id='remarks'
        name='remarks'>
        </textarea> 


        <br></br>  <br></br>
         <label htmlFor="rating">Rating</label>

        <input placeholder="rating" type='number' values={formData.rating} min={5} max={10}
        id='rating'
        name='rating'></input>

        <br></br> <br></br>

        <button>Add a Comment</button>
        
        
        
        </form>
        
        
        
        
        </div>
    )
}