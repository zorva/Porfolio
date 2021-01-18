'use strict'; 
function Item(props){
    let arr = Array.from(props.Storage)
    let arr2 =[]
    for( let i in arr){
        arr2.push(<tr id ={`N${i}`}>
        <th><input type="text"></input></th>
        <th><input type="text"></input></th> 
        <th><input type="number" onInput={props.UpdateProduct}></input></th> 
        <th><input type ="number" onInput={props.UpdateProduct2}></input></th>
        <th><input type="number" onInput={props.UpdateProduct3}></input></th>   
        <th><input></input></th>  
        <th><input></input></th>               
        </tr>)
    }
    return arr2
}

class App extends React.Component{
     constructor(props){
         super(props)
         this.UpdateProduct = this.UpdateProduct.bind(this)
         this.UpdateProduct2 = this.UpdateProduct2.bind(this)
         this.UpdateProduct3 = this.UpdateProduct3.bind(this)
         this.AddProduct = this.AddProduct.bind(this)
         this.state = {Storage:localStorage}; 
     }
     UpdateProduct(e){
         let subP = e.target.value
         let parent = e.target.parentElement
         let Nparent = parent.nextElementSibling
         let N2parent = Nparent.nextElementSibling
         let N3parent = N2parent.nextElementSibling
         let N4parent = N3parent.nextElementSibling
         let subP3 = N2parent.firstElementChild.value
         let subP2 = Nparent.firstElementChild.value
         const finalP= Number(subP)*Number(subP2)
         const finalP2 =Number(subP)*Number(subP3) 
         N3parent.firstElementChild.setAttribute('value',finalP)
         N4parent.firstElementChild.setAttribute('value',finalP2)
           
     }
     UpdateProduct2(e){
         let subP = e.target.value
         let parent = e.target.parentElement
         let N2parent = parent.nextElementSibling
         let N3parent = N2parent.nextElementSibling
         let Nparent = parent.previousElementSibling
         let subP2 = Nparent.firstElementChild.value
         const finalP = Number(subP)*Number(subP2)
         N3parent.firstElementChild.setAttribute('value',finalP)

     }
     UpdateProduct3(e){
       let subP = e.target.value
       let parent = e.target.parentElement
       let Nparent = parent.previousElementSibling
       let N2parent = Nparent.previousElementSibling
       let subP2 = N2parent.firstElementChild.value
       const finalP = Number(subP)*Number(subP2)
       let N3parent = parent.nextElementSibling.nextElementSibling
       N3parent.firstElementChild.setAttribute('value',finalP)
    }  
    AddProduct(e){
        let table = document.getElementById('mainTable')
        let Item = document.getElementById("InitialRenderingContainer")
        let container = table.lastElementChild
        let startingPoint 
        let newId 
        let firstId
        if(Item.childElementCount === 0){
            container.previousElementSibling === Item ?newId = 'N0':
            (firstId=container.previousElementSibling.lastElementChild.getAttribute('id') ,newId = 'N'+String(Number(firstId[1])+1));

            
        }else{
            startingPoint = container.previousElementSibling
            firstId = startingPoint.lastElementChild.getAttribute('id')
            newId = 'N'+String(Number(firstId[1])+1)

        }
        let UpdateProduct =  (e)=>{
            let subP = e.target.value
            let parent = e.target.parentElement
            let Nparent = parent.nextElementSibling
            let N2parent = Nparent.nextElementSibling
            let N3parent = N2parent.nextElementSibling
            let N4parent = N3parent.nextElementSibling
            let subP3 = N2parent.firstElementChild.value
            let subP2 = Nparent.firstElementChild.value
            const finalP= Number(subP)*Number(subP2)
            const finalP2 =Number(subP)*Number(subP3) 
            N3parent.firstElementChild.setAttribute('value',finalP)
            N4parent.firstElementChild.setAttribute('value',finalP2)
        }
        let UpdateProduct2 = (e)=>{
         let subP = e.target.value
         let parent = e.target.parentElement
         let N2parent = parent.nextElementSibling
         let N3parent = N2parent.nextElementSibling
         let Nparent = parent.previousElementSibling
         let subP2 = Nparent.firstElementChild.value
         const finalP = Number(subP)*Number(subP2)
         N3parent.firstElementChild.setAttribute('value',finalP)

        }
        let UpdateProduct3= (e)=> {
            let subP = e.target.value;
            let parent = e.target.parentElement;
            let Nparent = parent.previousElementSibling;
            let N2parent = Nparent.previousElementSibling;
            let subP2 = N2parent.firstElementChild.value;
            const finalP = Number(subP) * Number(subP2);
            let N3parent = parent.nextElementSibling.nextElementSibling;
            N3parent.firstElementChild.setAttribute('value', finalP);
        }
        let elm = <tr id = {newId}>
        <th><input type="text"></input></th>
        <th><input type="text"></input></th>
        <th><input type="number" onInput={UpdateProduct}
        ></input></th> 
        <th><input type ="number" onInput={UpdateProduct2}></input></th>
        <th><input type="number" onInput={UpdateProduct3}></input></th>   
        <th><input></input></th>  
        <th><input></input></th>   
      </tr>
        ReactDOM.render(elm,container)
        let NewContainer = document.createElement('tbody')
        table.append(NewContainer)
        console.log(table)
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
                       <label htmlFor="Search">Busca productos</label>
                   </form>
               </section>
               <br></br>
               <section id="InformationSource">
                   <table id="mainTable">   
                   <thead>
                   <tr>
                     <th>Nombre </th> 
                     <th>id</th>
                     <th>Cantidad por unidad </th> 
                      <th>Precio afiliado </th>
                      <th>Precio publico</th> 
                      <th>Costo Total</th>
                      <th>Valor Total(publico)</th>
                      </tr>
                      </thead>
                      <tbody id = "InitialRenderingContainer">
                      <Item Storage = {this.state.Storage} UpdateProduct ={this.UpdateProduct} 
                      UpdateProduct2={this.UpdateProduct2} UpdateProduct3={this.UpdateProduct3}/> 
                      </tbody>
                      <tbody>
                      </tbody>        
                      </table>        
                   <button type="button" id="newElement" onClick={this.AddProduct}></button>
                   <label htmlFor="newElement" id="LabelButtonAdd">Agrega nueva mercancia!</label>    
               </section>
           </main> 
       ) 
   }   
} ;  

ReactDOM.render(<App />,document.getElementById('root'))