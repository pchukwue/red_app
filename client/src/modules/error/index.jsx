import React from 'react';
import '../../assets/css/style.bundle.css';
import '../../assets/plugins/global/plugins.bundle.css';
import backgroundImage from '../../assets/media/auth/bg1.jpg'

function NotFoundError() {
  return (
    <div>
        <div class="d-flex flex-column flex-root" id="kt_app_root" >
            {/* style={{backgroundImage:url(${backgroundImage})}} */}
			
			{/* <style>body { background-image: url('assets/media/auth/bg1.jpg'); } [data-bs-theme="dark"] body { background-image: url('assets/media/auth/bg1-dark.jpg'); }</style> */}
			
			<div class="d-flex flex-column flex-center flex-column-fluid">
				
				<div class="d-flex flex-column flex-center text-center p-10">
					
					<div class="card card-flush w-lg-650px py-5">
						<div class="card-body py-15 py-lg-20">
							
							<h1 class="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
							
							<div class="fw-semibold fs-6 text-gray-500 mb-7">We can't find that page.</div>
							
							<div class="mb-3">
								<img src="assets/media/auth/404-error.png" class="mw-100 mh-300px theme-light-show" alt="" />
								<img src="assets/media/auth/404-error-dark.png" class="mw-100 mh-300px theme-dark-show" alt="" />
							</div>
							
							<div class="mb-0">
								<a href="index.html" class="btn btn-sm btn-primary">Return Home</a>
							</div>
							
						</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
    </div>
  )
}

export default NotFoundError;