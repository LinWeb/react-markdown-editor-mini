export const edit = function(type: any, value: string) {
  let newValue = "";
  switch (type) {
    case "H1":
      newValue = `\n# ${value}\n`;
      break;
    case "H2":
      newValue = `\n## ${value}\n`;
      break;
    case "H3":
      newValue = `\n### ${value}\n`;
      break;
    case "H4":
      newValue = `\n#### ${value}\n`;
      break;
    case "H5":
      newValue = `\n##### ${value}\n`;
      break;
    case "H6":
      newValue = `\n###### ${value}\n`;
      break;
    default:
  }
  return newValue;
};
