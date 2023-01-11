import PropTypes from 'prop-types'
import '../Components/Latestrecipes.css'


function Latestrecipes()  {

    return (
      <div>
        <h1 className='heading-1'>Latest Recipe</h1>
        <div className='latestrecipe'>
          <div> <img src={require('../Components/images/5.jpg')} />
          <p className='cremy'>Creamy Peanut Butter Jackfruit Noodles</p>
          </div>

          <div><img src={require('../Components/images/6.jpg')} />
          <p className='cremy'>Sweet Potato Spiced Chili</p>
          </div>
          <div><img src={require('../Components/images/7.jpg')} />
          <p className='cremy'>Pickled Red Onions</p>
          </div>
          </div>
          <div className='latestrecipe'>
          <div> <img src={require('../Components/images/8.jpg')} />
          <p className='cremy'>Non-Alcoholic Mulled Wine</p>
          </div>
          <div><img src={require('../Components/images/9.jpg')} />
          <p className='cremy'>Cinnamon-Spiced Orange & Thyme Mocktail</p>
          </div>
          <div><img src={require('../Components/images/10.jpg')} />
          <p className='cremy'>Vegan Apple Pie</p>
          </div>
          </div>
          <button className='more'>More</button>
      </div>
    )
  }


export default Latestrecipes