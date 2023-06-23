import React from 'react'
import './register.css'
import { Button,Form,Alert } from 'react-bootstrap'
import { useState } from 'react';

const Register = (props) => {
  const [rememberPassword, setRememberPassword] = useState(false)
  const toggleRememberPassword = () => setRememberPassword(!rememberPassword);
  return (
    <div className="signup-container">
      <div className="signup-signup">
        <div className="signup-rightside">
          <div className="signup-rightside1">
            <img
              src="/external/ellipse24768-2c2-700h.png"
              alt="Ellipse24768"
              className="signup-ellipse2"
            />
            <img
              src="/external/ellipse14768-ooaq-600h.png"
              alt="Ellipse14768"
              className="signup-ellipse1"
            />
            <div className="signup-frame1">
              <div className="signup-frame3">
                <div className="signup-group2">
                  <span className="signup-text">
                    <span>Join us!</span>
                  </span>
                  <span className="signup-text02">
                    <span>
                      Just go through the boring process of creating an account.
                    </span>
                  </span>
                </div>
                <div className="signup-carousel-desktop-large">
                  <img
                    src="/external/rectangle68i476-7hn-200h.png"
                    alt="Rectangle68I476"
                    className="signup-rectangle68"
                  />
                  <img
                    src="/external/rectangle69i476-scyn-200h.png"
                    alt="Rectangle69I476"
                    className="signup-rectangle69"
                  />
                  <img
                    src="/external/rectangle70i476-b0j-200h.png"
                    alt="Rectangle70I476"
                    className="signup-rectangle70"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/external/undrawthoughtprocessreom5814769-fba4.svg"
            alt="undrawthoughtprocessreom5814769"
            className="signup-undrawthoughtprocessreom581"
          />
        </div>
        <div className="signup-leftside">
          <div className="signup-leftside1"></div>
          <div className="signup-frame183">
            <div className="signup-frame180">
              <div className="signup-frame179">
                <div className="signup-frame178">
                  <div className="signup-frame31">
                    <span className="signup-text04">Create your account</span>
                    <span className="signup-text05">
                      <span>Unlock all Features!</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="signup-frame182">
              <div className="signup-frame181">
                <div className="signup-frame174">
                  <div className="signup-frame172">
                    <div className="signup-person">
                      <img
                        src="/external/person4775-5t8j.svg"
                        alt="person4775"
                        className="signup-person1"
                      />
                    </div>
                    <span className="signup-text07">
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder='Your name'
                        style={{
                          backgroundColor: 'rgba(127, 152, 249, 0.10000000149011612)',
                          borderColor: 'rgba(127, 152, 249, 0.10000000149011612)'
                        }}
                        value={props.name}
                        onChange={(e) => props.handleNameInput(e)}
                      />
                    </span>
                  </div>
                  <div className="signup-frame1741 mb-2">
                    <img
                      src="/external/envelope4775-v05p.svg"
                      alt="envelope4775"
                      className="signup-envelope"
                    />
                    <span className="signup-text07">
                      
                      {props.validEmailRegister !== null ? (
                        <Form.Control
                          type="text"
                          size="lg"
                          placeholder='Email'
                          style={{
                            backgroundColor: 'rgba(127, 152, 249, 0.10000000149011612)',
                            borderColor: 'rgba(127, 152, 249, 0.10000000149011612)'
                          }}
                          onChange={(e) => props.handleEmailInput(e, false)}
                          isValid={props.validEmailRegister}
                          isInvalid={!props.validEmailRegister}
                          value={props.emailRegister}
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
                          onChange={(e) => props.handleEmailInput(e, false)}
                          value={props.emailRegister}
                        />
                      }
                      <Form.Control.Feedback type="invalid"
                        style={{ position: 'absolute', top: '225px', left: '20px' }}>
                        Please enter a valid email address.
                      </Form.Control.Feedback>
                    </span>
                    
                   
                  </div>
                  <div className="signup-frame173">
                    <div className="signup-group3">
                      <img
                        src="/external/shieldslash4775-uinr.svg"
                        alt="shieldslash4775"
                        className="signup-shieldslash"
                      />
                    </div>
                    <span className="signup-text11">
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder='Password'
                        style={{
                          backgroundColor: 'rgba(127, 152, 249, 0.10000000149011612)',
                          borderColor: 'rgba(127, 152, 249, 0.10000000149011612)'
                        }}
                        value={props.passwordRegister}
                        onChange={(e) => props.handlePassowrdRegister(e, false)}
                      />
                    </span>
                  </div>
                  {/* <div className="signup-frame173"> */}
                    {/* <div className="signup-group31">
                      <img
                        src="/external/shieldslash4776-ac8q.svg"
                        alt="shieldslash4776"
                        className="signup-shieldslash1"
                      />
                    </div> */}
                    {/* <span className="signup-text11">
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder='Password'
                        style={{
                          backgroundColor: 'rgba(127, 152, 249, 0.10000000149011612)',
                          borderColor: 'rgba(127, 152, 249, 0.10000000149011612)'
                        }}
                      />
                    </span> */}
                  {/* </div> */}
                </div>
                <div className="signup-frame177">
                  <div className="signup-frame4">
                    <div className="signup-frame41">
                      <Form.Check
                        type='checkbox'
                        checked={rememberPassword}
                        onChange={toggleRememberPassword}
                      />
                      <span className="signup-text15">
                        <span className="signup-text16">
                          Accept
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>terms and conditions</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {props.isFailedRegister ?
                (<Alert variant={props.type}>
                  {props.errAndSuccMessageRegister}
                </Alert>)
                : (null)}
              <div className="signup-frame1761">
                
                <div className="signup-frame175">
                  
                  <Button variant="outline-primary" size='lg'
                    style={{
                      width: '100%', border: 'none', height: '100%'
                    }}
                    onClick={props.handleRegister}>
                    REGISTER
                  </Button>
                </div>
                <span className="signup-text20">
                  <span className="signup-text21">You have account?</span>
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
    </div>
  )
}

export default Register
