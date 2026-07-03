import "./Menubar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { enableDarkTheme, enableLightTheme } from "../../../features/theme/themeSlice.js";

const Menubar = () => {
  const theme = useSelector(state => state.theme.value);
  const dispatch = useDispatch();
  const [themeIcon, setThemeIcon] = useState(<i className="bi bi-moon"></i>);

  useEffect(() => {
    console.log(theme);
    toggleStyle();
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      dispatch(enableDarkTheme());
      setThemeIcon(<i className="bi bi-sun"></i>);
    } else {
      dispatch(enableLightTheme());
      setThemeIcon(<i className="bi bi-moon"></i>);
    }
  };

  const toggleStyle = () => {
    const menubar = document.getElementById("menubar");

    if (theme === "dark") {
      menubar.classList.remove("bg-light-2");
      menubar.classList.add("bg-dark-2");
    }

    if (theme === "light") {
      menubar.classList.remove("bg-dark-2");
      menubar.classList.add("bg-light-2");
    }
  };

  return (
    <div className={"Menubar bg-light-2 d-flex justify-content-between"} id={"menubar"}>
      <div className={"d-flex align-items-center"}>
        <h3>
          <Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Logo</Link>
        </h3>
      </div>
      <div className={"d-none d-md-flex align-items-center gap-2"}>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Home</Link></div>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Doctors</Link></div>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Appointment</Link></div>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Dashboard</Link></div>
        <div className={"Menubar-dropdown position-relative d-flex align-items-center h-100"}>
          <button className={"link-light-2 bg-light-2 text-decoration-none fw-bold h-100 border-0"}>More</button>
          <div className={"Menubar-dropdown-content bg-light-2 position-absolute top-100 py-2"}>
            <div className={"px-3 pb-1"}><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>About</Link></div>
            <div className={"px-3 pb-1"}><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Contact</Link></div>
            <div className={"px-3"}><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>FAQ</Link></div>
          </div>
        </div>
      </div>
      <div className={"d-flex align-items-center gap-2"}>
        <div><span role={"button"} className={"link-light-2 text-decoration-none fw-bold"} onClick={toggleTheme}>{themeIcon}</span></div>
        <div><button className={"btn-light-2"}>Sign Out</button></div>
      </div>
    </div>
  );
};

export default Menubar;