function SaludarPersonalizado(props) {
    const {name, lastname} = props;
    return (
      <h2 style={{textAlign:'center'}}> Welcome {lastname}, {name} </h2>
    )
}

SaludarPersonalizado.defaultProps = {
  name:'Name',
  lastname: 'Lastname'
}

export default SaludarPersonalizado