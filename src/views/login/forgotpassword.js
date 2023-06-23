import React from 'react'
import './forgotpassword.css'
import { Form, Button, Alert } from 'react-bootstrap'
import { useState } from 'react'


const Forgotpassword = (props) => {

  return (
    <div className="forgotpassword-container">
      <div className="forgotpassword-forgotpassword">
        <div className="forgotpassword-rightside">
          <div className="forgotpassword-rightside1">
            <img
              src="/external/ellipse24749-urpt-700h.png"
              alt="Ellipse24749"
              className="forgotpassword-ellipse2"
            />
            <img
              src="/external/ellipse14749-nf3w-600h.png"
              alt="Ellipse14749"
              className="forgotpassword-ellipse1"
            />
            <div className="forgotpassword-frame1">
              <div className="forgotpassword-frame3">
                <div className="forgotpassword-group2">
                  <span className="forgotpassword-text">
                    <span>Forgot your password?</span>
                  </span>
                  <span className="forgotpassword-text02">
                    <span>
                      <span>You can get them back easily.</span>
                      <br></br>
                      <span></span>
                    </span>
                  </span>
                </div>
                <div className="forgotpassword-carousel-desktop-large">
                  <img
                    src="/external/rectangle68i475-hzyi-200h.png"
                    alt="Rectangle68I475"
                    className="forgotpassword-rectangle68"
                  />
                  <img
                    src="/external/rectangle69i475-fny7-200h.png"
                    alt="Rectangle69I475"
                    className="forgotpassword-rectangle69"
                  />
                  <img
                    src="/external/rectangle70i475-3a1-200h.png"
                    alt="Rectangle70I475"
                    className="forgotpassword-rectangle70"
                  />
                </div>
              </div>
            </div>
            <img
              src="/external/undrawmypasswordreydq714750-5gi8.svg"
              alt="undrawmypasswordreydq714750"
              className="forgotpassword-undrawmypasswordreydq71"
            />
          </div>
        </div>
        <div className="forgotpassword-leftside">
          <div className="forgotpassword-frame183">
            <div className="forgotpassword-frame180">
              <div className="forgotpassword-frame179">
                <div className="forgotpassword-frame178">
                  <div className="forgotpassword-frame31">
                    <span className="forgotpassword-text07">
                      <span>Forgot your password?</span>
                    </span>
                    <span className="forgotpassword-text09">
                      <span>Enter your email and confirm using your new password.</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="forgotpassword-frame182">
              <div className="forgotpassword-frame181">
                <div className="forgotpassword-frame174">
                  <div className="forgotpassword-frame172">
                    <img
                      src="/external/envelope4754-16eq.svg"
                      alt="envelope4754"
                      className="forgotpassword-envelope"
                    />
                    <span className="forgotpassword-text11">
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder='Email'
                        style={{
                          backgroundColor: 'rgba(127, 152, 249, 0.10000000149011612)',
                          borderColor: 'rgba(127, 152, 249, 0.10000000149011612)'
                        }}
                        onChange={props.handInputEmailForgot}
                        value={props.emailForgot}
                      />
                    </span>
                  </div>
                </div>
              </div>
              {props.errorForgot ?
                <Alert variant='danger' style={{ width: '100%' }}>
                  {props.errorForgotMess}
                </Alert>
                : (null)}
              
              {props.newPassword ?
                (<Alert variant='success'>
                  Please confirm your new password send by our in your mail
                  <b style={{ textAlign:'center',color:'red'}}> You will be redirected to Login Page within 3s</b>
                </Alert>)
                : (null)}
              <div className="forgotpassword-frame176">
                <div className="forgotpassword-frame175">
                  <Button variant="outline-primary" size='lg'
                    style={{ width: '100%', border: 'none', height: '100%' }}
                    onClick={props.handleForgotPassword}
                    disabled={props.newPassword}
                  >
                    GET NEW PASSWORD
                  </Button>

                </div>
              </div>
              
              <span className="signup-text20">
                <span className="signup-text21">Did you remember your password?</span>
                <span className="signup-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>

                <span className="register-text18" onClick={props.showLoginPage}>
                  <span>Login now</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword
