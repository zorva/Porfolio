const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

class App extends React.Component {
    render(){
        const taskList = this.props.tasks.map(
        task => 
        <Todo 
        id = {task.id} 
        name = {task.name} 
        completed = {task.completed} 
        key = {task.id}
         /> )
        return( 
        <div className="todoapp stack-large">
         <h1>todo list</h1>
         <form>
             <h2 className="label-wrapper">
                 <label htmlFor="new-todo-input" className="label__lg">
                     pending tasks
                 </label>
             </h2>
             <input
             type="text"
             id="new-todo-input"
             className="input input__lg"
             name="text"
             autoComplete="off"
             ></input>
             <button type="submit" className="btn btn__primary btn__lg">
                 Add
             </button>
         </form>
         <div className="filters btn-group stack-exception" >
             <button type="button" className="btn toggle-btn" aria-pressed="false">
                 <span className="visually-hidden">Show</span>
                 <span>all</span>
                 <span className="visually-hidden">tasks</span>
             </button>
             <button type="button" className="btn toggle-btn" aria-pressed="false">
                 <span className="visually-hidden">Show</span>
                 <span>active</span>
                 <span className="visually-hidden">tasks</span>
             </button>
             <button type="button" className="btn toggle-btn" aria-pressed="false">
                 <span className="visually-hidden">how</span>
                 <span>completed</span>
                 <span className="visually-hidden">tasks</span>
             </button>
         </div>
         <h2 id="list-heading">
        3 tasks remaining
        </h2>
        <ul
          role = "list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
        {taskList}
        </ul>
        </div>
        );
    }
}

ReactDOM.render(<App tasks={DATA}/>,document.getElementById('root'))