import React from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
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
                Click Me
              </button>
            </div>
            <div className='col'>
              <Link to='posts'>
                <button type='button' className='btn boutton'>
                  Page A!
                </button>
              </Link>
            </div>
            <div className='col'>
              <Link to='pageb'>
                <button type='button' className='btn boutton'>
                  Page B!
                </button>
              </Link>
            </div>
            <div className='col'>
              <Link to='pagec'>
                <button type='button' className='btn boutton'>
                  Page C!
                </button>
              </Link>
            </div>
            <div className='col'>
              <Link to='paged'>
                <button type='button' className='btn boutton'>
                  Page D!
                </button>
              </Link>
            </div>
            <div className='col'>
              <Link to='posts'> </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
