import Button from "../";
import { fireEvent, screen, render } from "@testing-library/react";

describe("should render and fire function", () => {
  it("should fire function on click", () => {
    const fn = jest.fn();
    render(<Button label="Hi!" onClick={fn} />);

    fireEvent.click(screen.getByText("Hi!"));
    expect(fn).toHaveBeenCalled();
  });
});
