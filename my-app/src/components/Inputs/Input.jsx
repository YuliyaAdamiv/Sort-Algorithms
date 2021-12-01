import './Input.module.css';


const Input=(props)=> {
  return (<div>
              <input  id={props.id} value={props.value} min='0' max='1000' type={props.type}  step="1" className="input mx-5 my-2 fs-5" placeholder={props.placeholder}  /> 
          </div> 
  );
}

export default Input;
