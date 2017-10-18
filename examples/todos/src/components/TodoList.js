import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Todo from './Todo'

// import our action for use in this component
import { toggleTodo } from '../actions'

const TodoList = ({ todos, dispatch }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        // dispatch our action here
        onClick={() => dispatch(toggleTodo(todo.id))} // Now I have intellisence and go to function capabilities. It's also easier to see what effects this onClick method will trigger
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired // use this to dispatch actions
}

// connect to store so we have a dispatch function
export default connect()(TodoList);
