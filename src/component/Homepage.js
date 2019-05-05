
import React, { Component } from 'react';
import Axios from 'axios';



class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city:"",
            time:""
         }
    }

    componentDidMount(){
        Axios.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=4e7479f8bdd049b790f61643190505&q=Kuala%20Lumpur&format=json&num_of_days=1")
        .then(result=>{
            console.log(result.data.data.weather[0].date);
            this.setState({
                city:result.data.data.request[0].query,
                time:result.data.data.weather[0].date
            })
        })
    }
    render() { 
        console.log(this.state.city);
        console.log(this.state.time);
        const { city } = this.state
        const { time } = this.state
        return ( 
        <div className="Api">
        {city},{time}
            <div className="homebody">
                <div className="hometext">
                    RandomApp
                </div>
            </div>
        </div>
         );
    }
}
 
export default Homepage;
    
  



