import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";

const testEpisode = {
  id: "test",
  image: null,
  name: "test",
  season: 5,
  number: 123,
  summary: "a summary",
  runtime: 123,
};

test("renders without errors", async () => {
  render(<Show props={testEpisode} />);
});

test("renders Loading component when prop show is null", async () => {
  render(<Show props={null} />);
  await screen.findByText("Fetching data...", { exact: false });
});

test("renders same number of options seasons are passed in", async () => {
  render(<Show props={testEpisode} handleSelect={Function.prototype} selectedSeason={Function.prototype}/>);
  const button = screen.findById("seasons", { exact: false });
  fireEvent.click(button);
  await screen.findByText("season 5", { exact: false});
});

test("handleSelect is called when an season is selected", () => {});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {});
