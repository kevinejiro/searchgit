import { render, screen } from "../../util/Utils/test-utils";
import userEvent from "@testing-library/user-event";

import { Pagination, Props } from "./index";
describe("<Pagination />", () => {
  it("renders the component from the beginning", () => {
    const mockProps: Props = {
      page: 1,
      totalPages: 5,
      handlePagination: jest.fn(),
    };
    const component = render(<Pagination {...mockProps} />);

    userEvent.click(
      screen.getByRole("button", {
        name: /1/i,
      })
    );
    expect(mockProps.handlePagination).toBeCalledWith(1);

    userEvent.click(
      screen.getByRole("button", {
        name: /2/i,
      })
    );
    expect(mockProps.handlePagination).toBeCalledWith(2);

    userEvent.click(
      screen.getByRole("button", {
        name: /3/i,
      })
    );
    expect(mockProps.handlePagination).toBeCalledWith(3);

    userEvent.click(
      screen.getByRole("button", {
        name: />/i,
      })
    );
    expect(mockProps.handlePagination).toBeCalledWith(2);
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
});
