let ChangeStateForm = React.createClass({
  getInitialState: function () {
    return {newName: ''};
  },

  handleInputChange: function (e) {
    this.setState({newName: e.target.value});
    this.props.handleNewName(e.target.value);
  },

  render: function () {
    return (
      <form className="changeForm">
        <input className="changeInput"
               type="text"
               placeholder="Enter new Name"
               value={this.state.newName}
               onChange={this.handleInputChange}
        />
      </form>
    );
  }
});

let ShowState = React.createClass({
  getInitialState: function() {
    return {
      name: 'foo'
    };
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    debugger;
    return nextState.name === 'bar' || nextState.name === 'foo';
  },

  handleNewName: function(value) {
    this.setState({name: value});
    debugger;
  },

  render: function () {
    return (
      <div className="displayDiv">
        <ChangeStateForm handleNewName={this.handleNewName}/>
        <br />
        <br />
        {'Hi! I am ' + this.state.name}
      </div>
    );
  }
});

ReactDOM.render(<ShowState/>, document.getElementById('content'));
