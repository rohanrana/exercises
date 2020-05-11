import React from "react"
import Layout from "../components/layout"
import Banner from "../assets/img/banner.png"
import Client from "../assets/img/client1.png"
import Tick from "../assets/img/tick.png"

import { Col, Row } from "antd"

import styles from "./home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.bannerWrapper}>
        <img src={Banner} alt="" style={{ width: "100%" }} />
      </div>
      <Row style={{ marginTop: 50 }}>
        <Col span={8} className={styles.LeftWrapper}>
          <img src={Client} alt="" />
        </Col>
        <Col span={8} className={styles.RightWrapper}>
          <h1 style={{ fontWeight: "600" }}>About Conference</h1>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ul className={styles.UL}>
            <li className={styles.LI}>
              <span style={{}}>
                {" "}
                <img src={Tick} style={{ width: 11 }} /> Write On your Bussiness
                Card
              </span>
            </li>
            <li className={styles.LI}>
              <span style={{}}>
                <img src={Tick} style={{ width: 11 }} /> Advertising Outdoors
              </span>
            </li>
            <li className={styles.LI}>
              <span style={{}}>
                <img src={Tick} style={{ width: 11 }} /> Effective Advertising
                Pointers
              </span>
            </li>
            <li className={styles.LI}>
              <span style={{}}>
                <img src={Tick} style={{ width: 11 }} /> Kook 2 Directory Add
                Url Free
              </span>
            </li>
          </ul>
          <span className={styles.lastLable}>Discover Now</span>
        </Col>
      </Row>
    </Layout>
  )
}
