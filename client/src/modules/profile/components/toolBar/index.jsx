import React from 'react';

function ProfileToolBar() {
    return (
        <>
            <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                <div className='d-flex justify-content-space w-100' style={{ width: "100%", justifyContent: "space-between" }}>
                    <div className="page-title d-flex flex-column justify-content-center gap-1 me-3 ms-1">

                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7">

                            <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                                <a href="index.html" className="text-hover-primary">
                                    <i className="ki-outline ki-home text-gray-700 fs-6"></i>
                                </a>
                            </li>

                            <li className="breadcrumb-item">
                                <i className="ki-outline ki-right fs-7 text-gray-700"></i>
                            </li>

                            <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">Account</li>

                            <li className="breadcrumb-item">
                                <i className="ki-outline ki-right fs-7 text-gray-700"></i>
                            </li>

                            <li className="breadcrumb-item text-gray-500 mx-n1">Overview</li>

                        </ul>

                        <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 ms-n1">Account Overview</h1>

                    </div>

                    <div className="d-flex align-items-center gap-2 gap-lg-3">
                        <a href="#" className="btn btn-flex btn-outline btn-color-gray-700 btn-active-color-dark bg-body h-40px fs-7 fw-bold"
                            data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">See History</a>

                        <a href="#" className="btn btn-flex btn-light h-40px fs-7 fw-bold"
                            style={{ backgroundColor: "#93120e", color: "#fff" }}
                            data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">Fund Account</a>
                    </div>

                </div>
                {/*  */}






                <div id="kt_app_content" className="app-content" style={{ width: "100%" }}>

                    <div className="card mb-5 mb-xl-10" style={{ width: "100%" }}>
                        <div className="card-body pt-9 pb-0">

                            <div className="d-flex flex-wrap flex-sm-nowrap">

                                <div className="me-7 mb-4">
                                    <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                        <img src="/" alt="image" />
                                        <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                                    </div>
                                </div>

                                <div className="flex-grow-1">

                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">

                                        <div className="d-flex flex-column">

                                            <div className="d-flex align-items-center mb-2">
                                                <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Akinkunmi</a>
                                                <a href="#">
                                                    <i className="ki-outline ki-verify fs-1" style={{ color: "#93120e" }}></i>
                                                </a>
                                            </div>

                                            <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                                <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                    <i className="ki-outline ki-profile-circle fs-4 me-1"></i>Cloud Engr</a>
                                                <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                    <i className="ki-outline ki-geolocation fs-4 me-1"></i>Oshodi, Lagos</a>
                                                <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
                                                    <i className="ki-outline ki-sms fs-4"></i>akinkunmi@redbiller.com</a>
                                            </div>

                                        </div>

                                        {/* '''''''' */}



                                        {/* ''''''''' */}

                                    </div>

                                    {/*  */}




                                    {/* /////////////// */}
                                    <div className="d-flex flex-wrap flex-stack" >

                                        <div className="d-flex flex-column flex-grow-1 pe-8">

                                            <div className="d-flex flex-wrap">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

                                                    <div className="d-flex align-items-center">
                                                        <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                                                        {/* <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div> */}
                                                    </div>

                                                    <div className="fw-semibold fs-6 text-gray-500">Status Page</div>

                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

                                                    <div className="d-flex align-items-center">
                                                        <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                                                        {/* <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div> */}
                                                    </div>

                                                    <div className="fw-semibold fs-6 text-gray-500">Success Rate</div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    {/* ///////////// */}





                                    {/*  */}

                                </div>

                            </div>

                            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">

                                <li className="nav-item mt-2">
                                    <a className="nav-link linkss ms-0 me-10 py-5 active" href="/" >Overview</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/">Settings</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/">Security</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/">Payout</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/">Bills</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/">Statements</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/">Reversals</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/">API Keys</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="/">Confirmation Logs</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>


                {/* next********* */}
                <div className="card mb-5 mb-xl-10" id="kt_profile_details_view w-100" style={{ width: "100%" }}>

                    <div className="card-header cursor-pointer">

                        <div className="card-title m-0">
                            <h3 className="fw-bold m-0">Profile Details</h3>
                        </div>

                        <a href="account/settings.html" className="btn btn-sm btn-light align-self-center" style={{ backgroundColor: "#93120e", color: "#fff" }}>Edit Profile</a>

                    </div>

                    <div className="card-body p-9">

                        <div className="row mb-7">

                            <label className="col-lg-4 fw-semibold text-muted">Full Name</label>

                            <div className="col-lg-8">
                                <span className="fw-bold fs-6 text-gray-800">Akinkunmi</span>
                            </div>

                        </div>

                        <div className="row mb-7">

                            <label className="col-lg-4 fw-semibold text-muted">Company</label>

                            <div className="col-lg-8 fv-row">
                                <span className="fw-semibold text-gray-800 fs-6">Redbiller</span>
                            </div>

                        </div>

                        <div className="row mb-7">

                            <label className="col-lg-4 fw-semibold text-muted">Contact Phone
                                <span className="ms-1" data-bs-toggle="tooltip" title="Phone number must be active">
                                    <i className="ki-outline ki-information fs-7"></i>
                                </span></label>

                            <div className="col-lg-8 d-flex align-items-center">
                                <span className="fw-bold fs-6 text-gray-800 me-2">044 3276 454 935</span>
                                <span className="badge badge-success">Verified</span>
                            </div>

                        </div>

                        <div className="row mb-7">

                            <label className="col-lg-4 fw-semibold text-muted">Company Site</label>


                            <div className="col-lg-8">
                                <a href="#" className="fw-semibold fs-6 text-gray-800 text-hover-primary">redbiller.com</a>
                            </div>

                        </div>

                        <div className="row mb-7">

                            <label className="col-lg-4 fw-semibold text-muted">Country
                                <span className="ms-1" data-bs-toggle="tooltip" title="Country of origination">
                                    <i className="ki-outline ki-information fs-7"></i>
                                </span></label>

                            <div className="col-lg-8">
                                <span className="fw-bold fs-6 text-gray-800">Nigeria</span>
                            </div>

                        </div>

                        <div className="row mb-7">

                            <label className="col-lg-4 fw-semibold text-muted">Communication</label>


                            <div className="col-lg-8">
                                <span className="fw-bold fs-6 text-gray-800">Email, Phone</span>
                            </div>

                        </div>

                        <div className="row mb-10">

                            <label className="col-lg-4 fw-semibold text-muted">Allow Changes</label>

                            <div className="col-lg-8">
                                <span className="fw-semibold fs-6 text-gray-800">Yes</span>
                            </div>

                        </div>

                        <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">

                            <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>

                            <div className="d-flex flex-stack flex-grow-1">

                                <div className="fw-semibold">
                                    <h4 className="text-gray-900 fw-bold">We need your attention!</h4>
                                    <div className="fs-6 text-gray-700">Your payment was declined. To start using tools, please
                                        <a className="fw-bold" href="account/billing.html">Add Payment Method</a>.</div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* nexttttt */}

                <div className="col-xl-8 overflow-auto" style={{ width: "100%" }}>

                    <div className="card card-flush h-xl-100">

                        <div className="card-header pt-7">

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-900">Stock Report</span>
                                <span className="text-gray-500 mt-1 fw-semibold fs-6">Total 2,356 Items in the Stock</span>
                            </h3>

                            <div className="card-toolbar">

                                <div className="d-flex flex-stack flex-wrap gap-4">

                                    <div className="d-flex align-items-center fw-bold">

                                        <div className="text-muted fs-7 me-2">Cateogry</div>

                                        <select className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-control="select2" data-hide-search="true" data-dropdown-css-className="w-150px" data-placeholder="Select an option">
                                            <option></option>
                                            <option value="Show All" selected="selected">Show All</option>
                                            <option value="a">Category A</option>
                                            <option value="b">Category B</option>
                                        </select>

                                    </div>

                                    <div className="d-flex align-items-center fw-bold">

                                        <div className="text-muted fs-7 me-2">Status</div>

                                        <select className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-control="select2" data-hide-search="true" data-dropdown-css-className="w-150px" data-placeholder="Select an option" data-kt-table-widget-5="filter_status">
                                            <option></option>
                                            <option value="Show All" selected="selected">Show All</option>
                                            <option value="In Stock">In Stock</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                            <option value="Low Stock">Low Stock</option>
                                        </select>

                                    </div>

                                    <a href="apps/ecommerce/catalog/products.html" className="btn btn-light btn-sm">View Stock</a>

                                </div>

                            </div>

                        </div>

                        <div className="card-body overflow-auto">

                            <table className="table align-middle table-row-dashed fs-6 gy-3 overflow-auto" id="kt_table_widget_5_table">

                                <thead>

                                    <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                                        <th className="min-w-150px">Item</th>
                                        <th className="text-end pe-3 min-w-100px">Product ID</th>
                                        <th className="text-end pe-3 min-w-150px">Date Added</th>
                                        <th className="text-end pe-3 min-w-100px">Price</th>
                                        <th className="text-end pe-3 min-w-100px">Status</th>
                                        <th className="text-end pe-0 min-w-75px">Qty</th>
                                    </tr>

                                </thead>

                                <tbody className="fw-bold text-gray-600">
                                    <tr>

                                        <td>
                                            <a href="apps/ecommerce/catalog/edit-product.html" className="text-gray-900 text-hover-primary">Macbook Air M1</a>
                                        </td>

                                        <td className="text-end">#XGY-356</td>

                                        <td className="text-end">02 Apr, 2024</td>

                                        <td className="text-end">$1,230</td>

                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                                        </td>

                                        <td className="text-end" data-order="58">
                                            <span className="text-gray-900 fw-bold">58 PCS</span>
                                        </td>

                                    </tr>
                                    <tr>

                                        <td>
                                            <a href="apps/ecommerce/catalog/edit-product.html" className="text-gray-900 text-hover-primary">Surface Laptop 4</a>
                                        </td>

                                        <td className="text-end">#YHD-047</td>

                                        <td className="text-end">01 Apr, 2024</td>

                                        <td className="text-end">$1,060</td>

                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-danger">Out of Stock</span>
                                        </td>

                                        <td className="text-end" data-order="0">
                                            <span className="text-gray-900 fw-bold">0 PCS</span>
                                        </td>

                                    </tr>
                                    <tr>

                                        <td>
                                            <a href="apps/ecommerce/catalog/edit-product.html" className="text-gray-900 text-hover-primary">Logitech MX 250</a>
                                        </td>

                                        <td className="text-end">#SRR-678</td>

                                        <td className="text-end">24 Mar, 2024</td>

                                        <td className="text-end">$64</td>

                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                                        </td>

                                        <td className="text-end" data-order="290">
                                            <span className="text-gray-900 fw-bold">290 PCS</span>
                                        </td>

                                    </tr>
                                    <tr>

                                        <td>
                                            <a href="apps/ecommerce/catalog/edit-product.html" className="text-gray-900 text-hover-primary">AudioEngine HD3</a>
                                        </td>

                                        <td className="text-end">#PXF-578</td>

                                        <td className="text-end">24 Mar, 2024</td>

                                        <td className="text-end">$1,060</td>

                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-danger">Out of Stock</span>
                                        </td>

                                        <td className="text-end" data-order="46">
                                            <span className="text-gray-900 fw-bold">46 PCS</span>
                                        </td>

                                    </tr>
                                    <tr>

                                        <td>
                                            <a href="apps/ecommerce/catalog/edit-product.html" className="text-gray-900 text-hover-primary">HP Hyper LTR</a>
                                        </td>

                                        <td className="text-end">#PXF-778</td>

                                        <td className="text-end">16 Jan, 2024</td>

                                        <td className="text-end">$4500</td>

                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                                        </td>

                                        <td className="text-end" data-order="78">
                                            <span className="text-gray-900 fw-bold">78 PCS</span>
                                        </td>

                                    </tr>
                                    <tr>

                                        <td>
                                            <a href="apps/ecommerce/catalog/edit-product.html" className="text-gray-900 text-hover-primary">Dell 32 UltraSharp</a>
                                        </td>

                                        <td className="text-end">#XGY-356</td>

                                        <td className="text-end">22 Dec, 2024</td>

                                        <td className="text-end">$1,060</td>

                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-warning">Low Stock</span>
                                        </td>

                                        <td className="text-end" data-order="8">
                                            <span className="text-gray-900 fw-bold">8 PCS</span>
                                        </td>

                                    </tr>
                                    <tr>

                                        <td>
                                            <a href="apps/ecommerce/catalog/edit-product.html" className="text-gray-900 text-hover-primary">Google Pixel 6 Pro</a>
                                        </td>

                                        <td className="text-end">#XVR-425</td>

                                        <td className="text-end">27 Dec, 2024</td>

                                        <td className="text-end">$1,060</td>

                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                                        </td>

                                        <td className="text-end" data-order="124">
                                            <span className="text-gray-900 fw-bold">124 PCS</span>
                                        </td>

                                    </tr>
                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default ProfileToolBar;