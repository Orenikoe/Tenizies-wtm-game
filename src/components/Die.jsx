
function Die(props) {
const styles = {
    backgroundColor: props.isHeld === true ? '#59E391': 'bisque'
}

return(
    <div className="dice-box" style={styles} onClick={props.hold} >
      <h2> {props.value}</h2> 
        </div>
)

}


export default Die