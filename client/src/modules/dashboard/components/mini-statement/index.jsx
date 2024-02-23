import React from 'react'

const MiniStatement = () => {
  return (
      <div className="card card-flush h-xl-100">

          <div className="card-header pt-7">

              <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bold text-gray-800">Active Auctions</span>
                  <span className="text-gray-500 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
              </h3>


              <div className="card-toolbar">
                  <a href="apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">History</a>
              </div>

          </div>


          <div className="card-body">

              <div className="table-responsive">

                  <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">

                      <thead>
                          <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                              <th className="p-0 pb-3 min-w-175px text-start">ITEM</th>
                              <th className="p-0 pb-3 min-w-100px text-end">OPEN PRICE</th>
                              <th className="p-0 pb-3 min-w-100px text-end">YOUR OFFER</th>
                              <th className="p-0 pb-3 min-w-125px text-end">RECENT OFFER</th>
                              <th className="p-0 pb-3 min-w-100px text-end">TIME LEFT</th>
                              <th className="p-0 pb-3 w-80px text-end">VIEW</th>
                          </tr>
                      </thead>


                      <tbody>
                          <tr>
                              <td>
                                  <div className="d-flex align-items-center">
                                      <div className="d-flex justify-content-start flex-column">
                                          <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">The Art</a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">Jenny Wilson</span>
                                      </div>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">0.054 ETH</span>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">0.089 ETH</span>
                              </td>
                              <td className="pe-0">
                                  <div className="d-flex align-items-center justify-content-end">

                                      <span className="text-gray-600 fw-bold d-block fs-6">0.089 ETH</span>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">1h 43m 52s</span>
                              </td>
                              <td className="text-end">
                                  <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                      <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="d-flex align-items-center">

                                      <div className="d-flex justify-content-start flex-column">
                                          <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Blue Bubble Art</a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">Guy Hawkins</span>
                                      </div>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">1.830 ETH</span>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">2.451 ETH</span>
                              </td>
                              <td className="pe-0">
                                  <div className="d-flex align-items-center justify-content-end">

                                      <span className="text-gray-600 fw-bold d-block fs-6">3.083 ETH</span>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">4h 28m 07s</span>
                              </td>
                              <td className="text-end">
                                  <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                      <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="d-flex align-items-center">

                                      <div className="d-flex justify-content-start flex-column">
                                          <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Color Face Art</a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">Wade Warren</span>
                                      </div>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">0.043 ETH</span>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">0.124 ETH</span>
                              </td>
                              <td className="pe-0">
                                  <div className="d-flex align-items-center justify-content-end">

                                      <span className="text-gray-600 fw-bold d-block fs-6">1.058 ETH</span>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">5h 09m 23s</span>
                              </td>
                              <td className="text-end">
                                  <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                      <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="d-flex align-items-center">
                                      <div className="d-flex justify-content-start flex-column">
                                          <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Blue to Orange Art</a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">Jane Cooper</span>
                                      </div>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">0.092 ETH</span>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">0.158 ETH</span>
                              </td>
                              <td className="pe-0">
                                  <div className="d-flex align-items-center justify-content-end">
                                      <span className="text-gray-600 fw-bold d-block fs-6">0.403 ETH</span>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">7h 23m 16s</span>
                              </td>
                              <td className="text-end">
                                  <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                      <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="d-flex align-items-center">
                                      <div className="d-flex justify-content-start flex-column">
                                          <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Awesome Bird Art</a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">Jacob Jones</span>
                                      </div>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">0.824 ETH</span>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">1.072 ETH</span>
                              </td>
                              <td className="pe-0">
                                  <div className="d-flex align-items-center justify-content-end">
                                      <span className="text-gray-600 fw-bold d-block fs-6">1.094 ETH</span>
                                  </div>
                              </td>
                              <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">36h 18m 42s</span>
                              </td>
                              <td className="text-end">
                                  <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                      <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                  </a>
                              </td>
                          </tr>
                      </tbody>

                  </table>
              </div>

          </div>

      </div>
  )
}

export default MiniStatement