import React from 'react'
import '../Components/Latestarticles.css'
function Latestarticles() {
  return (
    <div>
                      <h1 className='heading-3'>Latest Recipe</h1>
        <div className='latestarticles'>
          <div> <img src={require('../Components/images/24.jpg')} />
          <p className='mealss'>One-Pot Meals <br />
          <span className='simplee'> simple + wholesome 👩🏻‍🍳 </span></p>
          </div>

          <div><img src={require('../Components/images/19.jpg')} />
          <p className='mealss'>What I Eat for Brain Health 🧠 <br />
          <span className='simplee'> foods to boost mood </span></p>
          </div>
          <div><img src={require('../Components/images/20.jpg')} />
          <p className='mealss'>Designing a Simple Life <br />
           <span className='simplee'> minimalist habits </span></p>
          </div>
          </div>
          <div className='latestarticles'>
          <div> <img src={require('../Components/images/21.jpg')} />
          <p className='mealss'>How to Make the Perfect Pie at Home <br />
           <span className='simplee'> egg + dairy-free 🥧</span> </p>
          </div>
          <div><img src={require('../Components/images/22.jpg')} />
          <p className='mealss'>Takeout Classics <br />
         <span className='simplee'> but better + faster!</span></p>
          </div>
          <div><img src={require('../Components/images/23.jpg')} />
          <p className='mealss'>What to EAT for HEALTHY SKIN <br />
          <span className='simplee'> science-backed! </span> </p>
          </div>
          </div>
          <button className='more-2'>More</button>
    </div>
  )
}

export default Latestarticles