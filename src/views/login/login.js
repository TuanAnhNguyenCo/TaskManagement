import React from 'react'
import { Button } from 'react-bootstrap'
import { Form, Alert } from 'react-bootstrap'
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';


import './login.css'

const Login = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false)



    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleRememberPassword = () => setRememberPassword(!rememberPassword);
    const alertUpdateProduct = () => alert("Chức năng đang trong lúc bảo trì để nâng cấp vui lòng chọn cách khác để đăng nhập");

    return (
        <div className="login-container">

            <div className="login-login">
                <div className="login-rightside">
                    <div className="login-rightside1">
                        <img
                            alt="Ellipse24735"
                            src="/external/ellipse24735-on8t-700h.png"
                            className="login-ellipse2"
                        />
                        <img
                            alt="Ellipse14735"
                            src="/external/ellipse14735-4h5w-600h.png"
                            className="login-ellipse1"
                        />
                        <img
                            alt="undrawtwofactorauthenticationnamy114735"
                            src="/external/undrawtwofactorauthenticationnamy114735-qnym.svg"
                            className="login-undrawtwofactorauthenticationnamy11"
                        />
                        <div className="login-frame1">
                            <div className="login-frame3">
                                <div className="login-group2">
                                    <span className="login-text">
                                        <span>Connect with any device.</span>
                                    </span>
                                    <span className="login-text02">
                                        <span>Everything you need is an internet connection.</span>
                                    </span>
                                </div>
                                <div className="login-carousel-desktop-large">
                                    <img
                                        alt="Rectangle68I474"
                                        src="/external/rectangle68i474-jd1m-200h.png"
                                        className="login-rectangle68"
                                    />
                                    <img
                                        alt="Rectangle69I474"
                                        src="/external/rectangle69i474-b6l-200h.png"
                                        className="login-rectangle69"
                                    />
                                    <img
                                        alt="Rectangle70I474"
                                        src="/external/rectangle70i474-id2l-200h.png"
                                        className="login-rectangle70"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login-leftside">
                    <div className="login-frame183">
                        <div className="login-frame180">
                            <div className="login-frame179">
                                <div className="login-frame178">
                                    <span className="login-text04">
                                        <span>Welcome back! Select method to log in:</span>
                                    </span>
                                    <div className="login-frame5">
                                        <div className="login-google">
                                            <div className="login-group1">
                                                <div className="login-frame4">

                                                    <Button variant="light" size="lg" style={{ width: '100%' }} onClick={alertUpdateProduct}>
                                                        <img
                                                            alt="GoogleGLogo14742"
                                                            src="/external/googleglogo14742-5lme-200h.png"
                                                            className="login-google--logo1"
                                                        />
                                                        <span className="login-text04">
                                                            <span>Google</span>
                                                        </span>

                                                    </Button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-facebook">
                                            <div className="login-group11">
                                                <div className="login-frame41">
                                                    <Button variant="light" size="lg" style={{ width: '100%' }} onClick={alertUpdateProduct}>
                                                        <img
                                                            alt="facebook4742"
                                                            src="/external/facebook4742-97sp-200h.png"
                                                            className="login-facebook1"
                                                        />
                                                        <span className="login-text08">
                                                            <span>Facebook</span>
                                                        </span>
                                                    </Button>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-frame6">
                                    <img
                                        alt="Line14743"
                                        src="/external/line14743-rx76.svg"
                                        className="login-line1"
                                    />
                                    <span className="login-text10">
                                        <span>or continue with email</span>
                                    </span>
                                    <img
                                        alt="Line24743"
                                        src="/external/line24743-sbbs.svg"
                                        className="login-line2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="login-frame182">
                            <div className="login-frame181">
                                <div className="login-frame174">
                                    <div className="login-frame172">

                                        <AiOutlineMail className="login-messagelight" />
                                        <span className="login-text12">

                                            {props.validEmail !== null ? (

                                                <Form.Control
                                                    type="text"
                                                    size="lg"
                                                    placeholder='Email'
                                                    style={{
                                                        backgroundColor: 'rgba(127, 152, 249, 0.10000000149011612)',
                                                        borderColor: 'rgba(127, 152, 249, 0.10000000149011612)'
                                                    }}
                                                    value={props.username}
                                                    onChange={(e) => props.handleUsernameInput(e, true)}
                                                    isValid={props.validEmail}
                                                    isInvalid={!props.validEmail}
                                                />

                                            ) :
                                                <Form.Control
                                                    type="text"
                                                    size="lg"
                                                    placeholder='Email'
                                                    style={{
                                                        backgroundColor: 'rgba(127, 152, 249, 0.10000000149011612)',
                                                        borderColor: 'rgba(127, 152, 249, 0.10000000149011612)'
                                                    }}
                                                    value={props.username}
                                                    onChange={(e) => props.handleUsernameInput(e, true)}

                                                />
                                            }
                                            <Form.Control.Feedback type="invalid"
                                                style={{ position: 'absolute', top: '60px', left: '10px' }}>
                                                Please enter a valid email address.
                                            </Form.Control.Feedback>

                                        </span>
                                    </div>
                                    <div className="login-frame172 mt-3">
                                        <AiOutlineLock className="login-messagelight" />
                                        <span className="login-text12">
                                            <Form.Control
                                                type={showPassword ? "text" : "password"}
                                                size="lg"
                                                placeholder='Password'
                                                value={props.password}
                                                onChange={(e) => props.handlePassowrdInput(e, true)}
                                                style={{
                                                    backgroundColor: 'rgba(127, 152, 249, 0.10000000149011612)',
                                                    borderColor: 'rgba(127, 152, 249, 0.10000000149011612)'
                                                }}
                                            />
                                        </span>

                                        {showPassword ?
                                            <AiOutlineEye className="login-eyeslash" onClick={toggleShowPassword}
                                                style={{ cursor: 'pointer' }} />
                                            :
                                            <AiOutlineEyeInvisible className="login-eyeslash" onClick={toggleShowPassword}
                                                style={{ cursor: 'pointer' }} />
                                        }


                                    </div>
                                </div>
                                <div className="login-frame177">
                                    <div className="login-frame42">
                                        <div className="login-frame43">
                                            <Form.Check
                                                type='checkbox'
                                                checked={rememberPassword}
                                                onChange={toggleRememberPassword}
                                            />
                                            <span className="login-text16">
                                                <span>Remember me</span>
                                            </span>
                                        </div>
                                        <span className="login-text18"  onClick={props.showForgotPasswordPage}>
                                            <span >Forgot Password?</span>
                                        </span>

                                    </div>



                                </div>
                                <div>
                                </div>
                            </div>

                            <div className="login-frame176">
                                {props.isFailed ?
                                    <Alert variant={props.type} style={{ width: '100%' }} className='mt-3'>
                                        {props.errAndSuccMessage}

                                    </Alert>
                                    : (null)}

                                <Button variant="outline-primary" size='lg' style={{ width: '100%' }}
                                    onClick={props.handleLogin} className='mt-3'>
                                    LOGIN
                                </Button>
                                <span className="login-text22">
                                    <span className="login-text23">Don’t have account?</span>
                                    <span className="login-text24">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span className="login-text18" onClick={props.showRegisterPage}>
                                        <span>Create an account</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <h3 className="login-text26">
                        <div>Login to your Account</div>
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default Login
