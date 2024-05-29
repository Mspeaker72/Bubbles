import { useEffect, useState } from "react";

function Bubble({initial_text,text,color,className}){

    const[text_,setText]=useState(initial_text)

    function handleClick(){
        setText(prevText=> prevText===initial_text ? text:initial_text)
       
    }

    useEffect(()=>speak,[text_])

    function speak(){
        

        if(text_===initial_text){
            const utterance = new SpeechSynthesisUtterance(text)
            window.speechSynthesis.speak(utterance);
            return
        }
        const utterance = new SpeechSynthesisUtterance(initial_text)
            window.speechSynthesis.speak(utterance);
            return
       
    }
    return(
    
        <p onClick={()=>handleClick(text_)} style={{backgroundColor: color}} className={className}>{text_}</p>
      
        
    );

}

export default Bubble;