---
id: document-fragment
title: DocumentFragment 노드
---

## DocumentFragment란?

- DOM의 노드
- `document.createDocumentFragment()` 를 사용하여 빈 DOM 노드를 생성할 수 있다
- 이때 만들어진 DOM 노드는 따로 붙이는 연산을 하지 않는 이상 DOM 트리의 일부가 아님

## 사용 이유

- 직접 구성되어 있는 DOM 트리의 일부 노드를 가져와 조작하는 것은 많은 연산을 일으킴
- 하지만 js레벨에서 `document.createDocumentFragment()` 를 사용하여 DocumentFragment를 생성하면 DOM트리의 일부가 아님,
  - 이는 reflow (요소의 위치와 좌표 계산) 을 유발하지 않아 성능에 좋음
  - DocumentFragment를 만든 후, 해당에 각 요소들을 업데이트하고, 마지막에 DOM 트리에 붙이면 한번만 렌더링을 일으킬 수 있음

## refs

- https://developer.mozilla.org/ko/docs/Web/API/Document/createDocumentFragment
- https://www.zerocho.com/category/JavaScript/post/573b3235a54b5e8427432947