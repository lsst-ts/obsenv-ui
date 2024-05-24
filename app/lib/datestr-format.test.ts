import { it, describe, expect } from 'vitest';
import { formatIsoString } from './datestr-format';

describe("Format ISO String", () =>
  it("Format", () =>
    expect(formatIsoString("2024-05-22T14:54:24.248585+00:00")).toBe("2024-05-22T14:54:24Z")
  )
)