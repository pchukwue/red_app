import React from 'react';
import '../../assets/css/style.bundle.css';
import '../../assets/plugins/global/plugins.bundle.css';
import Header from '../dashboard/components/header';
import Sidebar from '../dashboard/components/sidebar';
import ProfileToolBar from './components/toolBar';

function ProfileComponent() {
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
                                <div id="kt_app_toolbar" className="app-toolbar pt-7 pt-lg-10">
                                      <ProfileToolBar/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileComponent