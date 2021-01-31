---
id: elements
title: HTML 요소 - 들어가기
---

## 요소 (Elements)

- HTML 에서는 `어떤 요소를 어떤 시점에 쓰느냐에 따라 완전히 다른 의미`를 가지게 됨

### GOOD examples

- semantic 태그를 활용
- 브라우저 읽기 도구

```html
<body>
  <section>
    <header>
      <h1>HTML 교육</h1>
    </header>
    <p>HTML 교육을 위한 샘플 텍스트</p>
    <footer>2021-01-31</footer>
  </section>
</body>
```

## 이 강의에서

- HTML에 있는 모든 요소를 다루진 않음
- 필요하면 WHATWG 에서 확인

## 요소별 카테고리

### Document metadata

- 문서에 대한 정보
- 외부 문서와의 관계
- head, title, meta, link, style

### Sections

- body내 유저들이 보는 콘텐츠를 나타낼 때
- 각 영역을 많이 나누게 되는 태그들
- body, article, section, nav, aside, h1~h6, hgroup, header, footer, address

### Grouping content

- Sections에 비해 의미는 덜하지만 그룹핑 하는 의미를 가짐
- 구 버전 요소들이 많음
- p, blockquote, ol, ul, menu, li, dl, dt, dd, figure, figcaption, main, div, pre

### Text-level semantics

- 말그대로 텍스트
- a, em, strong, cite, q, Dan, abbr, code, span, br, wbr

### Embedded content

- 외부의 콘텐츠를 가져올 때 사용
- img, picture, source, video, source, track, audio, iframe

### Tabular data

- 표
- table, caption, colgroup, col, tbody, thead, tfoot, tr, td, th

### Forms

- 폼, 입력 양식, intractive
- form, fieldset, legend, label, input, button, textarea, select, option

### Interactive elements

- 입력 외의 정말 상호작용을 위한 요소
- details, summary, dialog
