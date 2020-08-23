import React from "react";
import moment from "moment";

import "../App.css";
import blur from "../images/blur.jpeg";
import polygon from "../images/polygon.jpg";

const UserCard = (props) => {
  const { person } = props;

  const styles = {
    userCardContainer: {
      width: 350,
      margin: 10,
      borderRadius: "10px 10px 10px 10px",
      boxShadow: "0px 0px 30px 0px #888888",
    },
    profilePicBackground: {
      backgroundImage: `url("${blur}")`,
      borderRadius: "10px 10px 0px 0px",
    },
    profilePic: {
      borderRadius: "50%",
      border: "1px solid #989898",
      display: "block",
      margin: "auto",
      position: "relative",
      top: 55,
    },
    informationBackground: {
      backgroundImage: `url("${polygon}")`,
      borderRadius: "0px 0px 10px 10px",
      padding: 20,
    },
    informationContainer: {
      backgroundColor: "white",
      borderRadius: 10,
      border: "1px solid #C6C6C6",
      padding: "30px 10px 10px",
    },
    divider: {
      border: 0,
      borderTop: "1px solid #BCBCBC",
    },
    title: {
      margin: "10px 0px",
    },
    center: {
      textAlign: "center",
    },
    section: {
      paddingLeft: 10,
    },
    sectionText: {
      margin: "10px 0px",
      fontSize: 12,
    },
  };

  const nameStr =
    person.name.title + ". " + person.name.first + " " + person.name.last;

  const addressStr =
    person.location.street.number + " " + person.location.street.name;

  const birthdate = moment(person.dob.date).format("MMMM Do YYYY");

  return (
    <div style={styles.userCardContainer}>
      <div style={styles.profilePicBackground}>
        <img src={person.picture.large} style={styles.profilePic} />
      </div>
      <div style={styles.informationBackground}>
        <div style={styles.informationContainer}>
          <h2 style={styles.center}>{nameStr}</h2>
          <hr style={styles.divider} />
          <div style={styles.section}>
            <h4 style={styles.title}>Birthdate:</h4>
            <p style={styles.sectionText}>
              {birthdate} ({person.dob.age} years old)
            </p>
          </div>
          <hr style={styles.divider} />
          <div style={styles.section}>
            <h4 style={styles.title}>Address:</h4>
            <p style={styles.sectionText}>
              {addressStr}
              <br />
              {person.location.city}, {person.location.state}
              <br />
              {person.location.country}
            </p>
          </div>
          <hr style={styles.divider} />
          <div style={styles.section}>
            <h4 style={styles.title}>Phone Number:</h4>
            <p style={styles.sectionText}>{person.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
