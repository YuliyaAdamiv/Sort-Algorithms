import React from 'react';
import './Button.module.css';
// import Apply from './Apply/Apply'
// import GenerateNumbers from './GenerateNumbers/GenerateNumbers'
// import SortNumbers from './SortNumbers/SortNumbers'

const Button=(props)=>{
const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    // switch (active) {
    //   case 1:
    //     return <GenerateNumbers />;
    //   case 2:
    //     return <SortNumbers />;
    //   case 3:
    //     return <Apply />;
    // }
  };

  return (
    <div className="button-toolbar">
      <button id={props.id} type="button" className="btn btn-primary d-block mx-5 my-2 fs-5 font-monospace apply" onClick={props.onClick}>{props.name}</button>
      {ActiveView()}
    </div>
  );
};
  export default Button;



  