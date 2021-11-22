import { render } from "../../util/Utils/test-utils";
// import userEvent from "@testing-library/user-event";

import Home from "./index";
describe("<Home />", () => {
  it("renders the component without error", () => {
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
  });
});
