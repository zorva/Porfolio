class App extends React.Component {
    render(){
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
        <Todo/>
        <Todo/>
        <Todo/>
        </ul>
        </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))