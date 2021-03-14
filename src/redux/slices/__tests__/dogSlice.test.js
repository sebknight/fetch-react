import reducer, {
  fetchDogRequest,
  fetchDogSuccess,
  fetchDogFailure,
  clearData,
} from "../dogSlice";

const initialState = {
  url: "/",
  loading: false,
  error: false,
};

describe("dog reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle request", () => {
    expect(
      reducer(
        {},
        {
          type: fetchDogRequest,
        }
      )
    ).toEqual({
      loading: true,
    });
  });

  it("should handle success", () => {
    expect(
      reducer(
        {},
        {
          type: fetchDogSuccess,
          payload: "/test",
        }
      )
    ).toEqual({
      url: "/test",
      loading: false,
    });
  });

  it("should handle failure", () => {
    expect(
      reducer(
        {},
        {
          type: fetchDogFailure,
        }
      )
    ).toEqual({
      url: "/",
      loading: false,
      error: true,
    });
  });

  it("should handle clearing data", () => {
    expect(
      reducer(
        {
          url: "something",
          loading: false,
          error: true,
        },
        {
          type: clearData,
        }
      )
    ).toEqual(initialState);
  });
});
