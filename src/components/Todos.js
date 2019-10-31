import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// import { runQuery } from './custom-modules/runQuery.js';

class Todos extends Component {
  
  
  render(){
    // console.log(this.props.todos  )
    return this.props.todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo}/>
      ));
  }
}

Todos.protpTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
