import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
// import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { logout } from "../../../actions/userAction";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import Dashboard from "../../admin/Dashboard";
// import { useNavigate } from "react-router-dom";



const UserOptions = ({ user }) => {

    // const history = useHistory();
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const options = [
        { icon: <ListAltIcon />, name: "Orders", link: "/orders" },
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <Dashboard />, name: "Dashboard", func: Dashboard },
        // {
        //   icon: (
        //     <ShoppingCartIcon
        //       style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        //     />
        //   ),
        //   name: `Cart(${cartItems.length})`,
        //   func: cart,
        // },
        { icon: <ExitToAppIcon />, name: "Logout", func:logoutUser},
      ];

    //   if (user.role === "admin") {
    //     options.unshift({
    //       icon: <DashboardIcon />,
    //       name: "Dashboard",
    //       func: dashboard,
    //     });
    //   }

      function Dashboard() {
        // history.push("/admin/dashboard");
        // navigate("/admin/dashboard");
      }
    
      function orders() {
        // history.push("/orders");
        // navigate("orders")
      }
      function account() {
        // history.push("/account");
        // navigate("/account")
      }
      // function cart() {
      //   // history.push("/cart");
      //   // navigate("cart")
      // }
      function logoutUser() {
        dispatch(logout());
        // navigate("/Signup")
        // alert.success("Logout Successfully");
      }

  return (
    <Fragment>
    {/* <Backdrop open={open} style={{ zIndex: "10" }} /> */}
    <SpeedDial
      ariaLabel="SpeedDial tooltip example"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      style={{ zIndex: "11" }}
      open={open}
      direction="down"
      className="speedDial"
      icon={
        <img
          className="speedDialIcon"
          src={user && user.avatar.public_id ? user.avatar.public_id : "../../../images/Profile.png"}
          alt="Profile"
        />
      }
    >
      {options.map((item) => (
        <SpeedDialAction
          key={item.name}
          icon={item.icon}
          tooltipTitle={item.name}
          onClick={item.func}
          tooltipOpen={window.innerWidth <= 600 ? true : false}
        />
      ))}
    </SpeedDial>
  </Fragment>
  )
}

export default UserOptions;