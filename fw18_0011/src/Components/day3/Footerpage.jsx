import React from 'react'
import Below from './below'
import "./footer.css"
const Footer = () => {
  return (
    <div>
      
            {/* toogletrack */}
            <div className='Toogle' style = {{display:"flex",position:'relative',rigth:"1vw",top:"0.4vw",paddingTop:"3vw",paddingLeft:"3vw",height:"3vw"}}>
           <svg style={{height:"2.0vw"}} viewBox='0 0 167 33' fill = "#E57CD8" >
         

                <path d= "M103.51 25.802a10.27 10.27 0 01-1.36.084c-1.515 0-2.651-.35-3.409-1.05-.757-.702-1.136-1.924-1.136-3.665V10.586h-3.614V8.754h3.614V4.208h2.1v4.546h4.992v1.832h-4.992v10.686c0 .905.184 1.578.551 2.02.367.44 1.033.66 1.997.66.528 0 .987-.021 1.377-.067.39-.045.78-.102 1.17-.17v1.833c-.436.113-.866.197-1.29.254">

                </path>
              
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

{/* footer main components */}
        <div className='maindiv1'>
<div className='div1' >
    <div className='title' >
        Toggl Global
    </div>
    <div>
        <ul className='uldiv' >
            <li className='li'>
                Blog
            </li>

            <li className='li'>
               Our Mission
            </li>

            <li className='li'>
               Working at Toggl <span style={{border:'2px solid white',borderRadius:"50%",height:"2vw",width:"5vw",color:"black",backgroundColor:"white"}}>1</span>
            </li>


            <li className='li'>
               Legal Terms
            </li>
        </ul>
    </div>


</div>


<div className='div2' >

<div className='title' >
       Product
    </div>

    <div>
        <ul className='uldiv' >
            <li className='li'>
              Features
            </li>

            <li className='li'>
             Pricing
            </li>

            <li className='li'>
               Integrations 
            </li>


            <li className='li'>
              Case Studies
            </li>
            <li className='li'>
              API
            </li>
        </ul>
    </div>

</div>



<div className='div3' >

<div className='title' >
        use cases
    </div>

    <div>
        <ul className='uldiv' >
            <li className='li'>
            Billing and Invoicing
            </li>

            <li className='li'>
            Employee Time Tracking
            </li>

            <li className='li'>
            Project Budgeting 
            </li>


            <li className='li'>
            Reporting
            </li>
            <li className='li'>
            Payroll
            </li>
        </ul>
    </div>

</div>


<div className='div4' >

<div className='title' >
       download
    </div>

    <div>
        <ul className='uldiv' >
            <li className='li'>
            Mobile Apps
            </li>

            <li className='li'>
            Desktop Apps
            </li>

            <li className='li'>
            Browser Extensions
            </li>


            <li className='li'>
              
            </li>
        </ul>
    </div>

</div>



<div className='div5' >
<div className='title' >
       help
    </div>

    <div>
        <ul className='uldiv' >
            <li className='li'>
            Support & Knowledge Base
            </li>

            <li className='li'>
            Request A Demo
            </li>

            <li className='li'>
            Contact Us
            </li>


            <li className='li'>
             
            </li>
        </ul>
    </div>

</div>


<div className='div6' >
<div className='title' >
       Resources
    </div>

    <div>
        <ul className='uldiv' >
            <li className='li'>
            Time Management Hub
            </li>

            <li className='li'>
            Work From Home Hub
            </li>

            <li className='li'>
            Business Resources
            </li>


            <li className='li'>
            Productivity Resources
            </li>

            <li className='li'>
            Timesheet Templates
            </li>


            <li className='li'>
            Media Kit
            </li>
        </ul>
    </div>

</div>


        </div>


{/* icon  */}
<div className='icon'>
    <div style={{display:'flex',justifyContent:"space-around",width:"32vw",height:"5vw",paddingTop:"2vw"}}>

<div>
    {/* twiter */}
    <svg height="25" viewBox = "0 0 49 40" fill = "#FCE5D8" >

<path d = "M49 4.7a21.6 21.6 0 0 1-5.8 1.6A9.7 9.7 0 0 0 47.6.7a20.1 20.1 0 0 1-6.3 2.5A10 10 0 0 0 33.9 0a9.6 9.6 0 0 0-7.2 3 9.8 9.8 0 0 0-2.9 7.1 10.4 10.4 0 0 0 .3 2.4A28.8 28.8 0 0 1 3.4 2.1 10.2 10.2 0 0 0 2.1 7a9.6 9.6 0 0 0 4.5 8.4A9.1 9.1 0 0 1 2 14.1v.2a9.9 9.9 0 0 0 2.2 6.4 9.8 9.8 0 0 0 5.8 3.4 9.8 9.8 0 0 1-2.7.3l-1.9-.2a10 10 0 0 0 3.5 5 9.7 9.7 0 0 0 5.8 2A19.5 19.5 0 0 1 2.4 36L0 35.9a30.1 30.1 0 0 0 33.5-2.2 31 31 0 0 0 5.7-6.6A28.6 28.6 0 0 0 44 11.3V10a20.5 20.5 0 0 0 5-5.3z">
</path>
    </svg>

</div>



<div>
    {/* facebook  */}
    <svg height="28" viewBox = "0 0 24 49" fill = "#FCE5D8">
<path d = "M15 49V26.6h8.4l.6-8.2h-9v-6.1c0-2.7.7-4.1 3.5-4.1h5.2L24 .4h-.8A41.4 41.4 0 0 0 18 0c-4 0-7 1.1-9 3.2a11.2 11.2 0 0 0-3 8v7.2H0v8.2h6V49h9z"
></path>
        </svg>
</div>



<div>
    {/* {instagram} */}
    <svg height="28" viewBox = "0 0 16 16" fill = "#FCE5D8">
        <path d= "M7.997.005c-2.172 0-2.444.01-3.297.048C3.85.092 3.268.227 2.76.425a3.92 3.92 0 00-1.417.922A3.92 3.92 0 00.42 2.764c-.198.509-.333 1.09-.372 1.941C.01 5.558 0 5.831 0 8.003s.01 2.444.048 3.297c.039.851.174 1.432.372 1.941.204.526.478.972.922 1.417.445.444.89.718 1.417.922.509.198 1.09.333 1.941.372.853.039 1.125.048 3.297.048s2.445-.01 3.298-.048c.851-.039 1.432-.174 1.941-.372a3.92 3.92 0 001.417-.922 3.92 3.92 0 00.922-1.417c.198-.509.333-1.09.372-1.941.039-.853.048-1.125.048-3.297s-.01-2.445-.048-3.298c-.039-.851-.174-1.432-.372-1.941a3.92 3.92 0 00-.922-1.417 3.92 3.92 0 00-1.417-.922c-.509-.198-1.09-.333-1.941-.372-.853-.039-1.126-.048-3.298-.048z"
        
        >

        </path>
        <path d= "M7.997 10.668a2.666 2.666 0 110-5.331 2.666 2.666 0 010 5.331zm0-6.772a4.107 4.107 0 100 8.213 4.107 4.107 0 000-8.213zM13.226 3.733a.96.96 0 11-1.92 0 .96.96 0 011.92 0"
        fill = "#2C1338"
        >

        </path>

    </svg>
</div>

<div>
    {/* youtube
     */}
 

 <svg height="25" viewBox = "0 0 23 16">

    <path fill='#FCE5D8' d= "M22.349 2.5A2.859 2.859 0 0020.338.489C18.552 0 11.409 0 11.409 0S4.267 0 2.481.47A2.917 2.917 0 00.47 2.5C0 4.286 0 7.989 0 7.989s0 3.721.47 5.488a2.86 2.86 0 002.011 2.011c1.805.489 8.928.489 8.928.489s7.143 0 8.929-.47a2.859 2.859 0 002.011-2.011c.47-1.786.47-5.489.47-5.489s.019-3.721-.47-5.507z"
    >
        

    </path>
    <path fill = "#2C1338" d= "M9.135 11.41l5.94-3.421-5.94-3.421z" 
    ></path>

 </svg>
</div>


<div>
    {/* indekin
     */}

     <svg height= "28" viewBox = "0 0 47 47" fill = "#FCE5D8">
        <path d= "M43.5 0h-40A3.4 3.4 0 0 0 0 3.4v40.2A3.4 3.4 0 0 0 3.5 47h40a3.4 3.4 0 0 0 3.5-3.4V3.4A3.4 3.4 0 0 0 43.5 0zM13.9 40.1H7V17.6h7zm-3.4-25.5a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm29.6 25.5h-7v-11c0-2.6 0-5.9-3.6-5.9S25.3 26 25.3 29v11.1h-7V17.6H25v3.1h.1a7.3 7.3 0 0 1 6.6-3.6c7.1 0 8.4 4.7 8.4 10.7V40z"
        ></path>
        </svg>
</div>


<div>
    {/* github */}
    <svg height= "28" viewBox = "0 0 16 16" version = "1.1" fill = "#FCE5D8">
<path d= "M8 .022c-4.42 0-8 3.663-8 8.18 0 3.616 2.292 6.682 5.47 7.762.4.077.547-.176.547-.393 0-.194-.007-.709-.01-1.39-2.226.492-2.695-1.098-2.695-1.098-.364-.945-.89-1.197-.89-1.197-.725-.507.056-.497.056-.497.803.057 1.225.843 1.225.843.714 1.25 1.873.89 2.33.68.072-.529.278-.889.507-1.094-1.777-.204-3.644-.908-3.644-4.042 0-.893.31-1.623.823-2.195-.09-.207-.36-1.039.07-2.165 0 0 .67-.22 2.2.838a7.524 7.524 0 012-.276c.68.004 1.36.095 2 .276 1.52-1.058 2.19-.838 2.19-.838.43 1.126.16 1.958.08 2.165.51.572.82 1.302.82 2.195 0 3.143-1.87 3.834-3.65 4.036.28.245.54.747.54 1.513 0 1.095-.01 1.975-.01 2.24 0 .215.14.47.55.389C13.71 14.88 16 11.812 16 8.203 16 3.685 12.418.022 8 .022z"
></path>
    </svg>
</div>
</div>
</div>
<Below/>

    </div>
  )
}

export default Footer
