import { vi, expect, it, describe } from "vitest";
import { getUserById } from "../../services/userService";

vi.mock("../../services/userService", { spy: true });

describe("userService", () => {
  it("should return user by id", async () => {
    vi.mocked(getUserById).mockResolvedValue(
      new Promise((resolve) => resolve({ name: "John Doe" }))
    );

    const user = await getUserById(1);
    expect(user).toMatchObject({ name: "John Doe" });
  });
});
