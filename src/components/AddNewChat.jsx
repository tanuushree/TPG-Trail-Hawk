import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

// This Modal help Add a new friend
export function AddNewChat(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [friendData, setFriendData] = useState({
        nickname: "",
        privateKey: "",
    });

    const onChangeHandler = (e) => {
        // console.log(friendData)
        // console.log(e.target.value, e.target.name)
        setFriendData({
            ...friendData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="AddNewChat" style={{ position: "absolute", bottom: "0px", padding: "10px 45px 0 45px", margin: "0 95px 0 0", width: "97%" }}>
            <Button variant="success" className="mb-2" onClick={handleShow}>
                + NewChat
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Add New Friend </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control required id="addPublicKey" size="text" type="text" placeholder="Enter Friends Public Key" name="privateKey" value={friendData.privateKey} onChange={onChangeHandler} />
                        <br/>
                        <Form.Control required id="addName" size="text" type="text" placeholder="Name" name="nickname" value={friendData.nickname} onChange={onChangeHandler} />
                        <br/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="Warning" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.addHandler(friendData.nickname, friendData.privateKey);
                        handleClose();
                    }}>
                        Add Friend
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}