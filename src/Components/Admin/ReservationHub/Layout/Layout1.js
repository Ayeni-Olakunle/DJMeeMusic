import React, { useState, useEffect } from "react";
import Layout1Style from "./Layout1.module.scss";
import { Modal, Button } from 'react-bootstrap';
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "../../../../firebase-config";
import { CSVLink } from 'react-csv';

function Layout1() {
  const [thug, setThug] = useState(false);
  const [current, setCurrent] = useState(0);
  const [dataIndex, setDataIndex] = useState();
  const [dataIndex3, setDataIndex3] = useState({});
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const contactCollectionRef = collection(db, "tiwacommercial-reservation");

  const handleCurrent = (index) => {
    setCurrent(index);
  };
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = data.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.email.toLowerCase().includes(inputText);
    }
  });
  const handleGetData = () => {
    getDocs(contactCollectionRef)
      .then((response) => {
        setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(data.length);
        setDataIndex(data.length)
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  const handleUpdateData = (id, read) => {
    const reservationDoc = doc(db, "tiwacommercial-reservation", id)
    const newRead = { read: true };
    updateDoc(reservationDoc, newRead)
      .then((response) => {
        alert("Success")
        handleGetData();
      })
      .catch((err) => {
        alert("Error: " + err)
      })
    handleClose()
  }

  const handleDeleteData = (id) => {
    const reservationDoc = doc(db, "tiwacommercial-reservation", id)
    deleteDoc(reservationDoc)
      .then((response) => {
        alert("Success")
        handleGetData();
      })
      .catch((err) => {
        alert("Error: " + err)
      })
    handleClose()
  }

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className={Layout1Style.holdAll}>
      <div className={Layout1Style.holdAll2}>
        <h4 className={Layout1Style.textHead}>Reservation Hub</h4>
        <div className={Layout1Style.holdDateSearch}>
          <div className={Layout1Style.holdButin}>
            <button
              className={
                current === 0
                  ? Layout1Style.butinMenu + " " + Layout1Style.active
                  : Layout1Style.butinMenu
              }
              onClick={() => {
                handleCurrent(0);
                setThug(false);
              }}
            >
              Pending Verification
            </button>
            <button
              className={
                current === 1
                  ? Layout1Style.butinMenu + " " + Layout1Style.active
                  : Layout1Style.butinMenu
              }
              onClick={() => {
                handleCurrent(1);
                setThug(true);
              }}
            >
              Verified Users
            </button>
          </div>
          <div>
            <input
              type="search"
              placeholder="Search by email..."
              className={Layout1Style.search}
              onChange={inputHandler}
            />
          </div>
          <div>
            <div>
              <h6>Total List: {dataIndex}</h6>
            </div>
          </div>
          <div>
            <div>
              <CSVLink data={data} >
                <Button variant="success">
                  Export CSV
                </Button>
              </CSVLink>
            </div>
          </div>
        </div>
        <div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Date</td>
                <td>Verification</td>
                <td></td>
              </tr>
            </thead>
            <tbody className={Layout1Style.holdTable}>
              {filteredData.map((item, index) => {
                if (item.read === thug) {
                  return (
                    <tr key={index}>
                      <td>{item.fullName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.date}</td>
                      <td
                        className={
                          item.read
                            ? Layout1Style.compl
                            : Layout1Style.pend
                        }
                      >
                        {item.read ? "Verified" : "Pending"}
                      </td>
                      <td>
                        <button
                          className="blackNwhite"
                          onClick={() => {
                            handleShow();
                            setDataIndex3(item)
                            console.log(item);
                          }}
                        >
                          View Profile
                        </button>
                        <Button variant="danger"
                          style={{ marginLeft: "10px" }}
                          className="blackNwhite"
                          onClick={() => {
                            handleDeleteData(item.id)
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={Layout1Style.details}>
            <span>Full Name</span>
            <span>{dataIndex3.fullName}</span>
          </p>
          <p className={Layout1Style.details}>
            <span>Email</span>
            <span>{dataIndex3.email}</span>
          </p>
          <p className={Layout1Style.details}>
            <span>Phone</span>
            <span>{dataIndex3.phone}</span>
          </p>
          <p className={Layout1Style.details}>
            <span>Phone</span>
            <span>{dataIndex3.date}</span>
          </p>
          <p className={Layout1Style.details}>
            <span>Are You A Realtor Or Broker</span>
            <span>{dataIndex3.AreYouARealtorOrBroker}</span>
          </p>
          <p className={Layout1Style.details}>
            <span>Are You Working With A Realtor</span>
            <span>{dataIndex3.AreYouWorkingWithARealtor}</span>
          </p>
          <p className={Layout1Style.details}>
            <span>How Did You Hear About Us</span>
            <span>{dataIndex3.HowDidYouHearAboutUs}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            handleUpdateData(dataIndex3.id, dataIndex3.read)
          }}>
            {dataIndex3.read ? "Verified" : "Verify"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Layout1;
