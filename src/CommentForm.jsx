import { useState } from "react";
 import { useFormik } from 'formik';
 const validate = values => {
   const errors = {};
   if (!values. username) {
     errors. username = 'Username is left empty ';
   }
 
   return errors;
 };

export default function CommentForm({addNewComment}){
    // let [formData,setFormData]=useState({
    //     username:'',
    //     remarks:'',
    //     rating:5
    // });

    //formic documentation bata

     const formik = useFormik({
     initialValues: {
        username: '',
       remarks: '',
      rating: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

//    yo tala duita fun jun maile comment gareko chu teo formik ma presnt cha so lekhna jarurat xaina

    // let handleInputchange=(event)=>{
    //    setFormData((currData)=>{
    //     return({
    //         ...currData,[event.target.name]:event.target.value
    //     })
    //    })

    // }


    // let handlesubmit=(event)=>{
    //     event.preventDefault();
    //     console.log(formData);
    //     addNewComment(formData);
        
    //     setFormData({
    //         username:'',
    //     remarks:'',
    //     rating:5

    //     })
    // }



    return(
        <div>
        <h4>Give a Comment</h4>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
        <input placeholder="username" 
        type='text'values={formik.values.username} 
        onChange={formik.handleChange}
        id='username'
        name='username'/>
            
          { formik.errors.username ? 
          (<p style={{color:'red'}}>{formik.errors.username}</p>) : null
        }  
            
            

        <br></br>  <br></br>
           <label htmlFor="remarks">Remarks</label>

        <textarea values={formik.values.remarks}
       onChange={formik.handleChange}
        id='remarks'
        name='remarks'>
        </textarea> 


        <br></br>  <br></br>
         <label htmlFor="rating">Rating</label>

        <input placeholder="rating" type='number' values={formik.values.rating} min={5} max={10}
        id='rating'
        name='rating'/>

        <br></br> <br></br>
        

        <button type='submit'>Add a Comment</button>
        
        
        
        </form>
        
        
        
        
        </div>
    )
}