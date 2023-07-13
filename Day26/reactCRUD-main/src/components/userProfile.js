import "../assets/userprofile.css";
import { useContext } from "react";
import Context from "./Context";

export default function UserProfile() {
  const context = useContext(Context);
  //profileshow, setProfileShow,profilehandleShow,profilehandleClose

  return (
    <>
      {/* <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i
          className="fa-sharp fa-solid fa-eye"
          style={{ color: "#01bbf9" }}
        ></i>
      </a>

      <div
        className="modal fade profilemodelid"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div>
              <div className="profileCard">
                <div className="card">
                  <div className="banner">
                    <img
                      className="profileCardImg"
                      src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/928.jpg"
                    />
                  </div>

                  <h2 className="name">moke</h2>
                  <div className="profileData">
                    <p className="profileValue">Email:</p>
                    <p className="profileValue">Address:</p>
                    <p className="profileValue">Phone No:</p>
                  </div>

                  <div className=" profile-btn">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <a
        href="#editEmployeeModal"
        className="edit"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i
          className="fa-sharp fa-solid fa-eye"
          style={{ color: "#01bbf9" }}
        ></i>
      </a>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="profileCard">
          <div className="card">
            <div className="banner">
              <img
                className="profileCardImg"
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/928.jpg"
              />
            </div>

            <h2 className="name">moke</h2>
            <div className="profileData">
              <p className="profileValue">Email:</p>
              <p className="profileValue">Address:</p>
              <p className="profileValue">Phone No:</p>
            </div>

            <div className=" profile-btn">
              <Button variant="secondary" data-bs-dismiss="modal">
                Close
              </Button>
              <Button variant="danger">Delete</Button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
