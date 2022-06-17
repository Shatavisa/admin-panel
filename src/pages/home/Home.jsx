import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import Chart from "../../component/chart/Chart";
import Featured from "../../component/featured/Featured";
import Table from "../../component/table/Table";

import "./home.scss";
import WidgetSm from "../../component/widgetSmall/WidgetSmall";
import WidgetLg from "../../component/widgetLarge/WidgetLarge";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../redux/requestMethods";
import { useSelector } from "react-redux";

// const data = [
//   { name: "January", Total: 700120 },
//   { name: "February", Total: 810000 },
//   { name: "March", Total: 603000 },
//   { name: "April", Total: 900000 },
//   { name: "May", Total: 800000 },
//   { name: "June", Total: 398000 },
// ];

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const user = useSelector((state) => state.user.currentUser);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getuserStats = async () => {
      try {
        console.log(user.accessToken);
        const response = await userRequest.get("/users/stats", {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        });

        response.data.map((item) => {
          return setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Total User": item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };

    getuserStats();
  }, [MONTHS]);

  //console.log(userStats);
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <Featured />

        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
};

export default Home;
