import "./navbar.scss"
import { useDispatch, useSelector } from "react-redux";
import LanguageIcon from '@mui/icons-material/Language';
import { logout } from "../../../src/redux/userSlice";
import {useNavigate} from "react-router-dom"


const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const onLogout = () => {
        dispatch(logout());
        navigate("/login");
      };
    return (
        <div className='navbar'>
            <div className='wrapper'>

                {/* <div className='Search'>
                    <input type="text" placeholder="Search..." />

                    <YoutubeSearchedForIcon />
                </div> */}


                <div className='items'>

                    <div className='item'>
                        <LanguageIcon className="icon" />
                        ENGLISH
                    </div>

                    {/* <div className='item'>
                        <DarkModeIcon className="icon" />
                    </div>

                    <div className='item'>
                        <FullscreenExitIcon  className="icon" />

                    </div>

                    <div className='item'>
                        <NotificationsActiveIcon  className="icon"/>
                     <div className="counter">1</div>
                    </div>

                    <div className='item'>
                        <ChatBubbleIcon  className="icon"/>
                        <div className="counter">2</div>
                    </div>

                    <div className='item'>
                        <PlaylistRemoveIcon className="icon" />

                    </div> */}

                    <div className='item'>
                        <img
                        src="http://m.gettywallpapers.com/wp-content/uploads/2021/03/Cool-HD-Wallpaper-2.jpg"
                        className="avtar"
                        alt=""
                    />

                    </div>
                    <button
                style={{ marginLeft: "1em" }}
                onClick={onLogout}
                variant="text"
              >
                Logout
              </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar