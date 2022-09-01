import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <Container className='my-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default NewsItem;