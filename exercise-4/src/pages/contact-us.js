import React from "react"
import Layout from "../components/layout"
import { Form, Button } from "react-bootstrap"

const AboutUsPage = () => (
  <Layout>
    <div className="col-10">
      <div className="pt-5">
        <h1>Contact US</h1>
        <Form>
          <Form.Group controlId="contactForm.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email ...." />
          </Form.Group>
          <Form.Group controlId="contactForm.subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject ...." />
          </Form.Group>
          <Form.Group controlId="contactForm.message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="contactForm.message">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  </Layout>
)

export default AboutUsPage
