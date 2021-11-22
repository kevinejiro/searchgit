import { render, screen } from "./util/Utils/test-utils";
import App from "./App";

describe("<App />", () => {
  it("renders the component without error", () => {
    const component = render(<App />);
    const button = screen.getByText(/Submit/i);
    expect(button).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
