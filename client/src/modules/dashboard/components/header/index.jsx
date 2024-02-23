import React from 'react'
import logo from "../../../../assets/media/logos/custom-1.png";
import Navbar from './navbar';
export default function Header() {
	return (
		<div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">

			<div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">

				<div className="d-flex align-items-center justify-content-between flex-row-fluid" id="kt_app_header_wrapper">

					<div className="app-header-logo d-flex align-items-center">

						<div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n3 me-2 d-flex d-lg-none" id="kt_app_sidebar_mobile_toggle">
							<i className="ki-outline ki-abstract-14 fs-1"></i>
						</div>

						<a href="index.html" className="me-5 me-lg-9">
							<img alt="Logo" src={logo} className="h-25px h-sm-30px" />
						</a>

						<div className="d-none d-md-inline">
							<div className="fw-bold fs-3 text-gray-900">Good morning, James</div>
							<div className="fw-semibold text-gray-500">Plan your blog post by choosing a topic</div>
						</div>

					</div>

					<Navbar />
					<div className="app-navbar flex-shrink-0">
						<div className="app-navbar-item me-3" id="kt_header_user_menu_toggle">
							<div className="btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<i className="ki-outline ki-user fs-3"></i>
							</div>
							<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
								<div className="menu-item px-3">
									<div className="menu-content d-flex align-items-center px-3">
										<div className="symbol symbol-50px me-5">
											<img alt="Logo" src="../../assets/media/avatars/300-5.jpg" />
										</div>
										<div className="d-flex flex-column">
											<div className="fw-bold d-flex align-items-center fs-5">Max Smith
												<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
											<a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
										</div>
									</div>
								</div>


								<div className="separator my-2"></div>


								<div className="menu-item px-5">
									<a href="account/overview.html" className="menu-link px-5">My Profile</a>
								</div>


								<div className="menu-item px-5">
									<a href="apps/projects/list.html" className="menu-link px-5">
										<span className="menu-text">My Projects</span>
										<span className="menu-badge">
											<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
										</span>
									</a>
								</div>


								<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
									<a href="#" className="menu-link px-5">
										<span className="menu-title">My Subscription</span>
										<span className="menu-arrow"></span>
									</a>

									<div className="menu-sub menu-sub-dropdown w-175px py-4">

										<div className="menu-item px-3">
											<a href="account/referrals.html" className="menu-link px-5">Referrals</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/billing.html" className="menu-link px-5">Billing</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/statements.html" className="menu-link px-5">Payments</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
												<span className="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
													<i className="ki-outline ki-information-5 fs-5"></i>
												</span></a>
										</div>


										<div className="separator my-2"></div>


										<div className="menu-item px-3">
											<div className="menu-content px-3">
												<label className="form-check form-switch form-check-custom form-check-solid">
													<input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked name="notifications" />
													<span className="form-check-label text-muted fs-7">Notifications</span>
												</label>
											</div>
										</div>

									</div>

								</div>


								<div className="menu-item px-5">
									<a href="account/statements.html" className="menu-link px-5">My Statements</a>
								</div>


								<div className="separator my-2"></div>


								<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
									<a href="#" className="menu-link px-5">
										<span className="menu-title position-relative">Mode
											<span className="ms-5 position-absolute translate-middle-y top-50 end-0">
												<i className="ki-outline ki-night-day theme-light-show fs-2"></i>
												<i className="ki-outline ki-moon theme-dark-show fs-2"></i>
											</span></span>
									</a>

									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">

										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-outline ki-night-day fs-2"></i>
												</span>
												<span className="menu-title">Light</span>
											</a>
										</div>


										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-outline ki-moon fs-2"></i>
												</span>
												<span className="menu-title">Dark</span>
											</a>
										</div>


										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-outline ki-screen fs-2"></i>
												</span>
												<span className="menu-title">System</span>
											</a>
										</div>

									</div>

								</div>


								<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
									<a href="#" className="menu-link px-5">
										<span className="menu-title position-relative">Language
											<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
											</span></span>
									</a>

									<div className="menu-sub menu-sub-dropdown w-175px py-4">

										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5 active">
												<span className="symbol symbol-20px me-4">

												</span>English</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">

												</span>Spanish</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">

												</span>German</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">

												</span>Japanese</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">

												</span>French</a>
										</div>

									</div>

								</div>


								<div className="menu-item px-5 my-1">
									<a href="account/settings.html" className="menu-link px-5">Account Settings</a>
								</div>


								<div className="menu-item px-5">
									<a href="authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
								</div>
							</div>
						</div>


						<div className="app-navbar-item me-3">
							<a href="#" className="d-flex align-items-center" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<button className="btn btn-icon btn-body position-relative btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" id="kt_drawer_chat_toggle">
									<i className="ki-outline ki-messages fs-3"></i>
									<span className="position-absolute top-0 start-100 translate-middle badge badge-circle badge-sm badge-info">5</span>
								</button>
							</a>
						</div>
						<div className="app-navbar-item me-3">
							<div className="btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<i className="ki-outline ki-element-11 fs-3"></i>
							</div>

							<div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">

								<div className="d-flex flex-column bgi-no-repeat rounded-top" style={{
									backgroundImage: "url('../../assets/media/misc/menu-header-bg.jpg')"
								}}>

									<h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
										<span className="fs-8 opacity-75 ps-3">24 reports</span></h3>


									<ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
										<li className="nav-item">
											<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
										</li>
										<li className="nav-item">
											<a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
										</li>
										<li className="nav-item">
											<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
										</li>
									</ul>

								</div>


								<div className="tab-content">

									<div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">

										<div className="scroll-y mh-325px my-5 px-8">

											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-primary">
															<i className="ki-outline ki-abstract-28 fs-2 text-primary"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
														<div className="text-gray-500 fs-7">Phase 1 development</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">1 hr</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-danger">
															<i className="ki-outline ki-information fs-2 text-danger"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
														<div className="text-gray-500 fs-7">Confidential staff documents</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">2 hrs</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-warning">
															<i className="ki-outline ki-briefcase fs-2 text-warning"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
														<div className="text-gray-500 fs-7">Corporeate staff profiles</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">5 hrs</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-success">
															<i className="ki-outline ki-abstract-12 fs-2 text-success"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
														<div className="text-gray-500 fs-7">New frontend admin theme</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">2 days</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-primary">
															<i className="ki-outline ki-colors-square fs-2 text-primary"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
														<div className="text-gray-500 fs-7">Product launch status update</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">21 Jan</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-info">
															<i className="ki-outline ki-picture fs-2 text-info"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
														<div className="text-gray-500 fs-7">Collection of banner images</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">21 Jan</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-warning">
															<i className="ki-outline ki-color-swatch fs-2 text-warning"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
														<div className="text-gray-500 fs-7">Collection of SVG icons</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">20 March</span>

											</div>

										</div>


										<div className="py-3 text-center border-top">
											<a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
												<i className="ki-outline ki-arrow-right fs-5"></i></a>
										</div>

									</div>


									<div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">

										<div className="d-flex flex-column px-9">

											<div className="pt-10 pb-0">

												<h3 className="text-gray-900 text-center fw-bold">Get Pro Access</h3>


												<div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>


												<div className="text-center mt-5 mb-9">
													<a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
												</div>

											</div>

											<div className="text-center px-4">
												<img className="mw-100 mh-200px" alt="image" src="../../assets/media/illustrations/sketchy-1/1.png" />
											</div>

										</div>

									</div>


									<div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">

										<div className="scroll-y mh-325px my-5 px-8">

											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-success me-4">200 OK</span>
													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>
												</div>
												<span className="badge badge-light fs-8">Just now</span>
											</div>


											<div className="d-flex flex-stack py-4">
												<div className="d-flex align-items-center me-2">
													<span className="w-70px badge badge-light-danger me-4">500 ERR</span>

													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>
												</div>

												<span className="badge badge-light fs-8">2 hrs</span>
											</div>
											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-success me-4">200 OK</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>

												</div>


												<span className="badge badge-light fs-8">5 hrs</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>

												</div>


												<span className="badge badge-light fs-8">2 days</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-success me-4">200 OK</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>

												</div>


												<span className="badge badge-light fs-8">1 week</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-success me-4">200 OK</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>

												</div>


												<span className="badge badge-light fs-8">Mar 5</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>

												</div>


												<span className="badge badge-light fs-8">May 15</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>

												</div>


												<span className="badge badge-light fs-8">Apr 3</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>

												</div>


												<span className="badge badge-light fs-8">Jun 30</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>

												</div>


												<span className="badge badge-light fs-8">Jul 10</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>

												</div>


												<span className="badge badge-light fs-8">Sep 10</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>

												</div>


												<span className="badge badge-light fs-8">Dec 10</span>

											</div>

										</div>


										<div className="py-3 text-center border-top">
											<a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
												<i className="ki-outline ki-arrow-right fs-5"></i></a>
										</div>

									</div>

								</div>

							</div>


						</div>


						<div className="app-navbar-item me-3">

							<div className="btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<i className="ki-outline ki-setting-3 fs-3"></i>
							</div>

							<div className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px" data-kt-menu="true">

								<div className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10" style={{
									backgroundImage: "url('../../assets/media/misc/menu-header-bg.jpg')"
								}}>

									<h3 className="text-white fw-semibold mb-3">Quick Links</h3>


									<span className="badge bg-primary text-inverse-primary py-2 px-3">25 pending tasks</span>

								</div>


								<div className="row g-0">

									<div className="col-6">
										<a href="apps/projects/budget.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom">
											<i className="ki-outline ki-dollar fs-3x text-primary mb-2"></i>
											<span className="fs-5 fw-semibold text-gray-800 mb-0">Accounting</span>
											<span className="fs-7 text-gray-500">eCommerce</span>
										</a>
									</div>

									<div className="col-6">
										<a href="apps/projects/settings.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom">
											<i className="ki-outline ki-sms fs-3x text-primary mb-2"></i>
											<span className="fs-5 fw-semibold text-gray-800 mb-0">Administration</span>
											<span className="fs-7 text-gray-500">Console</span>
										</a>
									</div>


									<div className="col-6">
										<a href="apps/projects/list.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end">
											<i className="ki-outline ki-abstract-41 fs-3x text-primary mb-2"></i>
											<span className="fs-5 fw-semibold text-gray-800 mb-0">Projects</span>
											<span className="fs-7 text-gray-500">Pending Tasks</span>
										</a>
									</div>


									<div className="col-6">
										<a href="apps/projects/users.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light">
											<i className="ki-outline ki-briefcase fs-3x text-primary mb-2"></i>
											<span className="fs-5 fw-semibold text-gray-800 mb-0">Customers</span>
											<span className="fs-7 text-gray-500">Latest cases</span>
										</a>
									</div>

								</div>

								<div className="py-2 text-center border-top">
									<a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
										<i className="ki-outline ki-arrow-right fs-5"></i></a>
								</div>

							</div>


						</div>


						{/* <div className="app-navbar-item">
							<a href="#" className="btn btn-flex btn-icon align-self-center fw-bold btn-success w-35px w-md-100 h-35px h-md-40px px-4" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
								<i className="ki-outline ki-crown-2 fs-3"></i>
								<span className="d-none d-md-inline ms-2">Try Premium</span>
							</a>
						</div> */}


						<div className="app-navbar-item d-flex align-items-center d-lg-none ms-1 me-n3">
							<a href="#" className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle">
								<i className="ki-outline ki-text-align-left fs-1"></i>
							</a>
						</div>

					</div>

				</div>

			</div>

		</div>
	)
}