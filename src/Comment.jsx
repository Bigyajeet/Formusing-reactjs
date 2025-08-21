import { useState } from "react";
import './Comment.css'
import CommentForm from "./CommentForm";


export default function Comment(){


    let [comments,setComments]=useState([{
        username:'@bk',
        remarks:'welldone',
        rating:4
    }]);
    //new comment list 

    let addNewComment=(comment)=>{
        setComments((currcmt)=>[...currcmt,comment])
    }
    return   (
    <>
    <div>

        <h3>All Comments</h3>
{/* talako map fun lai hamile lekheko kina ki tesle garda hamro mathi fun bata haleko info sabai comment ko list ma dekhaucha  */}
       
            {comments.map((comment,idx)=>(   
                <div className="comment" key={idx}>
                    
                <span>{comment.remarks}</span>
                &nbsp;
                <br></br>
            <span>{comment.rating}</span>
             &nbsp;
                    <br></br>
            <p>-{comment.username}</p>
        

        </div>

            ))
        }
        <hr></hr>
          <CommentForm addNewComment={addNewComment}/>


    </div>
    </>)
}