import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Loging() {


    const navigate = useNavigate();
    const [logData, setLogData] = useState({
        email: "", password: ""
    });
    const handleInput = (event) => {
        if (event.target) {
            const { name, value } = event.target;
            setLogData({
                ...logData, [name]: value
            })
        } else {
            console.error("event.target is undefined");
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://192.168.0.5:8000/auth/login', logData)
            .then(response => {
                console.log('Success:', response.data);
                if (response.data.user._id) {
                    const user= JSON.stringify(response.data.user);
                    localStorage.setItem('user', user);
                    localStorage.setItem('token',response.token);
                    navigate('/dashboard')
                } else {
                    console.log('signup is fail ')
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error, such as displaying an error message to the user
            });
    };
    return (
        <div className='container w-25'>
            <h1 className='m-3'>login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={logData.email}
                        onChange={handleInput}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={logData.password}
                        onChange={handleInput}
                    />
                    <a href='/signup'><p>signup</p></a>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Loging;
