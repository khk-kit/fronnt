import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import Loader from "../layout/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/userAction";
import "./Profile.css";

const Profile = () => {

  const dispatch = useDispatch();

  function logoutUser() {
      dispatch(logout());
      navigate("/")
  }

  let navigate = useNavigate();
  const { user, loading, isAuthenticated, success, payload } = useSelector((state) => state?.user);

  useEffect(() => {
    if (isAuthenticated === false || payload === undefined) {
      // navigate("/Signup");
    }
  }, [navigate, isAuthenticated, success, payload]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <MetaData title={`${user?.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h3>My Profile</h3>
              <img class="mb-20" src={user?.avatar?.url} alt={user?.name} />
              <a href="/me/update" class="s-btn s-btn-2 w-50">Edit Profile</a><br/>
              <span onClick={logoutUser} class="s-btn s-btn-3 w-50 cursor-pointer">Logout</span>
            </div>
            <div class="basic-login border-0">
              <div>
                <h4>Full Name</h4>
                <input 
                  type="text"
                  disabled
                  value={user?.name}
                />
              </div>
              <div>
                <h4>Email</h4>
                <input 
                  type="text"
                  disabled
                  value={user?.email}
                />
              </div>
              {/* <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div> */}

              <div>
                <a href="/orders" class="s-btn s-btn-2 mb-20">My Orders</a>
                <a href="/password/update" class="s-btn s-btn-2">Change Password</a>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;