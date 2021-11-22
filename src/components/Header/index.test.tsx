import { render } from "../../util/Utils/test-utils";
// import userEvent from "@testing-library/user-event";

import Header from "./index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/results",
  }),
}));

describe("<Header />", () => {
  it("renders the component without errors", () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  });
  // it("changes theme successfully", () => {
  //   render(<Header />);
  //   const toggleThemeHandler = jest.fn();
  //   userEvent.click(screen.getByTestId("moon-wrapper"));
  //   expect(toggleThemeHandler).toBeCalledWith("dark");
  // });
});
