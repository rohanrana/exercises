import React from "react"
import { Layout as Wrapper, Menu } from "antd"
import { Link } from "gatsby"
import HeaderComponent from "./Header/header"
import FooterComponent from "./Footer"
const { Footer } = Wrapper

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{}}>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  )
}
