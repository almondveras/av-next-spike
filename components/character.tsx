
const Character = (props: any) => {
  return (
    <div style={{
      display: 'flex',
      marginTop: 8,
      padding: 8,
      backgroundColor: 'lightgreen',
      justifyContent: 'space-between'
    }}>
      <div>
        <div>{props.name}</div>
        <div>
          <li>Gender: {props.gender}</li>
          <li>Species: {props.species}</li>
          <li>Origin: {props.origin.name}</li>
        </div>
      </div>
      <img height={128} src={props.image} />
    </div>
  )
}

export default Character