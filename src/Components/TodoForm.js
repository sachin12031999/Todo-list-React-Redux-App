import React, {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'

import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup, InputGroupAddon ,
    InputGroupText
} from 'reactstrap'
import { v4 } from 'uuid'

// redux
import { Connect, connect, useDispatch } from 'react-redux'
import { addTodo } from '../action/todo'

const TodoForm = () => {
    const [title, setTitle] =useState("")

    const handleSubmit= e=>{
        e.preventDefault()
        if(title === ''){
            return (
                // toast("please add a todo" , {type: 'alert'})
                toast("Please add a todo", { type: 'alert' }) ,

            alert("please add a todo")
  
            )
        }

        const todo ={
            title,
            id:v4()

        }
        addTodo(todo)
        setTitle("")
        
        console.log(todo)
    }

  return (
   <Form onSubmit={handleSubmit}>
    <FormGroup>
        <InputGroup>
        <Input
        type='text'
        name='todo'
        id='todo'
        placeholder='your text todo'
        value={title}
        onChange={e=>setTitle(e.target.value)}
        />
        <InputGroupText addonType='prepend'>
            <Button color='primary' onClick={handleSubmit}>Add</Button>
        </InputGroupText>
        </InputGroup>
    </FormGroup>
   </Form>
  )
}

const mapStateToProps=(state)=> ({})

const mapDispatchToprops = dispatch =>({
    addTodo: todo =>{
        dispatch(addTodo(todo))
    }
})


export default connect(mapStateToProps , mapDispatchToprops)(TodoForm)
