import React from 'react'

const Invoice = () => {
    return (
        <div>
        <div>
            <div className="page-header">
                <h3 className="page-title">
             Accounts
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Accounts</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Invoice</li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
    )
}

export default Invoice
