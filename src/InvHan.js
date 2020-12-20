'use strict';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     const first = document.querySelector('#Totals');
    //     const th = first.parentElement;
    //     const th1 = th.previousElementSibling;  
    //     const Inp1 = th1.firstElementChild;
    //     const th2 = th1.previousElementSibling;
    //     // let Inp2 = th2.firstElementChild;
    //     this.state = {Total1: Inp1.hasAttribute('value') }; 

    // }
    AddProduct=()=>{
      let AddForm = document.getElementById('AddForm')   
      AddForm.hidden === false ? AddForm.hidden = true : AddForm.hidden = false; 
    }
   render(){
       return(
           <main>
               <section id="InfoAndSearch">
                   <h1 id="mainInfo">El valor total del inventario es <span id="ElementsValue">$0</span> y contiene   
                    <span id ="ElementsNumber"> 0</span> productos
                   </h1>
                   <form id="Searcher">
                       <input type="text" id="Search"></input>
                       <label for="Search">Busca productos</label>
                   </form>
               </section>
               <br></br>
               <section id="InformationSource">
                   <table id="mainTable">   
                   <tr>
                     <th>Nombre </th> 
                     <th> Cantidad por unidad </th> 
                      <th> Precio por unidad </th> 
                      <th> valor Total </th></tr>
                      <tr> 
                      <th>Ejemplo Producto</th> {/* prototype product in the inventory */}
                      <th><input type="number"></input></th> 
                      <th>$<input type ="number"></input></th> 
                      <th><p id ="Totals">$150</p></th> {/*{this.state.Total1}*/}
                      </tr>
                      </table> 
                   <button type="button" id="newElement" onClick={this.AddProduct}></button>
                   <label for="newElement" id="LabelButtonAdd">Agrega nueva mercancia!</label>
                   <form id="AddForm" hidden> 
                       
                       <input id="name"></input>
                       <label for="name" className ="FormLabels">Nombre</label><br></br>               
                       <input id="units"></input>
                       <label for="units" className ="FormLabels">Cantidad</label><br></br>
                       <input id="value"></input>
                       <label for="value" className ="FormLabels">Precio unitario</label><br></br>
                       <button type="button">Crear!</button> 
                   </form>    
               </section>
           </main> 
       ) 
   }   
} ;  

ReactDOM.render(<App />,document.getElementById('root'))