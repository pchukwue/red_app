import React from 'react';
import '../../assets/css/style.bundle.css';
import '../../assets/plugins/global/plugins.bundle.css';

import QuickLinks from './components/QuickLinks';
import Balance from './components/balance';
import Header from './components/header';
import MiniStatement from './components/mini-statement';
import Sidebar from './components/sidebar';
// import Others from './components/others';

function Dashboard() {
  return (
    <>
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">

        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">

          <Header />

          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <div className="app-container container-fluid d-flex flex-grow-1">
              <Sidebar />
              <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                <div className="d-flex flex-column flex-column-fluid">
                  <div id="kt_app_content" className="app-content pt-4">
                    <QuickLinks />


                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">

                      <div className="col-xl-4">

                        <Balance />

                      </div>


                      <div className="col-xl-8">

                        <MiniStatement />

                      </div>

                    </div>


                    {/* <Others /> */}

                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard