import React, { useEffect, useState,useRef } from 'react'
import './navbar.css'
import Footer from './day3/Footerpage';
// import Below from './day3/below';

const Upperbase = () => {
  const [Timer,setTimer] = useState(0);
  const [Count,setCount] = useState(0);
  const [Hour,SetHour] = useState(0)
const [Email,Setemail] = useState("");
const [Pass,Setpass] = useState("");
const [Passname,Setpassname] = useState("password")
const [Theme1,setTheme1] = useState("transparent");
const [Theme2,setTheme2] = useState("transparent");

const [emailborder,setemailborder] = useState("2px solid white");
const [passborder,setpassborder] = useState("2px solid white")

// console.log(Email,Pass)
  const ref = useRef(null);

  const startTimer = () => {
 
    if (ref.current) return;
    ref.current = setInterval(() => {
      
      setTimer((time) => time + 1);


    }, 100);
  };
 
  startTimer();


  const CountNumber =()=>{
setCount(()=>Count+1)



setTimer(0)
startTimer()
  }


  const HourCount = ()=>{
      SetHour(()=>Hour+1)
      setCount(0);
      CountNumber();

  }

  const ShowPass = ()=>{

console.log(1)
    if (Passname == "password") {
      Setpassname("text");

  
    } else {
    Setpassname("password");

  
    }
  }

 
const ColorChange1 = ()=>{
  setTheme1("white");
  setTheme2("transparent")
}
const ColorChange2 = ()=>{
  setTheme2("white")
  setTheme1("transparent")

}

const Checkdata  = ()=>{
  var arr = JSON.parse(localStorage.getItem("data"));
  var data = arr[0];
  if(data.Info_one == Email && data.Info_two ==  Pass){
    alert("successfull login")
  }
  else{
    if(Email == "" && Pass === ""){
      setemailborder("2px solid red")
      setpassborder("2px solid red")


    }
    else if(Email == ""){
      setemailborder("2px solid red")


    }
    else if(Pass == "" ){
      setpassborder("2px solid red");

    }
   
  }
}

  return (
    <>
    <div className='upperbase'>
      
      <div className='uppertitle'>
        <div style={{opacity:"0"}}>
        Time tracking for <em className='just'>better</em>
        </div>

        <div>
        Time tracking for <em className='just'>better</em>
        </div>
        <div>
        work, not overwork.

        </div>

      </div>

      <div className='upperbodytwo'>
        <div style={{width:"30vw",fontSize:"25px"}}>
        Join 5 million users in using the world's best time tracking software
        </div>
      
<div style={{display:"flex"}}>
    
      <div>
<div style={{width:"25vw",marginTop:"2vw"}}>

{/* form input display */}
<input value = {Email} onClick = {ColorChange1} className='inp1' onChange={(e)=>Setemail(e.target.value)} placeholder='Email' type="email"  style={{height:"3.2vw",width:"25vw",marginBottom:"2vw",color:"black",backgroundColor:Theme1,border:emailborder,fontSize:"1.3vw"}}  />
<br />
<input value = {Pass} onClick = {ColorChange2} className='InfoPass'   onChange={(e)=>Setpass(e.target.value)} placeholder='A strong Password' type={Passname} style={{color :"black",height:"3.2vw",width:"25vw",backgroundColor:Theme2,border:passborder,fontSize:"1.3vw"}} />
<div onClick = {ShowPass} className = "password">
  <svg width = "35" height= "35" fill = "#FCE5D8" viewBox = "0 0 20 20 ">
    <g className='Symbols' stroke = "none" strokeWidth="1" fill = "none" fill-rule = "evenodd">
      <g>
        <g>
          <polygon className = "Shape" points = "0 0 20 0 20 20 0 20">

            </polygon>
        </g>
        <path d = "M10.0227494,4 C13.9544363,4 16.9468532,6 19,10 C17.1000377,14 14.1142326,16 10.0425847,16 C5.97093673,16 2.95674184,14 1,10 C3.08347938,6 6.09106252,4 10.0227494,4 Z M10.017694,5.8 C6.9597153,5.8 4.62048397,7.2 3,10 C4.52191032,12.8 6.86628412,14.2 10.0331214,14.2 C13.1999587,14.2 15.5222516,12.8 17,10 C15.403108,7.2 13.0756727,5.8 10.017694,5.8 Z M10,7 C11.6568542,7 13,8.34314575 13,10 C13,11.6568542 11.6568542,13 10,13 C8.34314575,13 7,11.6568542 7,10 C7,8.34314575 8.34314575,7 10,7 Z"
        className='Combined' fill = "#7E6E85"
        >

        </path>

      </g>

    </g>


  </svg>

</div>
<br />
</div>
<div style={{display:"flex",justifyContent:"space-between",width:"40vw",marginTop:"0",position:"relative",bottom:"3vw"}}>
<div style={{paddingTop:"2vw"}}>
<button onClick={Checkdata} className='signupbtn' style={{height:"3.8vw",width:"15vw",borderRadius:"5vw",fontSize:"15px",fontWeight:"bold",color:"white"}}>Sign up with email</button>
</div>
<div style={{paddingBottom:'2vw',height:"3.8vw",paddingBottom:"2vw"}}>
    or sign up with :<img  className='imgiconlogo'  style={{height:"3.7vw",width:"3.7vw",position:"relative",top:"2vw",borderRadius:"80%",border:"2px solid white"}} src="https://icon-library.com/images/google-g-icon/google-g-icon-29.jpg" alt="" /><img className='imgiconlogo' style={{height:"4vw",width:"4vw",position:"relative",top:"2vw",borderRadius:"80%"}} src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/apple-512.png" alt="" /> 
</div>
</div>
</div>


<div >
    <div className='justTime' style={{fontSize:"20px",height:"4.2vw",border:"1px solid white",width:"23vw",paddingRight:"2vw",display:'flex',justifyContent:"space-evenly",marginLeft:"10vw"}}>
{/* <div>Standup Meeting </div> */}
<div style={{marginRight:"2vw",fontSize:"18px"}} className="">
  <span>S</span><span className='stand'>tand</span>
<span className="slow">-up Meeting</span><span></span>

</div>
<div style={{height:"2vw",width : "5vw"}}>
 {Hour}:{Count==60 ? HourCount():Count}:{Timer==60 ? CountNumber(): Timer }
</div>
<div className = 'svg' >
  <svg xmlns='http://www.w3.org/2000/svg' width="36" height="36"  >
    <g fill = "none" fillRule='evenodd'>

      <rect width= "36" height= "36" fill='#d164c5' rx = "18" >

      </rect>
      <path fill = "#fff" d = "M13 11.994c0-1.101.773-1.553 1.745-.997l10.51 6.005c.964.55.972 1.439 0 1.994l-10.51 6.007c-.964.55-1.745.102-1.745-.997V11.994z" >

      </path>

    </g>

  </svg >
  <svg  xmlns = "http://www.w3.org/2000/svg" width = "36" height="36" className='Timerstop'>
<g fill = "none" fillRule='evenodd'></g>
<rect width = "36" height= "36" fill = "#e87161" rx = "18" > </rect>
<rect width = "14" height= "14" fill = "#fff" rx = "1.5" x = "11" y = "11" > </rect>

  </svg>

 {/* <img style={{height:"3.5vw",width:"3.5vw",borderRadius:"50%"}} src='https://cdn.pixabay.com/photo/2018/05/01/07/19/app-icon-3364869_960_720.png'/> */}
</div>
    </div>
    <div style={{height:"5vw",width:"23vw",marginLeft:"10vw",fontSize:"20px",marginTop:"1vw"}} >
    “I love the ease of just clocking in and out with <span className='just' >just one click!  </span>
    <div style={{textAlign:"right",fontSize:"24px"}}> <small>– Quelani P.</small> </div>
    </div>
    
</div>


</div>

        </div>
        <div>


          <div style={{width:"42vw",marginLeft:"10vw",color:"white"}}>
          By signing up, you agree to our <span className='span' style={{borderTop:"0vw",borderLeft:"0vw",borderRight:"0vw"}} >terms of service</span>,<span className='span'  style={{border:"2px solid pink",borderTop:"0vw",borderLeft:"0vw",borderRight:"0vw"}}>privacy policy</span>  and to receiving marketing <div style={{textAlign:"left",paddingTop:"5px"}}>communication from Toggl Track. You can opt out anytime.</div>
          </div>



          <div className="banner" style={{height:"6vw",border:"2px solid white",display:"flex",justifyContent:"space-evenly",marginTop:"5vw",backgroundColor:"#e8d0cf",marginBottom:"2vw"}}>

                    <div style={{}}>
                  
                <img style={{height:"3vw"}} className='icontoggle' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0Ljc2NjEgMzcuNDU1QzQzLjkwMDYgMzYuODExMiA0Mi42NzcyIDM2Ljk5MDkgNDIuMDMzMyAzNy44NTYzQzQxLjY3OTIgMzguMzMyMyA0MS4zMDAzIDM4Ljc5OTIgNDAuOTA3MSAzOS4yNDRDNDAuMTkyNyA0MC4wNTIxIDQwLjI2ODYgNDEuMjg2NSA0MS4wNzY3IDQyLjAwMDlDNDEuNDQ4NCA0Mi4zMjk0IDQxLjkwOTggNDIuNDkwOCA0Mi4zNjk1IDQyLjQ5MDhDNDIuOTA5OCA0Mi40OTA4IDQzLjQ0NzcgNDIuMjY3OCA0My44MzM2IDQxLjgzMTJDNDQuMjk5MyA0MS4zMDQ0IDQ0Ljc0ODEgNDAuNzUxNSA0NS4xNjc0IDQwLjE4NzdDNDUuODExMiAzOS4zMjI0IDQ1LjYzMTcgMzguMDk4OCA0NC43NjYxIDM3LjQ1NVoiIGZpbGw9IiMyQzExMzgiLz4KPHBhdGggZD0iTTQ4LjAzMjYgMjguMjk1NkM0Ni45NzkzIDI4LjA2NjIgNDUuOTM4MiAyOC43MzQ2IDQ1LjcwODggMjkuNzg4NUM0NS41ODI1IDMwLjM2ODMgNDUuNDMgMzAuOTQ5MiA0NS4yNTUxIDMxLjUxNTJDNDQuOTM2NiAzMi41NDU5IDQ1LjUxMzkgMzMuNjM5NCA0Ni41NDQ1IDMzLjk1NzlDNDYuNzM2NiAzNC4wMTcyIDQ2LjkzMDcgMzQuMDQ1NCA0Ny4xMjE4IDM0LjA0NTRDNDcuOTU1NyAzNC4wNDU0IDQ4LjcyOCAzMy41MDY5IDQ4Ljk4NzIgMzIuNjY4MkM0OS4xOTQ4IDMxLjk5NjYgNDkuMzc1OSAzMS4zMDcyIDQ5LjUyNTcgMzAuNjE5NEM0OS43NTUxIDI5LjU2NTUgNDkuMDg2NiAyOC41MjUxIDQ4LjAzMjYgMjguMjk1NloiIGZpbGw9IiMyQzExMzgiLz4KPHBhdGggZD0iTTM1LjM2NTEgNDMuNzEwNUMzNC44NDY1IDQ0IDM0LjMwOTYgNDQuMjcwNSAzMy43Njk0IDQ0LjUxNDVDMzIuNzg2MyA0NC45NTg1IDMyLjM0OTMgNDYuMTE1MyAzMi43OTMyIDQ3LjA5ODRDMzMuMTE5NCA0Ny44MjA3IDMzLjgzMDIgNDguMjQ4MSAzNC41NzQ0IDQ4LjI0ODFDMzQuODQzMSA0OC4yNDgxIDM1LjExNjIgNDguMTkyMyAzNS4zNzcxIDQ4LjA3NDZDMzYuMDE4IDQ3Ljc4NTEgMzYuNjU0NSA0Ny40NjQzIDM3LjI2OTQgNDcuMTIxMUMzOC4yMTEzIDQ2LjU5NTMgMzguNTQ4NSA0NS40MDU0IDM4LjAyMjUgNDQuNDYzNkMzNy40OTY4IDQzLjUyMTkgMzYuMzA3IDQzLjE4NDcgMzUuMzY1MSA0My43MTA1WiIgZmlsbD0iIzJDMTEzOCIvPgo8cGF0aCBkPSJNMjMuMDQ2OCA5LjY1NDNWMjQuNDcwM0wxNS44ODQ4IDMxLjYzMjJDMTUuMTIyMSAzMi4zOTUgMTUuMTIyMSAzMy42MzE2IDE1Ljg4NDggMzQuMzk0M0MxNi4yNjYyIDM0Ljc3NTggMTYuNzY1OSAzNC45NjY0IDE3LjI2NTkgMzQuOTY2NEMxNy43NjU3IDM0Ljk2NjQgMTguMjY1NiAzNC43NzU3IDE4LjY0NzEgMzQuMzk0M0wyNi4zODExIDI2LjY2MDRDMjYuNzQ3MyAyNi4yOTQxIDI2Ljk1MyAyNS43OTczIDI2Ljk1MyAyNS4yNzkzVjkuNjU0M0MyNi45NTMgOC41NzU1OSAyNi4wNzg2IDcuNzAxMTcgMjQuOTk5OSA3LjcwMTE3QzIzLjkyMTIgNy43MDExNyAyMy4wNDY4IDguNTc1NTkgMjMuMDQ2OCA5LjY1NDNaIiBmaWxsPSIjMkMxMTM4Ii8+CjxwYXRoIGQ9Ik00OC4wNDY5IDQuNDc4NTJDNDYuOTY4MiA0LjQ3ODUyIDQ2LjA5MzggNS4zNTI5MyA0Ni4wOTM4IDYuNDMxNjRWMTEuODU1MUM0MS41NDc3IDQuNzI1MzkgMzMuNjA4NSAwLjI3OTI5NyAyNSAwLjI3OTI5N0MxOC4zMjIzIDAuMjc5Mjk3IDEyLjA0NDIgMi44Nzk3OSA3LjMyMjI3IDcuNjAxNTZDMi42MDA0OSAxMi4zMjM1IDAgMTguNjAxNiAwIDI1LjI3OTNDMCAzMS45NTcgMi42MDA0OSAzOC4yMzUxIDcuMzIyMjcgNDIuOTU3QzEyLjA0NDIgNDcuNjc4OCAxOC4zMjIzIDUwLjI3OTMgMjUgNTAuMjc5M0MyNS4wMTY1IDUwLjI3OTMgMjUuMDMyNCA1MC4yNzcyIDI1LjA0ODggNTAuMjc2OUMyNS4wNjUyIDUwLjI3NzIgMjUuMDgxMiA1MC4yNzkzIDI1LjA5NzcgNTAuMjc5M0MyNS44MDE2IDUwLjI3OTMgMjYuNTEyNCA1MC4yNDk2IDI3LjIxMDYgNTAuMTkxMkMyOC4yODU1IDUwLjEwMTIgMjkuMDg0IDQ5LjE1NjggMjguOTk0IDQ4LjA4MTlDMjguOTAzOSA0Ny4wMDcgMjcuOTYwOCA0Ni4yMDgyIDI2Ljg4NDcgNDYuMjk4NkMyNi4yOTQ0IDQ2LjM0NzkgMjUuNjkzMyA0Ni4zNzMgMjUuMDk3NyA0Ni4zNzNDMjUuMDgxMiA0Ni4zNzMgMjUuMDY1MiA0Ni4zNzUxIDI1LjA0ODggNDYuMzc1NUMyNS4wMzI0IDQ2LjM3NTEgMjUuMDE2NSA0Ni4zNzMgMjUgNDYuMzczQzEzLjM2ODggNDYuMzczIDMuOTA2MjUgMzYuOTEwNCAzLjkwNjI1IDI1LjI3OTNDMy45MDYyNSAxMy42NDgxIDEzLjM2ODggNC4xODU1NSAyNSA0LjE4NTU1QzMyLjQ5NTkgNC4xODU1NSAzOS4zOTAzIDguMTgwOTYgNDMuMTU3OCAxNC41MzcxSDM3Ljc4NzRDMzYuNzA4NyAxNC41MzcxIDM1LjgzNDMgMTUuNDExNSAzNS44MzQzIDE2LjQ5MDJDMzUuODM0MyAxNy41Njg5IDM2LjcwODcgMTguNDQzNCAzNy43ODc0IDE4LjQ0MzRINDMuNzVDNDQuOTM5NSAxOC40NDM0IDQ2LjA1MjIgMTguMTA5MSA0Ni45OTk3IDE3LjUzQzQ3LjA2MDYgMTcuNDk1MiA0Ny4xMTkyIDE3LjQ1NzggNDcuMTc1MSAxNy40MTc1QzQ4Ljg3NDkgMTYuMjk5MiA1MCAxNC4zNzU3IDUwIDEyLjE5MzRWNi40MzE2NEM1MCA1LjM1MjkzIDQ5LjEyNTYgNC40Nzg1MiA0OC4wNDY5IDQuNDc4NTJaIiBmaWxsPSIjMkMxMTM4Ii8+Cjwvc3ZnPgo=" alt="" />
                        <span style={{fontSize:"18px",width:"2vw",width:"8vw"}}>No credit card required. Sign up and start tracking!</span>



                </div>
                <div>
                  |
                </div>
                    <div>


                      <img className='icontoggle' src="https://public-assets.toggl.com/b/static/icon-rating-712209c54fe77980309de799b72d2bbf.svg" alt="" />


                     <span>
                     4.7 out of 5 stars from 3,800 user reviews.
                     </span>
              
                    </div>
                    <div>
                  |
                </div>


                    <div>

                      <img className='icontoggle' src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA0NSA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0LjA4NDkgOS4yNTg1NUMzNi45MzAzIDcuMjk4MTkgMjkuNzMzNyA0LjI0NTc0IDIzLjI3MyAwLjQzMTI1OUMyMi45Mjk5IDAuMjI4NjQzIDIyLjUwNCAwLjIyODY0MyAyMi4xNjA5IDAuNDMxMjU5QzE1LjUxMzkgNC4zNTUzMiA4LjcwNjE2IDcuMjQyNjQgMS4zNDg0OCA5LjI1ODU1QzAuODczMTY5IDkuMzg4NjUgMC41NDM3MDEgOS44MjA3IDAuNTQzNzAxIDEwLjMxMzZWMjEuNDkwMUMwLjU0MzcwMSAzMi45OTk0IDUuODUzMjggNDAuNjE3OCAxMC4zMDc2IDQ0Ljk4MjFDMTUuMTAzIDQ5LjY4MDkgMjAuNjg4OSA1Mi4yNzkzIDIyLjcxNyA1Mi4yNzkzQzI0Ljc0NDkgNTIuMjc5MyAzMC4zMzA4IDQ5LjY4MDkgMzUuMTI2MiA0NC45ODIxQzM5LjU4MDQgNDAuNjE3OSA0NC44ODk3IDMyLjk5OTYgNDQuODg5NyAyMS40OTAxVjEwLjMxMzVDNDQuODg5NyA5LjgyMDcgNDQuNTYwMiA5LjM4ODY1IDQ0LjA4NDkgOS4yNTg1NVpNNDIuNzAyIDIxLjQ5QzQyLjcwMiAzMi4yMzk3IDM3Ljc0OTcgMzkuMzQ4NSAzMy41OTUgNDMuNDE5M0MyOC44Nzk0IDQ4LjAzOTkgMjMuODM3NSA1MC4wOTE1IDIyLjcxNyA1MC4wOTE1QzIxLjU5NjQgNTAuMDkxNSAxNi41NTQzIDQ4LjAzOTkgMTEuODM4NSA0My40MTkzQzcuNjgzOTQgMzkuMzQ4NCAyLjczMTQ1IDMyLjIzOTcgMi43MzE0NSAyMS40OVYxMS4xNDM4QzkuNzY3NDkgOS4xNDYxMiAxNi4zMjAxIDYuMzU4MTMgMjIuNzE3MiAyLjY0MDY1QzI4Ljk1NDUgNi4yNTk1MSAzNS44MzQxIDkuMTg2MTMgNDIuNzAyIDExLjE0MzRWMjEuNDlaIiBmaWxsPSIjMkMxMzM4Ii8+CjxwYXRoIGQ9Ik0xMy4wMjE0IDExLjAyMTRDMTIuOCAxMC40NTkyIDEyLjE2NDkgMTAuMTgzMSAxMS42MDI3IDEwLjQwNDZDOS42NDg2NCAxMS4xNzQ1IDcuNjQyOTggMTEuODgzMiA1LjY0MTQ5IDEyLjUxMTFDNS4xODUzNyAxMi42NTQzIDQuODc1IDEzLjA3NjggNC44NzUgMTMuNTU0N1YxNy43Nzg4QzQuODc1IDE4LjM4MjkgNS4zNjQ4NCAxOC44NzI2IDUuOTY4ODMgMTguODcyNkM2LjU3MjgyIDE4Ljg3MjYgNy4wNjI2NSAxOC4zODI5IDcuMDYyNjUgMTcuNzc4OFYxNC4zNTQxQzguODU4MTcgMTMuNzczMiAxMC42NTE4IDEzLjEzMDYgMTIuNDA0NiAxMi40Mzk5QzEyLjk2NjggMTIuMjE4NiAxMy4yNDI5IDExLjU4MzUgMTMuMDIxNCAxMS4wMjE0WiIgZmlsbD0iIzJDMTMzOCIvPgo8cGF0aCBkPSJNMTUuMDk5IDExLjIyOTFDMTUuMjQ1OCAxMS4yMjkxIDE1LjM5NDggMTEuMTk5NiAxNS41Mzc3IDExLjEzNzJMMTUuNTU3OCAxMS4xMjg1QzE2LjExMTIgMTAuODg2IDE2LjM2MDQgMTAuMjQxNyAxNi4xMTc5IDkuNjg4NTRDMTUuODc1MSA5LjEzNTEzIDE1LjIyNzMgOC44ODQ3OCAxNC42NzQ1IDkuMTI3MUwxNC42NTY4IDkuMTM0NzJDMTQuMTAzMSA5LjM3NjU0IDEzLjg1MyAxMC4wMjAyIDE0LjA5NDkgMTAuNTczOEMxNC4yNzQzIDEwLjk4NDcgMTQuNjc3IDExLjIyOTEgMTUuMDk5IDExLjIyOTFaIiBmaWxsPSIjMkMxMzM4Ii8+CjxwYXRoIGQ9Ik0zNS43NDkzIDM1LjU1MDNDMzUuMjQzOSAzNS4yMTk5IDM0LjU2NiAzNS4zNjIgMzQuMjM1MyAzNS44Njc3QzMzLjMzMzkgMzcuMjQ3MyAzMi4yNzY0IDM4LjU2ODQgMzEuMDkxOCAzOS43OTRDMzAuMTE3NiA0MC44MDE3IDI5LjA2MiA0MS43NDA5IDI3Ljk1NDIgNDIuNTg1NEMyNy40NzM5IDQyLjk1MTcgMjcuMzgxNSA0My42MzggMjcuNzQ3NyA0NC4xMTg1QzI3Ljk2MzEgNDQuNDAwNyAyOC4yODg4IDQ0LjU0OTIgMjguNjE4MiA0NC41NDkyQzI4Ljg0OTYgNDQuNTQ5MiAyOS4wODI3IDQ0LjQ3NjIgMjkuMjgwNyA0NC4zMjUxQzMwLjQ3NTYgNDMuNDE0IDMxLjYxNDEgNDIuNDAxMSAzMi42NjQ1IDQxLjMxNDZDMzMuOTQ1MyAzOS45ODk4IDM1LjA4OTkgMzguNTU5OCAzNi4wNjY3IDM3LjA2NDNDMzYuMzk3MyAzNi41NTg1IDM2LjI1NSAzNS44ODA3IDM1Ljc0OTMgMzUuNTUwM1oiIGZpbGw9IiMyQzEzMzgiLz4KPHBhdGggZD0iTTI1LjQxNCA0NC4zMDA5TDI1LjM1MTIgNDQuMzM3OUMyNC44Mjg1IDQ0LjY0MDYgMjQuNjQ5OCA0NS4zMDk3IDI0Ljk1MjUgNDUuODMyNUMyNS4xNTUzIDQ2LjE4MjggMjUuNTIyNSA0Ni4zNzg1IDI1LjkwMDIgNDYuMzc4NUMyNi4wODYgNDYuMzc4NSAyNi4yNzQ3IDQ2LjMzMSAyNi40NDcxIDQ2LjIzMUwyNi41MTk1IDQ2LjE4ODRDMjcuMDQwOCA0NS44ODMxIDI3LjIxNTkgNDUuMjEzMSAyNi45MTA2IDQ0LjY5MThDMjYuNjA1MSA0NC4xNzA3IDI1LjkzNSA0My45OTU5IDI1LjQxNCA0NC4zMDA5WiIgZmlsbD0iIzJDMTMzOCIvPgo8cGF0aCBkPSJNMTUuMjYwOCAyNC4wNDdDMTQuNTg5MiAyMy4zNzUzIDEzLjY5NiAyMy4wMDU2IDEyLjc0NTkgMjMuMDA1NkMxMS43OTU5IDIzLjAwNTYgMTAuOTAyNiAyMy4zNzU0IDEwLjIzMDYgMjQuMDQ3QzguODQ0MDIgMjUuNDM0IDguODQ0MDIgMjcuNjkwNyAxMC4yMzA2IDI5LjA3NzVMMTYuNjg5NiAzNS41MzYzQzE3LjM2MTMgMzYuMjA3OCAxOC4yNTQ2IDM2LjU3NzYgMTkuMjA0NyAzNi41Nzc2QzIwLjE1NDggMzYuNTc3NiAyMS4wNDggMzYuMjA3OCAyMS43MTk5IDM1LjUzNjFMMzUuMjAzNCAyMi4wNTI1QzM2LjU4OTkgMjAuNjY1MiAzNi41ODk5IDE4LjQwODggMzUuMjAzMiAxNy4wMjI0QzM0LjUzMTUgMTYuMzUwNiAzMy42MzgyIDE1Ljk4MSAzMi42ODggMTUuOTgxQzMxLjczNzkgMTUuOTgxIDMwLjg0NDYgMTYuMzUwNyAzMC4xNzI4IDE3LjAyMjRMMTkuMjA0NiAyNy45OTA2TDE1LjI2MDggMjQuMDQ3Wk0zMS43MTk4IDE4LjU2OTRDMzEuOTc4MyAxOC4zMTA5IDMyLjMyMjMgMTguMTY4NiAzMi42ODgxIDE4LjE2ODZDMzMuMDU0MSAxOC4xNjg2IDMzLjM5NzggMTguMzEwOSAzMy42NTY1IDE4LjU2OTRDMzQuMTkwMiAxOS4xMDMxIDM0LjE5MDIgMTkuOTcxOCAzMy42NTYzIDIwLjUwNThMMjAuMTczIDMzLjk4OTJDMTkuOTE0NSAzNC4yNDc2IDE5LjU3MDUgMzQuMzg5OSAxOS4yMDQ3IDM0LjM4OTlDMTguODM4OSAzNC4zODk5IDE4LjQ5NDkgMzQuMjQ3NiAxOC4yMzYzIDMzLjk4OTJMMTEuNzc3NSAyNy41MzA2QzExLjI0MzYgMjYuOTk2NyAxMS4yNDM2IDI2LjEyNzkgMTEuNzc3MyAyNS41OTQyQzEyLjAzNTkgMjUuMzM1OCAxMi4zNzk5IDI1LjE5MzMgMTIuNzQ1OCAyNS4xOTMzQzEzLjExMTggMjUuMTkzMyAxMy40NTU2IDI1LjMzNTYgMTMuNzE0IDI1LjU5NEwxOC40MzExIDMwLjMxMTJDMTguNjM2MyAzMC41MTYyIDE4LjkxNDQgMzAuNjMxNSAxOS4yMDQ2IDMwLjYzMTVDMTkuNDk0OCAzMC42MzE1IDE5Ljc3MjggMzAuNTE2MyAxOS45Nzc5IDMwLjMxMTJMMzEuNzE5OCAxOC41Njk0WiIgZmlsbD0iIzJDMTMzOCIvPgo8L3N2Zz4K"/>
                    <span>

                    GDPR-compliant. Your security is our highest priority. 
                    </span>

                    </div>

                    <div>

                    </div>

          </div>


          <div style={{marginTop:"1vw",fontSize:"21px",marginBottom:"4vw"}}>
            <span style={{color:"white"}}>Onboarding a team?</span> <span style={{marginLeft:"10px"}}> <a style={{textDecoration:"none"}} href="">Book a demo</a> </span>
          </div>

        </div>
      </div>

      {/* background: #FFF3ED; */}
      {/* background: #FFF3ED; */}
<div style={{backgroundColor:"#FFF3ED",paddingTop:'8vw',height:"100vw"}}>
<div style={{backgroundColor:"#FFF3ED",fontSize:"3vw",width:"48vw",fontWeight:"500",margin:"auto",height:"12vw"}} >
  
  Toggl Track saves you <em style={{color:"#d45dd0"}}>
   time and money
  </em>

  , no matter how you use it.
  
</div>



<div className='divmainbranch'>


{/* background: #FAE5F7; */}
<div className='divmain1' style={{marginLeft:"13vw",backgroundColor:"#FAE5F7"}}> 

<p style={{color:"#d45dd0",fontSize:"20px",fontWeight:"600"}}>
Billing and Invoicing
</p>
<p  style={{color:"#d45dd0",fontSize:"28px",fontWeight:"600",width:"24vw",color :"black"}}>
Do you <em> sell your time?</em><br />
We'll help you get the numbers right. Every time.
</p>
<button style={{position:'relative',bottom:'12vw',color:"white",backgroundColor:"#e675bc"}} className='btn'>Learn more</button> <img style={{position:'relative',right:"5vw"}} src={require('./money.png')} />

<p style = {{width:"26vw",marginLeft:'2vw',fontWeight:"600"}}>
"We saved $18,000 by identifying missing billable hours, thanks to Toggl Track"
</p>
<p style={{paddingLeft:"2vw"}} >
  <a href="">Platinum Companies, Operations Consulting</a>
</p>
</div>


{/* 
<div className='divmain2'>

<p>
Billing and Invoicing
</p>
<p>
Do you <em> sell your time?</em><br />
We'll help you get the numbers right. Every time.
</p>
<button>Learn more</button> <img src={require('./money.png')} />

<p>
"We saved $18,000 by identifying missing billable hours, thanks to Toggl Track"
</p>
<p>
  <a href="">Platinum Companies, Operations Consulting</a>
</p>
</div> */}

{/* background: #FCE5D8; */}

<div className='divmain1' style={{marginRight:"13vw",backgroundColor:"#FCE5D8"}}>

<p style={{color:"#d45dd0",fontSize:"20px",fontWeight:"600"}}>
Employee Time Tracking
</p>
<p  style={{color:"#d45dd0",fontSize:"28px",fontWeight:"600",width:"24vw",color:"black"}}>
Improve team productivity and <em> happiness</em>  without the micromanagement.
</p>
<button style={{position:'relative',bottom:'12vw',color:"white",backgroundColor:"#e675bc"}} className='btn'>Learn more</button> <img style={{position:'relative',right:"5vw"}} src={require('./user.png')} />

<p style = {{width:"26vw",marginLeft:'2vw',fontWeight:"600"}}>
"We had a 100% adoption rate. Toggl Track was wholeheartedly accepted by everyone."
</p>
<p style={{paddingLeft:"2vw"}} >
  <a href="">Newlogic, Software Consulting</a>
</p>
</div>









</div>







<div className = "projectdiv">




{/* background: #FCE5D8; */}
  <div style={{backgroundColor:"#FCE5D8",marginLeft:"12vw"}} className = "learndiv">
<h3 style={{color:"#d45dd0"}}>Project Budgeting</h3>
<p style={{fontSize:"23px",fontWeight:"600"}}>No more anxiety over late deadlines and unprofitable projects. Plan and set budgets with confidence!</p>

<p style={{marginTop:"5vw",fontSize:"17px",fontWeight:"400",color:"#564260"}}>
Learn more <img style = {{height:"1vw",position:"relative",top:'3px'}} src="https://img.icons8.com/sf-black-filled/344/chevron-right.png" alt="" />
</p>
  </div>



  {/* background: #ffebbd; */}

  <div style = {{backgroundColor:"#ffebbd"}} className = "learndiv">
<h3 style={{color :"#d45dd0"}}>Project Budgeting</h3>
<p style={{fontSize:"23px",fontWeight:"600"}}>No more anxiety over late deadlines and unprofitable projects. Plan and set budgets with confidence!</p>

<p style={{marginTop:"5vw",fontSize:"17px",fontWeight:"400",color:"#564260"}}>
Learn more <img style = {{height:"1vw",position:"relative",top:'3px'}} src="https://img.icons8.com/sf-black-filled/344/chevron-right.png" alt="" />
</p>
  </div>




  {/* background: #FAE5F7; */}

  <div style={{backgroundColor:"#FAE5F7",marginRight:"12vw"}} className = "learndiv">
<h3  style={{color :"#d45dd0"}}>Project Budgeting</h3>
<p style={{fontSize:"23px",fontWeight:"600"}}>No more anxiety over late deadlines and unprofitable projects. Plan and set budgets with confidence!</p>

<p style={{marginTop:"5vw",fontSize:"17px",fontWeight:"400",color:"#564260"}}>
Learn more <img style = {{height:"1vw",position:"relative",top:'3px'}} src="https://img.icons8.com/sf-black-filled/344/chevron-right.png" alt="" />
</p>
  </div>








</div>





</div>




<div className = "skewdiv">
<img style={{position:'relative',left:"22vw",bottom:"9vw",width:"29vw"}} src={require('./slide.png')} />

<div style={{width:"38vw",textAlign:"justify",fontWeight:"500",marginLeft:"12vw",position:"relative",bottom :"9vw"}} className = "goal">
70,000+ customers use Toggl Track to hit their productivity and business goals
 </div>




 {/* font-family: 'GT Haptik Medium',sans-serif;
    font-weight: 400;
    line-height: 1.2;
    font-size: clamp(3rem * 0.55, 3.5vw, 3rem);
    margin-bottom: 8px; */}
    {/* padding: 30px;
    text-align: center;
    background: #FFF3ED; */}

 <div style={{display:"flex",justifyContent:"space-evenly",position:"relative",bottom:"5vw",right:"4vw"}}>
<div style  = {{border :'2px solid white',width:"20vw",height:"36vh",backgroundColor:"#FFF3ED",marginLeft:"28vh"}} className='skewdiv1'>
  <span style={{color:"#EA96E0",fontSize:"3.5vw",fontWeight:"600",fontSize:"clamp(3rem*0.55,3.5vw,3rem)"}}>
  ↑
  </span>
  <span style = {{color:"black",fontSize:"3vw",fontWeight:"600"}}>
    20%
  </span>

  <p>
  Toggl Track increased PR Agency Sweat+Co’s profitability by at least 20% with accurate billable hours tracking.
  </p>

<p style={{color:"#EA96E0"}}>Read case study <img style = {{height:"1vw",position:"relative",top:'3px'}} src="https://img.icons8.com/sf-black-filled/344/chevron-right.png" alt="" /> </p>
</div>

<div style  = {{border :'2px solid white',width:"20vw",height:"36vh",backgroundColor:"#FFF3ED"}} className='skewdiv1'>
  <span style={{color:"#EA96E0",fontSize:"3.5vw",fontWeight:"600",fontSize:"clamp(3rem*0.55,3.5vw,3rem)"}}>
  ↑
  </span>
  <span style = {{color:"black",fontSize:"3vw",fontWeight:"600"}}>
    20%
  </span>

  <p>
  Toggl Track increased PR Agency Sweat+Co’s profitability by at least 20% with accurate billable hours tracking.
  </p>

<p style={{color:"#EA96E0"}}>Read case study <img style = {{height:"1vw",position:"relative",top:'3px'}} src="https://img.icons8.com/sf-black-filled/344/chevron-right.png" alt="" /> </p>
</div>


<div style  = {{border :'2px solid white',width:"20vw",height:"36vh",backgroundColor:"#FFF3ED",marginRight:"28vh"}} className='skewdiv1'>
  <span style={{color:"#EA96E0",fontSize:"3.5vw",fontWeight:"600",fontSize:"clamp(3rem*0.55,3.5vw,3rem)"}}>
  ↑
  </span>
  <span style = {{color:"black",fontSize:"3vw",fontWeight:"600"}}>
    20%
  </span>

  <p>
  Toggl Track increased PR Agency Sweat+Co’s profitability by at least 20% with accurate billable hours tracking.
  </p>

<p style={{color:"#EA96E0"}}>Read case study <img style = {{height:"1vw",position:"relative",top:'3px'}} src="https://img.icons8.com/sf-black-filled/344/chevron-right.png" alt="" /> </p>
</div>







 </div>

 <div>

 </div>


 <div style={{paddingTop:"5vh",height:"49vh"}} className = "brand">
 <img src={require('./brand.png')} />
 <p style = {{marginTop:"5vw"}}>
  <button className='startbtn' style = {{height:"9vh",width:"15vw",fontSize:"15px",fontWeight:"600",borderRadius:"2vw"}}>
  Start tracking for free
  </button>
  <span  style={{marginLeft:"2vw",fontSize:"18px",fontWeight:"600",color:"#c938c4"}}>
  Or book a demo  <img style = {{height:"1vw",position:"relative",top:'3px'}} src="https://img.icons8.com/sf-black-filled/344/chevron-right.png" alt="" />
  </span>
 </p>
 </div>
</div>

<div style={{border :'2px solid white',position:"relative",bottom:"15vw",backgroundColor:"#FFF3ED"}}>



 <div style = {{height:"auto",display:"flex",justifyContent:"space-evenly",marginTop:"4vw"}}>
<div style={{width:"30vw",fontFamily:"sans-serif"}}>
<p style = {{fontSize:"50px"}}>
A time tracking tool <span> <em style={{color:"#c938c4"}} >anyone</em> </span> <span>  can use </span>
</p>
<p style={{fontSize:"20px",textAlign:"center"}}>
Whether you are a team of one or a thousand, we understand that being productive is different for everyone. This is why Toggl Track is built into any workflow.
</p>



</div>
 





 <div style={{width:"30vw",fontFamily:"sans-serif"}}>
 <img style = {{height:"20vw"}}  src={require('./watch.png')} />
 </div>

 </div>



 <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"4vw"}}>

<div style = {{width:"19vw",textAlign:"left",marginLeft:"10vw"}}>
{/* 1 */}
<img style={{width:"10vw"}} src="https://public-assets.toggl.com/b/static/illo-integrations-6b17ecf23dcdd61c6225b50a3cb52c4b.png" alt="" />
<p style = {{color:"#2C1338",fontWeight:"700",fontSize:"22px"}}>
100+ integrations
</p>
<p style={{color:"#564260",lineHeight:"1.5",fontSize:"17px"}}>
Use Toggl Track with the tools you already use. Track time in 100+ popular tools with the Toggl Track browser extension.
</p>

</div>

<div style = {{width:"19vw",textAlign:"left"}}>
{/* 1 */}
<img style={{width:"15vw"}} src="https://public-assets.toggl.com/b/static/illo-desktop-mobile-cf42e1f520c9e57b534affd23bcc4340.png" alt="" />
<p style = {{color:"#2C1338",fontWeight:"700",fontSize:"22px"}}>
Works where you work
</p>
<p style={{color:"#564260",lineHeight:"1.5",fontSize:"17px"}}>
Track time on our web app, desktop, and mobile apps. You can even start the timer from your stopwatch!
</p>

</div>




<div style = {{width:"19vw",textAlign:"left",marginRight:"10vw",paddingBottom:"1vw"}}>
{/* 1 */}
<img style={{width:"10vw"}} src="data:image/png;base64,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" alt="" />
<p style = {{color:"#2C1338",fontWeight:"700",fontSize:"22px",position:"relative",bottom:"3vh"}}>
Designed to be easy
</p>
<p style={{color:"#564260",lineHeight:"1.5",fontSize:"17px",position:"relative",bottom:"3vh"}}>
No instruction manual needed. But if you ever need help, our support team has a track record of responding within 3 hours!
</p>

</div>



 </div>

</div>
<Footer/>
      </>
   
  )
}

export default Upperbase;

