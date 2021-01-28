import { Form } from './Form';

export class TextForm extends Form {
  constructor(updateFn) {
    super(updateFn);
    this.type = 'text';
    this.title = 'Добавить текстовый блок';
    this.valueName = 'Текст';
  }

  create() {
    return this.render(this.template());
  }

  template() {
    return '';
  }
}
