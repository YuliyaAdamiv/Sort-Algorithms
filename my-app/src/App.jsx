import './App.css';
import Button from './components/Buttons/Button'
import Input from './components/Inputs/Input'
import Line from './components/line/Line'

function App() {
  return (<div className="box">
             <div className="left">
              <Input id="input" type="number"  placeholder="Enter number from 3 to 30"  />
              </div>
              <div className="right">
              <p id="numbers" className="mx-5 my-2 fs-5 font-monospace"></p>
              <Button id="generate" name="Generate Numbers" />
              <Button id="sort" name="Sort Numbers" />
              <div id="result" className=" mx-5 fs-5 font-monospace"></div>
              <div id="count" className=" count mx-5 fs-5 font-monospace"></div>
              </div> 
              <div className="price-slider"><span>from
              <Input id="min" type="number"  min="0" max="1000" placeholder="0"/>	to
              <Input id="max" type="number" min="0" max="1000" placeholder="1000"/></span>
              <Input value="100"   type="range" />
              <Input value="900"  type="range" />
              <div></div>
              <Line />
            <div></div>
              <Button id="apply" name="Apply" className="apply" />
            </div>
    </div> 
  );
}

export default App;
