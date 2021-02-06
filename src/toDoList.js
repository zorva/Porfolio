let DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];
let FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };
class App extends React.Component {
    constructor(props){
        super(props)
    this.state ={
        tasks:this.props.tasks
    }
}
    addTask=(name)=>{

     let lastID =this.state.tasks.length ===0?'todo-0':this.state.tasks[this.state.tasks.length-1].id
     let newID = ''
     for(let i=5;i<lastID.length;i++){
         newID+=lastID[i]
     }
     newID=Number(newID)+1
     const newTask = {id:'todo-'+newID,name:name,completed:false}
     this.setState(
         {tasks:[...this.state.tasks,newTask]}
     )
    }
    toggleTaskCompleted=(id)=>{
        const updateTasks = this.state.tasks.map(task=>{
            if(id===task.id){
                return {...task,completed:!task.completed}
            }
            return task 
        })
        this.setState(
             {tasks:updateTasks})
    }
    deleteTask=(id)=>{
        const remainingTasks = this.state.tasks.filter(task=>id!==task.id)
        this.setState(
            {tasks:remainingTasks}
        )
        this.forceUpdate();
    }
    editTask=(id,newName)=>{
          const editTasks = this.state.tasks.map(task=>{
           if(id==task.id){
               task={...task,name:newName}
           }
           return task 
          })
          this.setState(
              {tasks:editTasks}
          )
          this.forceUpdate();
    }
    render(){
        const taskList = this.state.tasks.map(
        task => 
        <Todo 
        id = {task.id} 
        name = {task.name} 
        completed = {task.completed} 
        key = {task.id}
        toggleTaskCompleted={this.toggleTaskCompleted}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
         /> )
         const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
         const headingText = `${taskList.length} ${tasksNoun} remaining`;
        return( 
        <div className="todoapp stack-large">
         <Form addTask={this.addTask}/>
         <div className="filters btn-group stack-exception" >
            <FilterButton/>
            <FilterButton/>
            <FilterButton/>
         </div>
         <h2 id="list-heading">
        {headingText}
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