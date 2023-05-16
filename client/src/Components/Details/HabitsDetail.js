import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api_config";
import "./Col.css";
function HabitDetails() {
  const [home, setHome] = useState("");
  const[land,setLand] = useState("");
  const [plat, setPlat] = useState("");
  const [food, setFood] = useState("");
  const [smoking, setSmoking] = useState("");
  const [drinking, setDrinking] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API_BASE_URL}/api/HabitDetails`,{

      home,land,plat,food,smoking,drinking,
      },
      {withCredentials: true}
    )
    navigate("/partnerpreferencedetails");
    setHome("");
    setLand("");
    setPlat("");
    setFood("");
    setSmoking("");
    setDrinking("");
  };
  return (
    <div className="abc">
      <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Habit & Other Details</h2>
              <form method="POST" onSubmit={handleSubmit}>
                <div className="input-group1">
                  <select
                  value={home}
                    id="home-details"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setHome(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Home Details
                    </option>
                    <option value="3">Own House</option>

                    <option value="4">Rented House</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                  value={land}
                    id="land"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setLand(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Agriculture Land
                    </option>
                    <option value="3">No</option>

                    <option value="4">Yes</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                  value={plat}
                    id="plat"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setPlat(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      plat
                    </option>
                    <option value="3">No</option>

                    <option value="4">Yes</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                  value={food}
                    id="food"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setFood(e.target.value)}
                  >
                    <option disabled="disabled" selected="selected">
                      Food Habits
                    </option>
                    <option value="3">Vegetarian</option>

                    <option value="4">non-Vegetarian</option>

                    <option value="5">Eggetarian</option>
                    <option value="5">All</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                  value={smoking}
                    id="smoking"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setSmoking(e.target.value)}
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
                  value={drinking}
                    id="drinking"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setDrinking(e.target.value)}
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

export default HabitDetails;
