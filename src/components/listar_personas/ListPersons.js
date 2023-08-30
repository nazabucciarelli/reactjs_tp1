import { Component } from "react";

// Exercise 9

class ListPersons extends Component{

    render(){
        return <ul style={{listStyle:"none",padding:"1em"}}>
            {
            this.props.persons.map((item) => (
                <li style={{textAlign:"center",padding:"0.5em"}} key={item.id}>{item.lastname}, {item.name}</li>
            ))
            }
            </ul>
    }
}

// Exercise 10

/* El atributo key se utiliza en React para que pueda trackear la identidad de cada elemento, y asi puede
eficientemente actualizar la lista si los elementos cambian. Si no se especifica una key, React le asignará 
por defecto el índice en el array como key, pero esto puede llevar a problemas si reordenamos o filtramos la
lista, ya que React pensará que los elementos han cambiado y los re-renderizará a todos innecesariamente, lo 
cual sería ineficiente. La key debe ser única para que React pueda hacerle un seguimiento a cada elemento
individualmente para que en caso de que haya reordenamientos o filtrados, solo actualice estos y no la lista
entera.*/

export default ListPersons