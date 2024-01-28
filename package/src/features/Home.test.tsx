import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home"; // Adjust the import path
import * as useCategoryHook from "../hooks/useCategory";

// Mock the useCategory hook
jest.mock("../hooks/useCategory");
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));
jest.mock("../components/card/Card", () => ({
  Card: () => <div>Mock Card</div>,
}));

jest.mock("../components/headingSection/HeadingSection", () => ({
  HeadingSection: () => <div>Heading</div>,
}));
jest.mock("../components/defaultCard/DefaultCard", () => ({
  DefaultCard: () => <div>card</div>,
}));
jest.mock("../components/cardList/CardList", () => ({
  CardList: () => <div>card list</div>,
}));

const useCat = jest.spyOn(useCategoryHook, 'useCategory');


describe("<Home />", () => {
  it("displays loading state", () => {
    useCat.mockReturnValue({
      data: undefined,
      isFetching: true,
      error: undefined,
    });

    render(<Home />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays error state", () => {
    useCat.mockReturnValue({
      data: undefined,
      isFetching: false,
      error: "error",
    });

    render(<Home />);
    expect(
      screen.getByText("Oops, something went wrong...")
    ).toBeInTheDocument();
  });

  it("displays content correctly", () => {
    useCat.mockReturnValue({
      data: {
        total: 1,
        entries: [
          {
            "title": "Rake",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "programType": "series",
            "images": {
              "Poster Art": {
                "url": "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
                "width": 1000,
                "height": 1500
              }
            },
            "releaseYear": 2010
          },
        ],
      },
      isFetching: false,
      error: undefined,
    });

    render(<Home />);
    expect(screen.getByText("Rake")).toBeInTheDocument();
  });
});
