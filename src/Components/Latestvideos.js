import React from 'react'
import '../Components/Latestvideos.css'
function Latestvideos() {
  return (
    <div>
              <h1 className='heading-2'>Latest Recipe</h1>
        <div className='latestvideos'>
          <div> <img src={require('../Components/images/12.jpg')} />
          <p className='meals'>One-Pot Meals <br />
          <span className='simple'> simple + wholesome 👩🏻‍🍳 </span></p>
          </div>

          <div><img src={require('../Components/images/13.jpg')} />
          <p className='meals'>What I Eat for Brain Health 🧠 <br />
          <span className='simple'> foods to boost mood </span></p>
          </div>
          <div><img src={require('../Components/images/14.jpg')} />
          <p className='meals'>Designing a Simple Life <br />
           <span className='simple'> minimalist habits </span></p>
          </div>
          </div>
          <div className='latestvideos'>
          <div> <img src={require('../Components/images/15.jpg')} />
          <p className='meals'>How to Make the Perfect Pie at Home <br />
           <span className='simple'> egg + dairy-free 🥧</span> </p>
          </div>
          <div><img src={require('../Components/images/16.jpg')} />
          <p className='meals'>Takeout Classics <br />
         <span className='simple'> but better + faster!</span></p>
          </div>
          <div><img src={require('../Components/images/17.jpg')} />
          <p className='meals'>What to EAT for HEALTHY SKIN <br />
          <span className='simple'> science-backed! </span> </p>
          </div>
          </div>
          <button className='more-1'>More</button>
    </div>
  )
}

export default Latestvideos