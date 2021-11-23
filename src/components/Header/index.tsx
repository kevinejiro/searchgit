import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useLocalStorage from "use-local-storage";

// icons
import MoonIcon from "../common/MoonIcon";
import SunIcon from "../common/SunIcon";
import GitIcon from "../common/GitIcon";

// css import
import classes from "./index.module.css";

const transition = { duration: 0.6, ease: ["easeOut"], delay: 1.2 };

const Header: React.FC = () => {
  // Detect if the user has dark color theme.
  const prefferedDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage<string>(
    "theme",
    prefferedDarkMode ? "dark" : "light"
  );

  let location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("theme-mode", theme);
  }, [theme]);

  const toggleThemeHandler = (mode: string) => {
    if (mode === "dark") {
      document.documentElement.setAttribute("theme-mode", "dark");
      setTheme("dark");
    } else if (mode === "light") {
      document.documentElement.setAttribute("theme-mode", "light");
      setTheme("light");
    }
  };

  return (
    <header className={classes.header} data-theme={theme}>
      <div
        className={classes.headerinner}
        style={{
          justifyContent:
            location.pathname === "/results" ? "space-between" : "flex-end",
        }}
      >
        {location.pathname === "/results" && (
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <motion.div
              initial={{ x: "10rem", opacity: 0 }}
              animate={{ x: "0rem", opacity: 1 }}
              transition={transition}
              className={classes["search-icon-wrapper"]}
            >
              <div className={classes["search-icon"]}>
                <GitIcon />
              </div>
              <div className={classes["search-icon-text"]}>
                search<span>Git</span>
              </div>{" "}
            </motion.div>
          </Link>
        )}

        <div
          className={`${classes["theme-mode"]} ${
            classes[`${location.pathname === "/results" ? "result" : ""}`]
          }`}
          // style={{
          //   display: location.pathname === "/results" ? "none" : "flex",
          // }}
        >
          <div
            onClick={() => toggleThemeHandler("dark")}
            className={classes["moon-wrapper"]}
            data-testid="moon-wrapper"
          >
            <MoonIcon fill={theme === "dark" ? "#27D3A5" : "#3E424B"} />
          </div>
          <div
            onClick={() => toggleThemeHandler("light")}
            data-testid="sun-wrapper"
            className={classes["sun-wrapper"]}
          >
            <SunIcon fill={theme !== "light" ? "#3E424B" : "#27D3A5"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
