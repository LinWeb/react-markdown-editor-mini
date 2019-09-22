/* eslint-disable no-undef */
import { Edit } from "../utils/index";
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

describe("Edit options", () => {
  test("title", () => {
    expect(Edit("H1", value)).toBe(`\n# ${value}\n`);
    expect(Edit("H2", value)).toBe(`\n## ${value}\n`);
    expect(Edit("H3", value)).toBe(`\n### ${value}\n`);
    expect(Edit("H4", value)).toBe(`\n#### ${value}\n`);
    expect(Edit("H5", value)).toBe(`\n##### ${value}\n`);
    expect(Edit("H6", value)).toBe(`\n###### ${value}\n`);
  });
  test("bold", () => {
    expect(Edit("bold", value)).toBe(`**${value}**`);
  });
  test("ltalics", () => {
    expect(Edit("ltalics", value)).toBe(`*${value}*`);
  });
  test("underline", () => {
    expect(Edit("underline", value)).toBe(`++${value}++`);
  });
  test("strikethrough", () => {
    expect(Edit("strikethrough", value)).toBe(`~~${value}~~`);
  });
  test("unorder", () => {
    expect(Edit("unorder", value)).toBe(`\n- ${value}\n`);
  });
  test("order", () => {
    expect(Edit("order", value)).toBe(`\n1. ${value}\n`);
  });
  test("quote", () => {
    expect(Edit("quote", value)).toBe(`\n> ${value}\n`);
  });
  test("splitLine", () => {
    expect(Edit("splitLine", value)).toBe(`\n\n---\n\n`);
  });
  test("link", () => {
    expect(Edit("link", value)).toBe(`[${value}]()`);
  });
  test("code", () => {
    expect(Edit("code", value)).toBe(`\n\`\`\`javascript\n\n\`\`\`\n`);
  });
  // test("table", () => {
  //   expect(Edit("table", value, { x: 2, y: 3 })).toBe(`| Head | Head | Head |\n| --- | --- | --- |\n| Data | Data | Data |\n| Data | Data | Data |`);
  // });
  test("upload_img", () => {
    const url = 'https://avatars0.githubusercontent.com/u/21263805'
    expect(Edit("upload_img", value, { url })).toBe(`![](${url})`);
  });
});
