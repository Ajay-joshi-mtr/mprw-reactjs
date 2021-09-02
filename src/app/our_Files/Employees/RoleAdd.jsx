import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../../../assets/styles/ourcss.css";
import { CInput,} from '@coreui/react';
import { incNumber,decNumber,getLead } from '../../Redux/actions/index';
import { useSelector,useDispatch } from 'react-redux';
import Select from "react-select";

const RoleAdd = () => {
  const mystate = useSelector((state)=>state.changeTheNumber);  
  const dispatch =useDispatch();
 
  console.log(mystate);
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [city,setcity] = useState("");
  const [contact,setContact] = useState("");
  const [supportPerson,setsupportPerson] = useState("");
  const [status,setstatus] = useState("");
  const [course,setcourse] = useState("");
  
  const [loading,setloading] =useState("");

  const postData={name,email,city,contact,supportPerson,status,course};

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
            Roles
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Roles</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add</li>
            </ol>
          </nav>
        </div>
        {/* here  */}

        <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Role</h4>
                <form className="form-sample">
                  
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Role Title *</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" value={name} onChange={(e)=>{
                          setName(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    
                  </div>
                  
                  <div className="row">
                  <div className="col-md-8">
                  <Form.Group className="row">
                      <label className="col-sm-2 col-form-label">Permissions *</label>
                      <div className="col-sm-9">
                        <Select options={options} isMulti
                          name="colors"
                          className="basic-multi-select"
                          classNamePrefix="select" />
                      </div>
                    </Form.Group>
                    </div>
                    
                  </div>
                 
                  <p className="card-description"></p>
                  <button type="button" className="btn btn-primary mr-2" onClick={()=>dispatch(getLead(postData))} >Save</button>
                  {/* <button type="button" className="btn btn-primary mr-2" onClick={()=>dispatch(decNumber())} >-</button> */}
      
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default RoleAdd;
