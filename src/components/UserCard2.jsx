import React from "react";
import moment from "moment";

import "../App.css";
import blue from "../images/blue2.jpeg";

const PROFESSIONS = [
  "UI Developer",
  "Software Engineer",
  "Marketing Director",
  "Data Scientist",
  "Manager",
  "Data Analyst",
];

const UserCard = (props) => {
  const { person } = props;

  const styles = {
    userCardContainer: {
      width: 350,
      margin: 10,
      borderRadius: "10px 10px 10px 10px",
      boxShadow: "0px 0px 30px 0px #888888",
    },
    headerContainer: {
      backgroundImage: `url("${blue}")`,
      backgroundSize: "cover",
      borderRadius: "10px 10px 0px 0px",
      padding: 25,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    profilePic: {
      borderRadius: "50%",
      display: "block",
      margin: "auto",
    },
    name: {
      margin: "5px 0px",
      color: "white",
    },
    profession: {
      color: "#D57C31",
      margin: 0,
    },
    taskContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: "10px 0px",
    },
    taskSection: {
      padding: "5px 30px",
    },
    centerTaskSection: {
      padding: "5px 30px",
      borderStyle: "solid",
      borderColor: "#BCBCBC",
      borderWidth: "0px 1px",
    },
    remainingTasks: {
      textAlign: "center",
      margin: 5,
      color: "#00A4F1",
    },
    overDueTasks: {
      textAlign: "center",
      margin: 5,
      color: "#A90D0D",
    },
    completedTasks: {
      textAlign: "center",
      margin: 5,
      color: "#4BC000",
    },
    caption: {
      textAlign: "center",
      fontSize: 8,
      margin: 0,
    },
    informationBackground: {
      borderRadius: "0px 0px 10px 10px",
    },
    employeeDetails: {
      margin: "0px 0px 10px",
    },
    informationContainer: {
      padding: 10,
    },
    divider: {
      border: 0,
      borderTop: "1px solid #BCBCBC",
    },
    section: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    sectionHeader: {
      padding: "0px 10px",
      margin: 0,
    },
    sectionText: {
      fontSize: 12,
      padding: "0px 10px",
    },
  };

  const nameStr = person.name.first + " " + person.name.last;

  const addressStr =
    person.location.street.number + " " + person.location.street.name;

  const birthdate = moment(person.dob.date).format("MMMM Do YYYY");

  const profession =
    PROFESSIONS[Math.floor(Math.random() * PROFESSIONS.length)];

  const remainingTasks = Math.floor(Math.random() * 15) + 1;
  const overdueTasks = Math.floor(Math.random() * 3);
  const completedTasks = Math.floor(Math.random() * 5) + 1;

  return (
    <div style={styles.userCardContainer}>
      <div style={styles.headerContainer}>
        <img src={person.picture.large} style={styles.profilePic} />
        <h3 style={styles.name}>{nameStr}</h3>
        <h5 style={styles.profession}>{profession}</h5>
      </div>
      <div style={styles.taskContainer}>
        <div style={styles.taskSection}>
          <h4 style={styles.remainingTasks}>{remainingTasks}</h4>
          <p style={styles.caption}>Remaining Tasks</p>
        </div>
        <div style={styles.centerTaskSection}>
          <h4 style={styles.overDueTasks}>{overdueTasks}</h4>
          <p style={styles.caption}>Over Due</p>
        </div>
        <div style={styles.taskSection}>
          <h4 style={styles.completedTasks}>{completedTasks}</h4>
          <p style={styles.caption}>Completed Tasks</p>
        </div>
      </div>
      <hr style={styles.divider} />
      <div style={styles.informationBackground}>
        <div style={styles.informationContainer}>
          <h4 style={styles.employeeDetails}>Employee Details:</h4>
          <div style={styles.section}>
            <h5 style={styles.sectionHeader}>Birthdate</h5>
            <p style={styles.sectionText}>
              {birthdate} ({person.dob.age} years old)
            </p>
          </div>
          <hr style={styles.divider} />
          <div style={styles.section}>
            <h5 style={styles.sectionHeader}>Address</h5>
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
            <h5 style={styles.sectionHeader}>Phone Number</h5>
            <p style={styles.sectionText}>{person.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
