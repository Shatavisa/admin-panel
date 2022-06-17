import "./single.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Chart from "../../component/chart/Chart";
import List from "../../component/table/Table";

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    // <div className="single">
    //   <Sidebar />
    //   <div className="singleContainer">
    //     <Navbar />
    //     <div className="top">
    //       <div className="left">
    //         <div className="editButton">Edit</div>
    //         <h1 className="title">Information</h1>
    //         <div className="item">
    //           <img
    //             src="https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?cs=srgb&dl=pexels-pixabay-33044.jpg&fm=jpg"
    //             alt=""
    //             className="itemImg"
    //           />
    //           <div className="details">
    //             <h1 className="itemTitle">Aman Sharma</h1>
    //             <div className="detailItem">
    //               <span className="itemKey">Email:</span>
    //               <span className="itemValue">amandeo2907@gmail.com</span>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">Phone:</span>
    //               <span className="itemValue">+91 760xxxxx</span>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">Address:</span>
    //               <span className="itemValue">
    //                 Jubilee Park Tollygunge, kolkata
    //               </span>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">Country:</span>
    //               <span className="itemValue">INDIA</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="right">
    //         <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
    //       </div>
    //     </div>
    //     <div className="bottom">
    //     <h1 className="title">Last Transactions</h1>
    //       <List/>
    //     </div>
    //   </div>
    // </div>


    <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Edit User</h1>
      <Link to="/new">
        <button className="userAddButton">Create</button>
      </Link>
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="userShowImg"
          />
          <div className="userShowTopTitle">
            <span className="userShowUsername">Anna Becker</span>
            <span className="userShowUserTitle">Software Engineer</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">annabeck99</span>
          </div>
          <div className="userShowInfo">
            <CalendarToday className="userShowIcon" />
            <span className="userShowInfoTitle">10.12.1999</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">+1 123 456 67</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">New York | USA</span>
          </div>
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input
                type="text"
                placeholder="annabeck99"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Anna Becker"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="annabeck99@gmail.com"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder="+1 123 456 67"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input
                type="text"
                placeholder="New York | USA"
                className="userUpdateInput"
              />
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img
                className="userUpdateImg"
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Single;