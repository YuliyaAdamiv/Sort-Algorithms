

import './App.css';


function App() {
  return (<div className="box">
             <div className="left">
              <input id="input" type="number" className="input mx-5 my-2 fs-5" placeholder="Enter number from 3 to 30" onblur='validate(this);' />
              </div>
              <div className="right">
              <p id="numbers" className="mx-5 my-2 fs-5 font-monospace"></p>
              <button id="generate"  type="button" className="btn btn-primary mx-5 my-2 fs-5 font-monospace">Generate Numbers</button>
              <button id="sort"  type="button" className="btn btn-primary d-block mx-5 my-2 fs-5 font-monospace">Sort</button>
              <div id="result" className=" mx-5 fs-5 font-monospace"></div>
              <div id="count" className=" count mx-5 fs-5 font-monospace"></div>
              </div> 
              <div className="price-slider"><span>from
              <input id="min" type="number"  min="0" max="1000" placeholder="0"/>	to
              <input id="max" type="number" min="0" max="1000" placeholder="1000"/></span>
              <input value="100" min="0" max="1000" step="1" type="range" />
              <input value="900" min="0" max="1000" step="1" type="range" />
              <svg width="100%" height="24">
              <line x1="4" y1="0" x2="300" y2="0" stroke="#212121" stroke-width="12" stroke-dasharray="1 28"></line>
            </svg>
              <button id="apply"  type="button" className="apply btn btn-primary d-block  fs-5 font-monospace">Apply</button>
            </div>
    </div> 
  );
}

export default App;
