import React from 'react'

const Completed = () => {
    return (
        <div>
        <div>
            <div className="page-header">
                <h3 className="page-title">
                  Works
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Works</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Completed</li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
    )
}

export default Completed
