import { Form } from './Form';

export class ImageForm extends Form {
  constructor(updateFn) {
    super(updateFn);
    this.type = 'image';
    this.title = 'Добавить изображение';
    this.valueName = 'Путь до картинки';
  }

  create() {
    return this.render(this.template(), (form) => {
      form.querySelector('.js-replace-image-styles')
          .replaceWith(this.renderAddedBlock('imageStyles'));
    });
  }

  template() {
    return `
      <input type="text" name="alt" placeholder="Значение атрибута alt" style="width: 100%;background-color: beige;">
      <span class="js-replace-image-styles"></span>
    `;
  }
}
