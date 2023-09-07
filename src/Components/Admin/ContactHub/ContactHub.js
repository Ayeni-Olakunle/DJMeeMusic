import React, { useState, useEffect } from "react";
import Layout1Style from "./Contact.module.scss";
import { Modal, Button } from 'react-bootstrap';
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "../../../firebase-config";
import { CSVLink } from 'react-csv';

function AdminContactHub() {
    const [thug, setThug] = useState(false);
    const [current, setCurrent] = useState(0);
    const [dataIndex, setDataIndex] = useState();
    const [dataIndex3, setDataIndex3] = useState({});
    const [inputText, setInputText] = useState("");
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const contactCollectionRef = collection(db, "tiwacommercial-contact");

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
                setDataIndex(data.length);
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    const handleDeleteData = (id) => {
        const reservationDoc = doc(db, "tiwacommercial-contact", id)
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
                <h4 className={Layout1Style.textHead}>Contact</h4>
                <div className={Layout1Style.holdDateSearch}>
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
                                <td>Category</td>
                                <td>Date</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody className={Layout1Style.holdTable}>
                            {filteredData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.fullName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.category}</td>
                                        <td>{item.date}</td>
                                        <td>
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
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminContactHub;