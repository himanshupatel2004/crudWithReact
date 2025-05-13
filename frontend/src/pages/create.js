import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../http'

export default function Create() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
       http.post('/users/'+id,inputs).then((res)=>{
        navigate('/');
       })
    }
    return (
        <div>
            <h2>New User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2" value={inputs.name || ''}
                        onChange={handleChange}></input>

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"  value={inputs.email || ''}
                        onChange={handleChange}></input>

                        <label>Password</label>
                        <input type="password" name="password" className="form-control mb-2"  value={inputs.password || ''}
                        onChange={handleChange}></input>

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}