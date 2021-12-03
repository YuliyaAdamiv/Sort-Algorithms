import React from "react";
import Button from "../Button"


function fin(name){

  return ()=>{alert(name)} 
}
const GenerateNumbers= () => {

  function fin(name){

    return ()=>{alert(name)} 
  }

  return (<div> 
   <Button id="generate" name="Generate Numbers"  onClick={fin('Generate Numbers')}/>
  </div>);
};

export default GenerateNumbers;


