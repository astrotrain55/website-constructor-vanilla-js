import { TitleForm, TextForm, TextColumnsForm, ImageForm } from './forms/';

export class Sidebar {
  constructor(selector, clearFn) {
    this.el = document.querySelector(selector);
    this.clear = clearFn;
  }

  render(updateFn) {
    this.el.append(
      this.setButtonClear(),
      new TitleForm(updateFn).create(),
      new TextForm(updateFn).create(),
      new TextColumnsForm(updateFn).create(),
      new ImageForm(updateFn).create(),
    );
  }

  setButtonClear() {
    const button = document.createElement('button');
    button.style = 'margin-top: 10px;width: 100%;background-color: yellow;margin-bottom: 20px;';
    button.innerText = 'Очистить всё';
    button.addEventListener('click', this.clear);
    return button;
  }
}
