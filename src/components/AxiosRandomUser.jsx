import React from "react";
import axios from "axios";

import UserCard2 from "./UserCard2";

class AxiosRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    axios.get("https://randomuser.me/api/?nat=us").then((res) => {
      console.log(res);
      const data = res.data;
      console.log(data);
      this.setState({ person: data.results[0], loading: false });
    });
  }

  render() {
    if (this.state.loading || !this.state.person) {
      return <p>loading...</p>;
    } else {
      return <UserCard2 person={this.state.person} />;
    }
  }
}

export default AxiosRandomUser;
