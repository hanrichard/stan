import { renderHook, act } from "@testing-library/react-hooks";
import { useCategory } from "./useCategory";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("useCategory", () => {
  it("initial state", () => {
    const { result } = renderHook(() => useCategory());
    expect(result.current.isFetching).toBe(true);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toBeUndefined();
  });

  it("fetches data successfully", async () => {
    const mockData = {
      total: 1,
      entries: [
        {
          title: "Test Movie",
          description: "A test movie description",
          programType: "movie",
          images: {
            "Poster Art": {
              url: "http://example.com/test.jpg",
              width: 100,
              height: 100,
            },
          },
          releaseYear: 2020,
        },
      ],
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result, waitForNextUpdate } = renderHook(() => useCategory());

    await act(async () => {
      await waitForNextUpdate();
    })

    expect(result.current.isFetching).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toEqual(mockData);
  });

  it("handles error during fetch", async () => {
    fetchMock.mockReject(new Error("Network error"));

    const { result, waitForNextUpdate } = renderHook(() => useCategory());

    await act(async () => {
      await waitForNextUpdate();
    })

    expect(result.current.isFetching).toBe(false);
    expect(result.current.error).toBe("Network error");
    expect(result.current.data).toBeUndefined();
  });

  it("throws error when network response is not ok", async () => {
    fetchMock.mockResponseOnce("", { status: 500 }); // Mock a 500 error response

    const { result, waitForNextUpdate } = renderHook(() => useCategory());

    await act(async () => {
      await waitForNextUpdate();
    })

    expect(result.current.isFetching).toBe(false);
    expect(result.current.error).toBe("Network response was not ok");
    expect(result.current.data).toBeUndefined();
  });
});
