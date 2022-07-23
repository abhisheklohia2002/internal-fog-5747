import React from 'react'
import "./Demo.css"
const BookDemo = () => {
  return (
    <div>
     <div style={{fontSize:"50px",fontWeight:"600",width:"40vw",color:"white"}}>
     Book your <span> <em style = {{color:"#d45dd0"}}>free demo</em> </span> of Toggl Track
     </div>

     <div>
       <div style = {{fontWeight:"600",fontSize:"18px",paddingLeft:"",color:"white"}}>
       Explore how you can use Toggl Track with your team to:
       </div>
       <p style={{fontSize:"18px",color:"white"}}>
        <svg style={{marginRight:"10px"}} width="17" height= "14" viewBox='0 0 17 14' >
          <path d= "M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z"
          stroke='#FDF1EC' fill = "#FDF1EC" 
          >

          </path>
        </svg>

        Accurately scope projects and pinpoint scope creep
       </p>


       <p style={{fontSize:"18px",color:"white"}} >
        <svg style={{marginRight:"10px"}} width= "17" height= "14" viewBox = "0 0 17 14">

          <path d= "M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z"
           stroke='#FDF1EC' fill = "#FDF1EC"
          >

          </path>

        </svg>

        Plan and quote project budgets with confidence
       </p>
       <p style={{fontSize:"18px",color:"white"}}>
       <svg style={{marginRight:"10px"}} width= "17" height= "14" viewBox = "0 0 17 14">

<path d= "M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z"
 stroke='#FDF1EC' fill = "#FDF1EC"
>

</path>

</svg>

Improve staffing and team allocation

       </p>
       <p style={{fontSize:"18px",color:"white"}}>
       <svg style={{marginRight:"10px"}} width= "17" height= "14" viewBox = "0 0 17 14">

<path d= "M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z"
 stroke='#FDF1EC' fill = "#FDF1EC"
>

</path>

</svg>

Ensure project and client profitability

       </p>
       <p style={{fontSize:"18px",color:"white"}}>

       <svg style={{marginRight:"10px"}} width= "17" height= "14" viewBox = "0 0 17 14">

<path d= "M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z"
 stroke='#FDF1EC' fill = "#FDF1EC"
>

</path>

</svg>

Integrate time tracking with the tools your team uses

       </p>


       <p style={{fontSize:"18px",color:"white"}}>


       <svg style={{marginRight:"10px"}} width= "17" height= "14" viewBox = "0 0 17 14">

<path d= "M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z"
 stroke='#FDF1EC' fill = "#FDF1EC"
>

</path>

</svg>

Integrate time tracking with the tools your team uses

       </p>



     </div>


     <div className = "world">
     Trusted by 70,000+ teams worldwide
    
     <img style={{height:"7vw",position:'relative',top:"2vw",width:"40vw"}} src={require('./logoicon.png')} />
     <br />


     </div>
     <div style={{paddingTop:"2vw"}}>
      <div>
      <img style={{height:"5vw",position:'relative',top:"5vw",width:"6vw"}} src={require('./com.png')} />
      </div>
      

      <div style={{paddingLeft:"8vw",color:"whitesmoke",fontWeight:"600",fontSize:"16px",width:"24vw"}}>
      Looking for help with general questions or a technical issue?
      </div>

      <div style={{paddingLeft:"8vw",fontWeight:"600",fontSize:"16px",color:"#d45dd0"}}>
      Contact our Support team
      </div>
     </div>
    </div>
  )
}

export default BookDemo
