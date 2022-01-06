import React from 'react'

// Styling
import './Profile.scoped.scss';

const Profile = ({name, picture, handleClick}) => {

    return (
        <div>
            <div className="container">
                <div className="inner-container">
                    <div className="picture">
                        <img src={picture} alt="" />
                    </div>
                    <div className="name">
                        <span>Report for <br /></span>
                        <h1>{name}</h1>
                    </div>
                </div>
                <div className="filter">
                    <div onClick={() => handleClick('daily')}>Daily</div>
                    <div onClick={() => handleClick('weekly')}>Weekly</div>
                    <div onClick={() => handleClick('monthly')}>Monthly</div>
                </div>
            </div>
        </div>
    )
}

export default Profile
