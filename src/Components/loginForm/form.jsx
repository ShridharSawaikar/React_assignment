import {Box, Button, TextField} from '@mui/material';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {useNavigate} from 'react-dom'
import { useNavigate } from "react-router-dom";


export default function Loginform()
{
    const navigate = useNavigate();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleNameChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!email || !password) return;
        navigate("/home");
    };
    return ( <>
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column"
        component="form" 
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}noValidate autoComplete="off" 
        onSubmit={handleSubmit}
    >
    <h3>Login</h3><br/><br/>
    <div>
      <TextField required label="Username" onChange={handleNameChange}/><br/><br/>
      <TextField required id="outlined-password-input" label="Password" type="password" autoComplete="current-password" 
        onChange={handlePasswordChange}/>
    </div><br/><br/>
    <Button variant='contained' type="submit">Sign in</Button>
  </Box>
  </>)
}

// export default Loginform