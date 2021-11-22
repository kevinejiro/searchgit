// utils
import ValidationUtil from "../../util/Utils/ValidationUtil";

// image
import PlaceholderImage from "../../assets/images/MaskGroup18.svg";

// css import
import classes from "./ResultTable.module.css";

const UsersListItem = (props) => {
  let userName = ValidationUtil.nullChecker(props?.user?.login);
  let type = ValidationUtil.nullChecker(props?.user?.type);
  let imgUrl = props?.user?.avatar_url || PlaceholderImage;

  return (
    <tr className={classes["single_tab"]} key={props?.user?.id}>
      <td className={`${classes["single_tab-td"]} ${classes["profile"]}`}>
        <img
          src={imgUrl}
          alt="avatar"
          className={classes["single_tab-td-image"]}
        />
        <div className={classes["single_tab-td_group"]}>
          <div className={classes["single_tab-td-name"]}>{userName}</div>
        </div>
      </td>
      <td className={classes["single_tab-td"]}>{type}</td>
    </tr>
  );
};

export default UsersListItem;
