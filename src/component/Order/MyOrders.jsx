import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/Metadata";
import LaunchIcon from "@material-ui/icons/Launch";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
//   const alert = useAlert();

  const { loading, error, orders } = useSelector((state) => state?.myOrders);
  const { user } = useSelector((state) => state?.user);

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, error]);

  const userDetails = JSON.parse(localStorage.getItem('User'));
  if(!userDetails?.user) {
    navigate("/Login");
    return false
  }

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 0.5 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.2,
      cellClassName: (params) => {
        return params?.getValue(params?.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.2,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 150,
      flex: 0.2,
    },

    // {
    //     field: "quantity",
    //     headerName: "Quantity",
    //     type: "number",
    //     minWidth: 270,
    //     flex: 0.5,
    //   },

    {
      field: "actions",
      flex: 0.2,
      headerName: "Status Check",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <a href={`/order/${params?.getValue(params?.id, "id")}`}>
            Click here<LaunchIcon /> 
          </a>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item?.orderItems?.length,
        id: item?._id,
        status: item?.orderStatus,
        amount: item?.totalPrice,
        // quanity: item.orderItems[0].quantity,
      });
      // console.log(orders)
      // console.log(orders[3].orderItems.price)
    });

  

  return (
    <Fragment>
      <MetaData title={`${user?.name} - Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <br></br>
          {/*<Typography id="myOrdersHeading">{user?.name}'s Orders</Typography>*/}
          <h4 class="">{user?.name}'s Orders</h4>
          <br>
          </br>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;