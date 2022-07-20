import React, { useEffect, useState,useRef } from 'react'
import './navbar.css'

const Upperbase = () => {
  const [Timer,setTimer] = useState(0);
  const [Count,setCount] = useState(0);
  const [Hour,SetHour] = useState(0)
const [Email,Setemail] = useState("");
const [Pass,Setpass] = useState("");
const [Passname,Setpassname] = useState("password")
const [Colorchange,Setcolorchange] = useState("#400b3e")
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

  const ChangeTheme = ()=>{


  }

  


  return (
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
<input className='inp1' onClick={ChangeTheme()} onChange={(e)=>Setemail(e.target.value)} placeholder='Email' type="email" style={{height:"3.2vw",width:"25vw",marginBottom:"2vw",color:"whitesmoke",backgroundColor:"#400b3e",border:"2px solid white",fontSize:"1.3vw"}}  />
<br />
<input className='InfoPass' onClick={ChangeTheme()}  onChange={(e)=>Setpass(e.target.value)} placeholder='A strong Password' type={Passname} style={{height:"3.2vw",width:"25vw",backgroundColor:"#400b3e",border:"2px solid white",fontSize:"1.3vw"}} />
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
<button className='signupbtn' style={{height:"3.8vw",width:"15vw",borderRadius:"5vw",fontSize:"15px",fontWeight:"bold",color:"white"}}>Sign up with email</button>
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


          <div style={{marginTop:"1vw",fontSize:"21px",marginBottom:"5vw"}}>
            <span style={{color:"white"}}>Onboarding a team?</span> <span style={{marginLeft:"10px"}}> <a style={{textDecoration:"none"}} href="">Book a demo</a> </span>
          </div>

        </div>
      </div>
     
   
  )
}

export default Upperbase