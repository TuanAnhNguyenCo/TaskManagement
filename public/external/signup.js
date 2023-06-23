import React from 'react'

import { Helmet } from 'react-helmet'

import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
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
                      <span>Username</span>
                    </span>
                  </div>
                  <div className="signup-frame1741">
                    <img
                      src="/external/envelope4775-v05p.svg"
                      alt="envelope4775"
                      className="signup-envelope"
                    />
                    <span className="signup-text09">
                      <span>Email</span>
                    </span>
                  </div>
                  <div className="signup-frame173">
                    <div className="signup-group3">
                      <img
                        src="/external/shieldslash4775-uinr.svg"
                        alt="shieldslash4775"
                        className="signup-shieldslash"
                      />
                      <span className="signup-text11">
                        <span>Password</span>
                      </span>
                    </div>
                  </div>
                  <div className="signup-frame176">
                    <div className="signup-group31">
                      <img
                        src="/external/shieldslash4776-ac8q.svg"
                        alt="shieldslash4776"
                        className="signup-shieldslash1"
                      />
                      <span className="signup-text13">
                        <span>Confirm Password</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="signup-frame177">
                  <div className="signup-frame4">
                    <div className="signup-frame41">
                      <img
                        src="/external/checksquare4776-kdzp.svg"
                        alt="checksquare4776"
                        className="signup-checksquare"
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
              <div className="signup-frame1761">
                <div className="signup-frame175">
                  <span className="signup-text18">
                    <span>REGISTER</span>
                  </span>
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
                  <span>Login now</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
