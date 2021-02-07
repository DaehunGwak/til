---
id: grouping
title: HTML 요소 - Grouping content
---

> 해당 글은 inflearn [초보자를 위한 HTML 기초](https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88/) 를 보고 정리한 것입니다.
> 문제가 될 시 삭제하겠습니다.

## Grouping content 소개

- 주로 묶는 용도로 사용하는 요소

### p

- paragraph 약자, 문장을 나타낼 때 사용하는 요소
- p 요소 안에 p 요소를 자식으로 가질 수 없음
- heading 요소와 적극적으로 사용 됨

```html
<h1>grouping content</h1>
<h2>p 요소</h2>
<p>aragraph 약자, 문장을 나타낼 때 사용하는 요소</p>
```

### blockqutoe

- block qutation 약자
- 인용구에 주로 사용
- q 요소와 유사

```html
<blockquote>
  <p>HTML은 문서를 표현하기 위해 만들어진 언어이지만, 현재 웹 어플리케이션에서도 사용하고 있습니다.</p>
  <cite>- MDN</cite>
</blockquote>
```

### ul, ol, menu, li

- 목록을 나타내는 요소
- ol: ordered list
- ul: un-ordered list
- li: list item, ol/ul/menu 내에 li 사용은 필수
- menu: 메뉴 내에 버튼으로 클릭하는 무언가가 있을 것이다 (firefox에만 지원)

```html
<h1>html 강의 커리큘럼</h1>
<ol>
  <li>metadata</li>
  <li>sections</li>
  <li>grouping</li>
</ol>

<h1>html 요소들</h1>
<ul>
  <li>html</li>
  <li>body</li>
</ul>

<menu>
  <li><button type="button">굵게</button></li>
  <li><button type="button">취소선</button></li>
</menu>
```

### dl, dt, dd

### figure, figcaption

### main

### div

