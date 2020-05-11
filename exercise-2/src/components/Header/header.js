import React from "react"
import { Layout, Button } from "antd"
// import {}  from "@antd/"
import { Link } from "gatsby"
import HeaderStyles from "./header.module.css"
import Logo from "../../assets/img/logo.png"
import Ticket from "../../assets/img/ticket.png"
const { Header } = Layout

export default function HeaderComponent() {
  return (
    <Header className={HeaderStyles.HeaderWrapper}>
      <div className={HeaderStyles.logoWrapper}>
        <img alt="" src={Logo} className={HeaderStyles.logoImg} />
      </div>
      <ul className={HeaderStyles.MenuListWrapper}>
        <li
          className={[HeaderStyles.ListItem, HeaderStyles.ListActive].join(" ")}
        >
          <Link className={HeaderStyles.ListAnchor} to="/">
            Home
          </Link>
        </li>
        <li className={HeaderStyles.ListItem}>
          <Link className={HeaderStyles.ListAnchor} to="/">
            ABOUT
          </Link>
        </li>
        <li className={HeaderStyles.ListItem}>
          <Link className={HeaderStyles.ListAnchor} to="/">
            SPEAKERS
          </Link>
        </li>
        <li className={HeaderStyles.ListItem}>
          <Link className={HeaderStyles.ListAnchor} to="/">
            SCHEDULE
          </Link>
        </li>
        <li className={HeaderStyles.ListItem}>
          <Link className={HeaderStyles.ListAnchor} to="/">
            BLOG
          </Link>
        </li>
        <li className={HeaderStyles.ListItem}>
          <Link className={HeaderStyles.ListAnchor} to="/"></Link>
        </li>
      </ul>

      <div className={HeaderStyles.btnWrapper}>
        <Button
          className={HeaderStyles.btnGradiant}
          // icon={() => },
          onClick={() => this.enterLoading(2)}
          shape="round"
        >
          <img src={Ticket} style={{ width: 13, margin: "5px 3px" }} />
          Ticket
        </Button>
      </div>
    </Header>
  )
}
