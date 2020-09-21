//20/29
import React from "react"

class BStimerDisplay extends React.Component{
    render(props){
        return(
            
                <div id={this.props.type}>
         <h2 id={this.props.label}>
           {this.props.name}</h2>
            <div class="display-flex">
         <button id={this.props.btnName1} onClick={()=>this.props.increment(this.props.type)}
         className="btn">
         +
         </button>
         <div  id={this.props.lengthId} className="btn text-white">{this.props.length}</div>
         <button id={this.props.btnName2} onClick={()=>this.props.decrement(this.props.type)} className="btn">-
         </button>
         </div>
        </div>
            
        )
    }
}
class Timer extends React.Component{
    constructor(){
        super()
        this.state={
            type:"Session",
minutes:25,
sessionLength:25,
seconds:"00",
timerOn:true,
secondsRemaining:25*60,
interval: 0,
bMin:5,
breakLength:5,
bSec:"00",
bSecRemaining:5*60,
btimerOn:false
}
this.increment=this.increment.bind(this)
this.decrement=this.decrement.bind(this)
this.startStop=this.startStop.bind(this)
this.timer=this.timer.bind(this)
this.reset=this.reset.bind(this)

//
//this.startStop1=this.startStop1.bind(this)
this.timer1=this.timer1.bind(this)
this.audioBeepPlay=this.audioBeepPlay.bind(this)
}
reset(){
    clearInterval(this.state.interval)
    this.setState({
        type:"Session",
      minutes:25,
      sessionLength:25,
    seconds:"00",
    timerOn:true,
    secondsRemaining:25*60,
    interval: 0,
    bMin:5,
    breakLength:5,
bSec:"00",
bSecRemaining:5*60,
btimerOn:true
    })
    
      }
increment(type){
    if(type=="session" && this.state.minutes<60){
    this.setState({
        sessionLength:this.state.sessionLength+1,
        minutes:this.state.minutes+1,
        secondsRemaining:(this.state.minutes+1)*60,
        seconds:"00"
    })

}
else if(type=="break" && this.state.bMin<60){
    this.setState({
        breakLength:this.state.breakLength+1,
        bMin:this.state.bMin+1,
        bSecRemaining:(this.state.bMin+1)*60,
        bSec:"00"
    })
    
}
}
decrement(type){
    if(type=="session" && this.state.minutes>1){
        this.setState({
            sessionLength:this.state.sessionLength-1,
            minutes:this.state.minutes-1,
            secondsRemaining:(this.state.minutes-1)*60,
            seconds:"00"
        })
    
    }
    else if(type=="break" && this.state.bMin>1){
        this.setState({
            breakLength:this.state.breakLength-1,
            bMin:this.state.bMin>=0 ? this.state.bMin-1: 0,
            bSecRemaining:(this.state.bMin-1)*60,
            bSec:"00"
        })
        
    }
}
timer(){
    if(this.state.secondsRemaining<0){
        this.audioBeepPlay()
      clearInterval(this.state.interval);
      this.setState({bMin:this.state.breakLength,
    bSecRemaining:this.state.breakLength*60,
    bSec:"00"
    })
      let interval=setInterval(this.timer1,1000)
      this.setState({interval:interval})
    }
    else{
      
      this.setState(prevState=>({
        minutes:prevState.minutes>=10?Math.floor((prevState.secondsRemaining-1)/60): '0'+Math.floor((prevState.secondsRemaining-1)/60),
seconds:(prevState.seconds)>10 ||prevState.secondsRemaining%60===0  ?  (prevState.secondsRemaining-1)%60:'0'+(prevState.secondsRemaining-1)%60,
       secondsRemaining: prevState.secondsRemaining-1
}

))
}
}
startStop(type){
if(this.state.type==="Session"){
  this.setState(prevState=>({
    timerOn: !prevState.timerOn
  }))
  console.log(this.state.timerOn)
  if(this.state.timerOn){
  let interval=setInterval(this.timer,1000)
  this.setState({interval:interval})
  }
  else{
    clearInterval(this.state.interval);
  }
}
else if(this.state.type==="Break"){
    this.setState(prevState=>({
        btimerOn: !prevState.btimerOn
      }))
      console.log(this.state.timerOn)
      if(this.state.timerOn){
      let interval=setInterval(this.timer1,1000)
      this.setState({interval:interval})
      }
      else{
        clearInterval(this.state.interval);
      }
}
}

audioBeepPlay(){
    let beep = document.querySelector('#beep');
    beep.play();
    
    
  }
  timer1(){
      if(this.state.secondsRemaining===0){
            this.setState({timerOn:true})
      }
    if(this.state.bSecRemaining<=0){
      clearInterval(this.state.interval);
      this.setState({minutes:this.state.sessionLength,
    secondsRemaining:this.state.sessionLength*60,
    seconds:"00"
    })
      let interval=setInterval(this.timer,1000)
      this.setState({interval:interval})
    }
    else{
      
      this.setState(prevState=>({
          //timerOn:true,
        bMin:prevState.bMin>=10?Math.floor((prevState.bSecRemaining-1)/60): '0'+Math.floor((prevState.bSecRemaining-1)/60),
        //seconds: (prevState.secondsRemaining-1)%60,
       //seconds: prevState.seconds>10 ? prevState.secondsRemaining%60: prevState.secondsRemaining%60,
bSec:(prevState.bSec)>10 ||prevState.bSecRemaining%60===0  ?  (prevState.bSecRemaining-1)%60:'0'+(prevState.bSecRemaining-1)%60,
bSecRemaining: prevState.bSecRemaining-1
}

))
}
}
    render(){
if(this.state.secondsRemaining<0){
        return(
            <div>
            <div className="set">
<BStimerDisplay
    type="session"
    label="session-label"
    name="session length"
    btnName1="session-increment"
    lengthId="session-length"
    length={this.state.minutes}
    btnName2="session-decrement"
    increment={this.increment}
    decrement={this.decrement}
/>
<BStimerDisplay
    type="break"
    label="break-label"
    name="break length"
    btnName1="break-increment"
    lengthId="break-length"
    length={this.state.bMin}
    btnName2="break-decrement"
    increment={this.increment}
    decrement={this.decrement}
/>
</div>
 <Pm
   type="Break"    
   minutes={this.state.bMin}
   seconds={this.state.bSec}
   startStop={this.startStop}
   reset={this.reset}
        />
            <footer>Pomodoro Clock - Coded By CodeYellow</footer>
            </div>
        )


    }
    else{
        return(
            <div>
            <div className="set">
<BStimerDisplay
    type="session"
    label="session-label"
    name="session length"
    btnName1="session-increment"
    lengthId="session-length"
    length={this.state.minutes}
    btnName2="session-decrement"
    increment={this.increment}
    decrement={this.decrement}
/>
<BStimerDisplay
    type="break"
    label="break-label"
    name="break length"
    btnName1="break-increment"
    lengthId="break-length"
    length={this.state.bMin}
    btnName2="break-decrement"
    increment={this.increment}
    decrement={this.decrement}
/>
</div>

{/*<div id="clock">
  <h1 id="timer-label">Session</h1>
  <div id="time-left">{this.state.minutes}:{this.state.seconds}</div>
  <button id="start_stop" onClick={this.startStop}>start/stop</button>
  <button id="reset" onClick={this.reset}>reset</button>
</div>*/}
 <Pm
   type="Session"    
   minutes={this.state.minutes}
   seconds={this.state.seconds}
   startStop={this.startStop}
   reset={this.reset}
        />

            <footer>Pomodoro Clock - Coded By CodeYellow</footer>
            </div>

            
        )
    }
   
    }
}

class Pm extends React.Component{
    render(props){
        return(
            <div id="clock">
            <h1 id="timer-label">{this.props.type}</h1>
            <div id="time-left">{this.props.minutes}:{this.props.seconds}</div>
            <button id="start_stop" onClick={()=>this.props.startStop(this.props.type)} className="btn btn-info">start/stop</button>
            <button id="reset" onClick={this.props.reset}
              className="btn btn-info">reset</button>
            <audio id="beep" src="http://soundbible.com/mp3/fire-truck-air-horn_daniel-simion.mp3" type="audio/mpeg"></audio>
          </div> 
        )
    }
}
export default Timer 
