'use strict'; 
function Item(props){
    let arr = Array.from(props.Storage)
    let arr2 =[]
    for( let i in arr){
        arr2.push(<tr id ={`N${i}`}>
        <th><input type="text" onInput={props.UpdateStorage}></input></th>
        <th><input type="text" onInput={props.UpdateStorage2}></input></th> 
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
         this.state ={Storage:localStorage}
     }
     UpdateStorage(e){
         let Storage = window.localStorage
         let Id = e.target.parentElement.parentElement.getAttribute('id')
         let storageName = e.target.value
         let nextParent =e.target.parentElement.nextElementSibling
         let storageId = nextParent.firstElementChild.value
         let storageItems =nextParent.nextElementSibling.firstElementChild.value
         let storagePrice =nextParent.nextElementSibling.nextElementSibling.firstElementChild.value
         let storagePrice2 =nextParent.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
         let storageString =`${storageName} ${storageId} ${storageItems} ${storagePrice} ${storagePrice2}`
         Storage.setItem(Id,storageString)
     }
      UpdateStorage2(e){
        let Storage = window.localStorage
        let Id = e.target.parentElement.parentElement.getAttribute('id')
        let storageName = e.target.parentElement.previousElementSibling.firstElementChild.value
        let nextParent=e.target.parentElement.nextElementSibling
        let storageId=e.target.value
        let storageItems=nextParent.firstElementChild.value
        let storagePrice=nextParent.nextElementSibling.firstElementChild.value
        let storagePrice2=nextParent.nextElementSibling.nextElementSibling.firstElementChild.value
        let storageString=`${storageName} ${storageId} ${storageItems} ${storagePrice} ${storagePrice2}`
        Storage.setItem(Id,storageString)
    }
     UpdateProduct(e){
        let Storage = window.localStorage
        let Id = e.target.parentElement.parentElement.getAttribute('id')
         let subP = e.target.value
         let parent = e.target.parentElement
         let Nparent = parent.nextElementSibling
         let N2parent = Nparent.nextElementSibling
         let N3parent = N2parent.nextElementSibling
         let N4parent = N3parent.nextElementSibling
         let subP3 = N2parent.firstElementChild.value
         let subP2 = Nparent.firstElementChild.value
         let storageId = parent.previousElementSibling.firstElementChild.value
         let storageName = parent.previousElementSibling.previousElementSibling.firstElementChild.value
         let storageString =`${storageName} ${storageId} ${subP} ${subP2} ${subP3}`
         Storage.setItem(Id,storageString)
         const finalP= Number(subP)*Number(subP2)
         const finalP2 =Number(subP)*Number(subP3) 
         N3parent.firstElementChild.setAttribute('value',finalP)
         N4parent.firstElementChild.setAttribute('value',finalP2)
           
     }
     UpdateProduct2(e){
        let Storage = window.localStorage
        let Id = e.target.parentElement.parentElement.getAttribute('id')
         let subP = e.target.value
         let parent = e.target.parentElement
         let N2parent = parent.nextElementSibling
         let N3parent = N2parent.nextElementSibling
         let Nparent = parent.previousElementSibling
         let subP2 = Nparent.firstElementChild.value
         let storageId = Nparent.previousElementSibling.firstElementChild.value
         let storageName = Nparent.previousElementSibling.previousElementSibling.firstElementChild.value
         let subP3 = N2parent.firstElementChild.value
         let storageString = `${storageName} ${storageId} ${subP2} ${subP} ${subP3}`
         Storage.setItem(Id,storageString)
         const finalP = Number(subP)*Number(subP2)
         N3parent.firstElementChild.setAttribute('value',finalP)

     }
     UpdateProduct3(e){
       let Storage = window.localStorage
       let Id = e.target.parentElement.parentElement.getAttribute('id')
       let subP = e.target.value
       let parent = e.target.parentElement
       let Nparent = parent.previousElementSibling
       let N2parent = Nparent.previousElementSibling
       let subP2 = N2parent.firstElementChild.value
       let subP3 = Nparent.firstElementChild.value;
       let storageId = N2parent.previousElementSibling.firstElementChild.value
       let storageName =N2parent.previousElementSibling.previousElementSibling.firstElementChild.value
       let storageString =`${storageName} ${storageId} ${subP2} ${subP3} ${subP}`
       Storage.setItem(Id,storageString)
       const finalP = Number(subP)*Number(subP2)
       let N3parent = parent.nextElementSibling.nextElementSibling
       N3parent.firstElementChild.setAttribute('value',finalP)
    }  
    AddProduct(e){
        let table = document.getElementById('mainTable')
        let Item = document.getElementById("InitialRenderingContainer")
        let container = table.lastElementChild
        let Storage = window.localStorage
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
        Storage.setItem(newId,'')
        let UpdateProduct =  (e)=>{
            let subP = e.target.value
            let parent = e.target.parentElement
            let Nparent = parent.nextElementSibling
            let N2parent = Nparent.nextElementSibling
            let N3parent = N2parent.nextElementSibling
            let N4parent = N3parent.nextElementSibling
            let subP3 = N2parent.firstElementChild.value
            let subP2 = Nparent.firstElementChild.value
            let storageId = parent.previousElementSibling.firstElementChild.value
            let storageName = parent.previousElementSibling.previousElementSibling.firstElementChild.value
            let storageString =`${storageName} ${storageId} ${subP} ${subP2} ${subP3}`
            Storage.setItem(newId,storageString)
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
         let storageId = Nparent.previousElementSibling.firstElementChild.value
         let storageName = Nparent.previousElementSibling.previousElementSibling.firstElementChild.value
         let subP3 = N2parent.firstElementChild.value
         let storageString = `${storageName} ${storageId} ${subP2} ${subP} ${subP3}`
         Storage.setItem(newId,storageString)
         const finalP = Number(subP)*Number(subP2)
         N3parent.firstElementChild.setAttribute('value',finalP)

        }
        let UpdateProduct3= (e)=> {
            let subP = e.target.value;
            let parent = e.target.parentElement;
            let Nparent = parent.previousElementSibling;
            let N2parent = Nparent.previousElementSibling;
            let subP2 = N2parent.firstElementChild.value;
            let subP3 = Nparent.firstElementChild.value;
            let storageId = N2parent.previousElementSibling.firstElementChild.value
            let storageName =N2parent.previousElementSibling.previousElementSibling.firstElementChild.value
            let storageString =`${storageName} ${storageId} ${subP2} ${subP3} ${subP}`
            Storage.setItem(newId,storageString)
            const finalP = Number(subP) * Number(subP2);
            let N3parent = parent.nextElementSibling.nextElementSibling;
            N3parent.firstElementChild.setAttribute('value', finalP);
        }
        let UpdateStorage=(e)=>{
            let storageName = e.target.value
            let nextParent =e.target.parentElement.nextElementSibling
            let storageId = nextParent.firstElementChild.value
            let storageItems =nextParent.nextElementSibling.firstElementChild.value
            let storagePrice =nextParent.nextElementSibling.nextElementSibling.firstElementChild.value
            let storagePrice2 =nextParent.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
            let storageString =`${storageName} ${storageId} ${storageItems} ${storagePrice} ${storagePrice2}`
            Storage.setItem(newId,storageString)
        }
        let UpdateStorage2=(e)=>{
            let storageName = e.target.parentElement.previousElementSibling.firstElementChild.value
            let nextParent=e.target.parentElement.nextElementSibling
            let storageId=e.target.value
            let storageItems=nextParent.firstElementChild.value
            let storagePrice=nextParent.nextElementSibling.firstElementChild.value
            let storagePrice2=nextParent.nextElementSibling.nextElementSibling.firstElementChild.value
            let storageString=`${storageName} ${storageId} ${storageItems} ${storagePrice} ${storagePrice2}`
            Storage.setItem(newId,storageString)
        }
        let elm = <tr id = {newId}>
        <th><input type="text" onInput={UpdateStorage}></input></th>
        <th><input type="text" onInput={UpdateStorage2}></input></th>
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
    }  
    componentDidMount(){
        let InitialTable = document.getElementById("InitialRenderingContainer")
        const Storage = window.localStorage
        if(Array.from(Storage).length === 0){
          null
        }else{
            for(let i of Array.from(InitialTable.children)){
              let key = i.id
              let RawData = Array.from(Storage.getItem(key))
              let Arrdata =[]
              let CompVar =' '
              for(let j of RawData){
                let TemporalGatherer =''
                j===CompVar?(Arrdata.push(TemporalGatherer),console.log(TemporalGatherer),TemporalGatherer=''):TemporalGatherer+=j
            }
                 for(let e =0;e<5;e++){
                       let destination = Array.from(i.children)[e].firstElementChild
                       destination.value = Arrdata[e]
                 }
             }
        }
      console.log(Array.from(InitialTable.children[0].children)[0])
        
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
                      UpdateProduct2={this.UpdateProduct2} UpdateProduct3={this.UpdateProduct3} 
                      UpdateStorage={this.UpdateStorage} UpdateStorage2={this.UpdateStorage2}/> 
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