'use strict';

class App extends React.Component{
     constructor(props){
         super(props)
         this.UpdateProduct = this.UpdateProduct.bind(this)
         this.UpdateProduct2 = this.UpdateProduct2.bind(this)
         this.state = {Total1:''}; 
                       
     }
     UpdateProduct(e){
         let subP = e.target.value
         let parent = e.target.parentElement
         let Nparent = parent.nextElementSibling
         let subP2 = Nparent.firstElementChild.value
         const finalP= Number(subP)*Number(subP2)
         this.setState((state)=>{
             return({Total1:finalP})
         })


     }
     UpdateProduct2(e){
         let subP = e.target.value
         let parent = e.target.parentElement
         let Nparent = parent.previousElementSibling
         let subP2 = Nparent.firstElementChild.value
         const finalP2= Number(subP)*Number(subP2)
         this.setState((state)=>{
             return({Total1:finalP2})
         })


    }
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
                      <th><input type="number" onInput={this.UpdateProduct}></input></th> 
                      <th>$<input type ="number" onInput={this.UpdateProduct2}></input></th> 
                      <th id ="th1">${this.state.Total1}</th>                   
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