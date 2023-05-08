import React from "react";
import { useNavigate } from "react-router-dom";
import "./Col.css";
function FamilyDetails() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Religiousinformation");
  };
  return (
   <div className="abc"> 
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Family Details</h2>
            <form method="POST" onSubmit={handleSubmit}>

            <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
            
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Father's Name"
                  name="name"
                />
              </div>
                </div>
            

                <div className="col-2">
                  <div className="input-group">
                  
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Mothers's Name"
                  name="name"
                />
              </div>
                
            
                </div>
                </div>





                <div className="row row-space">
                <div className="col-2">
                <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Caste"
                  name="name"
                />
              </div>
                </div>

                <div className="col-2">
                <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Caste"
                  name="name"
                />
              </div>
                </div>
                </div>


           
                <div className="row row-space">
                <div className="col-2">
                <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Kulam"
                  name="name"
                />
              </div>
                </div>

                <div className="col-2">
                <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="kulam"
                  name="name"
                />
              </div>
                </div>
                </div>


           
              


              <div className="input-group">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                    Family Status
                  </option>

                  <option value="4">Middle Class</option>
                  <option value="4">Upper Middle Class</option>
                  <option value="4">Rich</option>
                </select>
              </div>


              <div className="input-group">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                    Family Type
                  </option>
                  <option value="raasi">Joint Family</option>
                  <option value="raasi">Nuclear Family</option>
                                    <option value="raasi">Others</option>
            
                </select>
              </div>

              
              <div className="input-group">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                    Family Values
                  </option>
                  <option value="raasi">Orthodox</option>
                  <option value="raasi">Traditional</option>
                                    <option value="raasi">Moderate</option>
                                    <option value="raasi">Liberal</option>

                </select>
              </div>


              <div className="input-group">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                   Number of Sisters
                  </option>
                  <option value="raasi">0</option>
                  <option value="raasi">1</option>
                                    <option value="raasi">2</option>
                                    <option value="raasi">3</option>

                </select>
              </div>

              <div className="input-group">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                   Number of Brothers
                  </option>
                  <option value="raasi">0</option>
                  <option value="raasi">1</option>
                                    <option value="raasi">2</option>
                                    <option value="raasi">3</option>

                </select>
              </div>

              <div className="input-group">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                  Married Sisters
                  </option>
                  <option value="raasi">0</option>
                  <option value="raasi">1</option>
                                    <option value="raasi">2</option>
                                    <option value="raasi">3</option>

                </select>
              </div>


              <div className="input-group">
                <select
                  id="height"
                  className="input--style-2  browser-default custom-select "
                >
                  <option disabled="disabled" selected="selected">
                  Married Brothers 
                  </option>
                  <option value="raasi">0</option>
                  <option value="raasi">1</option>
                                    <option value="raasi">2</option>
                                    <option value="raasi">3</option>

                </select>
              </div>


              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Parents Mobile Number"
                  name="name"
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

export default FamilyDetails;
