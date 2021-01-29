'use strict'; 
function Item(props){
    let arr = Array.from(props.Storage)
    let arr2 =[]
    for( let i in arr){
        arr2.push(<tr id ={`N${i}`}>
        <th><input type="text" onInput={props.UpdateStorage} className="Name"></input></th>
        <th><input type="text" onInput={props.UpdateStorage2}></input></th> 
        <th><input type="number" onInput={props.UpdateProduct}></input></th> 
        <th><input type ="number" onInput={props.UpdateProduct2}></input></th>
        <th><input type="number" onInput={props.UpdateProduct3}></input></th>   
        <th><input type="number"></input></th>  
        <th><input type="number"></input></th>               
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
         this.addCost = this.addCost.bind(this)
         this.addVal = this.addVal.bind(this)
         this.SubtractCost = this.SubtractCost.bind(this)
         this.SubtractVal = this.SubtractVal.bind(this)
         this.state ={Storage:localStorage,TotalVal:0,TotalCost:0}
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
         let storageString =`{${storageName}} {${storageId}} {${storageItems}} {${storagePrice}} {${storagePrice2}}`
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
        let storageString=`{${storageName}} {${storageId}} {${storageItems}} {${storagePrice}} {${storagePrice2}}`
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
         let storageString =`{${storageName}} {${storageId}} {${subP}} {${subP2}} {${subP3}}`
         Storage.setItem(Id,storageString)
         const finalP= Number(subP)*Number(subP2)
         const finalP2 =Number(subP)*Number(subP3) 
         const Subtract = Number(N3parent.firstElementChild.value)
         const Subtract2 = Number(N4parent.firstElementChild.value)
         this.setState((state)=>{
              return {TotalCost:state.TotalCost-Subtract}
         })
         this.setState((state)=>{
             return {TotalVal:state.TotalVal-Subtract2}
         })
         N3parent.firstElementChild.setAttribute('value',finalP)
         N4parent.firstElementChild.setAttribute('value',finalP2)  
         this.setState((state)=>{
             return {TotalCost:state.TotalCost+finalP,TotalVal:state.TotalVal+finalP2}
         })
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
         let storageString = `{${storageName}} {${storageId}} {${subP2}} {${subP}} {${subP3}}`
         Storage.setItem(Id,storageString)
         const finalP = Number(subP)*Number(subP2)
         const Subtract = Number(N3parent.firstElementChild.value)
         this.setState((state)=>{
             return{TotalCost:state.TotalCost-Subtract}
         })
         N3parent.firstElementChild.setAttribute('value',finalP)
         this.setState((state)=>{
             return{TotalCost:state.TotalCost+finalP}
         })
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
       let storageString =`{${storageName}} {${storageId}} {${subP2}} {${subP3}} {${subP}}`
       Storage.setItem(Id,storageString)
       const finalP = Number(subP)*Number(subP2)
       let N3parent = parent.nextElementSibling.nextElementSibling 
       let Subtract = Number(N3parent.firstElementChild.value)
       this.setState((state)=>{
           return {TotalVal:state.TotalVal-Subtract}
       })
       N3parent.firstElementChild.setAttribute('value',finalP)
       this.setState((state)=>{
           return {TotalVal:state.TotalVal+finalP}
       })
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
            if(container.previousElementSibling === Item) {
                newId = 'N0'
            }else{
                firstId=container.previousElementSibling.lastElementChild.getAttribute('id') 
                let NfirstId =''
                for(let i = 1;i<firstId.length;i++){
                    NfirstId+=firstId[i]
                }
                console.log(NfirstId)
                newId = 'N'+String(Number(NfirstId)+1)
            }

            
        }else{
            startingPoint = container.previousElementSibling
            firstId = startingPoint.lastElementChild.getAttribute('id')
            let NfirstId =''
            for(let i = 1;i<firstId.length;i++){
                NfirstId+=firstId[i]
            }
            newId = 'N'+String(Number(NfirstId)+1)

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
            let storageString =`{${storageName}} {${storageId}} {${subP}} {${subP2}} {${subP3}}`
            Storage.setItem(newId,storageString)
            let Subtractor = document.getElementById('Subtractor')
            let Subtractor2 = document.getElementById('Subtractor2')
            let Adder = document.getElementById('Adder')
            let Adder2 = document.getElementById('Adder2')
            let input = new Event('input',{
                'view': window, 
                'bubbles': true, 
                'cancelable': false
               })
            const finalP= Number(subP)*Number(subP2)
            const finalP2 =Number(subP)*Number(subP3) 
            let SubtractVal = Number(N3parent.firstElementChild.value)
            let SubtractVal2 = Number(N4parent.firstElementChild.value)
            Subtractor.value = SubtractVal
            Subtractor2.value = SubtractVal2
            Subtractor.dispatchEvent(input)
            Subtractor2.dispatchEvent(input)
            N3parent.firstElementChild.setAttribute('value',finalP)
            N4parent.firstElementChild.setAttribute('value',finalP2)
            Adder.value = finalP
            Adder2.value = finalP2
            Adder.dispatchEvent(input)
            Adder2.dispatchEvent(input)
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
         let storageString = `{${storageName}} {${storageId}} {${subP2}} {${subP}} {${subP3}}`
         Storage.setItem(newId,storageString)
         let input = new Event('input',{
            'view': window, 
            'bubbles': true, 
            'cancelable': false
           })
         let Subtractor = document.getElementById('Subtractor')
         let Adder = document.getElementById('Adder')
         const finalP = Number(subP)*Number(subP2)
         let Subtract = Number(N3parent.firstElementChild.value)
         Subtractor.value = Subtract
         Subtractor.dispatchEvent(input)
         N3parent.firstElementChild.setAttribute('value',finalP)
         Adder.value=finalP
         Adder.dispatchEvent(input)
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
            let storageString =`{${storageName}} {${storageId}} {${subP2}} {${subP3}} {${subP}}`
            Storage.setItem(newId,storageString)
            let input = new Event('input',{
                'view': window, 
                'bubbles': true, 
                'cancelable': false
               })
            let Subtract =  Number(N3parent.firstElementChild.value)
            let Subtractor2 = document.getElementById('Subtractor2') 
            let Adder2 = document.getElementById('Adder2') 
            const finalP = Number(subP) * Number(subP2);
            let N3parent = parent.nextElementSibling.nextElementSibling;
            Subtractor2.value = Subtract
            Subtractor2.dispatchEvent(input)
            N3parent.firstElementChild.setAttribute('value', finalP);
            Adder2.value = finalP
            Adder2.dispatchEvent(input)
        }
        let UpdateStorage=(e)=>{
            let storageName = e.target.value
            let nextParent =e.target.parentElement.nextElementSibling
            let storageId = nextParent.firstElementChild.value
            let storageItems =nextParent.nextElementSibling.firstElementChild.value
            let storagePrice =nextParent.nextElementSibling.nextElementSibling.firstElementChild.value
            let storagePrice2 =nextParent.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
            let storageString =`{${storageName}} {${storageId}} {${storageItems}} {${storagePrice}} {${storagePrice2}}`
            Storage.setItem(newId,storageString)
        }
        let UpdateStorage2=(e)=>{
            let storageName = e.target.parentElement.previousElementSibling.firstElementChild.value
            let nextParent=e.target.parentElement.nextElementSibling
            let storageId=e.target.value
            let storageItems=nextParent.firstElementChild.value
            let storagePrice=nextParent.nextElementSibling.firstElementChild.value
            let storagePrice2=nextParent.nextElementSibling.nextElementSibling.firstElementChild.value
            let storageString=`{${storageName}} {${storageId}} {${storageItems}} {${storagePrice}} {${storagePrice2}}`
            Storage.setItem(newId,storageString)
        }
        let elm = <tr id = {newId}>
        <th><input type="text" onInput={UpdateStorage} className ="Name"></input></th>
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
    addCost(e){
        const data = Number(e.target.value)
        this.setState((state)=>{
            return {TotalCost:state.TotalCost+data}
        })

    }
    addVal(e){
        const data = Number(e.target.value)
        this.setState((state)=>{
            return {TotalVal:state.TotalVal+data}
        })
    }
    SubtractCost(e){
        const data = Number(e.target.value)
        this.setState((state)=>{
            return {TotalCost:state.TotalCost-data}
        })
    }
    SubtractVal(e){
        const data = Number(e.target.value)
        this.setState((state)=>{
            return {TotalVal:state.TotalVal-data}
        }) 
    }
    componentDidMount(){
        const Storage = window.localStorage
        if(Array.from(Storage).length === 0){
          null
        }else{
            for(let i =0;i<Storage.length;i++){
                 let key =  Storage.key(i)
                 let RawData =Array.from(Storage.getItem(key))
                 let parent = document.getElementById(key)
                 let inputs = Array.from(parent.children)
                 let InpEvent = new Event('input',{
                    'view': window, 
                    'bubbles': true, 
                    'cancelable': false
                   })
                let finalData = []
                for(let e=0;e<RawData.length;e++){
                    let vr=''
                   if( RawData[e] === '{'  ){
                        let tvar = 1
                        while(RawData[e+tvar]!=='}'){
                            vr+=RawData[e+tvar]
                            tvar++
                        }
                        e+=tvar
                        finalData.push(vr)
                        vr=''
                    }
                      
                   
                }
                for(let j=0;j<5;j++){
                    inputs[j].firstElementChild.value =finalData[j]
                    inputs[j].firstElementChild.dispatchEvent(InpEvent)

                }
             }
        }
    }
   render(){
       return(
           <main>
               <section id="InfoAndSearch">
                   <h1 id="mainInfo">Valor total ${this.state.TotalVal}<br></br>Costo total ${this.state.TotalCost}
                   </h1>
                   <input id="Adder" onInput={this.addCost} hidden></input>
                   <input id="Adder2" onInput={this.addVal} hidden></input>
                   <input id="Subtractor" onInput={this.SubtractCost} hidden></input>
                   <input id="Subtractor2" onInput={this.SubtractVal} hidden></input>
               </section>
               <br></br>
               <section id="InformationSource">
                   <table id="mainTable">   
                   <thead>
                   <tr>
                     <th>Nombre </th> 
                     <th>id</th>
                     <th>Cantidad</th> 
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
                   <button type="button" id="newElement" onClick={this.AddProduct}>Nuevo producto</button> 
               </section>
           </main> 
       ) 
   }   
} ;  

ReactDOM.render(<App />,document.getElementById('root'))