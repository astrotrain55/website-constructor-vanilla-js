export class Site {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }

  render(model) {
    const content = model.reduce((html, block) => {
      html += block.html();
      return html;
    }, '');

    this.el.innerHTML = content;
  }
}
