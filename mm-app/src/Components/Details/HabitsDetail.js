import React from "react";
import { useNavigate } from "react-router-dom";
import "./Col.css";
function HabitDetails() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/partnerpreferencedetails");
  };
  return (
    <div className="abc">
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Habit Details</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="input-group1">
                <select
                  id="height"
                  className="input--style-2  browser-default  "
                >
                  <option disabled="disabled" selected="selected">
                  Food Habits
                  </option>
                  <option value="3">Vegetarian</option>

<option value="4">non-Vegetarian</option>

<option value="5">Eggetarian</option>
</select>
              </div>


              <div className="input-group1">
                <select
                  id="height"
                  className="input--style-2  browser-default  "
                >
                  <option disabled="disabled" selected="selected">
                  smoking Habits
                  </option>
                  <option value="3">No</option>

<option value="4">Yes</option>

<option value="5">Occasionally</option>

                </select>
              </div>

              
              <div className="input-group1">
                <select
                  id="height"
                  className="input--style-2  browser-default "
                >
                  <option disabled="disabled" selected="selected">
                  Drinking Habits
                  </option>
                  <option value="3">No</option>

<option value="4">Yes</option>

<option value="5">Occasionally</option>

                </select>
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

export default HabitDetails;
