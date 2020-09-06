import React, { Component } from 'react';

class Cnn extends Component {
    state = {
        top: null
    }
    componentDidMount() {

        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=f6150937cca24c658889ac0f2d0eff44",
            {
                method: "get"
            }
        ).then(res => res.json())
            .then(json => {
                console.log(json.articles)

                this.setState({ top: json.articles })
            });
    }
    timer(timeStamp) {

        // variables
        var createdTime = new Date(timeStamp) / 60000
        var currentTime = new Date() / 60000

        // total time since created
        var time = ((currentTime - createdTime) / 60)
        time = time.toFixed(2)

        // converting time into min, hrs & days respectively
        if (time < 1) return `${parseInt(time / 0.016)} mins ago`
        else if (time >= 1 && time < 24) return `${parseInt(time)} hrs ago`
        else if (time > 24) return `${parseInt(time / 24)} days ago`
    }
    render() {
        return (
            <div style={{marginTop:"100px"}}>
                <h1 className="title1" >Top Bitcoin News </h1>
                {this.state.top===null?<div style={{ marginTop: "400px", margin: "0 auto" }} className="loader" >Loading...</div>:this.state.top.map(all => (

                    <div key={all.publishedAt} className="big-card">
                        <img src={all.urlToImage} style={{ width: "200px", height: "200px" }} />
                        <section className="des">
                            <h3>{all.title}</h3>
                            <article>{all.description}</article>
                            <p><b>Author:  </b>{all.author}</p>
                            <p style={{fontSize:"15px",color:"#ccc"}}>{this.timer(all.publishedAt)}</p>
                            <a className="btn" style={{background:"blueviolet",color:"whitesmoke"}} href={all.url}>know more</a>
                        </section>

                    </div>

                ))}
            </div>
        );
    }
}

export default Cnn;
