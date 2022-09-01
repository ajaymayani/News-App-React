import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <Container className='my-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={!imageUrl?"https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036_960_720.jpg":imageUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default NewsItem;