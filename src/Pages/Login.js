import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    // state declare (for form validation)


    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")


    //Error ka state rakhar jonno


    let [emailError, setEmailError] = useState("")
    let [passwordError, setPasswordError] = useState("")
    let [passwordLengthError, setPasswordLengthError] = useState("")

    //for password eye
    let [checkPassword, setCheckPassword] = useState(false)




    let handleSubmit = () => {

        //console.log("click")
        // jodi email na thake tahole dekhabe---> PasswordError 

        if (!email) {
            setEmailError("Please Enter your Email")
            //setNameError("")
        }

        else if (!password) {
            setPasswordError("Please Enter your Password")
            setEmailError("")
        }

        else if (password.length < 8) {
            setPasswordLengthError("password must be Greater than or equal to 8")
            setPasswordError("")

        }

        else {
            setPasswordLengthError("")
            signInWithEmailAndPassword(auth, email, password).then((user) => {
                console.log(user);
                navigate("/home")
            }).catch((error) => {
                console.log(error)
            })

        }



    }

    // for password eye

    let handleEye = () => {
        setCheckPassword(!checkPassword)

    }




    return (
        <section className='registration_part login_part'>

            <Grid container spacing={2}>

                <Grid item xs={6}>

                    <div className='box'>


                        <div className='left'>

                            <h2> Login to your account!  </h2>

                            <div className="login_option">

                                <div className="option"> <img src="./assets/images/google.png" alt="google_image" /> Login with Google </div>

                                <div className="option"> <img src="./assets/images/facebook.png" alt="google_image" /> Login with Facebook  </div>


                            </div>




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

                            <div className='eye'>
                                <TextField
                                    helperText={passwordError ? passwordError : passwordLengthError ? passwordLengthError : ""}
                                    id="demo-helper-text-misaligned"
                                    label="Password"
                                    style={{ width: "355px", marginTop: "40px" }}
                                    type={checkPassword ? "text" : "password"}

                                    // form validation

                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                {checkPassword
                                    ?
                                    < AiFillEye onClick={handleEye} className='eye_icon' />
                                    :
                                    < AiFillEyeInvisible onClick={handleEye} className='eye_icon' />
                                }



                            </div>
                            <br />



                            <Button style={{ width: "368px", padding: "25px", borderRadius: "8.9px", background: "#5F35F5" }} variant="contained" onClick={handleSubmit}>Login to Continue </Button>

                            <p className='msg'> Don’t have an account ? , <Link to="/"> Sign up </Link>  </p>





                        </div>


                    </div>
                </Grid>

                <Grid item xs={6}>

                    <img className='first_image' src="./assets/images/login.png" alt="no data found" />


                </Grid>

            </Grid>
        </section>

    );
};

export default Login;