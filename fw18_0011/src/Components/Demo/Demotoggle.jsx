import React from 'react'

const Demotoggle = () => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"5vw"}}>
            {/* <img style={{height:"8vw",position:'relative',top:"5vw"}} src={require('./hand.png')} /> */}

<div>

<div style = {{color:"#FDF1EC",fontSize:"2vw",width:"50vw",fontWeight:"600"}}>
“Toggl Track has given us actual data about our labor; we're able to see how much time each step of our creative process takes.”
</div>
<div style = {{textDecoration:"underline",color:"whitesmoke",marginTop:"2vw"}}>
---RogueMark Studios, Creative Agency
</div>

</div>
<div>
            <img style={{height:"15vw",}} src={require('./fam.png')} />

</div>




    </div>
    <div style={{textAlign:"center",marginTop:"7vw"}}>
    <img style={{height:"10.5vw",}} src={require('./staricon.png')} />
    </div>
    </>
  )
}

export default Demotoggle
