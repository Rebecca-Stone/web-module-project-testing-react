import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

const testEpisode = {
  id: "",
  image: null,
  name: "",
  season: 1,
  number: 123,
  summary: "a summary",
  runtime: 123,
};

test("renders without error", async () => {
  render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={testEpisode} />);
  const episodeSummary = screen.queryByText("a summary", { exact: false });
  expect(episodeSummary).toBeInTheDocument();
  expect(episodeSummary).toBeVisible();
  expect(episodeSummary).toHaveTextContent("a summary", { exact: false });
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={testEpisode} />);
  const episodeImage = screen.queryByAltText(
    "https://i.ibb.co/2FsfXqM/stranger-things.png"
  );
  expect(episodeImage).toBeInTheDocument();
});
