import React from 'react'


function AddTodo() {
  // Utilisation d'une référence pour accéder à l'input

  return (
    <form action="/api/todos/add" method="POST">
    <label htmlFor="name" className="block textBlue">
      Avez-vous une mission ?
    </label>
    <input type="text" name="name" placeholder="Mission ?" required className='bg-white-800 rounded-md m-3 border-yellow-400'/>
    <button type="submit" className="btn btn-outline bg-blue-300 font-emoji mr-6">
      Ajouter
    </button>

  </form>
  )
}

export default AddTodo
