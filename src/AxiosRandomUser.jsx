import React from "react";
import axios from 'axios';

class AxiosRandomUser extends React.Component{

    state = {
        loading: true,
        person: null,
    }
    
    async componentDidMount() {
        axios.get("https://randomuser.me/api/")
        .then(res => {
            console.log(res);
            const data = res.data;
            console.log(data);
            this.setState({person: data.results[0], loading: false}) 
        });
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

export default AxiosRandomUser;