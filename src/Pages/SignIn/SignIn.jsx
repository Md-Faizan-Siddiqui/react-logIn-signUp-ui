import React from "react";
import "../../Style/AuthStyle.css";
import Textfield from "../../Components/TextFeild/TextField";
import { Formik, Form } from "formik";
import LoginImg from "../../Assets/login.webp";
import Button from "../../Components/Button/Button";
import { IoMail } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="container">
        <div className="bottom-corner-circle">
          <div className="bottom-corner-circle-child">
            <div className="bottom-corner-circle-child2"></div>
          </div>
        </div>

        <div className="top-corner-circle">
          <div className="top-corner-circle-child"></div>
        </div>
        <div className="main-form">
          <div className="form-container">
            <div className="form-img-div">
              <img src={LoginImg} alt="Form Image" className="signUpFormImg" />
            </div>
            <Formik>
              <div className="form">
                <div className="form-raper">
                  <h1 className="formHeading">Sign In!</h1>
                  <Form>
                    <Textfield placeholder="Email" Icon={IoMail} />
                    <Textfield placeholder="Password" Icon={GiPadlock} />
                    <span className="forgotSpan">
                      <Link className="link" to="">
                        Forgot Password?
                      </Link>
                    </span>
                    <div className="signUpBtnDiv">
                      <Button btnText="Sign In" width="59%" />
                      <Button
                        btnText="Sign Up"
                        width="40%"
                        onClick={() => navigate("/signup")}
                      />
                    </div>
                    <p className="pra">
                      Don't have an account?
                      <Link className="link" to="/signup">
                        SignUp here
                      </Link>
                    </p>
                  </Form>
                </div>
              </div>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
