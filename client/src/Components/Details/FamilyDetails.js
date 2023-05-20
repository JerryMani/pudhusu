import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api_config";
import UserContext from "../Authcontext";
import "./Col.css";

function FamilyDetails() {
  const { user, setUser } = useContext(UserContext);
  const [father, setFather] = useState("");
  const [fcaste, setFcaste] = useState("");
  const [fkulam, setFkulam] = useState("");
  const [mother, setMother] = useState("");
  const [mcaste, setMcaste] = useState("");
  const [mkulam, setMkulam] = useState("");
  const [fstatus, setFstatus] = useState("");
  const [ftype, setFtype] = useState("");
  const [fvalues, setFvalues] = useState("");
  const [sisters, setSisters] = useState("");
  const [brothers, setBrothers] = useState("");
  const [msisters, setMsisters] = useState("");
  const [mbrothers, setMbrothers] = useState("");
  const [parentsno, setParentsno] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API_BASE_URL}/api/FamilyDetails`,
      {
        user,
        father,
        fcaste,
        fkulam,
        mother,
        mcaste,
        mkulam,
        fstatus,
        ftype,
        fvalues,
        sisters,
        brothers,
        msisters,
        mbrothers,
        parentsno,
      },
      { withCredentials: true }
    );
    if (response.data.auth) {
      setUser((prevState) => ({
        ...prevState,
        familyDetails: response.data.userFamilyDetails,
      }));
      navigate("/Religiousinformation");
      setFather("");
      setFcaste("");
      setFkulam("");
      setMother("");
      setMcaste("");
      setMkulam("");
      setFstatus("");
      setFtype("");
      setFvalues("");
      setSisters("");
      setBrothers("");
      setMsisters("");
      setMbrothers("");
      setParentsno("");
    }
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
                        value={father}
                        className="input--style-2"
                        type="text"
                        placeholder="Father's Name"
                        name="name"
                        onChange={(e) => setFather(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={mother}
                        className="input--style-2"
                        type="text"
                        placeholder="Mothers's Name"
                        name="name"
                        onChange={(e) => setMother(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={fcaste}
                        className="input--style-2"
                        type="text"
                        placeholder="Caste"
                        name="name"
                        onChange={(e) => setFcaste(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={mcaste}
                        className="input--style-2"
                        type="text"
                        placeholder="Caste"
                        name="name"
                        onChange={(e) => setMcaste(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={fkulam}
                        className="input--style-2"
                        type="text"
                        placeholder="Kulam"
                        name="name"
                        onChange={(e) => setFkulam(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group">
                      <input
                        value={mkulam}
                        className="input--style-2"
                        type="text"
                        placeholder="kulam"
                        name="name"
                        onChange={(e) => setMkulam(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="input-group1">
                  <select
                    value={fstatus}
                    id="family"
                    className="input--style-2 "
                    onChange={(e) => setFstatus(e.target.value)}
                  >
                    <option selected="selected">Family Status</option>

                    <option value="middle class">Middle Class</option>
                    <option value="upper middle class">
                      Upper Middle Class
                    </option>
                    <option value="rich">Rich</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={ftype}
                    id="ftype"
                    className="input--style-2 "
                    onChange={(e) => setFtype(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Family Type
                    </option>
                    <option value="Joint Family">Joint Family</option>
                    <option value="Nuclear Family">Nuclear Family</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={fvalues}
                    id="fvalues"
                    className="input--style-2 "
                    onChange={(e) => setFvalues(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Family Values
                    </option>
                    <option value="orthodox">Orthodox</option>
                    <option value="traditional">Traditional</option>
                    <option value="Moderate">Moderate</option>
                    <option value="liberal">Liberal</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={sisters}
                    id="nsisters"
                    className="input--style-2 "
                    onChange={(e) => setSisters(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Number of Sisters
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={brothers}
                    id="nbrothers"
                    className="input--style-2 "
                    onChange={(e) => setBrothers(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Number of Brothers
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={msisters}
                    id="msister"
                    className="input--style-2 "
                    onChange={(e) => setMsisters(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Married Sisters
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={mbrothers}
                    id="mbrothers"
                    className="input--style-2 "
                    onChange={(e) => setMbrothers(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Married Brothers
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="input-group">
                  <input
                    value={parentsno}
                    className="input--style-2"
                    type="text"
                    placeholder="Parents Mobile Number"
                    name="name"
                    onChange={(e) => setParentsno(e.target.value)}
                  />
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

export default FamilyDetails;
