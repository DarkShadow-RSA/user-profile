// import React, { useState, useContext } from "react";
// import { updateCounterProfile } from "../App";
// import { Form, Row, Col, Button } from "react-bootstrap";

// function UserUpdate() {
//   const [test, setTest] = useContext(updateCounterProfile);

//   const [userId, setUserID] = useState("user#24601");
//   const [nickName, setNickName] = useState("");
//   const [bio, setBio] = useState("");

//   const handleSubmit = () => {
//     if (
//       userId.length > 0 &&
//       nickName.length > 0 &&
//       bio.length > 0 &&
//       bio.length <= 140
//     ) {
//       setTest(userId, nickName, bio);
//     }
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         margin: 30,
//         border: "1px dashed blue",
//         borderRadius: "5px",
//       }}
//     >
//       <h1>{test[0]}</h1>
//       <Form>
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>User ID</Form.Label>
//             <Form.Control
//               value={userId}
//               onChange={(e) => setUserID(e.target.value)}
//               type="text"
//               placeholder="Enter User ID"
//               readOnly
//             />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>NickName*</Form.Label>
//             <Form.Control
//               value={nickName}
//               onChange={(e) => setNickName(e.target.value)}
//               type="text"
//               placeholder="Enter NickName*"
//             />
//           </Form.Group>
//         </Row>

//         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//           <Form.Label>Biography</Form.Label>
//           <Form.Control
//             as="textarea"
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             rows={3}
//             maxLength="140"
//             placeholder="Tell us more about yourself in less than 140 characters"
//           />
//         </Form.Group>

//         <Button
//           variant="secondary "
//           onClick={() => {
//             setBio("");
//             setNickName("");
//           }}
//         >
//           Reset
//         </Button>

//         <Button variant="primary" type="submit" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default UserUpdate;
