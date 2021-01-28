import { TitleBlock, TextBlock, TextColumnsBlock, ImageBlock } from './classes/blocks/';
import nodeJSlogo from './assets/images/nodejs_logo.png';
import JSlogo from './assets/images/js_logo.png';

const model = [
  new TitleBlock('Осмысленный заголовок', {
    tag: 'h3',
    styles: {
      'padding-top': '5px',
      'text-align': 'center',
      'background-color': 'coral',
      color: '#ffffff',
    },
  }),

  new TextColumnsBlock([
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'A atque consequatur delectus est, incidunt ipsa libero numquam officiis omnis veniam?',
    'Odit vitae, voluptate! Labore, modi quidem.',
    'Doloribus exercitationem ipsa quaerat!',
  ], {
    styles: {
      padding: '1rem',
    },
  }),

  new TitleBlock('NodeJS', {
    tag: 'h5',
    styles: {
      'padding-top': '5px',
      'text-align': 'center',
      'background-color': 'darkgreen',
      color: '#ffffff',
    },
  }),

  new TextBlock(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque consequatur delectus est, incidunt ipsa libero numquam officiis omnis veniam? Odit vitae, voluptate! Labore, modi quidem. Doloribus exercitationem ipsa quaerat!',
    {
      styles: {
        'background-color': 'darkblue',
        color: 'yellow',
      },
    }
  ),

  new ImageBlock(nodeJSlogo, {
    alt: 'nodejs',
    imageStyles: {
      'max-width': '300px',
      display: 'block',
      margin: '0 auto',
    },
    styles: {
      margin: '1em auto',
    },
  }),

  new TitleBlock('JS', {
    tag: 'h5',
    styles: {
      'padding-top': '5px',
      'text-align': 'center',
      'background-color': 'orange',
      color: '#ffffff',
    },
  }),

  new TextColumnsBlock([
    'Ы!',
    'Ы!',
    'Ы!',
    'Ы!',
    'Ы!',
    'Ы!',
    'Ы!',
    'Ы!',
    'Ы!',
    'Ы!',
    'Ы!',
  ], {
    styles: {
      'background-color': 'lemonchiffon',
      padding: '1rem',
    },
  }),

  new ImageBlock(JSlogo, {
    alt: 'js',
    imageStyles: {
      'max-width': '300px',
      display: 'block',
      margin: '0 auto',
    },
    styles: {
      margin: '1rem',
    },
  }),
];

export { model };
