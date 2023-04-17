// @ts-check
import { object, string } from 'yup';
// import Example from './Example.js';

export default () => {
  // const element = document.getElementById('point');
  // const obj = new Example(element);
  // obj.init();
  const urlInput = document.querySelector('#url-input');
  const validationSchema = object({
    rssLink: string().url().required(),
  });
};
