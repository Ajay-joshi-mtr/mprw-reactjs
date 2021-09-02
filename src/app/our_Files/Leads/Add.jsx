import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { CInput,} from '@coreui/react';
import { incNumber,decNumber,getLead } from '../../Redux/actions/index';
import { useSelector,useDispatch } from 'react-redux';

const Add = () => {
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

  return (
    <div>
      
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Lead
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home / Lead</a></li>
              <li className="breadcrumb-item active" aria-current="page">create</li>
            </ol>
          </nav>
        </div>
        {/* here  */}

        <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Lead</h4>
                <form className="form-sample">
                  
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Full Name</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" value={name} onChange={(e)=>{
                          setName(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Phone No.</label>
                        <div className="col-sm-9">
                        <Form.Control type="text" value={contact} onChange={(e)=>{
                          setContact(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" value={email} onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Course</label>
                        <div className="col-sm-9">
                        <Form.Control type="text" value={course} onChange={(e)=>{
                          setcourse(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">City</label>
                        <div className="col-sm-9">
                        <Form.Control type="text" value={city} onChange={(e)=>{
                          setcity(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Support Person</label>
                        <div className="col-sm-9">
                          <select className="form-control" value={supportPerson} onChange={(e)=>{
                          setsupportPerson(e.target.value);
                        }}>
                          <option>Choose Support person</option>
                            <option>Pooja Gupta</option>
                            <option>Arun solanki</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Status</label>
                        <div className="col-sm-9">
                          <select className="form-control" value={status} onChange={(e)=>{
                          setstatus(e.target.value);
                        }}>
                          <option></option>
                            <option>Completed</option>
                            <option>Hold</option>
                            <option>Processing</option>
                            <option>Closed</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  
                  </div>
                  <p className="card-description"></p>
                  <button type="button" className="btn btn-primary mr-2" onClick={()=>dispatch(getLead(postData))} >Submit</button>
                  {/* <button type="button" className="btn btn-primary mr-2" onClick={()=>dispatch(decNumber())} >-</button> */}
      
                </form>
              </div>
            </div>
          </div>

        

      </div>
    </div>
  )
}

export default Add
