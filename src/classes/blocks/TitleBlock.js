import Block from './Block';

export default class TitleBlock extends Block {
  constructor(...args) {
    super(...args);
  }

  html() {
    const { tag, styles } = this.options;

    return this.row(this.col(`
      <${tag || 'h3'}>${this.value}</${tag || 'h3'}>
    `), styles);
  }
};
