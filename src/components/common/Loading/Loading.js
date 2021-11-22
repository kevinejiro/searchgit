/* eslint-disable react/style-prop-object */
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes["loading-wrapper"]}>
      <span className={classes["loading-wrapper-item"]}>↓</span>
      <span
        className={classes["loading-wrapper-item"]}
        style={{ "--delay": "0.1s" }}
      >
        ↓
      </span>
      <span
        className={classes["loading-wrapper-item"]}
        style={{ "--delay": "0.3s" }}
      >
        ↓
      </span>
      <span
        className={classes["loading-wrapper-item"]}
        style={{ "--delay": "0.4s" }}
      >
        ↓
      </span>
      <span
        className={classes["loading-wrapper-item"]}
        style={{ "--delay": "0.5s" }}
      >
        ↓
      </span>
    </div>
  );
};

export default Loading;
