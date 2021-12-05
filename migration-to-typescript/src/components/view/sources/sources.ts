import './sources.css';
import { DataSource } from '../../controller/loader';

class Sources {
  public draw(data: DataSource[]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

    data.forEach((item: DataSource) => {
      const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

      sourceClone.querySelector<HTMLElement>('.source__item-name').textContent = item.name;
      sourceClone.querySelector<HTMLElement>('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });
    
    document.querySelector<HTMLElement>('.sources').append(fragment);
  }
}

export default Sources;
