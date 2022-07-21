import React from 'react'
import Navbar from '../Navbar'
import "./footer.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    const [Passname,Setpassname] = useState("password")
    const [Email,setEmail]  = useState("")
    const [pass,Setpass]  = useState("")
    const [store,Setstore] = useState([]);
    let navigate = useNavigate()
    let Backtologin = useNavigate();
const [emailborder,setemailborder] = useState("2px solid white");
const [passborder,setpassborder] = useState("2px solid white")
        const [Theme1,setTheme1] = useState("transparent")
        const [Theme2,setTheme2] = useState("transparent")
    const SignUp = ()=>{
        navigate("/signup")
      }
      
          
        const ShowPass = ()=>{
      
          console.log(1)
              if (Passname == "password") {
                Setpassname("text");
          
            
              } else {
              Setpassname("password");
          
            
              }
            }
      
            const ChangeTheme1 = ()=>{
                setTheme1("white");
            setTheme2("transparent")
      
               
            }
            const ChangeTheme2 = ()=>{
              setTheme2("white");
            setTheme1("transparent")
          }



          const Runprogram = (event)=>{
            event.preventDefault();
var obj = {
    Info_one : Email,
    Info_two : pass,

}
if(obj.Info_one !== "" && obj.Info_two !== ""){
    var arr = JSON.parse(localStorage.getItem("data")) || [];
    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));
    Backtologin("/login")

}
else{
if(obj.Info_one == "" && obj.Info_two == ""){
    setemailborder("2px solid red")
    setpassborder("2px solid red")
}
else if(obj.Info_one === ""){
    setemailborder("2px solid red")

}
else{
    setpassborder("2px solid red")

}
}
          }


  return (
    
    <div style={{backgroundColor:"#400b3e"}}>
      {/* <Navbar/> */}

      <div className='signupNav'>


      <div style = {{display:"flex",position:'relative',rigth:"1vw",top:"0.4vw"}}>
           <svg style={{height:"2.2vw"}} viewBox='0 0 167 33' fill = "#E57CD8" >
         

                <path d= "M103.51 25.802a10.27 10.27 0 01-1.36.084c-1.515 0-2.651-.35-3.409-1.05-.757-.702-1.136-1.924-1.136-3.665V10.586h-3.614V8.754h3.614V4.208h2.1v4.546h4.992v1.832h-4.992v10.686c0 .905.184 1.578.551 2.02.367.44 1.033.66 1.997.66.528 0 .987-.021 1.377-.067.39-.045.78-.102 1.17-.17v1.833c-.436.113-.866.197-1.29.254">

                </path>
                {/* <path d = "M19.761 26.378c-.049-1.438-.48-2.962-1.577-3.966-1.226-1.12-3-1.635-4.648-1.635H6.19c-.725 0-1.369-.537-1.369-1.2 0-.557.386-1.024.91-1.16-.002 0 .123-.032.258-.074 1.315.622 2.799.903 4.28.903 2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.375-5.71A7.532 7.532 0 0014.9 4.533c1.56.356 3.17-.085 4.28-1.97L16.058.353l-2.606 3.573a10.55 10.55 0 00-3.184-.473c-2.265 0-4.537.656-6.199 2.188-1.619 1.49-2.375 3.575-2.375 5.709 0 2.134.756 4.218 2.375 5.71.14.13.286.252.435.37l-.303.158c-.599.33-1.33.857-2.054 1.617C1.12 20.28.094 21.894.094 24.038c0 0-.143 4.578 5.192 4.578h3.865c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.737-2.962 1.683-4.534M8.958 9.938c.365-.36.865-.515 1.363-.515s.997.155 1.362.515c.356.35.522.841.522 1.343s-.166.992-.522 1.343c-.365.36-.864.515-1.362.515-.498 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343">

                </path> */}
<path d= "M20.46 26.378c-.05-1.438-.48-2.962-1.578-3.966-1.225-1.12-2.999-1.635-4.647-1.635l-8.529-.061c-.537 0-.948-.333-.948-.824 0-.405.204-1.009.718-1.11a10.56 10.56 0 003.152.464c2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.374-5.71a7.532 7.532 0 00-1.567-1.107c1.56.356 3.17-.085 4.279-1.97L14.418.353l-2.605 3.573a10.557 10.557 0 00-3.185-.473c-2.265 0-4.536.656-6.199 2.188C.81 7.13.054 9.215.054 11.349c0 2.134.757 4.218 2.375 5.71.48.441 1.01.81 1.576 1.111-.374.28-.767.623-1.16 1.034C1.82 20.28.793 21.894.793 24.038c0 0-.142 4.578 5.193 4.578H9.85c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.738-2.962 1.683-4.534M7.37 9.938c.365-.36.864-.515 1.363-.515.498 0 .997.155 1.363.515.355.35.522.841.522 1.343s-.167.992-.522 1.343c-.366.36-.865.515-1.363.515-.499 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343"
                 transform = "translate(39.22 1.913)"
                ></path>

                <path d= "M20.46 26.378c-.05-1.438-.48-2.962-1.578-3.966-1.225-1.12-2.999-1.635-4.647-1.635l-8.529-.061c-.537 0-.948-.333-.948-.824 0-.405.204-1.009.718-1.11a10.56 10.56 0 003.152.464c2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.374-5.71a7.532 7.532 0 00-1.567-1.107c1.56.356 3.17-.085 4.279-1.97L14.418.353l-2.605 3.573a10.557 10.557 0 00-3.185-.473c-2.265 0-4.536.656-6.199 2.188C.81 7.13.054 9.215.054 11.349c0 2.134.757 4.218 2.375 5.71.48.441 1.01.81 1.576 1.111-.374.28-.767.623-1.16 1.034C1.82 20.28.793 21.894.793 24.038c0 0-.142 4.578 5.193 4.578H9.85c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.738-2.962 1.683-4.534M7.37 9.938c.365-.36.864-.515 1.363-.515.498 0 .997.155 1.363.515.355.35.522.841.522 1.343s-.167.992-.522 1.343c-.366.36-.865.515-1.363.515-.499 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343"
                 transform = "translate(57.22 1.913)"
                ></path>

                <path d= "M10.33 25.7v-6.833c-1.592.199-2.146-.907-2.146-2.006V.176H.288v17.932c0 2.227.336 4.084 1.151 5.252 1.253 1.779 2.947 2.943 6.317 2.957.622-.027 1.66-.148 2.574-.617"
                transform='translate(76.294 .242)'
                >

                </path>
                {/* <path d= "M34.297 8.345c-2.04-2.05-4.823-2.929-7.602-2.929-2.778 0-5.563.88-7.6 2.929-1.986 1.996-2.913 4.787-2.913 7.643 0 2.857.927 5.647 2.912 7.643 2.038 2.05 4.823 2.928 7.601 2.928 2.779 0 5.563-.878 7.602-2.928 1.984-1.996 2.912-4.787 2.912-7.643s-.928-5.648-2.912-7.643m-5.884 9.287c-.472.466-1.117.664-1.76.664-.644 0-1.289-.198-1.76-.664-.46-.453-.675-1.087-.675-1.735 0-.649.214-1.282.674-1.735.472-.465 1.117-.665 1.76-.665.644 0 1.29.2 1.761.665.46.453.675 1.086.675 1.735 0 .648-.215 1.282-.675 1.735">

                </path> */}
                <path d= "M34.297 8.345c-2.04-2.05-4.823-2.929-7.602-2.929-2.778 0-5.563.88-7.6 2.929-1.986 1.996-2.913 4.787-2.913 7.643 0 2.857.927 5.647 2.912 7.643 2.038 2.05 4.823 2.928 7.601 2.928 2.779 0 5.563-.878 7.602-2.928 1.984-1.996 2.912-4.787 2.912-7.643s-.928-5.648-2.912-7.643m-5.884 9.287c-.472.466-1.117.664-1.76.664-.644 0-1.289-.198-1.76-.664-.46-.453-.675-1.087-.675-1.735 0-.649.214-1.282.674-1.735.472-.465 1.117-.665 1.76-.665.644 0 1.29.2 1.761.665.46.453.675 1.086.675 1.735 0 .648-.215 1.282-.675 1.735">

</path>
                <path d = "M13.335 18.894c-1.314 0-1.851-.396-2.337-1.004-.314-.397-.47-.98-.47-1.736v-3.537h4.406v-6.34h-4.407V.176H4.894v2.28c0 2.527-1.953 4.576-4.362 4.576A4.29 4.29 0 010 6.997v5.62h2.958v5.648c0 2.222.407 3.935 1.22 5.101 1.257 1.785 2.65 2.952 6.051 2.952 1.972 0 3.623-.447 4.705-1.043v-6.643c-.408.154-.96.262-1.6.262"
                transform='translate(0 .242)'
                >
                </path>
                <path d= "M13.335 18.894c-1.314 0-1.851-.396-2.337-1.004-.314-.397-.47-.98-.47-1.736v-3.537h4.406v-6.34h-4.407V.176H4.894v2.28c0 2.527-1.953 4.576-4.362 4.576A4.29 4.29 0 010 6.997v5.62h2.958v5.648c0 2.222.407 3.935 1.22 5.101 1.257 1.785 2.65 2.952 6.051 2.952 1.972 0 3.623-.447 4.705-1.043v-6.643c-.408.154-.96.262-1.6.262"
                transform='translate(0 .242)'
                ></path>

                <path d= "M111.889 9.232c.918-.702 2.03-1.053 3.339-1.053.482 0 1.044.058 1.687.17v2.172a7.246 7.246 0 00-.895-.136 10.122 10.122 0 00-.827-.034c-1.01 0-1.853.192-2.53.577a4.564 4.564 0 00-1.635 1.56c-.413.656-.706 1.436-.878 2.341a15.462 15.462 0 00-.258 2.884v7.837h-2.1V8.587h2.031v3.868c.46-1.448 1.148-2.522 2.066-3.223M119.46 10.656a4.602 4.602 0 011.307-1.306c.551-.373 1.217-.661 1.997-.865.78-.204 1.71-.306 2.789-.306 2.294 0 3.993.52 5.094 1.561 1.102 1.04 1.653 2.602 1.653 4.682V25.55h-2.1v-3.63c-.528 1.29-1.348 2.273-2.462 2.951-1.113.679-2.392 1.019-3.838 1.019-.941 0-1.773-.131-2.496-.39-.723-.26-1.325-.617-1.807-1.07a4.477 4.477 0 01-1.102-1.628 5.443 5.443 0 01-.378-2.035c0-1.584.521-2.794 1.566-3.63 1.044-.838 2.358-1.335 3.942-1.494l5.714-.542c.574-.068.86-.305.86-.713v-.61c0-1.154-.355-2.065-1.066-2.731-.712-.667-1.87-1.001-3.477-1.001-2.915 0-4.602 1.063-5.06 3.189l-1.86-.985a5.88 5.88 0 01.723-1.594zm4.474 6.92c-1.308.137-2.237.504-2.788 1.104-.55.6-.826 1.295-.826 2.087 0 .972.327 1.747.98 2.323.655.577 1.613.865 2.876.865.963 0 1.818-.164 2.564-.491a5.93 5.93 0 001.894-1.29 5.375 5.375 0 001.17-1.815 5.661 5.661 0 00.396-2.07V16.9l-6.266.678zM135.391 13.54a8.278 8.278 0 011.825-2.833 8.198 8.198 0 012.857-1.866c1.113-.441 2.347-.661 3.7-.661 1.24 0 2.359.192 3.357.576a7.86 7.86 0 012.633 1.663l-1.342 1.628a7.786 7.786 0 00-2.186-1.374 6.632 6.632 0 00-2.565-.491c-.986 0-1.893.163-2.72.491a6.328 6.328 0 00-2.134 1.374c-.596.588-1.061 1.312-1.394 2.171-.332.86-.499 1.81-.499 2.85s.167 1.985.5 2.833a6.286 6.286 0 001.393 2.171 6.196 6.196 0 002.135 1.392 7.211 7.211 0 002.685.492c.964 0 1.865-.176 2.702-.526.838-.35 1.59-.82 2.255-1.408l1.273 1.628c-.734.679-1.617 1.233-2.65 1.662-1.033.43-2.215.645-3.546.645-1.354 0-2.582-.22-3.683-.661-1.102-.441-2.043-1.052-2.823-1.832a7.854 7.854 0 01-1.79-2.8c-.413-1.085-.62-2.272-.62-3.562 0-1.289.212-2.476.637-3.562">

                </path>
                
                <path d= "M2.315 17.329v5.055h-2.1V.044h2.1v14.639l9.053-9.262h2.961l-7.47 7.396 7.642 9.567h-2.754l-6.3-8.142z"
                transform = "translate(152.165 3.166)"
                >
                    </path>

           </svg>
        </div>


      </div>




      <div>

        <div style={{marginLeft:"14.5vw",paddingTop:"3vw"}} className='belowtitle' >
        Sign up for a <em style={{color:"#c947ba"}}>free </em> Toggl Track account
        </div>
        <div style={{marginLeft:"14.5vw",fontSize:"22px",color:"wheat",paddingTop:"2vw"}}>
        All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required.
        </div>
        <div style={{marginLeft:"14.5vw",fontSize:"22px",color:"wheat",paddingTop:"2px"}}>
        Upgrade at the end of the trial or continue using Track for free forever.
        </div>
        <div style={{marginLeft:"14.5vw",fontSize:"22px",color:"wheat",paddingTop:"2vw"}}>
        Already have an account? <Link className='LinkLogin' to = "/login">Log in here.</Link>
        </div>
      </div>


      <div>
      <form onSubmit={Runprogram} action="" style={{textAlign:"center",backgroundColor:"",height:"",paddingLeft:"14vw",display:"flex",marginTop:"3vw"}}>


<div style={{paddingRight:"14vw",border:"2px solid black",width:"28vw",height:"32vw",paddingTop:"2vw",backgroundColor:"#41265c",}}>
<div style={{display:"flex",justifyContent:"space-between",width:"37vw",margin:"auto",paddingLeft:"0vw"}}>
<div style = {{marginLeft:"2vw"}} >
<button className='formButton2'>
<svg  style={{marginLeft:"0vw",height:"2.5vw",width:"4vw",position:"relative"}}   viewBox = "0 0 20 20">
<g fill = "none">
<path d = "M17.876 10.284c0-.574-.052-1.127-.147-1.657H10.1v3.134h4.36a3.726 3.726 0 01-1.617 2.444v2.033h2.618c1.531-1.41 2.415-3.487 2.415-5.954z"
fill = "#4285F4"
>

</path>
<path d = "M10.1 18.2c2.187 0 4.02-.725 5.36-1.962l-2.617-2.033c-.725.486-1.653.773-2.743.773-2.11 0-3.895-1.424-4.532-3.339H2.862v2.099A8.097 8.097 0 0010.1 18.2z"
fill = "#34A853"
>
</path>
<path d = "M5.568 11.639a4.869 4.869 0 01-.254-1.539c0-.534.092-1.053.254-1.539V6.462H2.862A8.097 8.097 0 002 10.1c0 1.307.313 2.544.862 3.638l2.706-2.099z"
fill = "#FBBC05"
></path>
<path d = "M10.1 5.222c1.19 0 2.257.408 3.096 1.21L15.52 4.11C14.117 2.803 12.283 2 10.1 2a8.097 8.097 0 00-7.238 4.462l2.706 2.099c.637-1.915 2.422-3.34 4.532-3.34z"
fill = "#EA4335"
></path>
</g>

</svg>
<span style={{position:"relative",bottom:"12px"}}>Login via Google</span>
</button>



</div>
<div style = {{marginLeft:"2vw"}} >
<button className='formButton2'>
<svg style={{height:"2.5vw",width:"4vw",position:"relative"}} viewBox='0 0 20 20' version='1.1'>
<g>
    <path d = "M15.027 9.67a4.048 4.048 0 011.916-3.392 4.112 4.112 0 00-3.244-1.763c-1.365-.144-2.688.82-3.384.82-.709 0-1.78-.806-2.933-.782a4.317 4.317 0 00-3.636 2.229c-1.571 2.735-.399 6.756 1.107 8.967.753 1.083 1.634 2.293 2.786 2.25 1.127-.047 1.548-.723 2.91-.723 1.347 0 1.742.723 2.918.696 1.21-.02 1.972-1.088 2.699-2.181a8.975 8.975 0 001.234-2.527 3.908 3.908 0 01-2.373-3.594zm-2.285-6.826A3.873 3.873 0 0013.685 0a4.25 4.25 0 00-2.714 1.352 3.69 3.69 0 00-.968 2.739 3.523 3.523 0 002.739-1.247z"
    fill= "#000"
    ></path>
</g>

</svg>
<span style={{position:"relative",bottom:"12px"}}> Login via Apple</span>
</button>
</div>
</div>


<div  style={{height:"7vh",width:"50vw",textAlign:"left",paddingLeft:"2vw",fontSize:"18px",marginTop:"2vw"}}>
<label style={{color:"white"}} htmlFor="">Email</label>
<br/>
<input onClick={ChangeTheme1} onChange = {(e)=>setEmail(e.target.value)} placeholder='Email' style={{fontSize:"18px",height:"6vh",width:"37.5vw",background:Theme1,border:emailborder}} type="email" value = {Email}  />
</div>

<div  style={{margin:"auto",height:"7vh",width:"50vw",textAlign:"left",paddingLeft:"2vw",fontSize:"18px",marginTop:"3vw"}}>
<label style={{color:"white"}} htmlFor="">Password</label>
<br/>
<input onClick={ChangeTheme2} onChange = {(e)=>Setpass(e.target.value)} placeholder='Password' style={{marginBottom:"2vw",fontSize:"18px",height:"6vh",width:"37.5vw",background:Theme2,border:passborder}} type={Passname} value = {pass} />


<svg  onClick = {ShowPass} style = {{position:'relative',right:'2.5vw',top:"0.8vw"}} width = "35" height= "35" fill = "#FCE5D8" viewBox = "0 0 20 20 ">
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


<div  style={{paddingRight:"12vw",margin:"auto",height:"7vh",width:"40vw",textAlign:'right',paddingLeft:"0vw",fontSize:"18px",marginTop:"2vw"}}>
<label style={{textDecoration:"underline",color:'white'}} htmlFor="">Forgot Password?</label>
<br/>
<input  className='Loginin' style={{marginTop:"2vw",marginBottom:"1vw",borderRadius:"1.8vw",fontSize:"18px",height:"7vh",width:"37.5vw",color : "white"}} type="submit" value="Sign up via email"  />

</div>

<div style={{margin:"auto",width:'42vw',marginTop:"6vw",}}>
{/* <svg  style={{height:"2vw",marginRight:"10px"}} viewBox='0 0 535.5 535.5 'fill='#FCE5D8'>
<path d  = "M420.75 178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5s-127.5 56.1-127.5 127.5v51h-25.5c-28.05 0-51 22.95-51 51v255c0 28.05 22.95 51 51 51h306c28.05 0 51-22.95 51-51v-255c0-28.05-22.95-51-51-51zm-153 229.5c-28.05 0-51-22.95-51-51s22.95-51 51-51 51 22.95 51 51-22.95 51-51 51zm79.05-229.5H188.7v-51c0-43.35 35.7-79.05 79.05-79.05 43.35 0 79.05 35.7 79.05 79.05v51z">

</path>
</svg> */}
<span style={{fontSize:"14px",position:'relative',bottom:'8px',color:"white"}}> By signing up, you agree to our <a style={{color:"pink"}} href="">terms of service</a>, <a style={{color:"pink"}} href="">privacy policy </a> and to receiving marketing communication from Toggl Track. You can opt out anytime.</span>
</div>
</div>

<div>

    <div className='Toggletruck'>
    <span style={{marginBottom:"0",fontSize:"7vw"}}>
“
</span>
<br />
    <span style={{position:"relative",bottom:"5vw"}}>Toggl Track has a very straightforward interface. It's easy to start, stop and edit time entries and to review your own work and the work of colleagues.</span>
    </div>

    <div className='Toggletruck' style={{height:"13vw"}}>
   <em style={{color:"#d4de6a"}}> It just works</em>, even in a team where some members find new interfaces challenging.
    </div>
    <div style={{fontSize:"19px",marginLeft:"2vw",color:"white",position:'relative',bottom:"8vw"}}>
    — Verified G2Crowd review. 5/5 stars.
    </div>
    <div style={{paddingLeft:"3vw"}}>
    <img style={{height:"3.5vw",position:'relative',bottom:"4vw"}} src={require('./symbol.png')} />
    </div>
<div>

</div>
</div>

</form>
      </div>
    </div>
  )
}

export default Signup
