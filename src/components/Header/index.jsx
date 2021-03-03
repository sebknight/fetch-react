import React from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="flex flex-col justify-center items-center">
      <h1
        data-testid="Header-heading"
        className="text-3xl font-bold text-green-600 mt-6 mb-6"
      >
        Ready to see a dog?
      </h1>
      <Button
        data-testid="Header-button"
        label="Fetch!"
        onClick={() => dispatch({ type: "dog/fetchDogRequest" })}
        title="Fetch dog"
      />
    </header>
  );
};

export default Header;
