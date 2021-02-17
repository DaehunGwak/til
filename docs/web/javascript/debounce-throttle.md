---
id: debounce-throttle
title: Debounce와 Throttle
---

> fastcampus 시크릿 코드: 프론트엔드 UI 컴포넌트편 2강에서 모르는 부분 정리

연속적으로 발생하는 이벤트에 대해

- debounce: 마지막 한 번만 실행
- throttle: 일정 시간간격으로 한번씩 만 실행

## debounce 예제

> infinite scrolling 예시

```js
const debounce = (func, delay) => {
  let timeoutId = null;
  return (...args) => {  // closure
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...args), delay);
  };
}

const onScroll = (e) => {
  const { clientHeight, scrollHeight, scrollTop } = e.target.scrollingElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    // when to touch bottom
    loadMore();
  }
};

document.addEventListener("scroll", debounce(onScroll, 300));
```

## Refs

- https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa
- https://medium.com/@progjh/throttle-debounce-%EA%B0%9C%EB%85%90-%EC%9E%A1%EA%B8%B0-19cea2e85a9f