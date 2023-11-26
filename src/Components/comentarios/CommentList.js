import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/comments";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 5)))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  return (
    <Container id="comentarios" className="comentarios">
      <h2>Primeros 5 Comentarios</h2>
      <Row className="gx-5">
        <Col>
          <div>
            {comments.map((comment) => (
              <Card key={comment.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{comment.name}</Card.Title>
                  <Card.Text>{comment.body}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

  export default CommentList;
