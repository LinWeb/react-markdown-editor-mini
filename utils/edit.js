export const edit = function(type, value) {
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
    case "bold":
      newValue = `**${value}**`;
      break;
    case "ltalics":
      newValue = `*${value}*`;
      break;
    case "underline":
      newValue = `++${value}++`;
      break;
    case "strikethrough":
      newValue = `~~${value}~~`;
      break;
    case "unorder":
      newValue = `\n- ${value}\n`;
      break;
    case "order":
      newValue = `\n1. ${value}\n`;
      break;
    case "quote":
      newValue = `\n> ${value}\n`;
      break;
    case "splitLine":
      newValue = `\n\n---\n\n`;
      break;
    case "link":
      newValue = `[${value}]()`;
      break;
    default:
  }
  return newValue;
};
