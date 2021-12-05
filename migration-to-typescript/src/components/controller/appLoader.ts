import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'ea1c0632f4b446008a01fc31a2720219', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
