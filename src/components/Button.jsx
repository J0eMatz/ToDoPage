export default function Button (props) {
    console.log("SE RENDERIZA BUTTON")
    return (
        <button className={props.className} onClick={props.onClick}>
          {props.children}    
        </button>
    )
}