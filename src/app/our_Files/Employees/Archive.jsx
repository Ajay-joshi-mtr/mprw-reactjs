import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../../../assets/styles/ourcss.css";
import { CInput, } from '@coreui/react';
import { incNumber, decNumber, getLead } from '../../Redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import Select from "react-select";
import image1 from "../../../assets/images/faces/face1.jpg"
import image2 from "../../../assets/images/faces/face2.jpg"
import {BiBuildingHouse,BiPhone} from "react-icons/bi"
import {HiPhone} from "react-icons/hi"
import {MdRestore,MdDeleteForever} from "react-icons/md"
import {Link} from "react-router-dom"

const Archive = () => {
    const mystate = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();

    console.log(mystate);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setcity] = useState("");
    const [contact, setContact] = useState("");
    const [supportPerson, setsupportPerson] = useState("");
    const [status, setstatus] = useState("");
    const [course, setcourse] = useState("");

    const [loading, setloading] = useState("");

    const postData = { name, email, city, contact, supportPerson, status, course };

    const options = [
        { value: 'Administrator', label: 'Administrator' },
        { value: 'Tech-lead', label: 'Tech-lead' },
        { value: 'Support-lead', label: 'Support-lead' },
        { value: 'Support', label: 'Support' },
        { value: 'Executive', label: 'Executive' },


    ]

    return (
        <div>

            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        User
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / User</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Trashed</li>
                        </ol>
                    </nav>
                </div>
                {/* here  */}

                <div class="card card-solid">
                                <div class="card-body pb-0">
                                    <div class="row d-flex align-items-stretch">


                                        <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                                            <div class="card bg-light mb-4">
                                                <div class="card-header text-muted border-bottom-0">
                                                    Tech-lead
                                                </div>
                                                <div class="card-body pt-0">
                                                    <div class="row">
                                                        <div class="col-7">
                                                            <h2 class="lead text-dark"><b>Geetika Nagar</b></h2>
                                                            <ul class="ml-4 mb-0 fa-ul text-muted">
                                                                <li class="small"><span class="fa-li text-primary"><BiBuildingHouse fontSize="1rem"/></span> Address: Mathura</li>
                                                                <li class="small"><span class="fa-li text-primary"><BiPhone fontSize="1rem"/></span> Phone #1: 9259268182</li>
                                                                <li class="small"><span class="fa-li text-primary"><HiPhone fontSize="1rem"/></span> Phone #2: 9259268182</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-5 text-center">
                                                            <img src={image1} alt="" class="rounded-circle img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-footer" style={{backgroundColor:"#eaf0f7"}}>
                                                    <div class="text-right">

                                                        <Link to="#" class="btn btn-md text-success" style={{fontSize:"1.5rem"}}>
                                                            <MdRestore/>
                                                        </Link>
                                                        <Link to="#" class="btn btn-md text-danger " style={{fontSize:"1.5rem"}}>
                                                            <MdDeleteForever/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                                            <div class="card bg-light mb-4">
                                                <div class="card-header text-muted border-bottom-0">
                                                    Tech-lead
                                                </div>
                                                <div class="card-body pt-0">
                                                    <div class="row">
                                                        <div class="col-7">
                                                            <h2 class="lead text-dark"><b>Geetika Nagar</b></h2>
                                                            <ul class="ml-4 mb-0 fa-ul text-muted">
                                                                <li class="small"><span class="fa-li text-primary"><BiBuildingHouse fontSize="1rem"/></span> Address: Mathura</li>
                                                                <li class="small"><span class="fa-li text-primary"><BiPhone fontSize="1rem"/></span> Phone #1: 9259268182</li>
                                                                <li class="small"><span class="fa-li text-primary"><HiPhone fontSize="1rem"/></span> Phone #2: 9259268182</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-5 text-center">
                                                            <img src={image2} alt="" class="rounded-circle img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-footer" style={{backgroundColor:"#eaf0f7"}}>
                                                    <div class="text-right">

                                                        <Link to="#" class="btn btn-md text-success" style={{fontSize:"1.5rem"}}>
                                                            <MdRestore/>
                                                        </Link>
                                                        <Link to="#" class="btn btn-md text-danger " style={{fontSize:"1.5rem"}}>
                                                            <MdDeleteForever/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
            </div>
        </div>
    )
}

export default Archive;
