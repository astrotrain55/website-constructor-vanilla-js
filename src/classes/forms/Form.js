import { TitleBlock, TextBlock, TextColumnsBlock, ImageBlock } from '../blocks/';

export class Form {
  constructor(updateFn) {
    this.form = document.createElement('form');
    this.type = '';
    this.title = '';
    this.valueName = '';
    this.update = updateFn;
    this.initEvents();
  }

  create() {
    throw new Error('Определите метод create');
  }

  initEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const components = {
        title: TitleBlock,
        text: TextBlock,
        columns: TextColumnsBlock,
        image: ImageBlock,
      };
      const Component = components[this.type];
      const inputs = this.form.querySelectorAll('input[type="text"]');
      const tempStyles = {
        styles: [],
        imageStyles: [],
      };
      const result = {
        options: {},
      };

      inputs.forEach((input, i) => {
        const name = input.getAttribute('name');
        if (name === 'value') {
          result.value = input.value;
        } else if (name === 'value[]') {
          if (!result.value) result.value = [];
          result.value.push(input.value);
        } else if (name === 'alt' || name === 'tag') {
          result.options[name] = input.value;
        } else if (name === 'styles' || name === 'imageStyles') {
          if (!result.options[name]) result.options[name] = {};
          tempStyles[name].push(input.value);
        }
      });

      Object.keys(tempStyles).forEach((key) => {
        tempStyles[key].forEach((text, i) => {
          if (i % 2) {
            const name = tempStyles[key][i - 1];
            result.options[key][name] = text;
          }
        });
      });

      this.update(new Component(result.value, result.options));
      inputs.forEach((input) => input.value = '');
    });
  }

  render(content, cbMiddleware = () => {}) {
    const value = `<input type="text" name="value" placeholder="${this.valueName}" style="width: 100%;background-color: beige;">`;
    this.form.style.border = '2px solid';
    this.form.style.padding = '5px';
    this.form.style.marginBottom = '20px';
    this.form.style.backgroundColor = 'darkslateblue';
    this.form.innerHTML = `
      <h5 style="color: beige;text-align: center;">${this.title}</h5>
      ${(this.type !== 'columns') ? value : ''}
      ${content}
      <span class="js-replace-styles"></span>
      <input type="submit" value="ДОБАВИТЬ КОМПОНЕНТ НА СТРАНИЦУ"
             style="margin-top: 10px;width: 100%;background-color: yellow;">
    `;
    this.form.querySelector('.js-replace-styles').replaceWith(this.renderAddedBlock());
    cbMiddleware(this.form);

    return this.form;
  }

  renderAddedBlock(field = 'styles', count = 0) {
    const block = document.createElement('div');
    const text = field === 'imageStyles' ? 'стиль изображения' : field === 'styles' ? 'стиль' : 'колонку';
    const content = (field === 'columns') ? this.setColumns(field) : this.setInputsStyles(field);
    const defaultContents = Array.from({ length: count }).fill(null).map((_) => content);

    block.style.border = '1px dashed beige';
    block.style.padding = '5px';
    block.style.margin = '5px 0';
    block.innerHTML = `
      <label style="display: flex;flex-wrap: wrap;margin: 5px 0;">
        ${defaultContents}
      </label>
      <input type="button" value="Добавить ${text}" style="width: 100%;background-color: blueviolet;">
    `;

    const label = block.querySelector('label');
    const button = block.querySelector('input[type="button"]');

    button.addEventListener('click', (e) => {
      label.insertAdjacentHTML('beforeend', content);
    });

    return block;
  }

  setColumns() {
    return `
      <input type="text" name="value[]" placeholder="${this.valueName}" style="width: 100%;background-color: beige;">
    `;
  }

  setInputsStyles(field) {
    return `
      <input type="text" name="${field}" placeholder="Стиль" style="width: 50%;background-color: beige;">
      <input type="text" name="${field}" placeholder="Значение" style="width: 50%;background-color: beige;">
    `;
  }
}
