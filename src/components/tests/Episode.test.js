import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

test("renders without error", async () => {
  render(
    <Episode
      episode={{
        id: "abc",
        image: "null",
        name: "test",
        season: 2,
        number: 123,
        summary: "a summary",
        runtime: "2",
      }}
    />
  );
  await screen.queryByText("Chapter One", { exact: false });
});

test("renders the summary test passed as prop", () => {
  render(
    <Episode
      episode={{
        id: "abc",
        image: "null",
        name: "test",
        season: 2,
        number: 123,
        summary: "a summary",
        runtime: "2",
      }}
    />
  )
  const episodeSummary = screen.queryByText('a summary', {exact: false})
  expect(episodeSummary).toBeInTheDocument()
  expect(episodeSummary).toBeVisible()
});

test("renders default image when image is not defined", async () => {
    render(
        <Episode episode={{
            id: "abc",
        image: "null",
        name: "test",
        season: 2,
        number: 123,
        summary: "a summary",
        runtime: "2",
        }}
    />)
    
});
