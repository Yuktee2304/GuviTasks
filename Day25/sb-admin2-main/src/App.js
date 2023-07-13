import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Nav />
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
