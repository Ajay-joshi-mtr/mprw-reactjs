import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { ProgressBar } from 'react-bootstrap';
import usersData from '../../Our_Data/RolesData';
import "bootstrap-daterangepicker/daterangepicker.css";

import jsZip from "jszip";
import $ from 'jquery';
import { useEffect } from 'react';

window.JSZip = jsZip;


const UserRoles = () => {

    const [startdate, setstartdate] = useState();
    const [enddate, setenddate] = useState();

    const [realData, setrealData] = useState(usersData);

    // var realData=[];
    var minDate = startdate;
    var maxDate = enddate;
    console.log(minDate)


    useEffect(() => {


        $(document).ready(function () {
            var table = $('#mytable').DataTable({
                orderCellsTop: true,
                fixedHeader: true,
            });
        });

    }, [])
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
                            <li className="breadcrumb-item active" aria-current="page">Roles</li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-12 grid-margin stretch-card">

                    <div className="card">
                        <div class="card-header">
                            <div class="float-left">
                                Roles List
                            </div>
                            <div class="float-right">
                                <Link class="btn btn-success" to="/roles/create">
                                  Add Role
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            {/* <h4 className="card-title">Leads Table</h4> */}

                            <div className="table-responsive" style={{ padding: "0px 5px" }}>
                                <table id="mytable" className="display table table-striped" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Role Title</th>
                                            <th>Permissions</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            realData.map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td >{item.id}</td>
                                                        <td >{item.title}</td>
                                                        <td><span className="badge badge-primary ml-1 mt-1">show_user</span>
                                                            <span className="badge badge-primary ml-1 mt-1" >user_setting</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                            <span className="badge badge-primary ml-1 mt-1">scholar_show</span>
                                                        </td>
                                                        <td>
                                                            <Link className="btn btn-xs btn-primary" to="#" >View</Link> |
                                                            <Link class="btn btn-xs btn-info" to="/roles/edit" >Edit</Link> |
                                                            <Link class=" btn btn-xs btn-danger " to="#" >Delete</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Role Title</th>
                                            <th>Permissions</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRoles
