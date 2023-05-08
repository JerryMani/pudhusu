import React from "react";
import { useNavigate } from "react-router-dom";

import "./Col.css";
function Cool() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/contact");
  };
  return (
    <div className="abc">
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Basic Info</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="First Name"
                  name="name"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Last Name"
                  name="name"
                />
              </div>

              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <input
                      className="input--style-2 js-datepicker"
                      type="Dob"
                      placeholder="Date of Birth"
                      name="birthday"
                    />
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>

                {/* <div className="row row-space"> */}
                <div className="col-2">
                  <div className="input-group1">
                    <select
                      name="Gender"
                      id="sex"
                      className="input--style-2 mb-4 browser-default custom-select"
                    >
                      {" "}
                      <option disabled="disabled" selected="selected">
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="unspesified">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* </div>    */}

              <div className="input-group1">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                    Profile for
                  </option>

                  <option value="1">Myself</option>
                  <option value="3">Daughter</option>
                  <option value="3">Son</option>

                  <option value="2">Brother</option>
                  <option value="3">Sister</option>
                  <option value="3">Relative</option>
                  <option value="3">Friend</option>
                </select>
              </div>

              <div className="input-group1">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                    Marital Status
                  </option>

                  <option value="1">Married</option>
                  <option value="2">UnMarried</option>

                  <option value="3">Divorced</option>
                  <option value="4">Widower</option>
                  <option value="2">Awaiting divorce</option>
                </select>
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Mother Tongue"
                  name="email"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Mobile Number"
                  name="Mb"
                />
              </div>
              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Alternative Number"
                  name="Mb"
                />
              </div>
              <div className="p-t-30">
                <div className="button mt-3">
                  <button type="submit" className="btn btn-primary text-center">
                    Save & Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cool;
