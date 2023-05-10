import React from 'react'
import { ListGroup , ListGroupItem } from 'reactstrap'
import {FaCheckDouble} from "react-icons/fa"

// redux
import { connect } from 'react-redux'
import { removeTodo } from '../action/todo' 

const Todo = ({todos, markComplate}) => {
  return (
    <ListGroup className='mt-5 mb-2'>
        {todos.map((todo)=>(
            <ListGroupItem key={todo.id}>

                {todo.title}
                <span onClick={()=> markComplate(todo.id)} className="float-right">
                    <FaCheckDouble/>
                </span>
            </ListGroupItem>
        )) }
    </ListGroup> 
  )
}
const mapStateToProps=state=>({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    markComplate: (id) => {
      dispatch(removeTodo(id));
    },
  });
  
export default connect(mapStateToProps ,mapDispatchToProps)(Todo)


