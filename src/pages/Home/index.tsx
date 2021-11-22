import { motion } from "framer-motion";

//context
import { Context } from "../../store/context";
import { useContext } from "react";

//components
import Search from "../../components/Search/Search";

//css
import classes from "./index.module.css";

const Home = () => {
  const ctx = useContext(Context);
  return (
    <motion.main
      className={classes["search-wrapper"]}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Search ctx={ctx} />
    </motion.main>
  );
};

export default Home;
