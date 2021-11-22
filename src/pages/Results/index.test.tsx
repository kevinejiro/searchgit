import { render } from "../../util/Utils/test-utils";

import Results from "./index";
describe("<Results />", () => {
  it("renders the component without error", () => {
    const component = render(<Results />);
    expect(component).toMatchSnapshot();
  });
});
