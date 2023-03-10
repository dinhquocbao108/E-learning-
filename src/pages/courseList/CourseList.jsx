// import { Pagination } from "@mui/material";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import styles from "./courseList.module.scss";

const cx = classNames.bind(styles);
CourseList.propTypes = {};

function CourseList({ courseList }) {
  let navigate = useNavigate();
  const handleCourseClick = (id) => {
    let path = `/detail/${id}`;
    navigate(path);
  };
  return (
    <div>
      <div className={cx("row", "courses-list")}>
        {courseList?.map((course) => (
          <div
            key={course.id}
            className={cx(
              "col",
              "s-12",
              "m-12",
              "ml-4",
              "l-3",
              "card-global-res"
            )}
            style={{ display: "flex", flex: "auto" }}
            >
            <div href="" className={cx("card-global")}
            onClick={()=>handleCourseClick(course.id)}
            >
              <img src={course.image_url} alt={course.title} />
              <span className={cx("sticker-card", "line-clamp")}>
                {course.title}
              </span>
              <div className={cx("card-body-global")}>
                <div className={cx("card-description")}>
                  <h6 className={cx("line-clamp", "line-2")}>
                    {course.description}
                  </h6>
                </div>

                <div className={cx("title-maker")}>
                  <div className={cx("img-card-footer")}>
                    <img
                      className={cx("avatar")}
                      src={course.author.avatar}
                      alt="avatar"
                    />
                  </div>
                  <span>{course.author.name}</span>
                </div>
              </div>
              <div className={cx("card-footer")}>
                <div>
                  <p>
                    {new Intl.NumberFormat("de-DE").format(course.old_price)}
                    <sup>đ</sup>
                  </p>
                  <p>
                    {new Intl.NumberFormat("de-DE").format(course.price)}{" "}
                    <sup>đ</sup>
                  </p>
                </div>
                <div>
                  <i className={cx("fa", " fa-star")}></i>
                  <span className={cx("text-star")}>{course.rate}</span>
                  <span className={cx("color-card-title")}>
                    ({course.rateAmount})
                  </span>
                </div>
              </div>
            </div>
          </div>

        ))}
     
      </div>
    </div>
  );
}

export default CourseList;
