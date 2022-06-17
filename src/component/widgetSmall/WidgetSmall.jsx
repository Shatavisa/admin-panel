import "./widgetsmall.css";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../redux/requestMethods";
import { useSelector } from "react-redux";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await userRequest.get("users/?new=true", {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        });
        ///console.log(response);
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  // console.log(users);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user, index) => {
          return (
            <li className="widgetSmListItem" key={user._id}>
              <img
                //user.img ||
                src={
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt="user profile"
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
                <span className="widgetSmUserTitle">{user.email}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
