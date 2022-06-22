import React from 'react'
import './Styles.css'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
            <h1 style={{ color: 'orange', textAlign: 'left' }} className='logo'>
        {' '}
        Website
      </h1>
      <h2
        style={{ color: 'orange', textAlign: 'right' }}
        className='inscription top-left'
      >
        <i className='fa-solid fa-user-large'></i> s'inscrire
      </h2>
      <div>
        <h5 className='accroche'>
          Trouvez votre prestataire de service en un seul click!
        </h5>
      </div>
      <div className='container-one'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <button type='button' className='btn boutton'>
                Click Me!
              </button>
            </div>
            <div className='col'>
              <Link  to='pageb'>
                <button type='button' className='btn boutton'>
                  Page B!
                </button>
              </Link  >
            </div>
            <div className='col'>
              <Link  to='pageb'>
                {' '}
                <button type='button' className='btn boutton'>
                  Page C!
                </button>
              </Link  >
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <button type='button' className='btn boutton'>
                Click Me!
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
