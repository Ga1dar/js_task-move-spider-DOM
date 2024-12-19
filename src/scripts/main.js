'use strict';

document.addEventListener('click', (e) => {
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
    spiderState.x = e.clientX - wallRect.left - (spiderWidth / 2 + 8);
    spiderState.y = e.clientY - wallRect.top - (spiderHeight / 2 + 12);

    if (spiderState.x < 0) {
      spiderState.x = 0;
    }

    if (spiderState.y < 0) {
      spiderState.y = 0;
    }

    if (spiderState.x > wallRect.width - spiderWidth) {
      spiderState.x = wallRect.width - spiderWidth;
    }

    if (spiderState.y > wallRect.height - spiderHeight) {
      spiderState.y = wallRect.height - spiderHeight;
    }

    spider.style.left = `${spiderState.x}px`;
    spider.style.top = `${spiderState.y}px`;
  }
});
