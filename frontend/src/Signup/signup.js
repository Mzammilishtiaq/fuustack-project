import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: ""
    });
    const handleInputChange = (event) => {
        if (event.target) {
            const { name, value } = event.target;
            setFormData({
                ...formData, [name]: value
            })
        } else {
            console.error("event.target is undefined");
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://192.168.0.5:8000/user/signup', formData)
      .then(response => {
        console.log('Success:', response.data);
        if( response.data.createUser._id){
            navigate('/login')
        }else{
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
            <h1 className='m-3'>signup</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <a href='/login'><p>Login</p></a>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Signup;
