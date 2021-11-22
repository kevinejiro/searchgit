import classes from "./Search.module.css";
import GitIcon from "../common/GitIcon/index";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { ctx } from "../../App";

export type Props = {
  ctx: ctx;
};

const Search: React.FC<Props> = ({ ctx }) => {
  let history = useHistory();
  const [enteredUsername, setEnteredUsername] = useState(ctx?.username);

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredUsername.trim() !== "") {
      ctx.setUsername(enteredUsername);
      history.push("/results");
    }
  };

  return (
    <form
      className={`${classes["container"]} ${
        classes[`${enteredUsername.trim() !== "" && "active"}`]
      }`}
      onSubmit={searchHandler}
      autoComplete="off"
    >
      <motion.div
        initial={{ y: "5rem", opacity: 0 }}
        animate={{ y: "0rem", opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes["search-icon-wrapper"]}
      >
        <div className={classes["search-icon"]}>
          <GitIcon />
        </div>
        <div className={classes["search-icon-text"]}>
          search<span>Git</span>
        </div>
      </motion.div>
      <input
        className={ctx?.users.length > 0 ? classes["user-not-found-input"] : ""}
        type="text"
        name="username"
        autoFocus
        value={enteredUsername}
        placeholder="Search GitHub username…"
        onChange={(e) => setEnteredUsername(e.target.value)}
      />
      <button
        className={enteredUsername.trim() !== "" ? classes["active"] : ""}
      >
        Submit
      </button>
    </form>
  );
};

export default Search;
