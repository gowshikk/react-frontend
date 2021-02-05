import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {

    render() {

        const logData = this.props.logData.map((log, index) => {
            return ( <div key={index}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{log.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{log.position}</Card.Subtitle>
                        <Card.Text>{log.project}</Card.Text>
                        {log.logDetails.map((inner,i) =>{
                            return (
                                <span >
                                <Card.Text><strong>LOG: </strong>{inner.log}</Card.Text>
                                <Card.Text><strong>Hours Spent: </strong>{inner.hours}</Card.Text>
                                <Card.Text><strong>Date: </strong>{inner.date}</Card.Text>
                                </span>
                            
                            )
                        } )}
                        {/* <Link to="/showLogTable">Show Log</Link> */}
                    </Card.Body>
                </Card>
                <br />
            </div> 
            )
        });

        return (
            <div>
                <br />
                <CardDeck>
                {logData}
                </CardDeck>
            </div>
        );
    }
}

export default AdminPage;