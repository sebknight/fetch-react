import React from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <h1 className="heading">Ready to see a dog?</h1>
      <div className="btn-container">
        <Button
          className="btn"
          label="Fetch!"
          onClick={() => dispatch({ type: "dog/fetchDogRequest" })}
          title="Fetch dog"
        />
      </div>
    </header>
  );
};

export default Header;
