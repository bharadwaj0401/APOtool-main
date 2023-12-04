import React, { useState } from 'react';
import { Container, Form, Button, Dropdown } from 'react-bootstrap'; // Import Dropdown component
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(''); // State for the selected role

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setSelectedRole(''); // Reset the selected role when resetting the form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Selected Role:', selectedRole); // Log the selected role
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });
      
      if(selectedRole==="Admin"){
        window.location.href = '/admin';
      }
      else if (selectedRole === 'SuperAdmin') {
        window.location.href = '/superadmin';
      }else if (selectedRole === 'User'){
        window.location.href = '/' + username + '/select-customer'; // Redirect to home page
        // window.location.href = '/admin/1/home';
      }

      console.log('Login response:', response.data);
    } catch (error) {
      console.error('Error during login:', error.response.data.error);
      // Handle login error, e.g., display an error message
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Container fluid className="login-container">
        <div className="login-box">
          <h2 className="login-title text-center">
            Login APO Tool
          </h2>
          <Form onSubmit={handleSubmit}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedRole || 'Select Role'} {/* Display selected role or placeholder text */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleRoleSelect('Admin')}>Admin</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRoleSelect('SuperAdmin')}>SuperAdmin</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRoleSelect('User')}>Consultant</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form.Group controlId="username">
              <Form.Label className="left-label">Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="left-label">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className='password-input'
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button className="login-button" variant="primary" type="submit">
                Login
              </Button>
              <Button className="reset-button" variant="secondary" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </Container>

      <p className='login-footer'>
        <br />
        Application Portfolio Optimization
      </p>

    </div >
  );
};

export default Login;

