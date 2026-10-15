const Button= ({name,onClick})=>{
    return(
        <button className="ButtonContainer" onClick={onClick}>
            {name}
        </button>

    )
}
export default Button;