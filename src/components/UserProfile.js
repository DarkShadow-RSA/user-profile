import React, { useState, useContext } from "react";
import { updateCounterProfile } from "../App";
import { Card } from "react-bootstrap";
import { BigHead } from "@bigheads/core";

function UserUpdate() {
  const [userData] = useContext(updateCounterProfile);

  //   }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "18rem" }}>
        {userData[1] != "" ? (
          <BigHead
            accessory={userData[2].length >= 10 ? "shades" : "tinyGlasses"}
            body={userData[1].length > 4 ? "breasts" : "chest"}
            clothing={userData[1].length >= 5 ? "dressShirt" : "dress"}
            clothingColor={userData[1].length >= 40 ? "red" : "white"}
            graphic={userData[2].length < 10 ? "react" : "gatsby"}
            hair={userData[1].length <= 10 ? "buzz" : "long"}
            hairColor={userData[1].length > 10 ? "brown" : "pink"}
            hat={userData[2].charAt(1) == "e" ? "turban" : "beanie"}
            hatColor={userData[2].charAt(0) == "h" ? "blue" : "red"}
            lashes="false"
            lipColor={userData[1].charAt(0) == "z" ? "pink" : "red"}
            skinTone={userData[1].charAt(0) == "k" ? "light" : "dark"}
          />
        ) : (
          <BigHead
            accessory="shades"
            body="chest"
            circleColor="blue"
            clothing="tankTop"
            clothingColor="black"
            eyebrows="angry"
            eyes="wink"
            facialHair="mediumBeard"
            graphic="vue"
            hair="short"
            hairColor="black"
            hat="none"
            hatColor="green"
            lashes="false"
            lipColor="purple"
            mask="true"
            faceMask="true"
            mouth="open"
            skinTone="brown"
          />
        )}
        <Card.Body>
          <Card.Title>{userData[1] || "Unnamed"}</Card.Title>
          <Card.Text>{userData[2] || "No biography provided"}</Card.Text>
          <Card.Text>{userData[0] || "No User ID provided"}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserUpdate;
