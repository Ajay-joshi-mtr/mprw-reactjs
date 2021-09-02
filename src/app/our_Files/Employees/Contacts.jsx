import React from 'react'

const Contacts = () => {
    return (
        <div>
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Employee
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Employee</a></li>
                            <li className="breadcrumb-item active" aria-current="page">contacts</li>
                        </ol>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Contacts
