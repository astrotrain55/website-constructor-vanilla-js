import Block from './Block';

export default class TextBlock extends Block {
  constructor(...args) {
    super(...args);
  }

  html() {
    return this.row(this.col(`
      <p>${this.value}</p>
    `), this.options.styles);
  }
};
