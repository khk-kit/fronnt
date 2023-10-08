import React, { Fragment, useRef, useState, useEffect } from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './SignUp.css'; 
import { useNavigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userAction";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  document.title = 'Sign Up | BRAVE Athleisure';

  const dispatch = useDispatch();
  const location = useLocation();

  // const alert = useAlert();

  const {loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  let navigate = useNavigate();

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("../../images/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("../../images/Profile.png");

  /*
  const loginSubmit = (e) => {
    // console.log("Login form submitted");
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
  */

  const registerSubmit = (e) => {
    e.preventDefault();
    try{

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    if(avatar==="../../images/Profile.png"){
      toast.error("Select Profile picture", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
        return;
    }
    dispatch(register(myForm)); 
  } catch (error) {
    console.log('Registered Error 2--->',error)
    
    if(error.message === 'Duplicate email Entered'){
      toast.error("Email Already Exist.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }
  }
    // console.log(name, email, password,avatar);
    
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  // const redirect = location.search ? location.search.split("=")[1] : "/account";

  const redirect = location.search ? location.search.split("=")[1]: "/profile"

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [navigate, isAuthenticated, redirect]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

        <main>
{/* 
            <div class="breadcrumb-area-2 pt-240 pb-245 include-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12">     
                            <div class="breadcrumb-wrapper-2 text-center">
                                <h3>register</h3>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">register</li>
                                    </ol>
                                </nav>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div> */}


            <section class="login-area pt-100 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="basic-login">
                                <h3 class="text-center mb-60">SignUp Account</h3>
                                <form className="signUpForm" ref={registerTab} encType="multipart/form-data" onSubmit={registerSubmit}>
                                    <div className="signUpName">
                                      <label for="name">Full Name <span>*</span></label>
                                      <input 
                                        type="text"
                                        placeholder="User Name"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={registerDataChange} 
                                      />
                                    </div>
                                    <div className="signUpEmail">
                                      <label for="email-id">Email Address <span>*</span></label>
                                      <input 
                                        type="email"
                                        placeholder="user@gmail.com"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={registerDataChange}
                                      />
                                    </div>
                                    <div className="signUpPassword">
                                      <label for="pass">Password <span>*</span></label>
                                      <input 
                                        type="password"
                                        placeholder="Enter Password"
                                        required
                                        name="password"
                                        value={password}
                                        onChange={registerDataChange}
                                      />
                                    </div>
                                    <div id="registerImage">
                                        <img src={avatarPreview} alt="Avatar Preview"/>
                                        <input
                                          type="file"
                                          name="avatar"
                                          accept="image/*"
                                          onChange={registerDataChange}
                                        />
                                    </div>
                                    <div class="mt-10"></div>
                                    <input
                                      type="submit"
                                      value="Register"
                                      className="signUpBtn s-btn s-btn-3 w-100" 
                                      disabled={loading? true: false}
                                    />
                                    <div class="or-divide"><span>or</span></div>
                                    <a href="/Login" class="s-btn s-btn-2 w-100">login Now</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Register