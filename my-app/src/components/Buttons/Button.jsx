import './Button.module.css';

const Button =(props) =>{
  return (<div>    
              <button id={props.id} type="button" className="btn btn-primary d-block mx-5 my-2 fs-5 font-monospace apply">{props.name}</button>
         </div> 
  );
}

export default Button;
