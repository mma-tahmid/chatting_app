import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {

    const auth = getAuth();
    let navigate = useNavigate();
    // state declare (for form validation)

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    //Error ka state rakhar jonno

    let [nameError, setNameError] = useState("")
    let [emailError, setEmailError] = useState("")
    let [passwordError, setPasswordError] = useState("")
    let [confirmPasswordError, setConfirmPasswordError] = useState("")
    let [passwordLengthError, setPasswordLengthError] = useState("")
    let [matchPassword, setMatchPassword] = useState("")





    let handleSubmit = () => {

        //console.log("click")
        // jodi name na thake tahole dekhabe---> confirmPasswordError 
        if (!name) {
            setNameError("Please Enter your Name")
        }

        else if (!email) {
            setEmailError("Please Enter your Email")
            setNameError("")
        }

        else if (!password) {
            setPasswordError("Please Enter your Password")
            setEmailError("")
        }

        else if (password.length < 8) {
            setPasswordLengthError("password must be Greater than or equal to 8")
            setPasswordError("")

        }

        else if (!confirmPassword) {
            setConfirmPasswordError("Please Confirm your Password")
            setPasswordLengthError("")
        }

        else if ((password !== confirmPassword)) {


            setMatchPassword("password not matched")
            setConfirmPasswordError("")
        }

        else {
            setMatchPassword("")

            createUserWithEmailAndPassword(auth, email, password).then((user) => {
                console.log(user);
                navigate("/login");

            }).catch((error) => {
                console.log(error)
            })
        }



    }




    return (

        <section className='registration_part'>

            <Grid container spacing={2}>

                <Grid item xs={6}>

                    <div className='box'>


                        <div className='left'>

                            <h2> Get started with easily register </h2>
                            <p> Free register and you can enjoy it </p>

                            <TextField
                                helperText={nameError}
                                id="demo-helper-text-misaligned"
                                label="Full Name"
                                style={{ width: "355px", marginTop: "40px" }}
                                type="text"

                                // form validation

                                onChange={(e) => setName(e.target.value)}
                            />
                            <br />

                            <TextField
                                helperText={emailError}
                                id="demo-helper-text-misaligned"
                                label="Enter Email"
                                style={{ width: "355px", marginTop: "40px" }}
                                type="email"

                                // form validation

                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />

                            <TextField
                                helperText={passwordError ? passwordError : passwordLengthError ? passwordLengthError : ""}
                                id="demo-helper-text-misaligned"
                                label="Password"
                                style={{ width: "355px", marginTop: "40px" }}
                                type="password"

                                // form validation

                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />

                            <TextField
                                helperText={confirmPasswordError ? confirmPasswordError : matchPassword ? matchPassword : ""}
                                id="demo-helper-text-misaligned"
                                label="Confirm Password"
                                style={{ width: "355px", marginTop: "40px" }}
                                type="password"

                                // form validation

                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <br />

                            <Button style={{ width: "368px", padding: "10px 0", borderRadius: "86px", background: "#5F35F5" }} variant="contained" onClick={handleSubmit}>Sign up</Button>

                            <p className='msg'> Already have an account? , <Link to="/login"> Login </Link>  </p>




                        </div>


                    </div>
                </Grid>

                <Grid item xs={6}>

                    <img className='first_image' src="./assets/images/reg_image.png" alt="no data found" />


                </Grid>

            </Grid>
        </section>




    );
};

export default Registration;


