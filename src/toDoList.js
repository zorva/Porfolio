'use strict';
class App extends Reat.Component {
    render(){
        return( 
        <div className="todo-Container stack-large">
         <h1>todo list</h1>
         <form>
             <h2 className="label-wrapper">
                 <label htmlFor="new-todo-input" className="label-lg">
                     pending tasks
                 </label>
             </h2>
             <input
             type="text"
             id="new-todo-input"
             className="input input-lg"
             name="text"
             autoComplete="off"
             ></input>
             <button type="submit" className="btn btn-primaty btn-lg">
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
        </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))