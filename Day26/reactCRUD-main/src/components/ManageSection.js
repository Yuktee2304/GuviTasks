import UserData from "./UserData";
import { useContext } from "react";
import { Button, Col, Form, Row, Card, Modal } from "react-bootstrap";
import Context from "./Context";
import UserProfile from "./userProfile";

export default function ManageSection() {
  const context = useContext(Context);

  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>UserData</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <Button
                  className="addButton"
                  variant="primary"
                  onClick={() => {
                    context.handleShow();
                    context.setCreateorEdit("Create");
                  }}
                >
                  <i
                    className="fa-solid fa-circle-plus"
                    style={{ color: "#ffffff" }}
                  ></i>{" "}
                  <span>Add New User</span>
                </Button>
                {/* <a className="btn btn-success" data-toggle="modal">
                  <i
                    className="fa-solid fa-circle-plus"
                    style={{ color: "#ffffff" }}
                  ></i>{" "}
                  <span>Add New User</span>
                </a> */}
              </div>
            </div>
          </div>
          <UserData />
          <div className="clearfix">
            <div className="hint-text">
              Showing <b>{context.userData.length}</b> entries
            </div>
            <ul className="pagination">
              <li className="page-item disabled">
                <a href="#">Previous</a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  Next
                </a>
              </li>
            </ul>
          </div>
          <Card>
            <Modal show={context.show} onHide={context.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {context.createOrEdit === "Create" ? "Create" : "Edit"} User
                </Modal.Title>
              </Modal.Header>

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
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        name="name"
                        type="text"
                        placeholder="Enter your Name"
                        value={context.newUserData.name}
                        onChange={(e) =>
                          context.setNewUserData({
                            ...context.newUserData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={context.newUserData.email}
                    onChange={(e) =>
                      context.setNewUserData({
                        ...context.newUserData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    required
                    name="phoneno"
                    type="tel"
                    placeholder="Enter your Phone"
                    value={context.newUserData.phoneno}
                    onChange={(e) =>
                      context.setNewUserData({
                        ...context.newUserData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Profile Pic URL</Form.Label>
                  <Form.Control
                    required
                    name="profileimg"
                    type="text"
                    placeholder="Profile Pic URL"
                    value={context.newUserData.profileimg}
                    onChange={(e) =>
                      context.setNewUserData({
                        ...context.newUserData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    name="address"
                    type="text"
                    placeholder="Address"
                    value={context.newUserData.address}
                    onChange={(e) =>
                      context.setNewUserData({
                        ...context.newUserData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        required
                        name="city"
                        type="text"
                        placeholder="City"
                        value={context.newUserData.city}
                        onChange={(e) =>
                          context.setNewUserData({
                            ...context.newUserData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        required
                        name="state"
                        type="text"
                        placeholder="State"
                        value={context.newUserData.state}
                        onChange={(e) =>
                          context.setNewUserData({
                            ...context.newUserData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        required
                        name="country"
                        type="text"
                        placeholder="Country"
                        value={context.newUserData.country}
                        onChange={(e) =>
                          context.setNewUserData({
                            ...context.newUserData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="modal-btn">
                  <Button variant="secondary" onClick={context.handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    id={context.newUserData.id}
                    // className="w-50 mt-4 mx-auto"
                    onClick={(e) => {
                      if (
                        context.newUserData.name !== "" &&
                        context.newUserData.email !== "" &&
                        context.newUserData.address !== "" &&
                        context.newUserData.phoneno !== "" &&
                        context.newUserData.city !== "" &&
                        context.newUserData.state !== "" &&
                        context.newUserData.country !== ""
                      ) {
                        context.createOrEdit === "Create"
                          ? context.createUser()
                          : context.createUser(e.target.id);
                        context.handleClose();
                      } else {
                        alert("kindly fill all the Details");
                      }
                    }}
                  >
                    {context.createOrEdit === "Create" ? "Create" : "Update"}
                  </Button>
                </div>
              </Form>
            </Modal>
          </Card>
        </div>
      </div>
      <UserProfile />
    </>
  );
}
