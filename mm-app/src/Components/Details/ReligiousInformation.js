import React from "react";
import { useNavigate } from "react-router-dom";
import "./Col.css";

function ReligiousInformation() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/habitdetails");
  };
  return (
    <div className="abc">
      <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Religious Information</h2>
              <form method="POST" onSubmit={handleSubmit}>
                <div className="input-group">
                  <select
                    id="height"
                    className="input--style-2  browser-default custom-select "
                  >
                    <option disabled="disabled" selected="selected">
                      Religion
                    </option>
                    <option>Hindu </option>
                    <option>Christian</option>
                    <option>Muslim</option>
                  </select>
                </div>

                <div className="input-group">
                  <select
                    id="height"
                    className="input--style-2  browser-default custom-select "
                  >
                    <option disabled="disabled" selected="selected">
                      Caste
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
                      Sub Caste
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
                      Star
                    </option>
                    <option value="" class="hide"></option>
                    <option value="male">அஸ்வினி/Aswini</option>
                    <option value="male">பரணி/Bharani</option>
                    <option value="male">கார்த்திகை/Kruthiga</option>
                    <option value="male">ரோகிணி/Rohini</option>
                    <option value="male">மிருகசீரிடம்/Mrigasira</option>
                    <option value="male">திருவாதிரை/Arudra</option>
                    <option value="male">புனர்பூசம்/Punarvasu</option>
                    <option value="male">பூசம்/Pushya</option>
                    <option value="male">ஆயில்யம்/Asilesha</option>
                    <option value="male">மகம்/Makha</option>
                    <option value="male">பூரம்/Poorvaphalguni</option>

                    <option value="male">உத்திரம்/Uthiraphalgunu</option>
                    <option value="male">அஸ்தம்/Hastha</option>
                    <option value="male">சித்திரை/Chitha</option>
                    <option value="male">சுவாதி/Swathi</option>
                    <option value="male">விசாகம்/Visaka</option>
                    <option value="male">அனுஷம்/Anuradha</option>
                    <option value="male">கேட்டை/Jyeshta</option>
                  </select>
                </div>

                <div className="input-group">
                  <select
                    id="height"
                    className="input--style-2  browser-default custom-select "
                  >
                    <option disabled="disabled" selected="selected">
                      Raasi
                    </option>
                    <option value="raasi">Mesham / Mesha (Aries)</option>
                    <option value="raasi">Rishabam / Vrushaba (Taurus)</option>
                  </select>
                </div>

                <div className="input-group">
                  <select
                    id="height"
                    className="input--style-2  browser-default custom-select "
                  >
                    <option disabled="disabled" selected="selected">
                      ChevvaiDosham/Manglik
                    </option>
                    <option value="3">No</option>
                    <option value="4">Yes</option>
                    <option value="5">Don't Know</option>{" "}
                  </select>
                </div>

                <div className="p-t-30">
                  <div className="button mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary text-center"
                    >
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

export default ReligiousInformation;
