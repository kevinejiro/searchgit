import { render } from "../../util/Utils/test-utils";
// import userEvent from "@testing-library/user-event";

import ResultTable, { Props } from "./ResultTable";
describe("<ResultTable />", () => {
  it("renders the component without error", () => {
    const mockProps: Props = {
      setViewPreference: jest.fn(),
      viewPreference: "list",
      users: [],
      setFilterParam: jest.fn(),
      isEmptyList: true,
      isLoading: false,
      filterParam: "user",
      username: "ejiro",
      errorMessage: "",
    };
    const component = render(<ResultTable {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});
