import Block from './Block';

export default class ImageBlock extends Block {
  constructor(...args) {
    super(...args);
  }

  html() {
    const { alt, styles = {}, imageStyles = {} } = this.options;

    return this.row(`
      <img src="${this.value}" alt="${alt || 'image'}" style="${this.parseStyles(imageStyles)}"/>
    `, styles);
  }
};
