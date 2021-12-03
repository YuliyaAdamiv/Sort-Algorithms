import './App.css';
import Button from './components/Buttons/Button'
import Input from './components/Inputs/Input'
import Line from './components/line/Line'
import GenerateNumbers from './components/Buttons/GenerateNumbers/GenerateNumbers'

function fin(name){

  return ()=>{alert(name)} 
}

function App() {
  return (<div className="box">
             <div className="left">
              <Input id="input" type="number"  placeholder="Enter number from 3 to 30"  />
              </div>
              <div className="right">
              <p id="numbers" className="mx-5 my-2 fs-5 font-monospace"></p>
              <GenerateNumbers />
              <Button id="sort" name="Sort Numbers" onClick={fin('Sort Numbers')}/>
              <div id="result" className=" mx-5 fs-5 font-monospace"></div>
              <div id="count" className=" count mx-5 fs-5 font-monospace"></div>
              </div> 
              <div className="price-slider"><span>from
              <Input id="min" type="number"   placeholder="0"/>	to
              <Input id="max" type="number"  placeholder="1000"/></span>
              <Input value="100"   type="range" />
              <Input value="900"  type="range" />
              <div></div>
              <Line />
            <div></div>
              <Button id="apply" name="Apply" className="apply" onClick={fin('')}/>
            </div>
    </div> 
  );
}

export default App;


