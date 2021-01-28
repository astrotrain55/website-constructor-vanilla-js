import { Form } from './Form';

export class TextColumnsForm extends Form {
  constructor(updateFn) {
    super(updateFn);
    this.type = 'columns';
    this.title = 'Добавить колонки';
    this.valueName = 'Текст';
  }

  create() {
    return this.render(this.template(), (form) => {
      form.querySelector('.js-replace-text-columns')
          .replaceWith(this.renderAddedBlock('columns', 1));
    });
  }

  template() {
    return '<span class="js-replace-text-columns"></span>';
  }
}
