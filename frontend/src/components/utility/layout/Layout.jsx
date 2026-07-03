import Menubar from "../navbar/Menubar.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <div><Menubar/></div>
      {children}
    </div>
  );
};

export default Layout;