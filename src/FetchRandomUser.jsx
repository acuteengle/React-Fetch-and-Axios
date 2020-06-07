import React from "react";

class FetchRandomUser extends React.Component{

    state = {
        loading: true,
        person: null,
    }
    
    async componentDidMount() {
        const url = "https://randomuser.me/api/";
        const response = await fetch(url);
        console.log(response);
        const data = await response.json()
        console.log(data);
        this.setState({person: data.results[0], loading: false}) 
    }
    
    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <div>{this.state.person.name.title}</div>
                        <div>{this.state.person.name.first}</div>
                        <div>{this.state.person.name.last}</div>
                        <img src={this.state.person.picture.large} alt="user_image"/>
                    </div>
                )}
            </div>
        )
    }
}

export default FetchRandomUser;