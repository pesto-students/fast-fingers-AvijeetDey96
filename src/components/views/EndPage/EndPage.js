import React,{Component} from 'react';
import '../GamePage/Game.css'
import './End.css'
import person from "../../../assets/material-person.svg";
import joyStick from "../../../assets/awesome-gamepad.svg";
import reload from "../../../assets/open-reload.svg";
class EndPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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
                <div className="row alignment">
                    <div className="col-4"></div>
                    <div className="col-4">   <span className="SCORE-GAME-5">SCORE : GAME 5</span></div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4">   <span className="countdown">2:45</span></div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4">   <span className="score">New High Score</span></div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4 align-play" >  <img src={reload}  alt="avatar " className="Icon-open-reload"/> <span className="play-again">PLAY AGAIN</span></div>
                    <div className="col-4"></div>
                 </div>
      
              </div>
            </div>
            );
      
    }
}

export default EndPage;