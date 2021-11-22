// components
import UsersListItem from "./UsersListItem";
import UsersGridItem from "./UsersGridItem";
import Loading from "../common/Loading/Loading";

// types
import { User } from "../../App";

// css import
import classes from "./ResultTable.module.css";

type Props = {
  viewPreference: string;
  users: User[];
  isEmptyList: boolean;
  isLoading: boolean;
  filterParam: string;
  errorMessage: string;
};

const UsersList: React.FC<Props> = (props) => {
  let usersList;
  let listGridItem;

  // render usersList based on view preference prop ( list or grid )
  switch (props.viewPreference) {
    case "grid":
      usersList = props.users.map((user) => (
        <UsersGridItem key={user.id} user={user} />
      ));
      listGridItem = (
        <div className={classes["list_container"]}>
          <div className={classes["grid-header"]}>Profiles</div>
          <div className={classes["grid-body-wrapper"]}>{usersList}</div>
        </div>
      );
      break;
    case "list":
      usersList = props.users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ));
      listGridItem = (
        <table
          className={classes["list_container"]}
          cellPadding="5"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <th
                colSpan={1}
                className={`${classes["list_header_text"]} ${classes["profile"]}`}
              >
                Login
              </th>
              <th colSpan={1} className={classes["list_header_text"]}>
                Type
              </th>
            </tr>
          </thead>
          <tbody className={classes["t-body-page"]}>{usersList}</tbody>
        </table>
      );
      break;
    default:
      break;
  }
  return (
    <section className={classes["table-section-wrapper"]}>
      {props.isLoading ? (
        <Loading />
      ) : props.errorMessage === "" ? (
        <div className={classes["table-container"]}>
          {!props.isEmptyList ? (
            listGridItem
          ) : (
            <div className={classes["empty-list"]}>
              <div className={classes["empty-list-header"]}>
                No Accounts retrieved
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={classes["empty-list"]}>
          <div className={classes["empty-list-header-error"]}>
            {props.errorMessage}
          </div>
        </div>
      )}
    </section>
  );
};

export default UsersList;
