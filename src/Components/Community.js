import React from 'react'
import '../Components/Community.css'
function Community() {
  return (
    <div>
              <h1 className='community'>Join the Community!</h1>
      <p className='happyy'>Get your jumpstart guide!</p>
        <div className='welcomemainn'>
          <div className='welcomesubb-2'>
          <div className='welcomee-1'></div>
          <div className='welcomee-2'> <img src={require('../Components/images/18.jpg')} />
          </div>
          <div className='welcomee-3'></div>
          </div>
          <div className='welcomesubb-2'>
            <div>
             <h2 className='wearee'>Stay in the loop!</h2>
             <p className='missionn'>Sign up for our Newsletter to stay up-to-date with everything Pick Up Limes.</p>
             <p className='missionn'>When you join, we will send the link to our plant-based jumpstart guide right to your inbox!</p>
             </div>
             <form action="">
                <input type="text" placeholder='Name' className='input' /> <br /> <br />
                <input type="mail" placeholder='email'className='input' /> <br /> <br />
                <input type="checkbox" className='checkbox' />I agree to receive this newsletter.
             </form>
             <button className='learnmoree'>Subscribe</button>
          </div>
            
        </div>
    </div>
  )
}

export default Community