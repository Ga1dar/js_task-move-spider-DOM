'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const spiderState = {
    x: 0,
    y: 0,
    element: spider,
  };
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (
    e.clientX >= wallRect.left &&
    e.clientX <= wallRect.right &&
    e.clientY >= wallRect.top &&
    e.clientY <= wallRect.bottom
  ) {
    spiderState.x = e.clientX - wallRect.left - spiderWidth / 2;
    spiderState.y = e.clientY - wallRect.top - spiderHeight / 2;

    spider.style.left = `${spiderState.x}px`;
    spider.style.top = `${spiderState.y}px`;
  }

  if (e.target !== wall) {
  }
});
