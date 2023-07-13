import { useState, useEffect } from "react";
import Context from "./Context";

export default function Provider(props) {
  let initialValue = {
    name: "",
    email: "",
    phoneno: "",
    profileimg: "",
    address: "",
    city: "",
    state: "",
    country: "",
    id: "",
  };

  const [userData, setUserData] = useState([]);
  const [newUserData, setNewUserData] = useState(initialValue);
  const [createOrEdit, setCreateorEdit] = useState("");

  const [profileshow, setProfileShow] = useState(false);
  const profilehandleClose = () => {
    setShow(false);
  };
  const profilehandleShow = () => setShow(true);

  const getuserData = () => {
    fetch("https://642bc504208dfe25471f0d6e.mockapi.io/userdata")
      .then((data) => data.json())
      .then((res) => {
        setUserData(res);
      });
  };

  const createUser = (id) => {
    if (id) {
      fetch("https://642bc504208dfe25471f0d6e.mockapi.io/userdata/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      }).then((res) => {
        setNewUserData(initialValue);
        getuserData();
      });
    } else {
      fetch("https://642bc504208dfe25471f0d6e.mockapi.io/userdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      }).then((res) => {
        setNewUserData(initialValue);
        getuserData();
      });
    }
  };

  const profileReset = () => {
    setNewUserData(initialValue);
  };

  const getUserById = (id) => {
    let index = userData.findIndex((value) => value.id === id);
    setNewUserData(userData[index]);
  };

  useEffect(() => {
    getuserData();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setNewUserData(initialValue);
  };
  const handleShow = () => setShow(true);

  //   const createUser = (user) => {
  //     setFormData(user);
  //     console.log(formData);
  //     // fetch("https://642bc504208dfe25471f0d6e.mockapi.io/userdata", {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   body: JSON.stringify(formData),
  //     // });
  //     // setFormData(initialValue);
  //     // getuserData();
  //   };

  //   const [productData, setProductData] = useState([]);

  //   const createProduct = (product) => {
  //     setProductData([...productData, { ...product, id: uuidv4() }]);
  //   };

  //   const deleteProduct = (id) => {
  //     setProductData(productData.filter((value) => value.id !== id));
  //   };

  //   const getProductById = (id) => {
  //     let index = productData.findIndex((value) => value.id === id);
  //     return productData[index];
  //   };

  //   const updateProduct = (product) => {
  //     let index = productData.findIndex((value) => value.id === product.id);
  //     let tempProd = productData;
  //     tempProd[index] = product;
  //     setProductData([...tempProd]);
  //   };
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        getuserData,
        getUserById,
        createUser,
        newUserData,
        setNewUserData,
        initialValue,
        show,
        setShow,
        handleClose,
        handleShow,
        createOrEdit,
        setCreateorEdit,
        profileshow,
        setProfileShow,
        profilehandleShow,
        profilehandleClose,
        profileReset,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
