import React from 'react'
import Navbar from '../Navbar'
import DemoFile from './Demologin'
import BookDemo from "./BookDemo"
import Footer from '../day3/Footerpage'
import Demotoggle from './Demotoggle'
const DemoCollect = () => {
  return (
    <div style={{backgroundColor:"#400b3e"}}>
        <Navbar/>
    <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"5vw"}}>
<div style={{height:"55vw",width:"42vw",backgroundColor:"#400b3e",marginLeft:"60vw",paddingLeft:"6vw"}}>
    <BookDemo/>

</div>


        <div style={{display:"flex",marginRight:"60vw",paddingRight:"5vw"}}>
        <img style={{height:"8vw",position:'relative',top:"5vw"}} src={require('./hand.png')} /> <DemoFile/>
        </div>
    </div>

<div style={{backgroundColor:"#412A4C",height:"40vw"}}>
  <Demotoggle/>
</div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default DemoCollect
