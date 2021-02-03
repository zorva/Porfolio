class Form extends React.Component {
  state = {
      name:''
  }
handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTask(this.state.name)
        this.setState(state=>{
          return {name:''}
        })
      }
handleChange=(e)=>{
  const val = e.target.value
  this.setState(state=>{
    return{name:val}
  })
}
    render(){
      return(
      <form onSubmit={this.handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      )
    };
  }