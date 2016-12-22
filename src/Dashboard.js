import React from "react"
import $ from "jquery"

class Dashboard extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {firstName:"FN", headline:"Title"};
    }

    componentDidMount(){
        var o = this;
        var uid = this.props.params.uid;
        $.ajax("http://localhost:5000/profiledata?uid="+ uid).done(function (data) {
           // console.log("data  ", data);
            o.setState(data);
            
        })
    }

    render(){

        return (
            <div>

                <h2>Welcome {this.state.firstName} {this.state.lastName}</h2>

                <h4>{this.state.headline}</h4>

            </div>
        )
    }
}



export default Dashboard