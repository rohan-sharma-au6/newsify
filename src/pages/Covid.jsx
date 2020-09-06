import React, { Component } from 'react';

class Bbc extends Component {
    state = {
        global: [],
        countries:null
    }
    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.covid19api.com/summary", requestOptions)
            .then(response =>
                response.json())
            .then(result =>
                {console.log(result)
                this.setState({ global: result.Global })
                this.setState({ countries: result.Countries })}
            )
            .catch(error => console.log('error', error));
    }

    render() {
        console.log(this.state.global)
        return (
            this.state.countries===null?<div style={{ top: "200px", margin: "0 auto" }} className="loader" >Loading...</div>:
            <div style={{ marginTop: "100px" }}>
                <h2 style={{ color: "whitesmoke", marginLeft: "600px" }}>Global Statsistics </h2>
                <table style={{margin:"0 auto"}}>
                    <tr>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Total Deaths</th>
                        <th>New Deaths</th>
                        <th>Total Recovered</th>
                        <th>New Recovered</th>
                    </tr>
                    <tr>
                        <td>{this.state.global.TotalConfirmed}</td>
                        <td>{this.state.global.NewConfirmed}</td>
                        <td>{this.state.global.TotalDeaths}</td>
                        <td>{this.state.global.NewDeaths}</td>
                        <td>{this.state.global.TotalRecovered}</td>
                        <td>{this.state.global.NewRecovered}</td>
                    </tr>
                </table>
                <br/>
                <br/>
                <h2 style={{ color: "whitesmoke", marginLeft: "600px" }}>Countries Statistics </h2>
                <table style={{margin:"0 auto"}}>
                    <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Total Deaths</th>
                        <th>New Deaths</th>
                        <th>Total Recovered</th>
                        <th>New Recovered</th>
                    </tr>
                    {this.state.countries.map(all=>(
                        <tr>
                        <td>{all.Country}</td>
                        <td>{all.TotalConfirmed}</td>
                        <td>{all.NewConfirmed}</td>
                        <td>{all.TotalDeaths}</td>
                        <td>{all.NewDeaths}</td>
                        <td>{all.TotalRecovered}</td>
                        <td>{all.NewRecovered}</td>
                    </tr>
                    ))}
                    
                </table>
            </div>
        );
    }
}

export default Bbc;
