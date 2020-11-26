'use strict';  
function Changer(){
    return(
        <div className="Changer">
     <input></input>
    <button>Change</button>
        </div>
    )
}
class IMG extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.url
    } 
    render(){
    return (
       <div className="img">
    <img src = {this.state} alt = {this.props.desc}/>
    {Changer()}
    </div> 
    );   
    } 
}    
const Img = <IMG url="images/index.jpeg" desc="some dude" />;

ReactDOM.render(Img,document.querySelector('#container'));