import { motion } from "framer-motion";

// image
import PlaceholderImage from "../../assets/images/MaskGroup18.svg";

// util
import ValidationUtil from "../../util/Utils/ValidationUtil";

// css import
import classes from "./ResultTable.module.css";

const UsersGridItem = (props) => {
  let userName = ValidationUtil.nullChecker(props?.user?.login);
  let type = ValidationUtil.nullChecker(props?.user?.type);
  let imgUrl = props?.user?.avatar_url || PlaceholderImage;

  return (
    <motion.div
      whileHover={{
        transform: "translate3d(0px, -8px, 0px)",
        scale: 1.03,
        transition: { duration: 0.6 },
      }}
      key={props?.contributor?.id}
      className={classes["grid-item"]}
    >
      <div className={classes["grid-item--image-container"]}>
        <img
          className={classes["grid-item--image-container-image"]}
          src={imgUrl}
          alt="avatar"
        />
      </div>
      <div className={classes["grid-item--info"]}>
        <div className={classes["single_tab-td_group"]}>
          <div className={classes["single_tab-td-name"]}>{userName}</div>
        </div>
        <div className={classes["grid-item--info-brief"]}>
          <div className={classes["info-brief-line"]}>
            <div className={classes["info-brief-line-item"]}>
              <div className={classes["info-brief-line-item-header"]}>Type</div>
              <span>{type}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UsersGridItem;
