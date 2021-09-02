import React from 'react'

const Activity = () => {
    return (
        <div>
        <div>
            <div className="page-header">
                <h3 className="page-title">
                  Meetings
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Meetings</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Activity</li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
    )
}

export default Activity
