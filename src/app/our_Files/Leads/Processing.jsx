import React, { useState, } from 'react'
import { ProgressBar } from 'react-bootstrap';
import usersData from '../../Our_Data/UsersData';
import "bootstrap-daterangepicker/daterangepicker.css";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import { FcCalendar } from "react-icons/fc"
import DateTime from "datetime-js"
import jsZip from "jszip";
import $ from 'jquery';
import { useEffect } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";
import { BiTransferAlt, BiEdit, BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md"
import { Form, Modal, Button } from 'react-bootstrap';

window.JSZip = jsZip;

const Processing = () => {

    const [startdate, setstartdate] = useState();
    const [enddate, setenddate] = useState();

    const [realData, setrealData] = useState(usersData);
    const [inputData, setinputData] = useState("");

    const [status, setstatus] = useState("");
    const [role, setRole] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // var realData=[];
    var minDate = startdate;
    var maxDate = enddate;
    console.log(minDate)

    $.fn.dataTable.ext.search.push(

        function (settings, data, dataIndex) {
            console.log("checj");
            var min = ""
            var max = ""
            var date = new Date(data[2]);
            console.log(minDate);

            if (
                (min === "" && max === "") ||
                (min === "" && date <= max) ||
                (min <= date && max === "") ||
                (min <= date && date <= max)
            ) {

                return true;

            }
            return false;
        }
    );
    useEffect(() => {


        $(document).ready(function () {

            $('#mytable thead tr').clone(true).appendTo('#mytable thead');
            $('#mytable thead tr:eq(1) th').each(function (i) {
                var title = $(this).text();
                $(this).html('<input type="text" style="width:100%; padding:5px" placeholder=" ' + title + '" />');

                $('input', this).on('keyup change', function () {
                    if (table.column(i).search() !== this.value) {
                        table
                            .column(i)
                            .search(this.value)
                            .draw();
                    }
                });
            });
            var table = $('#mytable').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    { extend: 'copy', className: 'bg-primary text-light fa fa-clone', text: '' },
                    { extend: 'csv', className: 'bg-primary text-light fa fa-file', text: '' },
                    { extend: 'excel', className: 'bg-primary text-light fa fa-file-excel-o', text: '', },
                    { extend: 'print', className: 'bg-primary text-light fa fa-print', text: '' },],
                orderCellsTop: true,
                fixedHeader: true,
            });
        });

    }, [])


    const getBadge = (status) => {
        switch (status) {
            case 'Active': return 'badge badge-outline-success'
            case 'Inactive': return 'badge  bg-secondary'
            case 'Pending': return 'badge badge-outline-warning'
            case 'Banned': return 'badge badge-outline-danger'
            default: return 'primary'
        }
    }

    return (
        <div>
            <div>
                <div className="page-header">

                    <h3 className="page-title">
                        Leads
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Leads</a></li>

                            <li className="breadcrumb-item active" aria-current="page">Processing</li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                    <div class="card-header">
                            <div class="float-left">
                                Leads Processing List
                            </div>

                        </div>
                        <div className="card-body">
                            {/* <h4 className="card-title">Leads Table</h4> */}
                            <div className="row">
                                <div className="col-sm-3">
                                    <label className="" style={{ color: "#333" }}>Created On</label>

                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" style={{ border: "none" }}>
                                                    <FcCalendar style={{ fontSize: "20px", border: "none" }} />
                                                </span>
                                            </div>
                                            <DateRangePicker
                                                initialSettings={{ startDate: '01/01/2018', endDate: '01/15/2018' }} onCallback={(start, end) => {
                                                    const startDate = moment(start).format('YYYY/MM/DD')
                                                    const endDate = moment(end).format('YYYY/MM/DD')
                                                    setstartdate(startDate);
                                                    setenddate(endDate);
                                                }}
                                            >
                                                <input type="text" id="minmax" className="form-control" value={inputData} onChange={(event) => {
                                                    setinputData(event.target.value);
                                                    console.log("print" + event.target.value);

                                                }} />
                                            </DateRangePicker>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <label style={{ color: "#333" }}>Support Person</label>
                                    <select class="form-control" name="support" id="support" onClick={(event) => {
                                        setRole(event.target.value);
                                    }}>
                                        <option value="">-- All --</option>
                                        <option value="Admin">Admin</option>
                                        <option value="7">Pooja Sharma</option>
                                        <option value="10">Kapil Saini</option>
                                        <option value="21">Apeksha Sharma</option>
                                        <option value="74">Megha Rawat</option>
                                        <option value="119">Anshita Khandelwal</option>

                                    </select>
                                </div>
                                

                            </div>
                            <div className="table-responsive" style={{ padding: "0px 5px" }}>
                                <table id="mytable" className="display table table-striped" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Full Name</th>
                                            <th>Phone no.</th>
                                            <th>Email</th>
                                            <th>Lead Date</th>
                                            <th>Support P.</th>
                                            <th>Remark</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            realData.map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td colspan="1">{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.lead_d}</td>
                                                        <td>{item.support_p}</td>
                                                        <td><a href="#" onClick={handleShow} className="text-primary p-1"><BiEditAlt fontSize="20px" /></a>{item.remark}</td>

                                                        <td><span className={getBadge(item.status)}>{item.status}</span></td>
                                                        <td>
                                                            <Link class="" to="/lead/conversion" data-toggle="tooltip" title="Transfered"><BiTransferAlt fontSize="20px" /></Link> |
                                                            <Link class="text-info" to="/lead/edit" data-toggle="tooltip" title="Edit"><BiEdit fontSize="20px" /></Link> |
                                                            <Link class=" del_lead text-danger " to="#" data-toggle="tooltip" title="delete" data="2298"><MdDelete fontSize="20px" /></Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Full Name</th>
                                            <th>Phone no.</th>
                                            <th>Email</th>
                                            <th>Lead Date</th>
                                            <th>Support P.</th>
                                            <th>Remark</th>
                                            <th>Status</th>
                                            <th>Actions</th>

                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <label for="status">Remark/Status</label>
                   
                    <textarea name="remark" id="lremark" class="form-control"></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                           Update
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
}

export default Processing;
