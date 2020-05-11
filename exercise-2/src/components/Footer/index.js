import React from "react"
import Logo from "../../assets/img/logo-f.png"
import Social from "../../assets/img/social.png"

import styles from "./footer.module.css"
import { Link } from "gatsby"
export default function FooterComponent() {
  return (
    <footer className={styles.FooterWrapper}>
      <div className={styles.logoWrapper}>
        <img alt="" src={Logo} className={styles.logoImg} />
      </div>
      <ul className={styles.MenuListWrapper}>
        <li className={[styles.ListItem, styles.ListActive].join(" ")}>Home</li>
        <li className={[styles.ListItem, styles.ListActive].join(" ")}>
          Speakers
        </li>
        <li className={[styles.ListItem, styles.ListActive].join(" ")}>
          Schedule
        </li>
        <li className={[styles.ListItem, styles.ListActive].join(" ")}>Blog</li>
        <li className={[styles.ListItem, styles.ListActive].join(" ")}>
          Contacts
        </li>
      </ul>
      <span className={styles.copyRightText}>
        Copyright &copy; All rights reserved | This Templates Made With Love
      </span>
      <div className={styles.logoWrapper}>
        <img alt="" src={Social} className={styles.logoImg} />
      </div>
      {/* <ul className={styles.MenuListWrapper}>
        <li className={[styles.ListItem, styles.ListActive].join(" ")}>
          <a className={styles.ListAnchor} to="/">
            Home
          </a>
        </li>
        <li className={styles.ListItem}>
          <Link className={styles.ListAnchor} to="/">
            ABOUT
          </Link>
        </li>
        <li className={styles.ListItem}>
          <Link className={styles.ListAnchor} to="/">
            SPEAKERS
          </Link>
        </li>
        <li className={styles.ListItem}>
          <Link className={styles.ListAnchor} to="/">
            SCHEDULE
          </Link>
        </li>
        <li className={styles.ListItem}>
          <Link className={styles.ListAnchor} to="/">
            BLOG
          </Link>
        </li>
        <li className={styles.ListItem}>
          <Link className={styles.ListAnchor} to="/"></Link>
        </li>
      </ul> */}
    </footer>
  )
}
