import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { ProgressBar } from 'react-bootstrap';
import usersData from '../../Our_Data/EmployeeData';
import "bootstrap-daterangepicker/daterangepicker.css";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import { FcCalendar } from "react-icons/fc"
import DateTime from "datetime-js"
import jsZip from "jszip";
import $ from 'jquery';
import { useEffect } from 'react';
import axios from "axios"
import {FaPlus} from "react-icons/fa"

window.JSZip = jsZip;


const List = () => {

  const [startdate, setstartdate] = useState();
  const [enddate, setenddate] = useState();

  const [realData, setrealData] = useState(usersData);
  const [inputData, setinputData] = useState("");

  const [status, setstatus] = useState("");
  const [role, setRole] = useState("");

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
            Employee
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Employee</a></li>
              {/* <li className="breadcrumb-item active" aria-current="page">create</li> */}
            </ol>
          </nav>
        </div>

        <div className="col-lg-12 grid-margin stretch-card">

          <div className="card">
            <div class="card-header">
              <div class="float-left">
                User List
              </div>
              <div class="float-right">
                <Link class="btn btn-success" to="/user/add">
                 <FaPlus/>
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
                      <th>EMP Code</th>
                      <th>Full Name</th>
                     
                      <th>Email</th>
                      <th>Mobile no.</th>
                      <th>Alt Mobile no.</th>
                      <th>Roles</th>
                      <th>Status</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                      realData.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td colspan="1">{item.id}</td>
                            <td>{item.emp_code}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.alt_phone}</td>
                            <td>{item.role}</td>
                            
                            <td><span className={getBadge(item.status)}>{item.status}</span></td>
                            
                          </tr>
                        )
                      })
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                    <th>Id</th>
                      <th>EMP Code</th>
                      <th>Full Name</th>
                     
                      <th>Email</th>
                      <th>Mobile no.</th>
                      <th>Alt Mobile no.</th>
                      <th>Roles</th>
                      <th>Status</th>

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

export default List
