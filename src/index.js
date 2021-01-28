import { model } from './model';
import { Site } from './classes/site';
import { Sidebar } from './classes/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

const site = new Site('#site');
const sidebar = new Sidebar('#panel', clear);
site.render(model);
sidebar.render(update);

function update(block) {
  model.push(block);
  site.render(model);
}

function clear() {
  model.length = 0;
  site.render(model);
}
