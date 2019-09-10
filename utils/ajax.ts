interface IConfig {
  url: string;
  method: string;
  timeout?: number;
}

const defaultConfig = {
  method: "GET"
};

export default function(conf: IConfig) {
  let config = { ...defaultConfig, ...conf };
  let { url, method } = config;
  let xhr: XMLHttpRequest = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onload = () => {
    console.log(xhr);
  };
  xhr.send();
  return "11111";
}
