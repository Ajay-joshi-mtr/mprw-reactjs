import React from 'react'

const List = () => {
    return (
        <div>
        <div>
            <div className="page-header">
                <h3 className="page-title">
                   Scholars
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Scholars</a></li>
                        {/* <li className="breadcrumb-item active" aria-current="page">Create</li> */}
                    </ol>
                </nav>
            </div>

        </div>
    </div>
    )
}

export default List
