import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColor} from "../api/fetchColors"
import { act } from "react-dom/test-utils";

jest.mock("../api/fetchColors")

const res = {
  data: [
    {code: {hex: "#f0f8ff"},
    color: "aliceblue",
    id: 1},
    {code: {hex: "#00ffff"},
    color: "aqua",
    id: 3}
  ]
}


test("Fetches data and renders the bubbles", async() => {
  // Finish this test
  fetchColor.mockResolvedValueOnce(res);

  await act(async () => {
    render(<BubblePage />);
  });

const aliceblue = screen.getByText(/aliceblue/i)
expect(aliceblue).toBeInTheDocument()

const aqua = screen.getByText(/aqua/i)
expect(aqua).toBeInTheDocument()


});
