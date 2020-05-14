import React from "react"
import Job from "../images/job.jpg"
import { Card, Button } from "react-bootstrap"
export default function Post(props) {
  return (
    <Card style={{ width: "28rem", marginTop: 10 }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
        <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        <Button variant="primary" href={props.readMore}>
          Read More . . .{" "}
        </Button>
      </Card.Body>
    </Card>
  )
}
