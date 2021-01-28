export default class Block {
  constructor(value, options = {}) {
    this.value = value;
    this.options = options;
  }

  html() {
    throw new Error('Не найден метод html');
  }

  row(content, styles = {}) {
    return `
      <div class="row" style="${this.parseStyles(styles)}">
        ${content}
      </div>
    `;
  }

  col(content) {
    return `<div class="col-sm">${content}</div>`;
  }

  parseStyles(objStyles) {
    return Object.entries(objStyles).reduce((acc, style) => {
      if (!style[0] || !style[1]) return acc;
      return acc += `${style.join(':')};`;
    }, '');
  }
};

