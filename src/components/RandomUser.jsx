import React from "react";
import FetchRandomUser from "./FetchRandomUser";
import AxiosRandomUser from "./AxiosRandomUser";

const RandomUser = () => {
  const styles = {
    columns: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  };
  return (
    <div style={styles.columns}>
      <h1>User Profile Version 1</h1>
      <AxiosRandomUser />
      <h1>User Profile Version 2</h1>
      <FetchRandomUser />
    </div>
  );
};

export default RandomUser;
