import classNames from "classnames/bind";
import styles from "./Courses.module.scss";
import { useState, useEffect } from "react";
import Card from "~/Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/Components/Button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://localhost:7152/api/Course/filter"
        );
        const jsonData = await response.json();
        setCourses(jsonData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    const fetchTotalPages = async () => {
      try {
        const response = await fetch(
          "https://localhost:7152/api/Course/paged?pageIndex=1&pageSize=6"
        );
        const jsonData = await response.json();
        setTotalPages(jsonData.totalPages);
      } catch (error) {
        console.error("Error fetching total pages:", error);
      }
    };

    fetchCourses();
    fetchTotalPages();
  }, []);

  const getCurrentCourses = () => {
    const indexOfLastCourse = currentPage * perPage;
    const indexOfFirstCourse = indexOfLastCourse - perPage;

    let currentCourses = courses;
    if (searchResults.length > 0) {
      currentCourses = searchResults;
    }

    return currentCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  };

  const handleSearch = () => {
    const filtered = courses.filter((course) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
    setCurrentPage(1);
  };

  const handleKeyPress = (event) => {
    console.log(event.target.onKeyPress);

    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className="row">
          <div className={cx("col-9")}>
            <div className={cx("row")}>
              <div className={cx("search-box")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  className={cx("input")}
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>
            </div>
            <div className={cx("row")}>
              {getCurrentCourses().map((item) => (
                <div key={item.courseID} className={cx("col-4")}>
                  <Card
                    courseId={item.courseID}
                    title={item.courseName}
                    image={item.courseImageURL}
                    price={item.coursePrice}
                    discountedPrice={item.courseDisCount}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {Array.from({ length: totalPages }, (index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
