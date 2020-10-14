import React, { Component } from 'react';
import './Game.css'

import person from "../../../assets/material-person.svg";
import joyStick from "../../../assets/awesome-gamepad.svg";
import timer from "../../../assets/timer.svg";
import cross from "../../../assets/metro-cross.svg";
import home from "../../../assets/awesome-home.svg";
import dictionary from "../../../data/dictionary.json"
class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: [],
      typedName: ''
    };
    this.getRandomArbitrary = this.getRandomArbitrary.bind(this);
    this.compareWord = this.compareWord.bind(this)
    this.backToHome = this.backToHome.bind(this)
  }

  componentDidMount() {
    var count = Object.keys(dictionary).length;
    let number = Math.round(this.getRandomArbitrary(1, count));
    console.log(count, number, dictionary[number]);
    // this.setState({
    //   word: dictionary[number]
    // })

    for (let i = 0; i < dictionary[number].length; i++) {
      console.log('let', dictionary[number].charAt(i))
      let letter = {
        letter: dictionary[number].charAt(i),
        color: '#ffffff'
      }
      this.state.word.push(letter)
    
      
    }
   
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  compareWord(evt) {
    this.setState({
      typedName: evt.target.value
    })
    console.log(this.state.typedName)
  }
  backToHome(evt) {
    alert("are you really want to quite?")
    this.props.history.push("/home")
  }
  render() {
    const { word, typedName } = this.state;
    const Timer = () => {
    }
    const data = JSON.parse(localStorage.getItem('userData'))

    return (
      <div className="Group-243" >
        <div className="container-fluid" >
          <div className="row">

            <img src={person} alt="" className="Icon-material-person" />

            <div className="col-8"><p className="player_name_777">{data.userName}</p></div>
            <div className="fast-text">fast fingers</div>

          </div>
          <br />
          <div className="row">
            <img src={joyStick} alt="" className="Icon-awesome-gamepad" />
            <div className="col-4"><p className="player_name_777">{data.mode}</p></div>

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
                <div className="col-4"><img src={timer} /><span className="Group-249" ><p className="countdown">2:14</p> </span > </div>
                <div className="col-4"></div>
                <div className="col-12"><p className="window"> 
                 {this.state.word.map((data, index) => (
               
                    <h3 key={index}>{data.letter}</h3>
               
                ))} 
                
                
                </p> </div>
                <div className="col-12"><input type="text" onChange={this.compareWord} value={typedName} className="Rectangle-9" type="text" /> </div>
              </div>
            </div>
            <div className="col-12" ><img className="cross-image" src={cross} /> <p className="stop-game">STOP GAME</p> <img onClick={this.backToHome} className="home-image" src={home} /> </div>
          </div>

        </div>
      </div>);

  }
}

export default GamePage;