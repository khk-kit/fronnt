import React, { useEffect, useLayoutEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, registerables} from 'chart.js'
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
// import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
// import MetaData from "../layout/Metadata";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useLayoutEffect(()=>{
    fetchUserData(); //Doesn't want until render is completed 
}, [])

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  const fetchUserData = () => {
    fetch("http://localhost:4000/api/v1/me")
      .then(response => {
        // console.log('fetchUserData',response);
        // console.log('fetchUserData',response.json());
        return response.json()
      })
      .then(data => {
        // updateUserInfo(data);
        if(data.user.role === 'admin'){
          navigate("/admin/dashboard");
      }
      else{
          navigate("/Signup");
      }
      })
    // const { userInformation2 } = await http.get(`/api/v1/me`);
  }

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
    fetchUserData();
  }, [dispatch]);



  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, ...registerables);


  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        // data: [0, 4000]
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        // data:[2, 10]
        data: [outOfStock, products?.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* <MetaData title="Dashboard - Admin Panel" /> */}
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ${totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              {/* <p>20</p> */}
              <p>{products && products?.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              {/* <p>20</p> */}
              <p>{orders && orders?.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              {/* <p>10</p> */}
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;