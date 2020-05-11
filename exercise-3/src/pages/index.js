import React from "react"
import style from "./blogs.module.css"
import User1 from "../assets/img/user1.jpeg"
import User2 from "../assets/img/user2.jpeg"
import User3 from "../assets/img/user3.jpeg"
import User from "../assets/img/user.png"
import Email from "../assets/img/email.png"
import Time from "../assets/img/clock.png"
import Location from "../assets/img/location.png"
// import {}  from "gatsby"
import { graphql } from "gatsby"
export default function Blogs({ data }) {
  console.log("GRAPH QL JSON DATA", data)
  return (
    <div className={style.blogsContainer}>
      <h2 className={style.mainHeading}> Our Schedule</h2>
      <span className={style.subHeading}>
        Do not miss anything topic about the event
      </span>
      <div className={style.timeLineContainer}>
        <div className={[style.timeLineBox, style.timeLineActive].join(" ")}>
          <span className={style.timeLineHeading}>Day 1</span>
          <span className={style.timeLineSubHeading}> May 04,2019</span>
        </div>
        <div className={style.timeLineBox}>
          <span className={style.timeLineHeading}>Day 1</span>
          <span className={style.timeLineSubHeading}> May 04,2019</span>
        </div>
        <div className={style.timeLineBox}>
          <span className={style.timeLineHeading}>Day 1</span>
          <span className={style.timeLineSubHeading}> May 04,2019</span>
        </div>
        <div className={style.timeLineBox}>
          <span className={style.timeLineHeading}>Day 1</span>
          <span className={style.timeLineSubHeading}> May 04,2019</span>
        </div>
        <div className={style.timeLineBox}>
          <span className={style.timeLineHeading}>Day 1</span>
          <span className={style.timeLineSubHeading}> May 04,2019</span>
        </div>
      </div>

      {data.allBlogItemsJson.edges.map(item => {
        return (
          <div className={style.BlogsListContainer}>
            <div className={style.BlogsBox}>
              <div className={style.BlogImage}>
                <img
                  src={require(`../assets/img/${item.node.image}.jpeg`)}
                  alt=""
                />
              </div>
              <div className={style.BlogNameDetails}>
                <h3
                  style={{
                    height: "20px",
                  }}
                >
                  {item.node.blogTitle}
                </h3>
                <div className={style.BlogNameMetaData}>
                  <img src={User} /> <span> {item.node.name} /</span>
                  <img style={{ marginLeft: 15 }} src={Email} />{" "}
                  <span>{item.node.email}</span>
                </div>
              </div>
              <div className={style.BlogTimeDetail}>
                <div className={style.BlogTimeMetaData}>
                  <div className={style.TimeInnerData}>
                    <img src={Time} /> <span>{item.node.time}</span>
                  </div>
                  <div className={style.TimeInnerData}>
                    <img src={Location} /> <span>{item.node.place}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    allBlogItemsJson {
      edges {
        node {
          id
          blogTitle
          date
          day
          email
          image
          name
          place
          time
        }
      }
    }
  }
`
