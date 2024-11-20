import { Button } from '@mui/material';
import React, { useState } from 'react';

function TodoList(props) {
  const [todos,setTodos] =useState(['Learn React','Build a Project']);
  const [newTodo,setNewTodo] = useState('');
  const deleteTodo = (index) => {
    // (_,i) => filter메서드의 콜백 함수 매개변수
    // 첫 번째 매개변수 _ 는 각 배열의 요소를 의미(사용하지 않을때 _)
    // 두 번째 매개변수 i 는 인덱스를 의미한다.
    setTodos(todos.filter((_,i)=> i !== index));
  }

  const addTodo = () => {
    if(newTodo.trim !== ''){
      //기존 todos 배열에 새로운정보를 가진 newTodo를 추가한다.
      setTodos([...todos, newTodo.trim()])
      setNewTodo('');

    }
  }

  return (
    <div className='TodoList'>
      <h2>Todo List</h2>
      <ul>
        {/* 
        <li>Learn React {'  '} <Button variant="outlined">Delete</Button></li>
        <li>Learn React {'  '} <Button variant="outlined">Delete</Button></li> 
        */}
        {todos.map((k,index)=>(
          <li key={index}>{k} {' '} <button onClick={()=> deleteTodo(index)}>Delete</button></li>
        ))}
      </ul>
      <p>Typing : {newTodo} </p>
      <input type="text"
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
      />
      <Button onClick={addTodo} variant="outlined"
               > Add New Task </Button>
    </div>
  );
}

export default TodoList;