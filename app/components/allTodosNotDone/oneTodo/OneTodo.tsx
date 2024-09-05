import React from 'react'

type Todo = {
  id:number;
  name: string;
  deadline: string | null;
  comment: string;
  done: boolean;
  user_id:string | null;

}

function OneTodo({ todo }: { todo: Todo }) {
  return (
    <div>{todo.name}</div>
  )
}

export default OneTodo
