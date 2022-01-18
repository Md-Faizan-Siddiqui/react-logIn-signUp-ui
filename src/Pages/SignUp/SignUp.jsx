import React from "react";
import "../../Style/AuthStyle.css";
import Textfield from "../../Components/TextFeild/TextField";
import { Formik, Form } from "formik";
import FormImg from "../../Assets/signup.webp";
import Button from "../../Components/Button/Button";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
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
              <img src={FormImg} alt="Form Image" className="signUpFormImg" />
            </div>
            <Formik>
              <div className="form">
                <div className="form-raper">
                  <h1 className="formHeading">Welcome!</h1>
                  <Form>
                    <Textfield placeholder="Email" Icon={IoMail} />
                    <Textfield placeholder="Phone" Icon={BsFillTelephoneFill} />
                    <Textfield placeholder="Password" Icon={GiPadlock} />
                    <div className="signUpBtnDiv">
                      <Button btnText="Sign Up" width="59%" />
                      <Button
                        btnText="Sign In"
                        width="40%"
                        onClick={() => navigate("/")}
                      />
                      {/* customClass="signInBtn" */}
                    </div>
                    <p className="pra">
                      Don't have an account?
                      <Link className="link" to="/">
                        Sign In
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

export default SignUp;
