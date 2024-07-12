import syles from "./Button.module.css";


function Button(){
    //Inline
    const styles= {
        backgroundColor: "hsl(200, 100%, 50%)",
        color:"white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return(
        <button className={syles.button}>Click me</button>
    )
}

export default Button