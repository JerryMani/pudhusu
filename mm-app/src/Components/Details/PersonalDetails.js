import React from "react";
import {useNavigate} from 'react-router-dom'
import './Col.css'


function PersonalDetails() {

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate("/familydetails")
  }
  return (
    <div className="abc">
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">

          <div className="card-heading">

          </div>
          <div className="card-body">
            <h2 className="title">Personal Details</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Highest Education"
                  name="name"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Employment Type"
                  name="name"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Occupation"
                  name="name"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Monthly Income"
                  name="name"
                />
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                  <select
                  id="height"
                  className="input--style-2  browser-default "
                >
                <option disabled="disabled" selected="selected">
                      Height
                        </option>
                  <option value="1">4ft 6in - 137 cms</option>

                  <option value="2">4ft 7in - 140 cms</option>

                  <option value="3">4ft 8in - 142 cms</option>

                  <option value="4">4ft 9in - 145 cms</option>
                </select></div>
                </div>

                <div className="col-2">
                  <div className="input-group">
                  <select
                  id="height"
                  className="input--style-2  browser-default "
                >
                <option disabled="disabled" selected="selected">
                Weight
                        </option>
                 
                        <option value="1">45-50kg</option>

<option value="2">50-55kgs</option>

<option value="3">55-60kgs</option>

<option value="4">60-65kgs</option> </select>
                
                </div>
                </div>
                </div>

                <div className="row row-space">
                <div className="col-2">

              <div className="input-group">
              <select
                  id="height"
                  className="input--style-2  browser-default  "
                >
                <option disabled="disabled" selected="selected">
                Body Type
                        </option>
                 
                        <option value="1">Slim</option>

<option value="3">Average</option>

<option value="4">Athletic</option>

<option value="5">Heavy</option>
</select>
</div>
              </div>
              
              <div className="col-2">

              <div className="input-group">
              <select
                  id="height"
                  className="input--style-2  browser-default  "
                >
                <option disabled="disabled" selected="selected">
                Complexion
                        </option>
                 
                        <option value="6">Very Fair</option>

<option value="7">Fair</option>

<option value="9">Wheatish</option>

<option value="10">Wheatish Brown</option>

<option value="11">Dark</option>
</select>
              </div>
              </div>
</div>

              <div className="input-group">
              <select
                  id="height"
                  className="input--style-2  browser-default "
                >
                <option disabled="disabled" selected="selected">
                Physical Status
                        </option>
                        <option value="0">Any</option>
              
<option value="1">Normal</option>

<option value="2">Physically Challenged</option>
</select>
              </div>
              


              

              <div className="p-t-30">
              <div className="button mt-1">
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

export default PersonalDetails;
