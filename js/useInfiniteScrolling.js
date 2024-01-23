const useInfiniteScrolling = (apiFun, List) => {
  const nextElement = document.querySelector('#targetLoading');
  if (nextElement) {
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && List.value.length > 0) {
        apiFun();
      }
    };
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px 0px -90px 0px', // 在目標元素的下方增加了 -90px 的距離
      threshold: 0.5,
    });
    observer.observe(nextElement);
  }
};

export default useInfiniteScrolling;
