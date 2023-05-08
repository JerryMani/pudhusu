import React from 'react'
import profImg from "../../assets/images.jpg"
const MatchesProf = () => {
  return (
    <div className='matches-prof-container'>
        <div className='matches-prof-details-cont'>
            <div className='matches-prof-details'>
                <img src={profImg} alt="profile"  className='matches-prof-details-img'/>
                <div  className='matches-prof-all-details'>
                    <h1>Name</h1>
                    <p>id</p>
                    <div><span>height</span>, <span>age</span>, <span>language</span></div>
                    <div><span>Caste</span></div>
                    <div><span>Education</span>, <span>occupation</span>, <span>District</span>, <span>State</span></div>
                </div>
            </div>
            <div className='matches-prof-chat-cont'>
                <div className='matches-prof-score'><p>Match Score</p></div>
                <div className='matches-prof-options'>
                    <div className='matches-prof-option-list'>
                        <p>Chat Now</p>
                        <p>Don't show</p>
                        <p>Shortlist</p>
                    </div>
                    <div className='matches-prof-option-connect'>
                        <p>Like her profile? Connect now</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MatchesProf