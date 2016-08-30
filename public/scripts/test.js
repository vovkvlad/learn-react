/*
var TextNode = React.createClass({
  handleChange: function(prop) {
    console.dir(prop);
  },

  render: function () {
    return (
      <input
        className="testInput"
        type="text"
        onChange={this.handleChange}
      />
    )
  }
});
*/

var SelectNode = React.createClass({
  render: function () {
    return (
      <select value="B">
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    )
  }
});

ReactDOM.render(<SelectNode/>, document.getElementById('content'));
