import { useState } from "react";

function Bubble({initial_text,text,color,className}){

    const[text_,setText]=useState(initial_text)

    function handleClick(){
        setText(prevText=> prevText===initial_text ? text:initial_text)
    }

    return(
        <p onClick={()=>handleClick(text_)} style={{backgroundColor: color}} className={className}>{text_}</p>
    );

}

export default Bubble;