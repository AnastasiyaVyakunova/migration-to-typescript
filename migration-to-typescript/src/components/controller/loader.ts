export type DataSource = {
  id: string,
  name: string
}

export type DataNews = {
  source: DataSource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface DataMain {
  articles: DataNews[];
  sources: DataSource[];
}

class Loader {
  private baseLink: string;
  private options: { [key: string]: string };

  constructor(baseLink: string, options?: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options = {} }: {endpoint: string, options?: object},
    callback: Function = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler (res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
        throw Error(res.statusText);
    }
    return res;
  }

  private makeUrl(options: object, endpoint: string): string {
    const urlOptions = { ...this.options, ...options};
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: string, endpoint: string, callback: Function, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: DataMain) => callback(data))
      .catch((err: Error) => console.error(err.message));
  }
}

export default Loader;
