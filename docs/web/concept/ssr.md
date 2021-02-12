---
id: ssr
title: SSR, CSR, SSG
---

> 해당 글은 [서버사이드 렌더링 [드림코딩 by 엘리]](https://youtu.be/iZ9csAfU5Os) 유튜브를 보고 정리하는 글입니다.

## 웹의 역사 (SPA 시대까지)

- 1990, 정적사이트 (Static Site) 시대
  - 문제점: 다른 페이지를 클릭했을 때마다, 페이지 전체를 새로운 html, css, js 받아와야함
- 1996, iframe
  - 문서 내에 또 다른 문서를 담을 수 있는 태그
- 1998, XMLHttpRequest
  - fetch api의 원조
  - 데이터를 서버로 부터 받아올 수 있음
  - 동적으로 서버의 데이터를 사용하요 클라이언트에서 변화를 줄 수 있음
- 2005, AJAX
  - XHR, 위의 방식이 AJAX라는 이름을 가지게됨
  - SPA, Single-Page-Application 시대의 도래

## CSR (Client Side Rendering)

- 서버에서 index.html 을 받으면
- app.js 하나를 로딩하게 됨
- 추가로 필요한 데이터를 서버로 받아옴

### 문제점

- 첫 화면을 보기까지 시간이 오래걸림
- SEO 가 좋지않을 수 있음 (Search Engine Optimization)
  - html에 body에 `<div id="root"></div>`와  `<script src="app.js"></script>` 만 들어 있음
  - 이는 각 검색엔진의 Web crawlers 가 해석을 하게 어렵게 만드는 요소

## SSR (Server-Side Rendering)

- CSR에서 하던 작업을 서버사이드에서 하게되고,
- 잘만들어진 html 파일을 동적으로 제어할 수 있는 js와 함께 클라이언트로 보내주게 됨

### 장점

- 첫 페이지 로딩이 빨라짐
- SEO가 좋아짐

### 문제점

- Blinking issue 가 존재
- 서버 과부하가 발생되기 쉬움
- 동적 데이터 처리를 하는 js를 아직 받지 못해서 반응이 느리게 됨

## TTV와 TTI 측면에서

- TTV: Time To View
  - 화면에 보여지기까지 소요되는 시간
- TTI: Time To Interaction
  - 인터랙션이 가능하기까지 소요되는 시간

### CSR의 TTV, TTI

- 처리과정
  1. 서버에게 웹 자원 요청
  2. 인덱스를 받아옴
  3. app.js를 요청
  4. 번들링된 js를 받아옴 (TTV, TTI 가능)

> 즉, CSR은 TTV가 가능해짐과 동시에 TTI가 가능하게 됨

### SSR의 TTV, TTI

- 처리과정
  1. 서버에게 웹 자원 요청
  2. 잘 만들어진 인덱스를 받아옴 (TTV 가능)
  3. app.js를 요청
  4. 기능이 포함된 js를 받아옴 (TTI 가능)

> 즉, SSR의 TTV와 TTI는 별개의 시점으로 그 공백기간이 꽤 긴편

## 어떻게 개선할 수 있을까

### CSR

- 번들링해서 제공해주는 js 파일을 어떻게 효율적으로 분할해서 보내줄지
- 첫 번째로 사용자가 보기위한 필수적인 js만 보내줄 수 있는지 고민

### SSR

- TTV와 TTI를 어떻게하면 줄일 수 있을지 고민
- 어떻게해야 조금더 매끄러운 UI/UX 를 제공할 수 있는지 고민

## SSG

- Static Stie Generation

### Gatsby

- Gatsby + React로 가능
- 모두 정적인 것은 아님
- 자바스크립트 파일을 같이 가지고 있어 동적인 요소로 충분히 사용 가능

### Next.js

- static generation
- no pre-rendering / pre-rendering 둘 다 가능
- CSR, SSR를 적절하게 섞어서 제공해줄 수 있음
