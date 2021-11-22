import { motion } from "framer-motion";
import React, { useState } from "react";

// type
import { ctx } from "../../App";

// css import
import classes from "./Search.module.css";

type Props = {
  ctx: ctx;
};

const transition = { duration: 0.6, ease: ["easeOut"] };

const TopSearch: React.FC<Props> = ({ ctx }) => {
  const [enteredUsername, setEnteredUsername] = useState(ctx?.username);

  // this updates setUsername state in context
  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredUsername.trim() !== "") {
      ctx.setUsername(enteredUsername);
    }
  };

  return (
    <motion.form
      className={`${classes["container"]} ${
        classes[`${enteredUsername.trim() !== "" && "active"}`]
      }`}
      onSubmit={searchHandler}
      autoComplete="off"
      transition={transition}
      initial={{ top: "50%", zIndex: 1, position: "absolute" }}
      animate={{ top: "4%", zIndex: 4, position: "absolute" }}
      exit={{ top: "50%", zIndex: 1, position: "absolute" }}
    >
      <input
        className={
          ctx?.errorMessage !== "" && ctx?.users.length > 0
            ? classes["user-not-found-input"]
            : ""
        }
        type="text"
        name="username"
        autoFocus
        value={enteredUsername}
        placeholder="Search GitHub username…"
        onChange={(e) => setEnteredUsername(e.target.value)}
      />
      {ctx?.errorMessage === "" &&
        ctx?.users.length > 0 &&
        enteredUsername !== "" && (
          <p className={classes["count"]}>
            {ctx?.usersTotalCount}{" "}
            {ctx?.usersTotalCount > 1 ? "results" : "result"}
          </p>
        )}
      <button
        className={enteredUsername.trim() !== "" ? classes["active"] : ""}
      >
        Submit
      </button>
    </motion.form>
  );
};

export default TopSearch;
