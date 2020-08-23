import React from "react";
import UserCard1 from "./UserCard1";

class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/?nat=us";
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading || !this.state.person) {
      return <p>loading...</p>;
    } else {
      return <UserCard1 person={this.state.person} />;
    }
  }
}

export default FetchRandomUser;
