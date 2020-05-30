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

var root = document.getElementById('root');
root.innerHTML = '<div class="test">abc</div>';
document.body.appendChild(component());

