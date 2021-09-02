import React from 'react'
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import Select from "react-select";


const Addemp = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setcity] = useState("");
  const [contact, setContact] = useState("");
  const [supportPerson, setsupportPerson] = useState("");
  const [status, setstatus] = useState("");
  const [course, setcourse] = useState("");

  const [loading, setloading] = useState("");

  const options = [
    { value: 'Administrator', label: 'Administrator' },
    { value: 'Tech-lead', label: 'Tech-lead' },
    { value: 'Support-lead', label: 'Support-lead' },
    { value: 'Support', label: 'Support' },
    { value: 'Executive', label: 'Executive' },
    

  ]
  

  const postData = { name, email, city, contact, supportPerson, status, course };
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
              <li className="breadcrumb-item active" aria-current="page">Add</li>
            </ol>
          </nav>
        </div>

        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add Employee</h4>
              <form className="form-sample">

                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Full Name</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" value={name} onChange={(e) => {
                          setName(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Emp Code</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" value={contact} onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" value={email} onChange={(e) => {
                          setEmail(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Phone No.</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Alternative Mobile no.</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Gender</label>
                      <div className="col-sm-9">
                        <select className="form-control" onChange={(e) => {
                          setsupportPerson(e.target.value);
                        }}>

                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </Form.Group>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Birthday</label>
                      <div className="col-sm-9">
                        <Form.Control type="Date" onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Address</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Password</label>
                      <div className="col-sm-9">
                        <Form.Control type="password" placeholder="******" value={contact} onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Designation</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Gender</label>
                      <div className="col-sm-9">
                        <select className="form-control" onChange={(e) => {
                          setsupportPerson(e.target.value);
                        }}>

                          <option>Salaried</option>
                          <option>Percentage</option>

                        </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Ref %</label>
                      <div className="col-sm-9">
                        <Form.Control type="number" min="0" max="30" onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Status</label>
                      <div className="col-sm-9">
                        <select className="form-control" onChange={(e) => {
                          setsupportPerson(e.target.value);
                        }}>

                          <option>Inactive</option>
                          <option>Active</option>
                          <option>Suspend</option>


                        </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Type of Area</label>
                      <div className="col-sm-9">
                        <select className="form-control" onChange={(e) => {
                          setsupportPerson(e.target.value);
                        }}>

                          <option selected>Select Area Type</option>

                          <option>All Tech/Non-Tech</option>
                          <option>Technical</option>
                          <option>Non-Technical</option>
                          <option>Other</option>

                        </select>
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Area of Expertise</label>
                      <div className="col-sm-9">
                        <select className="form-control" onChange={(e) => {
                          setsupportPerson(e.target.value);
                        }}>

                          <option>Inactive</option>
                          <option>Active</option>
                          <option>Suspend</option>


                        </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Roles</label>
                      <div className="col-sm-9">
                        <Select options={options} isMulti
                          name="colors"
                          className="basic-multi-select"
                          classNamePrefix="select" />
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Profile Image</label>
                      <div className="col-sm-9">
                        <Form.Control style={{ color: "#333" }} type="file" onChange={(e) => {
                          setContact(e.target.value);
                        }} />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-7">

                  </div>
                </div>

                <p className="card-description"></p>
                <button type="button" className="btn btn-primary mr-2" >Submit</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Addemp;
