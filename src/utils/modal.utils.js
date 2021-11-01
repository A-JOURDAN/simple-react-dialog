// return the correct transform start/end points
export const getTransition = (transition) => {
  let transitionStart = '';
  let transitionEnd = '';

  switch (transition) {
    case 'scale':
      transitionStart = 'scale(0.4)';
      transitionEnd = 'scale(1)';
      break;
    case 'slide-x':
      transitionStart = 'translateX(-200px)';
      transitionEnd = 'translateX(0)';
      break;
    case 'slide-x-revert':
      transitionStart = 'translateX(200px)';
      transitionEnd = 'translateX(0)';
      break;
    case 'slide-y':
      transitionStart = 'translateY(-200px)';
      transitionEnd = 'translateX(0)';
      break;
    case 'slide-y-revert':
      transitionStart = 'translateY(200px)';
      transitionEnd = 'translateX(0)';
      break;
    case 'fab':
      transitionStart = 'rotate(-90deg) scale(0)';
      transitionEnd = 'rotate(0) scale(1)';
      break;
    default:
      transitionStart = 'scale(0.4)';
      transitionEnd = 'scale(1)';
  }

  return { transitionStart, transitionEnd };
};

// Apply a grow effect on click outside when prop Persistent is active by adding a css class
export const growContent = async () => {
  const elt = document.querySelector('.dialog-content');
  elt.classList.add('dialog-content--active');
  // eslint-disable-next-line promise/param-names
  await new Promise((r) => setTimeout(r, 100));
  elt.classList.remove('dialog-content--active');
};
