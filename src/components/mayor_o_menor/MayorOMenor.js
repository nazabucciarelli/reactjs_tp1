// Exercise 11

function MayorOMenor(props){
    let age = props.age;
    if (age >= 18){
        return <p style={{textAlign:"center", color:"blue"}}>Es mayor de edad</p>
    }
    return <p style={{textAlign:"center",color:"red"}}>Es menor de edad</p>
}

MayorOMenor.defaultProps = {
    "age": 18
}

export default MayorOMenor;