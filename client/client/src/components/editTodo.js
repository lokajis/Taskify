import React, { Fragment, useState } from "react";

const EditTodo = (props) => {

    const [description, setDescription] = useState(props.todo.description);


    //edit description function
  const updateDescription =  async (e) => {
e.preventDefault();
    try {
const body = {description};
const id = props.todo.todo_id ;
const responce = await fetch(`http://localhost:5000/todos/${id}`,{
    method: "PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body),
});
console.log(responce);
window.location = "/";
} catch (err) {
    console.log(err.message);
}
  }

    return (<Fragment>
            <div className="">
                <button type="button"  className="btn btn-light" data-toggle="modal" data-target={`#id${props.todo.todo_id}`}  >
                ✏️</button>

                <div className="modal mt-5" id={`id${props.todo.todo_id}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Edit todo</h4>
                                <button type="button justify-content-end" className="close" data-dismiss="modal" onClick={() => setDescription(props.todo.des)}>&times;</button>

                            </div>

                            <div className="modal-body">
                                < input type="text" className="form-control" value={description}  onChange={e => setDescription(e.target.value)} />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(props.todo.des)}>Close</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>



    </Fragment>);
}


export default EditTodo; 