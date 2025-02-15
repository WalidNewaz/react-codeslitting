import React from "react";
import { vi, test, expect } from "vitest";
import { render } from "vitest-browser-react";
import { waitFor } from "@testing-library/react";
import FetchUser from "./FetchUser";
import { getUserById } from "../../services/userService";

// Mock the userService
vi.mock("../../services/userService", { spy: true });

test("displays loading state and fetches user data", async () => {
  vi.mocked(getUserById).mockResolvedValue(
    new Promise((resolve) => resolve({ name: "John Doe" }))
  );

  const { getByText } = render(<FetchUser userId={1} />);

  // Assert loading state
  const loadingContent = getByText(/loading/i);
  await expect.element(loadingContent).toBeInTheDocument();

  // Wait for the user data to be rendered
  await waitFor(() =>
    expect.element(getByText(/John Doe/i)).toBeInTheDocument()
  );
});

