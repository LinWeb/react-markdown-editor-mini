/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { edit } from "../utils/edit";

const value = "我的梦想是不上班";

// afterEach(() => {
//   console.log(33333);
// });
// afterAll(() => {
//   console.log(444444);
// });
// beforeEach(() => {
//   console.log(111111);
// });
// beforeAll(() => {
//   console.log(2222222);
// });

describe("edit options", () => {
  test("title", () => {
    expect(edit("H1", value)).toBe(`\n# ${value}\n`);
    expect(edit("H2", value)).toBe(`\n## ${value}\n`);
    expect(edit("H3", value)).toBe(`\n### ${value}\n`);
    expect(edit("H4", value)).toBe(`\n#### ${value}\n`);
    expect(edit("H5", value)).toBe(`\n##### ${value}\n`);
    expect(edit("H6", value)).toBe(`\n###### ${value}\n`);
  });
  test("bold", () => {
    expect(edit("bold", value)).toBe(`**${value}**`);
  });
  test("ltalics", () => {
    expect(edit("ltalics", value)).toBe(`*${value}*`);
  });
  test("underline", () => {
    expect(edit("underline", value)).toBe(`++${value}++`);
  });
  test("strikethrough", () => {
    expect(edit("strikethrough", value)).toBe(`~~${value}~~`);
  });
  test("unorder", () => {
    expect(edit("unorder", value)).toBe(`\n- ${value}\n`);
  });
  test("order", () => {
    expect(edit("order", value)).toBe(`\n1. ${value}\n`);
  });
  test("quote", () => {
    expect(edit("quote", value)).toBe(`\n> ${value}\n`);
  });
  test("splitLine", () => {
    expect(edit("splitLine", value)).toBe(`\n\n---\n\n`);
  });
  test("link", () => {
    expect(edit("link", value)).toBe(`[${value}]()`);
  });
});
