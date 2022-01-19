import React, { Fragment } from 'react'
import './App.css';
import Bchart from './components/Bchart';
import Create from './components/Create';
import Dchart from './components/Dchart';
import InfoCard from './components/InfoCard';
import SideBar from './components/SideBar';
import Welcome from './components/Welcome';


const App = () => {
  return (
    <Fragment>
      <div className="main">
        <div className="container mt-4">
          <div className="row align-items-start">
            <div className="col-md-3">
                <Create/>
                <SideBar/>
            </div>
            <div className="col-md-9">
              <div className="container">
                <Welcome/>

                <div className="info-section mt-4">
                  <div className="row">
                    <div className="col-md-6">
                        <InfoCard heading="Income Variation">
                          <Dchart/>
                        </InfoCard>
                    </div>
                    <div className="col-md-6">
                        <InfoCard heading="Net Income">
                          <Bchart/>
                        </InfoCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
