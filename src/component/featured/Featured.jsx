import "./featured.css";

import "react-circular-progressbar/dist/styles.css";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../../redux/requestMethods";
import { useSelector } from "react-redux";

const Featured = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [comparedIncome, setComparedIncome] = useState(0);
  const user = useSelector((state) => state.user.currentUser);

  const getTotalIncome = async () => {
    try {
      const response = await userRequest.get("orders/income", {
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
      });
      setIncome(response.data);
      setPercentage(
        (response.data[1].total * 100) / response.data[0].total - 100
      );
      setComparedIncome(income[1].total);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTotalIncome();
  }, []);
  // console.log("income", income);
  // console.log("percent", percentage);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{income[1]?.total}</span>
          <span className="featuredMoneyRate">
            {Math.floor(percentage)}%
            {percentage < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default Featured;
