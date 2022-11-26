import React, { useState } from "react";

function Guess() {
  //mode usestate
  const [mode, setMode] = useState();
  const [gameActive, setActive] = useState(false);
  const [inputVal, setInputVal] = useState(0);
  const [priNumber, setPrivate] = useState();
  const [moves, setMoves] = useState(1);
  const [totalMoves, setTotalMoves] = useState(4);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);
  const [status, setStatus] = useState(false);
  const [text, setText] = useState("");
  const [option, setOption] = useState(4);
  const [range, setRange] = useState("");
  const [ruleMove, setRuleMove] = useState(0);

  //onchange fun of input val
  const onChange = (e) => {
    setInputVal(e.target.value);
  };
  //start button
  const start = () => {
    setStatus(false);
    if (option === 1) {
      setStatus(true);
      easyMode();
    } else if (option === 2) {
      setStatus(true);
      mediumMode();
    } else if (option === 3) {
      setStatus(true);
      HardMode();
    }
  };
  //easy mode
  const easyMode = () => {
    setText("");
    setRange(" 0-10 ");
    setOption(1);
    setTotalMoves(3);
    setRuleMove(4);
    setMedium(true);
    setHard(true);
    setPrivate(0);
    setMoves(1);
    setMode(10);
    setActive(true);
    privateNumber();
  };
  //medium mode
  const mediumMode = () => {
    setText("");
    setRange(" 0-100 ");
    setOption(2);
    setTotalMoves(5);
    setRuleMove(6);
    setEasy(true);
    setHard(true);
    setPrivate(0);
    setMoves(1);
    setMode(100);
    setActive(true);
    privateNumber();
  };
  //Hard Mode
  const HardMode = () => {
    setText("");
    setRange(" 0-1000 ");
    setOption(3);
    setTotalMoves(7);
    setRuleMove(8);
    setEasy(true);
    setMedium(true);
    setPrivate(0);
    setMoves(1);
    setMode(1000);
    setActive(true);
    privateNumber();
  };

  //randomly creating a private number
  const privateNumber = () => {
    let priNum = Math.floor(Math.random() * mode);
    setPrivate(priNum);
  };

  //matching private number with user guess
  const checkNumber = () => {
    
    if (inputVal * 1 === priNumber && ruleMove >= 1) {
      setText("Hurray! You Guess The Right Number In " + moves + " Turn");
      setActive(false);
      setPrivate(0);
      setMoves(1);
      setEasy(false);
      setHard(false);
      setMedium(false);
      setStatus(false);
    } else if (inputVal * 1 < priNumber && totalMoves > 0) {
      setText("Too low");
    } else if (inputVal * 1 > priNumber && totalMoves > 0) {
      setText("Too High");
    } else if (ruleMove === 1) {
      setText("Out Of Moves . Correct Answer Is : " + priNumber);
      setActive(false);
      setEasy(false);
      setHard(false);
      setMedium(false);
      setStatus(false);
    }

    setMoves(moves + 1);
    setTotalMoves(totalMoves - 1);
    setRuleMove(ruleMove - 1);
    
   
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex ">
        <button className="btn-success btn" onClick={easyMode} disabled={easy}>
          Easy
        </button>

        <button
          className="btn-success btn mx-5"
          onClick={mediumMode}
          disabled={medium}
        >
          Medium
        </button>

        <button
          className="btn-success btn btn-sm mx-2"
          onClick={HardMode}
          disabled={hard}
        >
          Hard
        </button>
      </div>
      <div
        className={
          gameActive === true
            ? "d-flex flex-column justify-content-center align-items-center my-5"
            : "d-none"
        }
      >
        
        <button className="btn btn-light" onClick={start}>
         Play Now / Reset Game
        </button>
      </div>
      <div
        className={
          status === true
            ? "d-flex flex-column justify-content-center align-items-center "
            : "d-none"
        }
      >
        <div className="">
          <p>	Pick a number between {range}.<br/> You will have <span className="p-1 text-warning">{ruleMove} </span>turns. </p>
          <input
            type="number"
            pattern="[0-9]"
            title="Numbers only"
            value={inputVal}
            onChange={onChange}
          />
          <button className="btn-warning btn mx-1" onClick={checkNumber}>
            Guess
          </button>
        </div>
      </div>
       <div className="bg-success p-2 footer fixed-bottom">
        <h4 className="text-center">{text}</h4>
      </div> 

  </div>
  );
}

export default Guess;
