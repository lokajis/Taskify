import React, { Fragment, useState } from "react";

const InputTodo = () =>{

const [description, setDescription] = useState("");

//handling the input value onchange
function changeValue (e) {
const value  = e.target.value;
setDescription(value);
// console.log(description);
}

const onSubmitForm = async (e) => {
        e.preventDefault();

try {
const body = {description};
const response = await fetch("http://localhost:5000/todos",{
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body),
});
//after submiting the screen will go back to "/"
window.location="/";
console.log(response);
} catch (err) {
    console.error(err.message);
}
}


    return( 
    
        <Fragment >   
                 <h1 className="text-center mt-5">Taskify 🎯</h1>

           <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input onChange={changeValue} type="text" className="form-control" value={description} />
            <button className="btn btn-success" >Add</button>
           </form>
</Fragment>
    );
}


export default InputTodo ;