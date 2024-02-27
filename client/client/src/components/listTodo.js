import React, { Fragment, useEffect, useState } from "react";
//import edit todo
import EditTodo from "./editTodo";
const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {

            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }



    useEffect(() => {
        getTodos();
    }, []);


    // Delete function
    const deleteTodo = async (id) => {

try {
    const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
        "method":"DELETE"
    });

    setTodos(todos.filter(todo => todo.todo_id !== id));
    console.log(deleteTodo);
} catch (err) {
    console.log(err.message);
}
    }

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delet</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => (
                        <tr key={todo.todo_id} id={todo.todo_id} >
                            <td>{todo.description}</td>
                            <td> <EditTodo todo = {todo} /> </td>
                            <td><button className="btn btn-danger"   onClick={()=> {deleteTodo(todo.todo_id)}}>Delete</button> </td>
                        </tr>

                    ))}


                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodos;