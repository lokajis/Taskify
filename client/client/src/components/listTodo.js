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
                        <th> <h2>Description</h2></th>
                        <th><h2>Edit</h2> </th>
                        <th><h2>Complete</h2> </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => (
                        <tr key={todo.todo_id} id={todo.todo_id} >
                            <td className=""> <h3>{todo.description}</h3> </td>
                            <td className=""> <EditTodo todo = {todo} /> </td>
                            <td><button className="btn btn-light"   onClick={()=> {deleteTodo(todo.todo_id)}}>✅</button> </td>
                        </tr>

                    ))}


                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodos;