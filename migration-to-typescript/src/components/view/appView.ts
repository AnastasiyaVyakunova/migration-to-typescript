import News from './news/news';
import Sources from './sources/sources';
import {DataNews, DataSource, DataMain} from '../controller/loader';

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: DataMain) {
    const values: DataNews[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: DataMain) {
    const values: DataSource[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
