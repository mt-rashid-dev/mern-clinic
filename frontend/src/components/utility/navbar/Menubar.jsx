import "./Menubar.css";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className={"Menubar bg-light-2 d-flex justify-content-between"}>
      <div className={"d-flex align-items-center"}>
        <h3>
          <Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Logo</Link>
        </h3>
      </div>
      <div className={"d-none d-md-flex align-items-center gap-2"}>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Home</Link></div>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Doctors</Link></div>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Services</Link></div>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>About</Link></div>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Contact</Link></div>
      </div>
      <div className={"d-flex align-items-center gap-2"}>
        <div><Link to={"/"} className={"link-light-2 text-decoration-none fw-bold"}>Dashboard</Link></div>
        <div><button className={"btn-light-2"}>Sign Out</button></div>
      </div>
    </div>
  );
};

export default Menubar;