var AddItemForm = React.createClass({
  getInitialState: function () {
    return {newTodoValue: ''}
  },

  handleInputChange: function (e) {
    this.setState({newTodoValue: e.target.value});
  },

  handleSubmitClick: function (e) {
    e.preventDefault();
    this.props.onNewItemAdd(this.state.newTodoValue);
    this.setState({newTodoValue: ''});
  },

  render: function () {
    return (
      <form className="addTodoForm">
        <input
          className="addTodoInput"
          type="text"
          placeholder="Enter todo"
          value={this.state.newTodoValue}
          onChange={this.handleInputChange}
        />
        <button
          className="addTodoButton"
          onClick={this.handleSubmitClick}>
          Add
        </button>
      </form>
    )
  }
});

var ChecBoxItem = React.createClass({
  getInitialState: function () {
    return {
      done: this.props.done
    }
  },

  check: function () {
    this.setState({done: true});
    this.props.onCheckHandler(this.props.id);
  },

  render: function () {
    return (
      <div className="checkBoxItem">
      <label>
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.check}
        />
        {this.props.label}
      </label>
      </div>
    )
  }
});

var CheckBoxList = React.createClass({
  render: function () {
    let todoItems = this.props.data.map((todo) => {
      return (
        <ChecBoxItem
          key={todo.key}
          id={todo.key}
          done={todo.done}
          label={todo.value}
          onCheckHandler={this.props.onCheckHnadler}
        />
      )
    });

    return (
      <div className="checkBoxList">
        {todoItems}
      </div>
    )
  }
});


var TodoList = React.createClass({
  onCheckHnadler: function (id) {
    let itemToRemove = this.state.data.find((element) => {
      return element.key === id;
    });
    console.log(itemToRemove);
    debugger;
    setTimeout(() => {
      debugger;
      let tmpState = this.state.data;
      tmpState.splice(tmpState.indexOf(itemToRemove), 1);
      this.setState({data: tmpState});
    }, 3000)
  },

  todoId: 0,

  getInitialState: function () {
    return {data:[
      {
        key: 0,
        value: 'initialTodo',
        done: false
      }]
    };
  },

  onNewItemAdded: function (newValue) {
    let todos = this.state.data;
    this.todoId++;

    todos.push({
      key: this.todoId,
      value: newValue,
      done: false
    });

    this.setState({data: todos});
  },

  render: function () {
    return (
      <div className="todo-component">
        <h1>Todo list</h1>
        <AddItemForm onNewItemAdd={this.onNewItemAdded}/>
        <CheckBoxList data={this.state.data} onCheckHnadler={this.onCheckHnadler}/>
      </div>
    )
  }
});


ReactDOM.render(<TodoList/>, document.getElementById('content'));
