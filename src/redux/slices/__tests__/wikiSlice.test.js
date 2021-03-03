import reducer, {
  fetchWikiRequest,
  fetchWikiSuccess,
  fetchWikiFailure,
  clearData,
} from "../wikiSlice";

const initialState = 
  {
    title: "",
    snippet: "",
    pageId: 0,
    loading: false,
    error: false,
  }

describe("wiki reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle request", () => {
    expect(
      reducer(
        {},
        {
          type: fetchWikiRequest,
        }
      )
    ).toEqual({
      loading: true
    });
  });

  it("should handle success and clean title and snippet", () => {
    expect(
      reducer(
        {},
        {
          type: fetchWikiSuccess,
          payload: {
            title: "Abc (disambiguation)",
            snippet: "Testing whether it <span>cleans</span>.",
            pageid: 1,
          },
        }
      )
    ).toEqual({
      title: "Abc",
      snippet: "Testing whether it cleans.",
      pageId: 1,
      loading: false,
    });
  });

  it("should return the default snippet when there is no period", () => {
    expect(
      reducer(
        {},
        {
          type: fetchWikiSuccess,
          payload: {
            title: "Abc",
            snippet: "Testing whether it <span>cleans</span>",
            pageid: 1,
          },
        }
      )
    ).toEqual({
      title: "Abc",
      snippet: "No facts found, but that's a great dog!",
      pageId: 1,
      loading: false,
    });
  });

  it("should handle failure", () => {
    expect(
      reducer(
        {},
        {
          type: fetchWikiFailure,
        }
      )
    ).toEqual({
      title: "Cool Dog",
      snippet: "No facts found, but that's a great dog!",
      pageId: 0,
      loading: false,
      error: true,
    });
  });

  it("should handle clearing data", () => {
    expect(
      reducer(
        {
          title: "something",
          snippet: "something else",
          pageId: 1,
          loading: false,
          error: false
        },
        {
          type: clearData,
        }
      )
    ).toEqual(initialState);
  });
});
