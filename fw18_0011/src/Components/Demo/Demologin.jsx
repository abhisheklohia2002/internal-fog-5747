import React, { useState } from 'react'
import "./Demo.css"
const DemoFile = () => {
    const [req,setreq] = useState("none")
  return (
    
    <div className='demodiv'>
      <div className = "requestdemo">
      Request a 30-minute custom demo for free.
      </div>
      <p className='p'>All fields are required</p>

      <div className='input1div'>
        <div style={{marginTop:'1vw'}}>
<label className='label' htmlFor="">First Name</label>
<br />
<input className='inp' placeholder='First Name' type="text" name="" id="" />
<p style = {{display:req}}>Required</p>
        </div>

        <div style={{marginTop:'1vw'}}>
        <label className='label' htmlFor="">Last Name</label>
<br />
<input className='inp' placeholder='Last Name' type="text" name="" id="" />
<p style = {{display:req}}>Required</p>

        </div>

 
      </div>



      <div className='cominp'>
<label className='label' htmlFor="">Company Email</label><br/>
<input placeholder  = "Company Email" className='cominpsec' type="email" name="" id="" />

        </div>




        <div className='input1div' style={{marginTop:'1vw'}}>
        <div style = {{marginLeft:"1vw"}}>
<label className='label' htmlFor="">Country Code</label>
<br />
<input style={{width:"7vw"}} className='inp' placeholder='+00' type="number" name="" id="" />
<p style = {{display:req}}>Required</p>
        </div>

        <div>
        <label className='label' htmlFor="">Phone Number</label>
<br />
<input style = {{width:"22vw"}} className='inp' placeholder='Phone Number' type="number" name="" id="" />
<p style = {{display:req}}>Required</p>

        </div>

 
      </div>


      <div className='cominp'>

        <label className='label' htmlFor="">How many people will be using Toggl Track?</label><br/>
<select style={{height:"3vw"}} className='cominpsec'  placeholder='Select an option' name="" id="">
    <option value="default" >
    Select an Option 
    </option>

    <option value="">
        1 - 9
    </option>

    <option value="">
       10 - 25
    </option>

    <option value="">
      26 - 50
    </option>
    <option value="">
      51 - 100
    </option>
    <option value="">
       101 - 150
    </option>
    <option value="">
      151 - 250
    </option>
    <option value="">
      250++
    </option>
</select>


      </div>


 
      <div className='cominp'>

<label className='label' htmlFor="">I plan to use Toggl Track primarily for:</label><br/>
<select style={{height:"3vw"}} className='cominpsec'  placeholder='Select an option' name="" id="">
<option value="default" >
Select an Option 
</option>

<option value="">
Billing clients
</option>

<option value="">
Payroll. Paying contractors or employees
</option>

<option value="">
Planning. Assessing profitability, productivity, and employee well-being
</option>
<option value="">
Transparency. Providing stakeholders with visibility into how time is spent
</option>
<option value="">
Something else
</option>


</select>


</div>

<div className='cominp1'>
{/* <label htmlFor="">Company Email</label><br/> */}
<input  style={{borderRadius:"2vw",fontSize:"17px",height:"3.5vw"}} className='cominpsec1' type="submit" value = "Book a demo" name="" id="" />

        </div>


    </div>
  )
}

export default DemoFile;

