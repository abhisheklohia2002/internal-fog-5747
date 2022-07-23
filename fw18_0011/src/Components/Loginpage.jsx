import React from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import UpperLogin from "./LoginUpper"
import { useState,useEffect } from 'react';
const Login = () => {
    const [Theme,setTheme] = useState("transparent");
    const jump = useNavigate();
    const [show,Setshow]  = useState('none');
    const Popup = ()=>{
        if(show === "none"){
            Setshow("block")
        }
        else{
            Setshow("none")
        }
    }

   const runProgram  = ()=>{
    setTheme("#400b3e");
    
   }
   const RunColor = ()=>{
    setTheme("0");

   }
   const getback  = useNavigate();


   const Getback = ()=>{
getback("/");

   }
   const SignupPage = ()=>{
        jump("/signup")
   }
  return (
    <>
    <div style={{background:""}}>
    <div onMouseEnter={RunColor}   className='mainnavbar' style={{position:'fixed',background:Theme}}>
    <div style={{background:Theme}} className='Navbar'>
        <div onClick={Getback} style = {{display:"flex",position:'relative',rigth:"1vw",top:"0.4vw",cursor:"pointer"}}>
           <svg onClick={Getback} style={{height:"2.2vw"}} viewBox='0 0 167 33' fill = "#E57CD8" >
           

                <path onClick={Getback} d= "M103.51 25.802a10.27 10.27 0 01-1.36.084c-1.515 0-2.651-.35-3.409-1.05-.757-.702-1.136-1.924-1.136-3.665V10.586h-3.614V8.754h3.614V4.208h2.1v4.546h4.992v1.832h-4.992v10.686c0 .905.184 1.578.551 2.02.367.44 1.033.66 1.997.66.528 0 .987-.021 1.377-.067.39-.045.78-.102 1.17-.17v1.833c-.436.113-.866.197-1.29.254">

                </path>
              
<path onClick={Getback} d= "M20.46 26.378c-.05-1.438-.48-2.962-1.578-3.966-1.225-1.12-2.999-1.635-4.647-1.635l-8.529-.061c-.537 0-.948-.333-.948-.824 0-.405.204-1.009.718-1.11a10.56 10.56 0 003.152.464c2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.374-5.71a7.532 7.532 0 00-1.567-1.107c1.56.356 3.17-.085 4.279-1.97L14.418.353l-2.605 3.573a10.557 10.557 0 00-3.185-.473c-2.265 0-4.536.656-6.199 2.188C.81 7.13.054 9.215.054 11.349c0 2.134.757 4.218 2.375 5.71.48.441 1.01.81 1.576 1.111-.374.28-.767.623-1.16 1.034C1.82 20.28.793 21.894.793 24.038c0 0-.142 4.578 5.193 4.578H9.85c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.738-2.962 1.683-4.534M7.37 9.938c.365-.36.864-.515 1.363-.515.498 0 .997.155 1.363.515.355.35.522.841.522 1.343s-.167.992-.522 1.343c-.366.36-.865.515-1.363.515-.499 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343"
                 transform = "translate(39.22 1.913)"
                ></path>

                <path onClick={Getback} d= "M20.46 26.378c-.05-1.438-.48-2.962-1.578-3.966-1.225-1.12-2.999-1.635-4.647-1.635l-8.529-.061c-.537 0-.948-.333-.948-.824 0-.405.204-1.009.718-1.11a10.56 10.56 0 003.152.464c2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.374-5.71a7.532 7.532 0 00-1.567-1.107c1.56.356 3.17-.085 4.279-1.97L14.418.353l-2.605 3.573a10.557 10.557 0 00-3.185-.473c-2.265 0-4.536.656-6.199 2.188C.81 7.13.054 9.215.054 11.349c0 2.134.757 4.218 2.375 5.71.48.441 1.01.81 1.576 1.111-.374.28-.767.623-1.16 1.034C1.82 20.28.793 21.894.793 24.038c0 0-.142 4.578 5.193 4.578H9.85c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.738-2.962 1.683-4.534M7.37 9.938c.365-.36.864-.515 1.363-.515.498 0 .997.155 1.363.515.355.35.522.841.522 1.343s-.167.992-.522 1.343c-.366.36-.865.515-1.363.515-.499 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343"
                 transform = "translate(57.22 1.913)"
                ></path>

                <path onClick={Getback} d= "M10.33 25.7v-6.833c-1.592.199-2.146-.907-2.146-2.006V.176H.288v17.932c0 2.227.336 4.084 1.151 5.252 1.253 1.779 2.947 2.943 6.317 2.957.622-.027 1.66-.148 2.574-.617"
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
        <div className='item'  style={{height:"2vw"}}>
Porduct <img className='imgicon' style={{height:"10px"}} src='https://cdn-icons-png.flaticon.com/512/57/57055.png'/>
        </div>
        <div className='item'  style={{height:"2vw"}}>
Pricing
        </div>
        <div className='item'  style={{height:"2vw"}}>
<span onClick={Popup}>
Why Track?
    </span> <img className='imgicon' style={{height:"10px"}} src='https://cdn-icons-png.flaticon.com/512/57/57055.png'/>
        </div> <div className='item'  style={{height:"2vw"}}>
Careers  <img className='imgicon' style={{height:"10px"}} src='https://cdn-icons-png.flaticon.com/512/57/57055.png'/>
        </div>
    </div>

    <div className='navsecond' style={{background:Theme}}>

        <div className='smallbox' style={{display:"flex",justifyContent:"space-evenly"}}>
        <div className='item' style={{height:"2vw"}}> <Link to = "/demo" className='Link' style={{textDecoration:"none" , color:"white"}}>Book a demo</Link> </div>
        <div className='item'>|</div>
        <div  className='item' style={{height:"2vw"}}> <Link className='Link' style={{textDecoration:"none" , color:"white"}} to = "/login"> Log in</Link></div>
        </div>
        <div>
            <button onClick={SignupPage} className='btn'>Try for free</button>
        </div>
    </div>

   
</div>












<div>
<div className='smallbox' style={{display:"flex",justifyContent:"space-evenly",opacity:"-1"}}>
        <div className='item' style={{height:"2vw"}}>Book a demo</div>
        <div className='item'>|</div>
        <div  className='item' style={{height:"2vw"}}> <Link className='Link' style={{textDecoration:"none" , color:"white"}} to = "/login"> Log in</Link></div>
        </div>
        <div className='smallbox' style={{display:"flex",justifyContent:"space-evenly",opacity:"-1"}}>
        <div className='item' style={{height:"2vw"}}>Book a demo</div>
        <div className='item'>|</div>
        <div  className='item' style={{height:"2vw"}}> <Link className='Link' style={{textDecoration:"none" , color:"white"}} to = "/login"> Log in</Link></div>
        </div>
</div>





{/* <div style={{display:show}} className='dropdown'>
<div className='titledrop'>
TIME TRACKING FOR EVERY TEAM SIZE
</div> */}
<div style={{display:show}} className='dropdown'>
<div className='titledrop'>
TIME TRACKING FOR EVERY TEAM SIZE
</div>
<div className='drop1' style={{display:"flex"}}>
    <div style={{display:"flex"}}>
       <div> <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1NCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjEuMTA0MTciIHkxPSItMS4xMDQxNyIgeDI9IjcuNjQyNTciIHkyPSItMS4xMDQxNyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDEzOTcgLTAuNzEyNzcxIDAuNzIxODkzIDAuNjkyMDA0IDM5LjY0NiAxNC43NzE1KSIgc3Ryb2tlPSIjRTg4OURDIiBzdHJva2Utd2lkdGg9IjIuMjA4MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMS4xMDQxNyIgeTE9Ii0xLjEwNDE3IiB4Mj0iMTQuMTE0NiIgeTI9Ii0xLjEwNDE3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk0MzE5NCAtMC4zMzIyNDEgMC4zNDAwNTMgMC45NDA0MDYgMzkuNjQ2IDIwLjEzMjgpIiBzdHJva2U9IiNERDZGRDEiIHN0cm9rZS13aWR0aD0iMi4yMDgzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxsaW5lIHgxPSIxLjEwNDE3IiB5MT0iLTEuMTA0MTciIHgyPSI3LjY4NDU0IiB5Mj0iLTEuMTA0MTciIHRyYW5zZm9ybT0ibWF0cml4KC0wLjkyNTA1OCAtMC4zNzk4MjcgMC4zODg0MDUgLTAuOTIxNDg5IDkuMTMwMTMgMTUuMjg1MikiIHN0cm9rZT0iI0U4ODlEQyIgc3Ryb2tlLXdpZHRoPSIyLjIwODM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjEuMTA0MTciIHkxPSItMS4xMDQxNyIgeDI9IjE0LjAyNDkiIHkyPSItMS4xMDQxNyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNjYzNzkyIC0wLjc0NzkxNyAwLjc1NjQ3NCAtMC42NTQwMjQgMTQuMTgwOSAxMy4zMTU0KSIgc3Ryb2tlPSIjREQ2RkQxIiBzdHJva2Utd2lkdGg9IjIuMjA4MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIuMDU1NCAxNC40MzYxSDI0LjU0MjZMMTAuNTM2NiAyOC4wNjY0TDE2Ljg2ODggMzQuNjY2OUwyMi45MzI3IDI4LjgxNzdWNTJIMzIuMDU1NFYxNC40MzYxWiIgZmlsbD0iIzQxMkE0QyIvPgo8L3N2Zz4K" alt="" />
       </div>
       <div>
        <p style={{color:"#412A4C"}} className= "titlediv" >
        For small teams
        </p>
        <p style = {{color:"#817187"}} className = "titlediv1" >
        For solo entrepreneurs with a growing list of clients
        </p>
       </div>
    </div>



    <div style={{display:"flex",marginLeft:"5vw"}}>
       <div> <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEwNjBfMTU3NiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMiIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUzIj4KPHJlY3QgeD0iMiIgd2lkdGg9IjQ5LjkxMjYiIGhlaWdodD0iNTMiIGZpbGw9IiNDNEM0QzQiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzEwNjBfMTU3NikiPgo8Y2lyY2xlIGN4PSI0MC44NDkyIiBjeT0iMzYuOTIyMiIgcj0iMy42NzEyMSIgZmlsbD0iI0VEQTNFNCIvPgo8Y2lyY2xlIGN4PSI0Ni4wOTM5IiBjeT0iNDYuMzYxNSIgcj0iMS41NzMzOCIgZmlsbD0iI0U1N0NEOCIvPgo8Y2lyY2xlIGN4PSI4LjMzMjY4IiBjeT0iMTAuNjk5NiIgcj0iNC43MjAxMyIgZmlsbD0iIzU2NDI2MCIvPgo8cGF0aCBkPSJNMTguOTkyNSAxNi42MDQzTDI3LjIwOCAxOS41OTA1TDQ4Ljg0MjEgMjcuNDU0MUM1Mi4wNDc3IDIxLjE5MzkgNTQuOTUzNiA3LjM5OTMxIDQwLjkzMjUgMi4zMDI4OEMyNi45MTE0IC0yLjc5MzU1IDIwLjQ2MzcgOS43MTM2NSAxOC45OTI1IDE2LjYwNDNaIiBmaWxsPSIjNjgzNzJFIiBzdHJva2U9IiM2ODM3MkUiIHN0cm9rZS13aWR0aD0iMC4zNjEwNDciLz4KPGNpcmNsZSBjeD0iMzYuMDg0NSIgY3k9IjE1LjQ1NzciIHI9IjExLjQwMjciIHRyYW5zZm9ybT0icm90YXRlKDE5Ljk3NTMgMzYuMDg0NSAxNS40NTc3KSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMwLjI4NjcgMTcuNzI2NUMzMC44MTQxIDIwLjEwNiAzNC40ODc4IDI0LjIyNTkgMzkuNjYxOCAyMC45MzUzIiBzdHJva2U9IiNGRkFDQTIiIHN0cm9rZS13aWR0aD0iMS4zMTI3MSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik00OC41NDk5IDE3LjI3MzJMMjUuODg2NyA5LjAzNTUzTDI5Ljk0ODkgMS42ODk4OEwzOS4wMzYyIDIuNDA3MzFMNDcuMzczNCA2LjgzTDQ4LjU0OTkgMTcuMjczMloiIGZpbGw9IiM2ODM3MkUiLz4KPGNpcmNsZSBjeD0iMTguMjEyNiIgY3k9IjQwLjkxIiByPSIxMS43NjUxIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjAuMzY1MiAxOC4yMTI2IDQwLjkxKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE1LjE2OTQgNDYuNTY1NkMxNy4xNzM0IDQ4LjA4NDcgMjIuODE0MyA0OC44NzEgMjQuNjg1NSA0Mi44Mjc0IiBzdHJva2U9IiNGRkFDQTIiIHN0cm9rZS13aWR0aD0iMS4yODgwOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yOS40NTc5IDM2LjU3MDVMMjYuMDE3MyAzMy42OTI1QzI1LjkzNTIgMzMuNDcxMSAyNS44MTczIDMzLjI2MyAyNS42ODM0IDMzLjA4NDlDMjQuODAxNSAzMS45MTMxIDIyLjkyOSAzMS42NDg3IDIxLjUxODMgMzIuNjI4MUMyMC4zNDYgMzMuNDQ3MSAxOC44OTIxIDM0LjMxMDYgMTcuMjA5NCAzNC45OTUyQzEzLjY1NzQgMzYuNDQ1NiAxMS4xMjg3IDM1LjAzMzcgMTAuMjI0NiAzNC4zODU4QzcuNjk1MTggMzUuNzA4NiA2LjQxMDggMzguNDg4IDcuMzE4NTUgNDAuOTMzNEw2Ljk3OTAxIDQ0LjkxNDhMNi4yOTg2NyA0My45MTQ1QzYuMjk4NjcgNDMuOTE0NSAxLjYwODc1IDM3Ljg0NzkgMi40OTU4NiAzNS4zMTE5QzMuMzcwOSAzMi44MTY0IDUuNTg0NjcgMzIuOTQyIDUuNTg0NjcgMzIuOTQyQzUuNTg0NjcgMzIuOTQyIDIuMzIxMTggMjcuNjUzMyA4Ljc0MDkxIDI1LjM5MDJDMTUuMTQ4NyAyMy4xMzE1IDI1Ljg2MzggMjYuNjAxNiAyNi45MTcgMjcuNTc3OUMyOC41NTQgMjkuMDY5IDI5LjQ1NzkgMzYuNTcwNSAyOS40NTc5IDM2LjU3MDVaIiBmaWxsPSIjNTY0MjYwIi8+CjwvZz4KPC9zdmc+Cg==" alt="" />
       </div>
       <div>
        <p style={{color:"#412A4C"}} className= "titlediv" >
        For big teams
        </p>
        <p style = {{color:"#817187"}} className = "titlediv1" >
        For teams of less than 10 that need to track projects and bill clients
        </p>
       </div>
    </div>





    <div style={{display:"flex",marginLeft:"5vw",marginRight:"15vw"}}>
       <div> <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOC4yNjM2NCIgY3k9IjYuMjYzNjQiIHI9IjYuMjYzNjQiIGZpbGw9IiNFODg5REMiLz4KPGNpcmNsZSBjeD0iOC4yNjM2NCIgY3k9IjIxLjY4MTYiIHI9IjYuMjYzNjQiIGZpbGw9IiNFODg5REMiLz4KPGNpcmNsZSBjeD0iOC4yNjM2NCIgY3k9IjM3LjA5OTYiIHI9IjYuMjYzNjQiIGZpbGw9IiNFODg5REMiLz4KPGNpcmNsZSBjeD0iMjYuNTcyNyIgY3k9IjExLjA4MiIgcj0iNi4yNjM2NCIgZmlsbD0iI0VEQTNFNCIvPgo8Y2lyY2xlIGN4PSIyNi41NzI3IiBjeT0iMjYuNSIgcj0iNi4yNjM2NCIgZmlsbD0iI0VEQTNFNCIvPgo8Y2lyY2xlIGN4PSIyNi41NzI3IiBjeT0iNDEuOTE3OSIgcj0iNi4yNjM2NCIgZmlsbD0iI0VEQTNFNCIvPgo8Y2lyY2xlIGN4PSI0NC44ODE4IiBjeT0iMTUuODk5NCIgcj0iNi4yNjM2NCIgZmlsbD0iI0Y1Q0JFRiIvPgo8Y2lyY2xlIGN4PSI0NC44ODE4IiBjeT0iMzEuMzE3MyIgcj0iNi4yNjM2NCIgZmlsbD0iI0Y1Q0JFRiIvPgo8Y2lyY2xlIGN4PSI0NC44ODE4IiBjeT0iNDYuNzM1MyIgcj0iNi4yNjM2NCIgZmlsbD0iI0Y1Q0JFRiIvPgo8L3N2Zz4K" alt="" />
       </div>
       <div>
        <p style={{color:"#412A4C"}} className= "titlediv" >
        For big teams
        </p>
        <p style = {{color:"#817187"}} className = "titlediv1" >
        For growing teams that need robust and flexible solutions for time and project tracking
        </p>
       </div>
    </div>

</div>
{/* background-color: #FCE5D8;     color: rgb(44, 19, 56); */}
<div className  = "trackarrow" >

<div className='cursive' style={{color:"rgb(44, 19, 56)",fontWeight:"500",fontSize:"17px",marginRight:"16vw",position :'relative',top:"1vw"}}>
Track has helped teams across multiple industries increase profitability and productivity, shavings hours off admin. Explore case studies

<span>
    <svg style={{height:"1.4vw",transform:"rotate(180deg)",position:"relative",left:"15vw",top:"0.3vw"}} viewBox = "0 0 34 16" >
<g fill = "none">

<path fill = "#412A4C" d = "M2 7v2h32V7z">


</path>
<path d= "M7.5 2L1.677 7.823M7.5 14L1.677 8.177" stroke = "#412A4C" stroke-width= "2" stroke-linecap = "square">

</path>
</g>

    </svg>
</span>
</div>

</div>

 </div>










<div style={{height:"50vw"}}  className = "navimg">
        {/* <img  src={require()} alt="" /> */}
      </div>
<div onMouseEnter={runProgram} style={{textAlign:"center",fontSize:"2.3vw",height:"5vw",marginTop:"6vw",color:"white"}}>
 <h1>Log in to your account</h1>
</div>

    <h2 style={{textAlign:"center",color:"white"}}>Let's get tracking!</h2>

<div>
 <UpperLogin/>
 </div>
 </div>
 </>
  )
}

export default Login
