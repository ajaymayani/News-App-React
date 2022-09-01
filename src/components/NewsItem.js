import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <Container className='my-3'>
                <Card style={{ width: '18rem' }}>
                    <span style={{left:"86%"}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <Card.Img variant="top" src={!imageUrl ? "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036_960_720.jpg" : imageUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default NewsItem;