import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/Title"
import Description from "../components/description"

const IndexPage = () => (
  <Layout>
    <Title title={"Home Page"}></Title>
    <Description description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary," />
    <ul>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link to="/gallary">Gallary</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
