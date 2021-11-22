import { render } from "../../util/Utils/test-utils";
// import userEvent from "@testing-library/user-event";

import Search, { Props } from "./Search";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("<Pagination />", () => {
  it("renders the component without error", () => {
    const mockProps: Props = {
      ctx: {
        users: [],
        errorMessage: "",
        usersTotalCount: 10,
        username: "kevin",
        isEmptyList: false,
        isLoading: false,
        filterParam: "",
        page: 1,
        setUsername: jest.fn(),
        setFilterParam: jest.fn(),
        setPage: jest.fn(),
        pageCount: 1,
      },
    };
    const component = render(<Search {...mockProps} />);
    expect(component).toMatchSnapshot();

    // expect(mockProps.handlePagination).toBeCalledWith(2);
    // wrapper.getByRole("button").at(2).simulate("click");
    // expect(mockProps.handlePagination).toBeCalledWith(3);w
    // wrapper.getByRole("button").at(3).simulate("click");
    // expect(mockProps.handlePagination).toBeCalledWith(5);
    // wrapper.getByRole("button").at(4).simulate("click");
    // expect(mockProps.handlePagination).toBeCalledWith(2);
    // expect(wrapper.render()).toMatchSnapshot();
  });
  it("renders the component from the end", () => {
    const mockProps: Props = {
      ctx: {
        users: [],
        errorMessage: "",
        usersTotalCount: 10,
        username: "kevin",
        isEmptyList: false,
        isLoading: false,
        filterParam: "",
        page: 1,
        setUsername: jest.fn(),
        setFilterParam: jest.fn(),
        setPage: jest.fn(),
        pageCount: 1,
      },
    };

    const component = render(<Search {...mockProps} />);
    expect(component).toBeDefined();
  });
});
