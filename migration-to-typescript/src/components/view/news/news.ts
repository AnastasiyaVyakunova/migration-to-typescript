import './news.css';
import {DataNews} from '../../controller/loader';

class News {
  public draw(data: DataNews[]) {
    const news: DataNews[] = data.length >= 10 ? data.filter((_item: DataNews, idx: number) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp');

    news.forEach((item: DataNews, idx: number) => {
      const newsClone = <Element>newsItemTemp.content.cloneNode(true);

      if (idx % 2) newsClone.querySelector<HTMLElement>('.news__item').classList.add('alt');

      newsClone.querySelector<HTMLElement>('.news__meta-photo').style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      newsClone.querySelector<HTMLElement>('.news__meta-author').textContent = item.author || item.source.name;
      newsClone.querySelector<HTMLElement>('.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      newsClone.querySelector<HTMLElement>('.news__description-title').textContent = item.title;
      newsClone.querySelector<HTMLElement>('.news__description-source').textContent = item.source.name;
      newsClone.querySelector<HTMLElement>('.news__description-content').textContent = item.description;
      newsClone.querySelector<HTMLElement>('.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    document.querySelector<HTMLElement>('.news').innerHTML = '';
    document.querySelector<HTMLElement>('.news').appendChild(fragment);
  }
}

export default News;
