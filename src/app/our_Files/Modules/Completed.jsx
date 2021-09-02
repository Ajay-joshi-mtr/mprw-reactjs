import React from 'react'

const Completed = () => {
    return (
        <div>
        <div>
            <div className="page-header">
                <h3 className="page-title">
                 Modules
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Modules</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Completed</li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
    )
}

export default Completed
