import { useState } from "react";
import './Comment.css'


export default function Comment(){


    let [comments,setComments]=useState([{
        username:'@bk',
        remarks:'welldone',
        rating:4
    }])
    return(<div>

        <h3>All Comments</h3>
        <div className="comment">
                <span>{comments[0].remarks}</span>
                &nbsp;
                <br></br>
            <span>{comments[0].rating}</span>
             &nbsp;
                    <br></br>
            <span>{comments[0].username}</span>
        

        </div>



    </div>)
}