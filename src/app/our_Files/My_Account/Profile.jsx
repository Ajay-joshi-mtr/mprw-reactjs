import React from 'react'

const Profile = () => {
    return (
        <div>
        <div>
            <div className="page-header">
                <h3 className="page-title">
              My Account
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / My Account</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
    )
}

export default Profile
