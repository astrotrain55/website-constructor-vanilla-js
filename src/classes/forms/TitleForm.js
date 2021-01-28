import { Form } from './Form';

export class TitleForm extends Form {
  constructor(updateFn) {
    super(updateFn);
    this.type = 'title';
    this.title = 'Добавить блок заголовка';
    this.valueName = 'Текст заголовка';
  }

  create() {
    return this.render(this.template());
  }

  template() {
    return `
      <input type="text" name="tag" placeholder="Тег заголовка" style="width: 100%;background-color: beige;">
    `;
  }
}
