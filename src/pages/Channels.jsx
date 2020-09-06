import React from 'react';
import "../styles/channels.css"
import { Card} from 'react-bootstrap';
import google from "../images/google.jpg"
import bbc from "../images/bbc.jpg"
import cnn from "../images/cnn.png"
import espn from "../images/espn.jpg"
import { Link } from 'react-router-dom';

const Channels = () => {
    return (
        <div  >
            <h1 className="title1" >Top News Channels</h1>
            <section className="channels">
                
                <Link to={"/bbc"}><Card style={{ width: '18rem',background:"#555" ,color:"whitesmoke" }}>
                    <Card.Img variant="top" src={bbc} style={{height:"200px"}} />
                    <Card.Body>
                        <Card.Title>BBC News</Card.Title>
                    </Card.Body>
                </Card></Link>
                <Link to={"/cnn"}><Card style={{ width: '18rem',background:"#555" ,color:"whitesmoke" }}>
                    <Card.Img variant="top" src={cnn} style={{height:"200px"}} />
                    <Card.Body>
                        <Card.Title>CNN News</Card.Title>
                    </Card.Body>
                </Card></Link>
                <Link to={"/espn"}><Card style={{ width: '18rem',background:"#555" ,color:"whitesmoke" }}>
                    <Card.Img variant="top" src={espn} style={{height:"200px"}} />
                    <Card.Body>
                        <Card.Title>ESPN</Card.Title>
                    </Card.Body>
                </Card></Link>
                <Link to={"/google"}><Card style={{ width: '18rem',background:"#555" ,color:"whitesmoke" }}>
                    <Card.Img variant="top" src={google} style={{height:"200px"}} />
                    <Card.Body>
                        <Card.Title>Google News</Card.Title>
                    </Card.Body>
                </Card></Link>
            </section>

        </div>
    );
};

export default Channels;