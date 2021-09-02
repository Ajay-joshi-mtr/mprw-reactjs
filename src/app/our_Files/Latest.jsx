import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CCollapse,
  CButton,
  CRow
} from '@coreui/react'

import usersData from '../Our_Data/UsersData';
import "../../assets/styles/ourcss.css"

// const [items, setItems] = useState(usersData)

const fields = [
  'id',
  { key: 'name', _style: { width: '40%' } },
  'registered',
  { key: 'role', _style: { width: '20%' } },
  { key: 'status', _style: { width: '20%' } },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
]

const getBadge = (status) => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Latest = () => {

  const [details, setDetails] = useState([]);

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }


  return (
    <div>
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Latest
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Latest updates</a></li>
              <li className="breadcrumb-item active" aria-current="page">Latest</li>
            </ol>
          </nav>
        </div>


        {/* put here */}

        <CRow>
          <CCol xs="12" lg="12">
            <CCard>

              <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
                  columnFilter
                  tableFilter
                  footer
                  itemsPerPageSelect
                  itemsPerPage={5}
                  hover
                  sorter
                  pagination
                  scopedSlots={{
                    'status':
                      (item) => (
                        <td>
                          <CBadge color={getBadge(item.status)}>
                            {item.status}
                          </CBadge>
                        </td>
                      ),
                    'show_details':
                      (item, index) => {
                        return (
                          <td className="py-2">
                            <CButton
                              color="primary"
                              variant="outline"
                              shape="square"
                              size="sm"
                              onClick={() => { toggleDetails(index) }}
                            >
                              {details.includes(index) ? 'Hide' : 'Show'}
                            </CButton>
                          </td>
                        )
                      },
                    'details':
                      (item, index) => {
                        return (
                          <CCollapse show={details.includes(index)}>
                            <CCardBody>
                              <h4>
                                {item.username}
                              </h4>
                              <p className="text-muted">User since: {item.registered}</p>
                              <CButton size="sm" color="info">
                                User Settings
                              </CButton>
                              <CButton size="sm" color="danger" className="ml-1">
                                Delete
                              </CButton>
                            </CCardBody>
                          </CCollapse>
                        )
                      }
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

      </div>


    </div>
  )
}

export default Latest
