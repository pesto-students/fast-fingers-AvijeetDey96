import React,{Component} from 'react';
import './Home.css'
import keyboard from "../../../assets/keyboard.svg";
import play from "../../../assets/Icon-awesome-play.svg";
import useHomeState from '../../../hooks/useHomeState.js'
// const HomePage = () => {
// const [value,handleChange,reset] = useHomeState("")
// const data =(v) =>{
//   console.log('daat',v);
// }
//   return (<div className="Group-243" >
//     <div className="container-fluid" >
//       <div className="row; fast-div"><img src={keyboard} alt="" className="Icon-awesome-keyboard" /></div>
//       <div className="row; fast-div"><span className="fast-fingers"> Fast Fingers</span></div>
//       <div className="row; fast-div"><p className=" the-ultimate-typing-game">The ultimate typing game</p></div>
//       <form onSubmit={handleChange}>
//       <div className="row;fast-div"><input onChange={data(value)}  placeholder="TYPE YOUR NAME" id="name" value={value.name} required  className="Rectangle-2" /></div>
//       <div className="row;fast-div">
//         <select name="mode" value={value.mode} required id="mode" className="Rectangle-5">
//           <option className="Rectangle-6" value="Easy">Easy</option>
//           <option className="Rectangle-6" value="Medium">Medium</option>
//           <option className="Rectangle-6" value="Hard">Hard</option>
//         </select> </div>
//         <div className="row; fast-div" type="submit" >  <p className="start-game"> <img src={play} alt="" className="Icon-awesome-play" />START GAME</p> </div>
//         </form>
//     </div>
//   </div>);
// }

class HomePage extends Component{
  constructor(props){
    super(props)
    this.state = {
      userName:'',
      mode:'',
      score:[]
    };
    this.handleChange =this.handleChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
  }
  handleChange(evt){
    console.log('evt',evt);
    this.setState({
      [evt.target.name]:evt.target.value
    });
  }  
  handleSubmit(evt){
   evt.preventDefault();
   localStorage.setItem('userData',JSON.stringify(this.state))
  }  
  render(){
    return(
      <div className="Group-243" >
    <div className="container-fluid" >
      <div className="row; fast-div"><img src={keyboard} alt="" className="Icon-awesome-keyboard" /></div>
      <div className="row; fast-div"><span className="fast-fingers"> Fast Fingers</span></div>
      <div className="row; fast-div"><p className=" the-ultimate-typing-game">The ultimate typing game</p></div>
      <form  onSubmit={this.handleSubmit}>
      <div className="row;fast-div"><input type="text" name="userName"   placeholder="TYPE YOUR NAME"   value={this.state.name} onChange={this.handleChange} required  className="Rectangle-2" /></div>
      <div className="row;fast-div">
        <select name="mode" value={this.state.mode}  onChange={this.handleChange} required   className="Rectangle-5">
        <option className="Rectangle-6" hidden value="">DIFFICULTY LEVEL</option>
          <option className="Rectangle-6" value="Easy">Easy</option>
          <option className="Rectangle-6" value="Medium">Medium</option>
          <option className="Rectangle-6" value="Hard">Hard</option>
        </select> </div>
        <div className="row; fast-div" type="submit" > <button type="submit" className="btn"> <p className="start-game">  <img src={play} alt="" className="Icon-awesome-play" />START GAME</p> </button></div>
        </form>
    </div>
  </div>);

  }
}

export default HomePage;