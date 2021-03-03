import configureStore from "redux-mock-store";
import Content from "../";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

const mockStore = configureStore();
const initialState = {
  dog: {
    url: "/",
    loading: false,
    error: false,
  },
  wiki: { title: "", snippet: "", pageId: 0, loading: false, error: false },
};

describe("should display conditionally", () => {
  it("should not render with no data", () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Content />
      </Provider>
    );

    expect(screen.queryByTestId("Content-card")).toBeNull();
  });

  it("should render loading indicator", () => {
    const state = {
      ...initialState,
      dog: { loading: true },
    };

    const store = mockStore(state);

    render(
      <Provider store={store}>
        <Content />
      </Provider>
    );

    expect(screen.queryByTestId("LoadingIndicator")).not.toBeNull();
  });

  it("should render with data", () => {
    const state = {
      dog: {
        url: "/test",
        loading: false,
        error: false,
      },
      wiki: {
        title: "Test",
        snippet: "abc",
        pageId: 1,
        loading: false,
        error: false,
      },
    };
    const store = mockStore(state);

    render(
      <Provider store={store}>
        <Content />
      </Provider>
    );

    expect(screen.queryByTestId("Content-title")).toHaveTextContent("Test");
    expect(screen.queryByTestId("Content-snippet")).toHaveTextContent("abc");
    expect(screen.queryByTestId("Content-link")).not.toBeNull();
  });
});
