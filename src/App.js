import "./App.css";
import React, { useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./components/UserProfile";

export const updateCounterProfile = React.createContext();

function App() {
  const [userData, setUserData] = useState(["user#24601", "", ""]);

  const UserUpdate = () => {
    const [userId, setUserID] = useState("user#24601");
    const [nickName, setNickName] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = () => {
      if (bio.length > 0 && nickName.length > 0 && bio.length <= 140) {
        //Simulate Network Error by causing a 50% chance network error
        if (Math.random() < 0.9) {
          setUserData([userId, nickName, bio]);
          alert("success");
        } else {
          alert("Error:Network Failure: Try again");
        }
      } else {
        alert("Fill All Input Fields");
      }
    };

    return (
      <div
        style={{
          padding: "20px",
          margin: 20,
          border: "1px dashed blue",
          borderRadius: "5px",
        }}
      >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                value={userId}
                onChange={(e) => setUserID(e.target.value)}
                type="text"
                placeholder="Enter User ID"
                readOnly
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>NickName*</Form.Label>
              <Form.Control
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                type="text"
                placeholder="Enter NickName*"
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Biography</Form.Label>
            <Form.Control
              as="textarea"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              maxLength="140"
              placeholder="Tell us more about yourself in less than 140 characters"
              required
            />
          </Form.Group>

          <Button
            variant="secondary "
            onClick={() => {
              setBio("");
              setNickName("");
            }}
          >
            Reset
          </Button>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  };

  return (
    <div>
      <updateCounterProfile.Provider value={[userData]}>
        <UserUpdate />
        <UserProfile />
      </updateCounterProfile.Provider>
    </div>
  );
}

export default App;
