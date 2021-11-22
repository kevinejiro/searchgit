import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Results from "./pages/Results";

export type User = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id?: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
};

export type ctx = {
  users: User[];
  errorMessage: string;
  usersTotalCount: number;
  username: string;
  isEmptyList: boolean;
  isLoading: boolean;
  filterParam: string;
  page: number;
  setUsername: (username: string) => void;
  setFilterParam: (filterParam: string) => void;
  setPage: (page: number) => void;
  pageCount: number;
};

function App() {
  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/results" render={() => <Results />} />
              <Route exact path="/" render={() => <Home />} />
              <Redirect to="/" />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
