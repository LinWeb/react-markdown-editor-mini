export default function (type: string, value: string, params?: any) {
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
    case "code":
      newValue = `\n\`\`\`javascript\n\n\`\`\`\n`;
      break;
    case "table":
      const [x, y] = params;
      newValue = `|`;
      for (let j = 0; j < y; j++) {
        newValue += ` Head |`;
      }
      newValue += `\n|`;
      for (let j = 0; j < y; j++) {
        newValue += ` --- |`;
      }
      for (let i = 0; i < x; i++) {
        newValue += `\n|`;
        for (let j = 0; j < y; j++) {
          newValue += ` Data |`;
        }
      }
      break;
    case "upload_img":
      newValue = `${params.tip ? ' \n\n' + params.tip : ''}![](${params.url})`
      break;
    default:
  }
  return newValue;
}
