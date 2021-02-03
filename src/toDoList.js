const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

class App extends React.Component {
    constructor(props){
        super(props)
    this.state ={
        tasks:this.props.tasks
    }
}

    addTask=(name)=>{
     let newId = Number(this.state.tasks[this.state.tasks.length-1].id[5])+1
     const newTask = {id:'todo-'+newId,name:name,completed:false}
     this.setState(state=>{
         return{tasks:state.tasks.push(newTask)}
     })
     console.log(this.state.tasks)
    }
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
         <Form addTask={this.addTask}/>
         <div className="filters btn-group stack-exception" >
            <FilterButton/>
            <FilterButton/>
            <FilterButton/>
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