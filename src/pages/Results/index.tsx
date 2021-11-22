import { motion } from "framer-motion";
import { useContext } from "react";
import { Context } from "../../store/context";
import useLocalStorage from "use-local-storage";

// components
import TopSearch from "../../components/Search/TopSearch";
import ResultTable from "../../components/ResultTable/ResultTable";
import { Pagination } from "../../components/Pagination";

// utils
import useMedia from "../../util/Hooks/useMedia";

//css imports
import classes from "../Home/index.module.css";

const transition = { duration: 1, ease: ["easeInOut"] };
const transitionin = { duration: 0.6, ease: ["easeOut"], delay: 1.5 };
const transitionExit = { duration: 0.6, ease: ["easeOut"], delay: 0 };

const Results = () => {
  const ctx = useContext(Context);
  const deviceView = useMedia(
    // Media queries
    ["(min-width: 600px)"],
    // Device Default(relates to above media queries by array index)
    ["list"],
    // Default view
    "grid"
  );

  // set view perference to local storage
  const [viewPreference, setViewPreference] = useLocalStorage(
    "table_view_preference",
    deviceView
  );

  // motion animation object
  const articleAnimateState = {
    hidden: { opacity: 0, y: "5rem" },
    show: { opacity: 1, y: "0rem", transition: transitionin },
    exit: { opacity: 0, y: "5rem", transition: transitionExit },
  };

  // updates setPage state in context
  const handlePages = (updatePage: number) => ctx.setPage(updatePage);

  return (
    <motion.main
      className={classes["search-wrapper"]}
      transition={transition}
      initial={{ backgroundPosition: "50% 0vh" }}
      animate={{ backgroundPosition: "50% 90vh" }}
      exit={{ backgroundPosition: "50% 0vh" }}
    >
      <TopSearch ctx={ctx} />
      <ResultTable
        viewPreference={viewPreference}
        setViewPreference={setViewPreference}
        users={ctx.users}
        setFilterParam={ctx.setFilterParam}
        isEmptyList={ctx.isEmptyList}
        isLoading={ctx.isLoading}
        filterParam={ctx.filterParam}
        username={ctx.username}
        errorMessage={ctx.errorMessage}
      />
      {ctx.usersTotalCount > 1 && (
        <motion.div
          className={classes["pagination-container"]}
          variants={articleAnimateState}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Pagination
            page={ctx.page}
            totalPages={ctx.pageCount}
            handlePagination={handlePages}
          />
        </motion.div>
      )}
    </motion.main>
  );
};

export default Results;
