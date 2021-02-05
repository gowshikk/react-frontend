import React from 'react';
import { Card, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom';


class GetLog extends React.Component {
    render() {

        const logData = this.props.logData.map((log, index) => {
            return ((log.name === this.props.username) ? <div key={index}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{log.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><strong>Position:</strong>{log.position}</Card.Subtitle>
                        <Card.Text><strong>Project: </strong>{log.project}</Card.Text>
                        <Card.Text><strong>LOG: </strong>{log.logDetails[index].log}</Card.Text>
                        <Card.Text><strong>Hours Spent: </strong>{log.logDetails[index].hours}</Card.Text>
                        <Card.Text><strong>Date: </strong>{log.logDetails[index].date}</Card.Text>
                        {/* <Link to="/toshowLog">Show Log</Link> */}
                    </Card.Body>
                </Card>
                <br />
            </div> : null
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

export default GetLog;