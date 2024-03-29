import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ContextProvider } from "../../store/context";

const AllTheProviders: FC = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
