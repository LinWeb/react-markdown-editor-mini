interface IConfig {
  method?: "GET" | "POST";
  headers?: any;
}

interface IParams extends IConfig {
  url: string;
  data?: any;
  timeout?: number;
  success?: (response: any) => void;
  error?: (err: any) => void;
}

const defaultConfig: IConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*"
  }
};

export default function(params: IParams) {
  let config = {
    ...defaultConfig,
    ...params,
    headers: { ...defaultConfig.headers, ...params.headers }
  };
  let { url, method, data, timeout, success, error, headers } = config;
  if (!url) {
    throw new Error("请传入请求url");
  }
  let xhr: XMLHttpRequest = new XMLHttpRequest();
  if (method === "GET") {
    url += "?";
    Object.entries(data).forEach((item, key) => {
      if (key !== 0) {
        url += "&";
      }
      url += item[0] + "=" + item[1];
    });
  }
  xhr.open(method, url, true);
  xhr.onload = () => {
    switch (xhr.status) {
      case 200:
        success(xhr.response);
        break;
      default:
        error(xhr.response);
    }
  };
  for (let key in headers) {
    xhr.setRequestHeader(key, headers[key]);
  }
  xhr.send(method === "GET" ? null : data);
  xhr.timeout = timeout;
  xhr.ontimeout = () => {
    error("请求超时");
  };
  return xhr;
}
