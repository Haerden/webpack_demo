import Icon from './a.jpg';
import _ from 'lodash';
import './index.css';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // 将图像添加到我们现有的 div
  var myIcon = new Image();
  myIcon.classList.add('life');
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());