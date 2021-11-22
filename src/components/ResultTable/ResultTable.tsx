import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// utils
import ActiveFilterImageUtil from "../../util/Utils/ActiveFilterImageUtil";

// components
import UsersList from "./UsersList";

//css import
import classes from "./ResultTable.module.css";

//type import
import { User } from "../../App";

export type Props = {
  setViewPreference: (viewPreference: string) => void;
  viewPreference: string;
  users: User[];
  setFilterParam: (filterParam: string) => void;
  isEmptyList: boolean;
  isLoading: boolean;
  filterParam: string;
  username: string;
  errorMessage: string;
};

// transition variants
const transition = { duration: 0.6, ease: ["easeOut"], delay: 1.4 };
const transitionExit = { duration: 0.1, ease: ["easeOut"], delay: 0 };

const ResultTable: React.FC<Props> = ({
  setViewPreference,
  viewPreference,
  users,
  setFilterParam,
  isEmptyList,
  isLoading,
  filterParam,
  errorMessage,
}) => {
  // state
  const [imageUrlList, setImageUrlList] = useState([""]);

  let listActive;
  let gridActive;
  if (viewPreference === "list") {
    listActive = "active";
    gridActive = "";
  } else {
    gridActive = "active";
    listActive = "";
  }

  // motion animation object
  const articleAnimateState = {
    hidden: { opacity: 0, transition: transition },
    show: { opacity: 1, transition: transition },
    exit: { opacity: 0, transition: transitionExit },
  };

  // toggle active inactive images for filter bar
  useEffect(() => {
    let imageUrlList = ActiveFilterImageUtil.getImageList(filterParam);
    setImageUrlList(imageUrlList);
  }, [filterParam]);

  return (
    <motion.article
      variants={articleAnimateState}
      initial="hidden"
      animate="show"
      exit="exit"
      className={classes["result-table-container"]}
    >
      <div className={classes["result-table-main"]}>
        <aside className={classes["result-table-filter-bar"]}>
          <div className={classes["result-table-filter-bar-header"]}>
            <div className={classes.svgrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                <path
                  d="M13.119 10.691h-1.214V7.043a.405.405 0 10-.81 0v3.643H9.876a.4.4 0 00-.4.4v6.476a.4.4 0 00.4.4h1.214v2.429a.405.405 0 10.81 0v-2.415h1.214a.4.4 0 00.4-.4v-6.481a.4.4 0 00-.395-.404zM6.643 4.619H5.429V3.4a.4.4 0 10-.81 0v1.219H3.4a.4.4 0 00-.4.4v9.714a.4.4 0 00.4.4h1.219v3.238a.4.4 0 10.81 0v-3.228h1.214a.4.4 0 00.4-.4V5.024a.4.4 0 00-.4-.405zM19.595 7.452h-1.214V3.4a.405.405 0 00-.81 0v4.052h-1.219a.4.4 0 00-.4.4v9.31a.4.4 0 00.4.4h1.214V19.6a.405.405 0 00.81 0v-2.029h1.214a.4.4 0 00.4-.4V7.857a.4.4 0 00-.395-.405z"
                  className="b"
                  transform="translate(-122 -354) translate(119 351)"
                ></path>
              </svg>
            </div>

            <span>SORT BY</span>
          </div>
          <div className={classes["result-table-filter-bar-body"]}>
            <div
              className={`${classes["filter-bar-body-item"]} ${
                classes[`${filterParam === "user" && "active"}`]
              }`}
              onClick={() => setFilterParam("user")}
            >
              <img src={imageUrlList?.[0]} alt="xwthumbnail" />
              <span>Users</span>
            </div>
            <div
              className={`${classes["filter-bar-body-item"]} ${
                classes[`${filterParam === "org" && "active"}`]
              }`}
              onClick={() => setFilterParam("org")}
            >
              <img src={imageUrlList?.[1]} alt="thumbs Up" />
              <span>Orgs</span>
            </div>
          </div>
        </aside>
        <div className={classes["result-table-body-container"]}>
          <section className={classes["result-table-body-container"]}>
            <div className={classes["table-body-header"]}>
              <h1>Results</h1>
              <aside
                className={`${classes["result-table-filter-bar"]} ${classes["vertical"]}`}
              >
                <div className={classes["result-table-filter-bar-header"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path
                      d="M13.119 10.691h-1.214V7.043a.405.405 0 10-.81 0v3.643H9.876a.4.4 0 00-.4.4v6.476a.4.4 0 00.4.4h1.214v2.429a.405.405 0 10.81 0v-2.415h1.214a.4.4 0 00.4-.4v-6.481a.4.4 0 00-.395-.404zM6.643 4.619H5.429V3.4a.4.4 0 10-.81 0v1.219H3.4a.4.4 0 00-.4.4v9.714a.4.4 0 00.4.4h1.219v3.238a.4.4 0 10.81 0v-3.228h1.214a.4.4 0 00.4-.4V5.024a.4.4 0 00-.4-.405zM19.595 7.452h-1.214V3.4a.405.405 0 00-.81 0v4.052h-1.219a.4.4 0 00-.4.4v9.31a.4.4 0 00.4.4h1.214V19.6a.405.405 0 00.81 0v-2.029h1.214a.4.4 0 00.4-.4V7.857a.4.4 0 00-.395-.405z"
                      className="b"
                      transform="translate(-122 -354) translate(119 351)"
                    ></path>
                  </svg>
                  <span>SORT BY</span>
                </div>
                <div className={classes["result-table-filter-bar-body"]}>
                  <div
                    className={`${classes["filter-bar-body-item"]} ${
                      classes[`${filterParam === "user" && "active"}`]
                    }`}
                    onClick={() => setFilterParam("user")}
                  >
                    <img src={imageUrlList?.[0]} alt="thumbnail" />
                    <span>Users</span>
                  </div>
                  <div
                    className={`${classes["filter-bar-body-item"]} ${
                      classes[`${filterParam === "type" && "active"}`]
                    }`}
                    onClick={() => setFilterParam("org")}
                  >
                    <img src={imageUrlList?.[1]} alt="thumbs Up" />
                    <span>Orgs</span>
                  </div>
                </div>
              </aside>
              <div
                className={classes["table-view-toggle-wrapper"]}
                style={{
                  visibility: users.length === 0 ? "hidden" : "visible",
                }}
              >
                <span>VIEW</span>
                <div className={classes["table-view-toggle"]}>
                  <div
                    className={`${classes["table-view-toggle-item"]} ${
                      classes["left"]
                    } ${classes[`${listActive}`]}`}
                    onClick={() => setViewPreference("list")}
                  >
                    <span>List</span>
                    <div className={classes["table-view-toggle-item-img"]}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26.25 30"
                      >
                        <g transform="translate(-1)">
                          <path
                            d="M25.375 0h-22.5A1.875 1.875 0 001 1.875v11.25A1.875 1.875 0 002.875 15h22.5a1.875 1.875 0 001.875-1.875V1.875A1.875 1.875 0 0025.375 0z"
                            className={classes["a"]}
                          ></path>
                          <path
                            d="M0 0H26V3H0z"
                            className={classes["a"]}
                            transform="translate(1 19)"
                          ></path>
                          <path
                            d="M0 0H26V4H0z"
                            className={classes["a"]}
                            transform="translate(1 26)"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`${classes["table-view-toggle-item"]} ${
                      classes[`${gridActive}`]
                    }`}
                    onClick={() => setViewPreference("grid")}
                  >
                    <span>Grid</span>
                    <div className={classes["table-view-toggle-item-img"]}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30.001 30"
                      >
                        <path
                          d="M28 30H2a2 2 0 01-2-2V2a2 2 0 012-2h26a2 2 0 012 2v26a2 2 0 01-2 2zM17 17v8h8v-8h-8zM5 17v8h8v-8H5zM17 5v8h8V5h-8zM5 5v8h8V5H5z"
                          className={classes["a"]}
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <UsersList
              isLoading={isLoading}
              users={users}
              isEmptyList={isEmptyList}
              filterParam={filterParam}
              viewPreference={viewPreference}
              errorMessage={errorMessage}
            />
          </section>
        </div>
      </div>
    </motion.article>
  );
};

export default ResultTable;
