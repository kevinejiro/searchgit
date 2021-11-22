import React, { ReactNode, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

type Props = {
  children: ReactNode;
};

const Context = React.createContext({
  users: [],
  errorMessage: "",
  filterParam: "",
  usersTotalCount: 0,
  username: "",
  isEmptyList: false,
  isLoading: false,
  setUsername: (username: string) => {},
  setFilterParam: (filterParam: string) => {},
  setPage: (page: number) => {},
  page: 1,
  pageCount: 0,
});

function ContextProvider(props: Props) {
  const [users, setUsers] = useState([]);
  const [usersTotalCount, setUsersTotalCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");

  const [page, setPage] = useState(1);
  const [filterParam, setFilterParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyList, setIsEmptyList] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (username !== "") {
      getUsersHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterParam, page, username]);

  const getUsersHandler = async () => {
    setIsLoading(true);
    // eslint-disable-next-line
    let response;
    try {
      response = await axios.get(
        `https://api.github.com/search/users?q=${username} in:login type:${filterParam}&per_page=9&page=${page}&order=asc`
      );

      const data = response?.data;
      setPageCount(Math.ceil(data?.total_count / 9));
      setUsers(data?.items);
      setUsersTotalCount(data?.total_count);
      setErrorMessage("");

      if (data?.total_count === 0) {
        setIsEmptyList(true);
      } else {
        setIsEmptyList(false);
      }
    } catch (err) {
      const error = err as AxiosError;
      console.log("error", error);
      if (error?.response) {
        // Request made and server responded
        setErrorMessage(`${error?.response?.status}  Something went wrong :( `);
        console.log("Response Error", error?.response?.status);
      } else if (error?.request) {
        // The request was made but no response was received
        setErrorMessage("Unable to contact server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrorMessage(error?.message);
        console.log("Message Error", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        users,
        errorMessage,
        usersTotalCount,
        username,
        isLoading,
        filterParam,
        setUsername,
        setFilterParam,
        setPage,
        isEmptyList,
        page,
        pageCount,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
