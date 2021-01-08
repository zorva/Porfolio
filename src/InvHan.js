'use strict'; 
class App extends React.Component{
     constructor(props){
         super(props)
         this.UpdateProduct = this.UpdateProduct.bind(this)
         this.UpdateProduct2 = this.UpdateProduct2.bind(this)
         this.UpdateProduct3 = this.UpdateProduct3.bind(this)
         this.state = {Total1:'',Total2:''}; 
                       
     }
     UpdateProduct(e){
         let subP = e.target.value
         let parent = e.target.parentElement
         let Nparent = parent.nextElementSibling
         let N2parent = Nparent.nextElementSibling
         let subP3 = N2parent.firstElementChild.value
         let subP2 = Nparent.firstElementChild.value
         const finalP= Number(subP)*Number(subP2)
         const finalP2 =Number(subP)*Number(subP3) 
         this.setState((state)=>{  
             return({Total1:finalP})
         })  
         this.setState((state)=>{  
            return({Total2:finalP2})
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
         })}
     UpdateProduct3(e){
       let subP = e.target.value
       let parent = e.target.parentElement
       let Nparent = parent.previousElementSibling
       let N2parent = Nparent.previousElementSibling
       let subP2 = N2parent.firstElementChild.value
       const finalP = Number(subP)*Number(subP2)
       this.setState((state)=>{    
        return({Total2:finalP})
       }) 
    }
    AddProduct=()=>{
      let table = document.getElementById('mainTable')
      let tr =document.createElement('tr')
      let trArray = []
      for( let i = 0;i<7;i++){
      trArray.push((document.createElement('th')))
      }
      for( let i in trArray){
          trArray[i].append(document.createElement('input'))
          tr.append(trArray[i])
      }
      tr.setAttribute('id',"0")
      for(let i = 0;i<2;i++){
          trArray[i].setAttribute('type','text')
      }
      for(let i= 2;i<trArray.length-2;i++){   
          trArray[i].setAttribute('type','number')
      }
      table.append(tr)
      console.log(tr) 
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
                     <th>id</th>
                     <th>Cantidad por unidad </th> 
                      <th>Precio afiliado </th>
                      <th>Precio publico</th> 
                      <th>Costo Total</th>
                      <th>Valor Total(publico)</th>
                      </tr>
                      <tr id ="1">
                      <th><input type="text"></input></th>
                      <th><input type="text"></input></th>
                      <th><input type="number" onInput={this.UpdateProduct}></input></th> 
                      <th><input type ="number" onInput={this.UpdateProduct2}></input></th>
                      <th><input type="number" onInput={this.UpdateProduct3}></input></th>   
                      <th>${this.state.Total1}</th>  
                      <th>${this.state.Total2}</th>               
                      </tr>              
                      </table>        
                   <button type="button" id="newElement" onClick={this.AddProduct}></button>
                   <label for="newElement" id="LabelButtonAdd">Agrega nueva mercancia!</label>    
               </section>
           </main> 
       ) 
   }   
} ;  

ReactDOM.render(<App />,document.getElementById('root'))