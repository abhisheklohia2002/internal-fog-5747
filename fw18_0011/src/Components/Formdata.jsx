import React from 'react'
import { useState } from 'react'
const FormDataSubmit = () => {
const [Passname,Setpassname] = useState("password")
    
  const ShowPass = ()=>{

    console.log(1)
        if (Passname == "password") {
          Setpassname("text");
    
      
        } else {
        Setpassname("password");
    
      
        }
      }
  return (
    <div>
     
      <form action="" style={{margin:"auto",textAlign:"center"}}>


        <div style={{border:"2px solid black",width:"60vw",margin:"auto",height:"32vw",paddingTop:"2vw",backgroundColor:"#41265c"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"37vw",margin:"auto",paddingLeft:"0vw"}}>
        <div>
<button className='formButton2'>
    <svg style={{height:"2.5vw",width:"4vw",position:"relative"}}   viewBox = "0 0 20 20">
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
        <div>
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


       <div  style={{margin:"auto",height:"7vh",width:"50vw",textAlign:"left",paddingLeft:"12vw",fontSize:"18px",marginTop:"2vw"}}>
       <label style={{color:"white"}} htmlFor="">Email</label>
        <br/>
        <input placeholder='Email' style={{fontSize:"18px",height:"6vh",width:"37.5vw",background:"transparent",border:"2px solid white"}} type="email"  />
       </div>

       <div  style={{margin:"auto",height:"7vh",width:"50vw",textAlign:"left",paddingLeft:"12vw",fontSize:"18px",marginTop:"3vw"}}>
       <label style={{color:"white"}} htmlFor="">Password</label>
        <br/>
        <input placeholder='Password' style={{marginBottom:"2vw",fontSize:"18px",height:"6vh",width:"37.5vw",background:"transparent",border:"2px solid white"}} type={Passname}  />

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


       <div  style={{paddingRight:"12vw",margin:"auto",height:"7vh",width:"50vw",textAlign:'right',paddingLeft:"0vw",fontSize:"18px",marginTop:"2vw"}}>
       <label style={{textDecoration:"underline",color:'white'}} htmlFor="">Forgot Password?</label>
        <br/>
        <input className='Loginin' style={{marginTop:"2vw",marginBottom:"1vw",borderRadius:"1.8vw",fontSize:"18px",height:"7vh",width:"37.5vw",}} type="submit" value="Log in"  />

       </div>

       <div style={{margin:"auto",width:'18vw',marginTop:"6vw",}}>
        <svg  style={{height:"2vw",marginRight:"10px"}} viewBox='0 0 535.5 535.5 'fill='#FCE5D8'>
<path d  = "M420.75 178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5s-127.5 56.1-127.5 127.5v51h-25.5c-28.05 0-51 22.95-51 51v255c0 28.05 22.95 51 51 51h306c28.05 0 51-22.95 51-51v-255c0-28.05-22.95-51-51-51zm-153 229.5c-28.05 0-51-22.95-51-51s22.95-51 51-51 51 22.95 51 51-22.95 51-51 51zm79.05-229.5H188.7v-51c0-43.35 35.7-79.05 79.05-79.05 43.35 0 79.05 35.7 79.05 79.05v51z">

</path>
        </svg>
      <span style={{fontSize:"18px",position:'relative',bottom:'8px',color:"white"}}>  Company login (SS0)</span>
       </div>
       </div>
      </form>


      <div style={{margin:"auto",paddingTop:"3vw"}}>
    <div style={{textAlign:'center',fontSize:"1.2vw" ,height:"3vw",width:'18vw',margin:"auto"}} >  Don't have an account?</div>
    <div style={{height:"5vw",width:'20vw',margin:"auto",textAlign:"center"}} >
        <button className='signupbyn' style={{height:"3.5vw",width:"13vw",borderRadius:'2vw',fontSize:"17px",color:"white"}} >
            Sign up for free
        </button>
    </div>
      </div>
<div style={{height:"20vw",backgroundColor:"red"}}>

</div>
    </div>
  )
}

export default FormDataSubmit
