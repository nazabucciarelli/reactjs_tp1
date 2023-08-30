import { Component } from "react";
import MayorOMenor from "../mayor_o_menor/MayorOMenor";

// Exercise 12

class ListPersonsExtended extends Component{

    render(){
        return <ul style={{listStyle:"none",padding:"1em"}}>
            {
            this.props.persons.map((item) => (
                <li style={{textAlign:"center",padding:"0.5em"}} key={item.id}>{item.lastname}, {item.name} <MayorOMenor age={item.age}/></li>   
            ))
            }
            </ul>
    }
}

ListPersonsExtended.defaultProps = {
    "name":"Name",
    "lastname":"Lastname",
    "age":17
}

// Exercise 13

/* Las maneras de renderizado condicional más comunes son mediante el operador ternario, con el formato
condicion ? true : false, despues tenemos el renderizado condicional sin ternario, utilizando los operadores
&& o || y finalmente otra manera es utilizando sentencias if-else, y si queremos que no renderice el componente
hacemos que retorne null. */

export default ListPersonsExtended;