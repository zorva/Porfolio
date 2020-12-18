'use strict';

class Compt extends React.Component {
    constructor(props){
        super(props);
        this.state = {color:props.color}
    }
    render(){
        return(
            <div className="cont">
                COLOR
            </div>
        )
    }
}
   
const Elm = <Compt color="red" />

ReactDOM.render(Elm,document.getElementById('root'))