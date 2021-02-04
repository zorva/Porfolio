var DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

class App extends React.PureComponent {
    constructor(props){
        super(props)
    this.state ={
        tasks:this.props.tasks
    }
}

    addTask=(name)=>{
     let lastID = this.props.tasks[this.props.tasks.length-1].id
     let newID = ''
     for(let i=5;i<lastID.length;i++){
         newID+=lastID[i]
     }
     newID=Number(newID)+1
     const newTask = {id:'todo-'+newID,name:name,completed:false}
     this.props.tasks.push(newTask)
     this.forceUpdate();
     console.log(this.state.tasks)
    }
    render(){
        const taskList = this.state.tasks.map(
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