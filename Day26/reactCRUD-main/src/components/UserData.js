import { useContext, useState } from "react";
import Context from "./Context";
import { Button, Form, Card, Modal } from "react-bootstrap";
import "../assets/userprofile.css";

export default function UserData() {
  const context = useContext(Context);
  const Edit = "Edit";
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [deleteId, setDeleteId] = useState({});
  const deleteName = [];

  const handleDelete = (id) => {
    fetch("https://642bc504208dfe25471f0d6e.mockapi.io/userdata/" + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((res) => {
        context.getuserData();
      });
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {context.userData.map((user, index) => {
              deleteName.push(user.name);
              return (
                <tr key={user.id}>
                  <td data-label="No:">{index + 1}</td>
                  <td data-label="Name:">{user.name}</td>
                  <td data-label="Email:">{user.email}</td>
                  <td data-label="Address:">
                    {user.address},{user.city},{user.state}
                    {user.country}
                  </td>
                  <td data-label="Phone no:">{user.phoneno}</td>
                  <td data-label="Action:" className="action-bar">
                    {/* <a
                    href="#editEmployeeModal"
                    className="edit"
                    data-toggle="modal"
                    onClick={(e) => {
                      context.getUserById(e.target.id);
                      context.profilehandleShow();
                    }}
                  >
                    <i
                      className="fa-sharp fa-solid fa-eye"
                      id={user.id}
                      style={{ color: "#01bbf9" }}
                    ></i>
                  </a> */}
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => {
                        context.getUserById(e.target.id);
                      }}
                    >
                      <i
                        className="fa-sharp fa-solid fa-eye"
                        id={user.id}
                        style={{ color: "#01bbf9" }}
                      ></i>
                    </a>

                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      data-toggle="modal"
                      onClick={(e) => {
                        context.getUserById(e.target.id);
                        context.handleShow();
                        context.setCreateorEdit(Edit);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square" id={user.id}></i>
                    </a>
                    <a
                      href="#editEmployeeModal"
                      className="delete"
                      data-toggle="modal"
                      onClick={(e) => {
                        setDeleteId(e.target.id);
                        handleShow();
                        // handleDelete(e.target.id);
                      }}
                    >
                      <i
                        className="fa-solid fa-trash"
                        id={user.id}
                        style={{ color: "#f00505" }}
                      ></i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="centerProfile">
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
                        src={context.newUserData.profileimg}
                      />
                    </div>

                    <h2 className="name">{context.newUserData.name}</h2>
                    <div className="profileData">
                      <p className="profileValue">
                        <b>Email: </b>
                        {context.newUserData.email}
                      </p>
                      <p className="profileValue">
                        <b>Address: </b>
                        {context.newUserData.address},{context.newUserData.city}
                        ,{context.newUserData.state},
                        {context.newUserData.country}
                      </p>
                      <p className="profileValue">
                        <b>Phone No: </b>
                        {context.newUserData.phoneno}
                      </p>
                    </div>

                    <div className=" profile-btn">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          context.profileReset();
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <div className="modal-body">
            <p>Are you sure you want to delete this Record?</p>
            <p className="text-danger">
              <small>This action cannot be undone.</small>
            </p>
          </div>

          <Form
            className="card shadow p-4"
            style={{
              rowGap: "15px",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
          >
            <div className="modal-btn">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="danger"
                id={context.newUserData.id}
                onClick={(e) => {
                  handleDelete(deleteId);
                  handleClose();
                }}
              >
                Delete
              </Button>
            </div>
          </Form>
        </Modal>
      </Card>
    </>
  );
}
