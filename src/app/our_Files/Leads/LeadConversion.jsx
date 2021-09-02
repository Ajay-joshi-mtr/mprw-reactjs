import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../../../assets/styles/ourcss.css";
import { CInput,} from '@coreui/react';
import { incNumber,decNumber,getLead } from '../../Redux/actions/index';
import { useSelector,useDispatch } from 'react-redux';

const LeadConversion = () => {
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

  const [checked,setChecked]=useState(false);
  console.log(checked);

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
              <li className="breadcrumb-item active" aria-current="page">Transfer</li>
            </ol>
          </nav>
        </div>
        {/* here  */}

        <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Lead Conversion (<span style={{color:"#0090e7",fontSize:"small"}}>Please follow all the steps.</span>)</h4>
                <form className="form-sample">
                  
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Full Name *</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setName(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Email *</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Mobile *</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Alternative Moile</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"  onChange={(e)=>{
                          setcourse(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-md-5">
                  <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9">
                          <select className="form-control"  onChange={(e)=>{
                          setsupportPerson(e.target.value);
                        }}>
                         
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Address</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"  onChange={(e)=>{
                          setcourse(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">State *</label>
                        <div className="col-sm-9">
                          <select className="form-control"  onChange={(e)=>{
                          setstatus(e.target.value);
                        }}>
                          <option value="">--- Select State --- </option>
                                
                                <option value="1">Andaman &amp; Nicobar [AN]</option>
                                
                                <option value="2">Andhra Pradesh [AP]</option>
                                
                                <option value="3">Arunachal Pradesh [AR]</option>
                                
                                <option value="4">Assam [AS]</option>
                                
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">City *</label>
                        <div className="col-sm-9">
                          <select className="form-control"  onChange={(e)=>{
                          setstatus(e.target.value);
                        }}>
                          <option value="">--- Select City --- </option>
                                
                                <option value="1">Ghaziabad</option>
                                
                                <option value="2">Noida</option>
                                
                                <option value="3">Mathura</option>
                                
                                <option value="4">Sikohabad</option>
                                
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  
                  </div>

                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">University</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Ref %</label>
                        <div className="col-sm-9">
                        <Form.Control type="number"  onChange={(e)=>{
                          setcourse(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Course *</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Status</label>
                        <div className="col-sm-9">
                          <select className="form-control"  onChange={(e)=>{
                          setstatus(e.target.value);
                        }}>
                                <option value="1">Active</option>
                                
                                <option value="2">Inactive</option>
                                
                                <option value="3">Suspend</option> 
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">GST Details</label>
                        <div className="col-sm-2">
                        <Form.Control style={{width:"55%"}} type="checkbox" onChange={()=>{
                          setChecked(!checked);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div style={{display:checked ? 'block' :'none'}}>
                  <hr/>
                      <br/>
                     
                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Reg. Firm Name</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">GSTIN</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Reg. Firm PAN</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-7">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Address</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"  onChange={(e)=>{
                          setEmail(e.target.value);
                        }}/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>


                  </div>

                  <p className="card-description"></p>
                  <button type="button" className="btn btn-primary mr-2" onClick={()=>dispatch(getLead(postData))} >Sumbit</button>
                </form>
              </div>
            </div>
          </div>

        

      </div>
    </div>
  )
}

export default LeadConversion;
