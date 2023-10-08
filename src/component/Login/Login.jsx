import React, { Fragment, useRef, useState, useEffect } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";
import { useLocation } from "react-router-dom";

const Login = () => {
    document.title = 'Login | BRAVE Athleisure';
    const dispatch = useDispatch();
    const location = useLocation();

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
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const loginSubmit = (e) => {
        // console.log("Login form submitted");
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword)).then(()=>{
            navigate("/");
            window.location.reload();
        });
    };

    // const redirect = location.search ? location.search.split("=")[1] : "/account";
    // const redirect = location.search ? location.search.split("=")[1]: "/profile"

    // useEffect(() => {
    //     if (isAuthenticated) {
    //     navigate(redirect);
    //     }
    // }, [navigate, isAuthenticated, redirect]);

    useEffect(() => {
        if (isAuthenticated) {
        // navigate("/profile");
        }
    }, [navigate,isAuthenticated]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

        <main>

            {/* <div class="breadcrumb-area-2 pt-240 pb-245 include-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12">     
                            <div class="breadcrumb-wrapper-2 text-center">
                                <h3>login</h3>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">login</li>
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
                                <h3 class="text-center mb-60">Login Account</h3>
                                <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                                    <div className="loginEmail">
                                        <label for="name">Email Address <span>*</span></label>
                                        <input 
                                        type="email"
                                        placeholder="user@gmail.com"
                                        required
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="loginPassword">
                                        <label for="pass">Password <span>*</span></label>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                        />
                                    </div>
                                    <div class="login-action mb-20 fix">
                                        <span class="log-rem f-left">
                                        <input id="remember" type="checkbox" />
                                        <label for="remember">Remember me!</label>
                                        </span>
                                        <span class="forgot-login f-right">
                                        <a href="/password/forgot" class="centered-link">Forget Password ?</a>
                                        </span>
                                    </div>
                                    <input type="submit" value="Login" className="s-btn s-btn-3 w-100 loginBtn" />
                                    <div class="or-divide"><span>or</span></div>
                                    {/* <a href="/password/forgot" class="centered-link">Forget Password ?</a> */}
                                    <a href="/Signup" class="s-btn s-btn-2 w-100">Register Now</a>
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
export default Login