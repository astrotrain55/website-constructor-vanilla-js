import Block from './Block';

export default class TextColumnsBlock extends Block {
  constructor(...args) {
    super(...args);
  }

  html() {
    const html = this.value.map((content) => this.col(content));
    return this.row(html.join(''), this.options.styles);
  }
};
