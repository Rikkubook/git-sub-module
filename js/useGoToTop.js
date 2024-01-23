export function useGoToTop(id) {
  if (id) {
    document.querySelector(id)?.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}

export function changeColor(id) {
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const scrollDistance = window.scrollY || window.pageYOffset;
    const scrollPosition = windowHeight + scrollDistance;
    const footerPosition = document.querySelector('.footer').offsetTop;
    const distanceToBottom = footerPosition + 120 - scrollPosition;

    // Footer偵測點
    if (distanceToBottom <= 0) {
      document.querySelector(id)?.classList.add('scroll--change');
    } else {
      document.querySelector(id)?.classList.remove('scroll--change');
    }

    //
  });
}

export default { useGoToTop, changeColor };
