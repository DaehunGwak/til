---
id: sections
title: HTML 요소 - Sections
---

> 해당 글은 inflearn [초보자를 위한 HTML 기초](https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88/) 를 보고 정리한 것입니다.
> 문제가 될 시 삭제하겠습니다.

## 들어가며

- section 요소가 아닌 sections 전체를 다룬다는 점 (body, heading, section, aritcle ... 등등)

## body

- 실제 콘텐츠를 담는 요소
- 콘텐츠 대부분을 차지하여, `용량`과 `시맨틱`에 신경을 많이 쓰면 좋음
- 불필요한 컨텐츠 X
- 시맨틱으로 작성하여 브라우저 리더가 잘 읽을 수 있도록 구성
  
### heading

- 제목
- h1, h2, h3, h4, h5, h6 총 6 단계
- h1: 가장 중요한 제목, h6: 가장 덜중요한 제목
- heading 요소는 해당 제목을 포함하는 익명 영역 (Anonymous section) 을 암묵적으로 생성
- 같은 레벨의 헤딩요소를 만나기 전까지가 모두 해당 헤딩 요소의 익명영역이라 생각하면 됨

```html
<h1>익명 시작</h1>
<p>asdflkajsdflkajsdfkl</p>
<h2>익명2 시작</h2>
<h2>익명2 종료</h2>
<h1>익명 종료</h1>
```

### article & section

- 명시적인 영역을 나누기 위해 사용
- article & section 의 차이점
  - 기준: 콘텐츠의 독립성
  - article: 떼어내서 다른 웹으로 옮겼을 때 어색함이 없는 정도의 독립성을 가질 경우
  - section: 영역을 나누긴 하지만 다른 컨텐츠와 연관이 있는 경우
- div는 article과 section을 사용하기 어려운데 그룹핑이 필요한 경우에만 사용을 권장
- article, section 내에서 heading 사용을 권장

```html
<article>
  <h1></h1>
  <p></p>
  <section>
    <h2></h2>
    <p></p>
  </section>
  <section>
    <h2></h2>
    <p></p>
  </section>
</article>
```

### header & hgroup

- header: 특정 컨텐츠의 시작을 나타내는 요소
- hgroup: heading 요소를 그룹화 하여 제목 - 부제목 관계를 나타내고자 할 때 사용 (계층 관계 x)

```html
<article>
  <header>
    <h1>제목</h1>
    <h2>부제목</h2> <!-- 부제목 목적으로 사용했지만 계층 관계를 가짐 -->
    <hgroup> <!-- h1만 제목으로 다른 툴들이 인식 -->
      <h1>제목</h1>
      <h2>부제목</h2>
    </hgroup>
    <p></p>
  </header>
  <section>
  </section>
  <section>
  </section>
</article>
```

### footer & address

- footer
  - 콘텐츠의 마무리 영역을 담당하는 요소
  - article, section 내에서 많이 쓰임
  - 저작권, 출처, 작성자 정보, 작성일 등 을 주로 담음
- address
  - contact information (연락처, 주소 등)을 다룸

```html
<footer>
  <p>
    <cite>출처: <a href="http://...">위키백과</a></cite>
  </p>
  <address>
    <p>
      작성자: <a href="mailto:rhkrgns56@naver.com">곽대훈</a>
    </p>  
  </address>
  <p>
    <time>2021-02-03</time>
  </p>
</footer>
```

### nav

- navigation 의 약자
- 페이지의 네비게이션을 담는 요소
- 용도가 다양
  - 각종 메뉴
  - 콘텐츠 목차
- 크롤러가 nav, a 태그를 많이 사용하니 참고

```html
<article>
  <nav>
    <a href="#article-header">본문 제목</a>
    <a href="#article-section">본문 내용</a>
  </nav>
  <header id="article-header">
    <hgroup>
      <h1>제목</h1>
      <h2>부제목</h2>
    </hgroup>
    <p></p>
  </header>
  <section id="article-section">
    <h2></h2>
    <p></p>
  </section>
</article>
```

### aside

- 콘텐츠의 큰흐름과는 관련이 없는 내용을 담는 요소
- 콘텐츠 추천, 광고 등을 담음
- 독립성이 보장

```html
<aside>
  <iframe src="ad.html"></iframe>
</aside>
```

## refs

- https://developer.mozilla.org/ko/docs/Web/HTML/Element/article
- https://www.w3.org/TR/2014/REC-html5-20141028/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
