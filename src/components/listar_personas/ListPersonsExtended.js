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

// Exercise 14

/* La propiedad defaultProps no es realmente necesaria, pero es útil para dar propiedades por
defecto a algún componente, en caso éste sea invocado y no se inserten los atributos que requiere. */

// Exercise 16  

/* React Developer Tools es una extensión para navegadores. A través de esta herramienta podemos 
observar el árbol de elementos de una aplicación React, con sus states, props y otras propiedades 
permitiéndonos encontrar errores y saber cómo está estructurada dicha página.*/

export default ListPersonsExtended;