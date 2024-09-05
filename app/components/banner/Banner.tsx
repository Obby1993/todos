
import React from 'react'
import AddTodo from './AddTodo'

function Banner() {


  return (

    <div className='bg-custom-image h-64 w-full text-white bg-gradient-to-b'>
      <h1 className='text-center p-6'>Mon JARVIS Perso</h1>
      <div className='flex items-end justify-between content-between'>
        <div className="chat chat-end w-40">
          <div className="chat-bubble text-xs bg-none">
          Bonjour
            <br />
            Je m`appelle Jarvis, je suis votre assistant personnel pour vous aider à ne pas oublier vos missions !
          </div>
        </div>
        <div className="chat chat-start text-xs w-60">
          <div className="chat-bubble text-center">
            <AddTodo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
