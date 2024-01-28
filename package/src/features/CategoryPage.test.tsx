import React from "react";
import { render, screen } from "@testing-library/react";
import { Category, filterResult } from "./CategoryPage"; // Adjust the import path
import * as mockRouter from "react-router-dom";
import * as useCategoryHook from "../hooks/useCategory";


jest.mock("../hooks/useCategory");
jest.mock("../components/card/Card", () => ({
  Card: () => <div>Mock Card</div>,
}));
jest.mock("react-router-dom", () => ({
  __esModule: true,
  useParams: jest.fn(),
}));
const useCat = jest.spyOn(useCategoryHook, 'useCategory');

const useParams = jest.spyOn(mockRouter, 'useParams');

describe("<Category />", () => {
  it("displays loading state", () => {
    useCat.mockReturnValue({
      data: undefined,
      isFetching: true,
      error: undefined,
    });
    useParams.mockReturnValue({ cat: "movie" });

    render(<Category />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays error state", () => {
    useCat.mockReturnValue({
      data: undefined,
      isFetching: false,
      error: "error",
    });
    useParams.mockReturnValue({ cat: "movie" });

    render(<Category />);
    expect(
      screen.getByText("Oops, something went wrong...")
    ).toBeInTheDocument();
  });

  it("displays no category message", () => {
    useCat.mockReturnValue({
      data: undefined,
      isFetching: false,
      error: undefined,
    });
    useParams.mockReturnValue({ cat: undefined });

    render(<Category />);
    expect(screen.getByText("No Category")).toBeInTheDocument();
  });

  it("displays data correctly", () => {
    const mockData = {
      entries: [
        {
          title: "Test Movie",
          programType: "movie",
          images: { "Poster Art": { url: "test-url" } },
          releaseYear: 2020,
        },
      ],
    } as any;
    useCat.mockReturnValue({
      data: mockData,
      isFetching: false,
      error: undefined,
    });
    useParams.mockReturnValue({ cat: "movie" });

    render(<Category />);
    expect(screen.getByText("Popular Movies")).toBeInTheDocument();
  });
});

describe("filterResult", () => {
  const mockData = {
    entries: [
      {
        title: "Z Movie",
        programType: "movie",
        releaseYear: 2015,
        images: { "Poster Art": { url: "", width: 0, height: 0 } },
      },
      {
        title: "A Movie",
        programType: "movie",
        releaseYear: 2020,
        images: { "Poster Art": { url: "", width: 0, height: 0 } },
      },
      {
        title: "Old Movie",
        programType: "movie",
        releaseYear: 2005,
        images: { "Poster Art": { url: "", width: 0, height: 0 } },
      },
      {
        title: "B Series",
        programType: "series",
        releaseYear: 2018,
        images: { "Poster Art": { url: "", width: 0, height: 0 } },
      },
    ],
  };

  it("filters and sorts movies correctly", () => {
    const result = filterResult(mockData as any, "movie");
    expect(result).toHaveLength(2);
    expect(result?.[0].title).toBe("A Movie"); // Check if sorted correctly
    expect(result?.[1].title).toBe("Z Movie");
  });

  it("filters and sorts series correctly", () => {
    const result = filterResult(mockData as any, "series");
    expect(result).toHaveLength(1);
    expect(result?.[0].title).toBe("B Series");
  });

  it("returns empty array for unknown type", () => {
    const result = filterResult(mockData as any, "unknown");
    expect(result).toEqual([]);
  });

  it("handles empty or undefined data gracefully", () => {
    expect(filterResult(undefined, "movie")).toEqual(undefined);
    expect(filterResult(null, "movie")).toEqual(undefined);
    expect(filterResult({ entries: [] }, "movie")).toEqual([]);
  });

});
