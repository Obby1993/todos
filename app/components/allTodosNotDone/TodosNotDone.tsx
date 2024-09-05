
// import { supabase } from '@/utils/supabase/server';
// import { log } from 'console';
import React from 'react'
import OneTodo from './oneTodo/OneTodo'
// import { useEffect, useState } from 'react';
import { getTodosNotDone, deleteExpiredDoneTodo, deleteTodo, getTodosByUserId,doTodo,addTodo } from '@/app/lib/todoService';
// import { createClient } from '@/utils/supabase/server'


type Todo = {
  id:number;
  name: string;
  deadline: string;
  comment: string;
  done: boolean;
  user_id:number;

}



export default async function Todos() {

  // const todos = await getTodos();
  // console.log(todos);

  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState<string | null>(null);




        const todos = await getTodosNotDone();
        console.log('Todos fetched:', todos); // Vérifiez les données récupérées





  return (
    <div>
      {todos?.map(todo => (
        <ul key={todo.id}>
          <li key={todo.id}>
            <OneTodo todo={todo} />
          </li>
        </ul>
      ))}
    </div>
  )
}
