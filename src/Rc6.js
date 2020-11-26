'use strict';  
  
class IMG extends React.Component {
    constructor(props){
        super(props);
        this.state ={ url:this.props.url}
    } 
     Cng =() => {
         let vl = document.getElementById('inp').value;
         this.setState({url:vl})
     }
    render(){
    return (
       <div className="img">
    <img src = {this.state.url} alt = {this.props.desc}/>
         <br></br>
         <input id="inp"></input>
        <button onClick={this.Cng}>Change</button>
    </div> 
    );   
    } 
}  
const Img = <IMG url="images/index.jpeg" desc="some dude" />;

ReactDOM.render(Img,document.querySelector('#container'));

