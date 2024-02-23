import React from 'react'

const Balance = () => {
  return (
      <div className="card card-flush h-xl-100">

          <div className="card-header pt-5 mb-6">

              <h3 className="card-title align-items-start flex-column">

                  <div className="d-flex align-items-center mb-2">

                      <span className="fs-3 fw-semibold text-gray-500 align-self-start me-1">$</span>


                      <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">3,274.94</span>


                      <span className="badge badge-light-success fs-base">
                          <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>9.2%</span>

                  </div>


                  <span className="fs-6 fw-semibold text-gray-500">Etherium rate</span>

              </h3>


              <div className="card-toolbar">

                  <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                      <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1"></i>
                  </button>

                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

                      <div className="menu-item px-3">
                          <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                      </div>


                      <div className="separator mb-3 opacity-75"></div>


                      <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">New Ticket</a>
                      </div>


                      <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">New Customer</a>
                      </div>


                      <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

                          <a href="#" className="menu-link px-3">
                              <span className="menu-title">New Group</span>
                              <span className="menu-arrow"></span>
                          </a>


                          <div className="menu-sub menu-sub-dropdown w-175px py-4">

                              <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Admin Group</a>
                              </div>


                              <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Staff Group</a>
                              </div>


                              <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">Member Group</a>
                              </div>

                          </div>

                      </div>


                      <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">New Contact</a>
                      </div>


                      <div className="separator mt-3 opacity-75"></div>


                      <div className="menu-item px-3">
                          <div className="menu-content px-3 py-3">
                              <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                          </div>
                      </div>

                  </div>


              </div>

          </div>


          <div className="card-body py-0 px-0">

              <ul className="nav d-flex justify-content-between mb-3 mx-9">

                  <li className="nav-item mb-3">

                      <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px active" data-bs-toggle="tab" id="kt_charts_widget_33_tab_1" href="#kt_charts_widget_33_tab_content_1">1d</a>

                  </li>


                  <li className="nav-item mb-3">

                      <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_33_tab_2" href="#kt_charts_widget_33_tab_content_2">5d</a>

                  </li>


                  <li className="nav-item mb-3">

                      <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_33_tab_3" href="#kt_charts_widget_33_tab_content_3">1m</a>

                  </li>


                  <li className="nav-item mb-3">

                      <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_33_tab_4" href="#kt_charts_widget_33_tab_content_4">6m</a>

                  </li>


                  <li className="nav-item mb-3">

                      <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_33_tab_5" href="#kt_charts_widget_33_tab_content_5">1y</a>

                  </li>

              </ul>


              <div className="tab-content mt-n6">

                  <div className="tab-pane fade active show" id="kt_charts_widget_33_tab_content_1">

                      <div id="kt_charts_widget_33_chart_1" data-kt-chart-color="info" className="min-h-auto h-200px ps-3 pe-6"></div>


                      <div className="table-responsive mx-9 mt-n6">

                          <table className="table align-middle gs-0 gy-4">

                              <thead>
                                  <tr>
                                      <th className="min-w-100px"></th>
                                      <th className="min-w-100px text-end pe-0"></th>
                                      <th className="text-end min-w-50px"></th>
                                  </tr>
                              </thead>


                              <tbody>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-danger">-139.34</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">3:10 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$3,207.03</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">+576.24</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">3:55 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$3,274.94</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">+124.03</span>
                                      </td>
                                  </tr>
                              </tbody>

                          </table>

                      </div>

                  </div>


                  <div className="tab-pane fade" id="kt_charts_widget_33_tab_content_2">

                      <div id="kt_charts_widget_33_chart_2" data-kt-chart-color="info" className="min-h-auto h-200px ps-3 pe-6"></div>


                      <div className="table-responsive mx-9 mt-n6">

                          <table className="table align-middle gs-0 gy-4">

                              <thead>
                                  <tr>
                                      <th className="min-w-100px"></th>
                                      <th className="min-w-100px text-end pe-0"></th>
                                      <th className="text-end min-w-50px"></th>
                                  </tr>
                              </thead>


                              <tbody>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">+231.01</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-primary">+233.07</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,145.55</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-danger">+134.06</span>
                                      </td>
                                  </tr>
                              </tbody>

                          </table>

                      </div>

                  </div>


                  <div className="tab-pane fade" id="kt_charts_widget_33_tab_content_3">

                      <div id="kt_charts_widget_33_chart_3" data-kt-chart-color="info" className="min-h-auto h-200px ps-3 pe-6"></div>


                      <div className="table-responsive mx-9 mt-n6">

                          <table className="table align-middle gs-0 gy-4">

                              <thead>
                                  <tr>
                                      <th className="min-w-100px"></th>
                                      <th className="min-w-100px text-end pe-0"></th>
                                      <th className="text-end min-w-50px"></th>
                                  </tr>
                              </thead>


                              <tbody>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">12:40 AM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,346.25</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-warning">+134.57</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">11:30 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$1,565.26</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-danger">+155.03</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">4:25 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">+124.03</span>
                                      </td>
                                  </tr>
                              </tbody>

                          </table>

                      </div>

                  </div>


                  <div className="tab-pane fade" id="kt_charts_widget_33_tab_content_4">

                      <div id="kt_charts_widget_33_chart_4" data-kt-chart-color="info" className="min-h-auto h-200px ps-3 pe-6"></div>


                      <div className="table-responsive mx-9 mt-n6">

                          <table className="table align-middle gs-0 gy-4">

                              <thead>
                                  <tr>
                                      <th className="min-w-100px"></th>
                                      <th className="min-w-100px text-end pe-0"></th>
                                      <th className="text-end min-w-50px"></th>
                                  </tr>
                              </thead>


                              <tbody>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">3:20 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$3,756.26</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-danger">+234.03</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">10:30 AM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$1,474.04</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-info">-134.03</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">1:30 AM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-primary">+124.03</span>
                                      </td>
                                  </tr>
                              </tbody>

                          </table>

                      </div>

                  </div>


                  <div className="tab-pane fade" id="kt_charts_widget_33_tab_content_5">

                      <div id="kt_charts_widget_33_chart_5" data-kt-chart-color="info" className="min-h-auto h-200px ps-3 pe-6"></div>


                      <div className="table-responsive mx-9 mt-n6">

                          <table className="table align-middle gs-0 gy-4">

                              <thead>
                                  <tr>
                                      <th className="min-w-100px"></th>
                                      <th className="min-w-100px text-end pe-0"></th>
                                      <th className="text-end min-w-50px"></th>
                                  </tr>
                              </thead>


                              <tbody>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">3:30 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$1,756.25</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-primary">+144.04</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-danger">+124.03</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className="text-gray-600 fw-bold fs-6">12:30 AM</a>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">$2,034.65</span>
                                      </td>
                                      <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">+184.05</span>
                                      </td>
                                  </tr>
                              </tbody>

                          </table>

                      </div>

                  </div>

              </div>

          </div>

      </div>
  )
}

export default Balance