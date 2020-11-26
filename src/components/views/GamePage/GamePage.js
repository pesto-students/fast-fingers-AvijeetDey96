import React, { useEffect, useState, useRef } from 'react';
import './Game.css'

import person from "../../../assets/material-person.svg";
import joyStick from "../../../assets/awesome-gamepad.svg";
import timer from "../../../assets/timer.svg";
import cross from "../../../assets/metro-cross.svg";
import home from "../../../assets/awesome-home.svg";
import dictionary from "../../../data/dictionary.json"
import TimerCircle from './Timer'
import Stopwatch from './Stopwatch'
const log = console.log

const GamePage = () => {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");
  const [wordArray, setWordArray] = useState([]);
  const [typedName, setTypedName] = useState("");

  const data = JSON.parse(localStorage.getItem('userData'))
  let wordLetterArray = [];
  useEffect(() => {
    fetchDictionary()
    return () => console.log('unmounting...');
    callbackFunction()

  }, []);

  useEffect(() => {
    console.log('adfksdfgk')
  })

  const fetchDictionary = () => {

    let count = Object.keys(dictionary).length;
    let number = Math.round(getRandomArbitrary(1, count));
    console.log(count, number, dictionary[number]);
    setWord(dictionary[number]);
    for (let i = 0; i < dictionary[number].length; i++) {
      console.log('let', dictionary[number].charAt(i))
      let letter = {
        letter: dictionary[number].charAt(i),
        color: '#ffffff'
      }
      wordLetterArray.push(letter)

    }
    console.log("data ", wordLetterArray)
    setWordArray(wordLetterArray)
  }
  const backToHome = (evt) => {
    alert("are you really want to quite?")
    this.props.history.push("/home")
  }

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const compareWord = (event) => {
    log('typedInput', typedName, typedName.length)
    wordLetterArray = [...wordArray]
    const key = event.keyCode || event.charCode;
    log('key', key)
    for (let i = 0; i < typedName.length; i++) {
      if (word.charAt(i) === typedName.charAt(i)) {

        wordLetterArray[i].color = '#54ba18'

      }
      else {
        wordLetterArray[i].color = '#445298'
      } 
    }
    setWordArray(wordLetterArray)
  }

  const callbackFunction = (childData) => {
   log('callback',childData)
  }
  return (

    <div className="Group-243" >
      <div className="container-fluid" >
        <div className="row">

          <img src={person} alt="" className="Icon-material-person" />

          <div className="col-7"><p className="player_name_777">
            {data.userName}
          </p></div>
          <div className="col-4"> <div className="fast-text">fast fingers</div></div>


        </div>
        <br />
        <div className="row">
          <img src={joyStick} alt="" className="Icon-awesome-gamepad" />
          <div className="col-3"><p className="player_name_777">
            {data.mode}
          </p></div>
          <div className="col-3"></div>
          <div className="col-5 fast-text">SCORE: &nbsp; <Stopwatch  parentCallback={callbackFunction}></Stopwatch></div>
        </div>
 

        <br />
        <div className="row">
          <div className="col-3 board">
            <div className="Rectangle-10">
              <p className="SCORE-BOARD">Score Board</p>

              <br />
              <div>
                <p className="Game-1-114">
                  Game 1  : 1:14
</p>
                <p className="Game-1-114">
                  Game 2  : 1:14
</p>
                <p className="Game-1-114">
                  Game 3  : 1:14
</p>

              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">

                <div className="timerCircle">
                  <TimerCircle> </TimerCircle>

                </div>



              </div>
              <div className="col-4"></div>
              <div className="col-12"><p className="window">
                {wordArray.map((data, index) => (

                  <span style={{ color: data.color }} key={index}>{data.letter}</span>

                ))}

              </p> </div>

              <div className="col-12"><input type="text" name="typedName" onKeyUp={compareWord} onChange={(event) => setTypedName(event.target.value)} value={typedName} className="Rectangle-9" type="text" /> </div>
            </div>
          </div>
          <div className="col-12" ><img className="cross-image" src={cross} /> <p className="stop-game">STOP GAME</p> <img onClick={backToHome} className="home-image" src={home} /> </div>
        </div>

      </div>

    </div>);
}



export default GamePage;
