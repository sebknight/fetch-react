import configureStore from "redux-mock-store";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../";

const mockStore = configureStore();
const initialState = {
  dog: {
    url: "/",
    loading: false,
    error: false,
  },
  wiki: { title: "", snippet: "", pageId: 0, loading: false, error: false },
};

describe("should display", () => {
  it("should render", () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.queryByTestId("Header-heading")).toHaveTextContent(
      "Ready to see a dog?"
    );
  });
});
