import React, { Component } from 'react';
import './Game.css'

import person from "../../../assets/material-person.svg";
import joyStick from "../../../assets/awesome-gamepad.svg";
import timer from "../../../assets/timer.svg";

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  componentDidMount() {

  }
  render() {
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

                <div className="col-4"><img src={timer} className="Group-249" /></div>
                <div className="col-4"></div>
                <div className="col-12"><p className="window">window</p> </div>
                <div className="col-12"><input className="Rectangle-9" type="text"/> </div>
              </div>

            </div>

          </div>

        </div>
      </div>);

  }
}

export default GamePage;