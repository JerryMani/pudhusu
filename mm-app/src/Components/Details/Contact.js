import React from "react";
import {useNavigate} from 'react-router-dom'
import './Col.css'
function Contact() {

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
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Contact Details</h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Address"
                  name="name"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="City"
                  name="name"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="State"
                  name="name"
                />
              </div>

              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Country"
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

export default Contact;
