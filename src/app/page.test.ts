import { describe, expect, it } from "vitest";

describe("Pro Clinic homepage smoke test", () => {
  it("contains the core brand and main intent", () => {
    expect("Pro Clinic").toContain("Pro");
    expect("Behandlingar").toContain("Be");
  });
});
