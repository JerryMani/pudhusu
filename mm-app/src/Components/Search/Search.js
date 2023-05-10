import React from 'react';
import { Link } from 'react-router-dom';
import './search.css';

function SearchBox() {
  return (
    <div className='man'>
    <div className="search-box w-100">
      <div className="search-criteria">
        <div className="search-group">
          <label>Age</label>
          <div className="search-dropdown">
            <select>
              <option value="">Min-Max age</option>
              <option value="18">18-25</option>
              <option value="19">25-30</option>
              <option value="20">30-35</option>
          
              <option value="60">35-40</option>
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Marital Status</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select status</option>
              <option value="single">Single</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
              <option value="separated">Separated</option>
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Physical Status</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select status</option>
              <option value="normal">Normal</option>
              <option value="physically challenged">Physically Challenged</option>
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Mother Tongue</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select language</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
              <option value="hindi">Hindi</option>
         
            </select>
          </div>
        </div>
      </div>
      <div className="search-criteria">
        <div className="search-group">
          <label>Religion</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select religion</option>
              <option value="hindu">Hindu</option>
              <option value="muslim">Muslim</option>
              <option value="christian">Christian</option>
                          </select>
          </div>
        </div>
        <div className="search-group">
          <label>Kulam</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select kulam</option>
              <option value="iyer">Iyer</option>
              <option value="iyengar">Iyengar</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Dosham</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select dosham</option>
              <option value="none">None</option>
              <option value="chevvai">Chevvai dosham</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Star</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select star</option>
              <option value="ashwini">Ashwini</option>
              <option value="bharani">Bharani</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
      </div>
      <div className="search-criteria">
        <div className="search-group">
          <label>Education</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select education</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Employed In</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select employment status</option>
              <option value="private">Private</option>
              <option value="government">Government</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Occupation</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select occupation</option>
              <option value="doctor">Doctor</option>
              <option value="engineer">Engineer</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Annual Income</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select income</option>
              <option value="1000000">Less than 10 Lakhs</option>
              <option value="2000000">10-20 Lakhs</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
      </div>
      <div className="search-criteria">
        <div className="search-group">
          <label>Country</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>City</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select city</option>
              <option value="chennai">Chennai</option>
              <option value="bangalore">Bangalore</option>
              {/* ... more options */}
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Smoking Habit</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select smoking habit</option>
              <option value="no">No</option>
              <option value="occasionally">Occasionally</option>
              <option value="regularly">Regularly</option>
            </select>
          </div>
        </div>
        <div className="search-group">
          <label>Drinking Habit</label>
          <div className="search-dropdown">
            <select>
              <option value="">Select drinking habit</option>
              <option value="no">No</option>
              <option value="occasionally">Occasionally</option>
              <option value="regularly">Regularly</option>
            </select>
          </div>
        </div>
        
      </div>
    
    </div>
    <div className="search-btn-container mt-3 pb-4">
    <Link className="btnText btn-primary" to="/home">Search</Link>

        {/* <button type="submit" className="search-btn btn-primary">Search</button> */}
      </div>
    </div>
  );
};
export default SearchBox;




