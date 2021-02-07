---
id: events
title: 이벤트 버블링, 캡처링, 위임
---

> fastcampus 시크릿 코드: 프론트엔드 UI 컴포넌트편 1강부터 막혀서 정리하는 개념

## 이벤트 전달 방식

![이벤트 플로우](/img/docs/web/javascript/event-delegation/eventflow.svg)

> 이미지 출처: [ko.javascript.info]([/article/bubbling-and-capturing/eventflow.svg](https://ko.javascript.info/bubbling-and-capturing))

- 순서
  1. **이벤트 캡처링**
  2. 타겟 페이즈 (하지만 별도로 수행하는 것은 없음)
  3. **이벤트 버블링**

### 이벤트 버블링: Event Bubbling

- 어떤 요소에 이벤트가 발생하면, 해당 이벤트가 상위 요소들로 연쇄적으로 이벤트 체인이 발생함
- 그러므로, 상위에 해당 이벤트가 할당되어 있다면 타겟으로 부터 역순으로 이벤트를 발생시킴
- 예를 들어, 어떤 버튼에 클릭이벤트가 발생하면,
  - 버튼을 감싸고있는 요소들에게 역으로 이벤트가 전파됨

### 이벤트 캡처링: Event Capturing

- 버블링과 반대
- 이벤트를 등록할때 3번째 argument에 `true` 로 넣어주면 동작
- 잘 사용할 일은 없지만, 알아두자

### `event.stopPropagation()`

- 전파되고 있는 이벤트를 중지 시키는 API
- 버블링이 진행되고 있다면, 호출 시점에 부모 요소로 전파되지 않을 것이고,
- 캡처링이 진행되고 있다면, 호출 시점에 자식 요소로 전파되지 않을 것임

### 이벤트 위임: Event Delegation

- 이벤트 버블링 & 캡처링을 이용해서,
- 해당 요소에서 각각 이벤트를 등록해서 관리하지 않고,
- 상위 요소(캡처링이면 자식요소)에서 이벤트를 하나 등록하는 패턴
- 이벤트 등록시 들어오는 아규먼트 `event`의 `event.target` 을 이용해 구현 가능
- 장점
  - 이벤트 리스너의 수가 감소하여, 브라우저 퍼포먼스를 향상시킬 수 있음
  - 새로 추가되는 요소에 대해 따로 이벤트 등록을 다룰 필요 없이, 상위 요소에서 다룰 수 있음
- 단점
  - 관리 포인트가 하나로 줄어들어 if 분기가 많아질 수 있음
  - 이벤트 콜백이 커지므로, 이벤트 리스너를 동적으로 관리할 수 있는 상황이 더 좋을 땐 공간을 더 많이 차지할 수 있음

## 그 밖에

### `event.preventDefault()`

- 해당 요소의 기본 이벤트 동작을 막는 API

## Refs

- https://ko.javascript.info/events
- https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
- https://ko.javascript.info/event-delegation
