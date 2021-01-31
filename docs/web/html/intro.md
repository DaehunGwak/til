---
id: intro
title: HTML 살펴보기
---

> 해당 글은 inflearn [초보자를 위한 HTML 기초](https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88/) 를 보고 정리한 것입니다.
> 문제가 될 시 삭제하겠습니다.

## HTML 이란

HTML (Hypertext Markup Language)

- Hypertext
- Markup Language `<div>`, `<section>`
  - SGML (Standard General Markup Language)
  - 이런 마크업 언어도 있어요: XML, MathML, EmotionML (Markup Language)
- HTML 표준은 HTML과 관련 API로 구성되어 있음
- `마크업언어로만 접근하는 것을 권장하지 않음`
  - Web Storage, Socket API (HTML Spec)
  - 나아가 웹이 어떻게 동작하고 어떻게 웹브라우저가 동작하고 렌더링되는지 알아보면 좋음

### HTML의 탄생 배경

- HTML은 문서를 표현하기위해 탄생
- 지금은 버전이 Living Standard
  - HTML 5 용어는 공식적으로 폐기된 상태
  - html.spec.whatwg.org

### 왜 중요?

- HTML은 웹의 근간, 웹의 골격
  - JSX (React 문법) > HTML
- 브라우저가 공식증로 지원하는 언어는 4종류
  - HTML, CSS, JavaScript, WASM (웹어셈블리)
- `HTML을 잘 안다는 건`
  - 브라우저가 어떤 방식으로 동작하는지 이해
  - 검색엔진, 크롤러, 콘텐츠 표현 방식, 접근성 등에 대한 이해도를 높이는 것

## 웹 브라우저 전쟁과 웹 표준

### 웹 브라우저 전쟁

- 최초의 브라우저: MOSAIC
- 이후 Netscape가 Netscape Navigator 브라우저를 제작
- Netscape Navigator vs. Microsoft Internet Explorer
- MS에서 windows 95에서 인터넷 익스플로러 끼워 팔기 시작하면서 1위로 점유하기 시작
- JScript 자체적으로 개발
- Flash
- `웹 표준의 시작`
  - 2000년도에 Netscape가 Firefox개발로 전환 (Mozilla 재단 설립)

### 웹 표준 (Web Standard)

> 모든 브라우저에서 동일한 동작을 기대할 수 있어야 한다

- 표준화기구 W3C
  - 1994, 팀 버너스리 설립
  - W3C 표준은 몇 가지 단계를 거쳐 만들어짐
  - 시간이 걸림
  - Recommendation: 권고안
    - 구현에 필수적인 사항은 아님

- WHATWG 표준
  - [WHATWG Standard](https://html.spec.whatwg.org)
  - Living Standard

- 웹 표준 프로젝트
  - 1998년 만들어짐
  - 브라우저 및 개발자들에게 웹 표준 준수에 대한 인식을 심어주고
  - 모든 브라우저에 동일한 사용성을 제공할 수 있게 하자는 운동

- `웹 표준 처음 시작 스펙`
  - Structural Languages
    - HTML 4.0
    - XML 1.0
  - Presentational Languages
    - CSS1, CSS2
    - XSL (under development)
    - `css3` 는 따로 보는게 좋음
  - Object Models
    - DOM1 Core HTML/XML
  - Scripting
    - ECMAScript (the "official" version of JavaScript)

### RECAP

- 브라우저 전쟁으로 비표준 기술 발달
- 브라우저 독점 시장화
- IE 독주
- 여러 브라우저가 웹표준을 지원해서 개발자가 기대한 결과를 얻게하는데 취지
- 지금 시점에선 웹표준을 지키면됨

## 웹 콘텐츠 접근성

- Accessibility, 접근성 !== 장애인 대상
- 접근성이 반드시 추가 작업을 일으키거나, 장애인 만을 대상으로 하는게 아님!!
- `웹 콘텐츠 접근성`으로 바라보자
  - 모두가 웹에 있는 컨테츠에 잘 접근할 수 있어야 함
- 장애
  - 시각, 청각, 색약, 색맹, 전맹, 뇌병변, 신체 결손

### WCAG

- W3C에서 관리
- not only developer, 모든 프로덕트 제작자가 챙겨야하는 영역
- best practices를 잘 준수
- HTML 표준을 잘 준수하는 것도 WCAG에 포함
- 항목
  - Perceivable
  - Operable
  - Understandable
  - Robust

#### KWCAG

(한국에서 배포하고 있는 국내 표준, WCAG와 거의 동일)

- 인싱
- 운용
- 이해의 용이성
- 견고성

### 장애인 차별 금지 및 권리 구제에 관한 법률

- 제작한 웹사이트가 접근성을 준수하지 않았을 경우, 장애인 단체 및 집단이 진정을 넣을 수 있음

## 브라우저와 브라우저 엔진

### 웹 브라우저

- HTML, CSS, JS, WASM 해석
- 해석 후 렌더링
- 생각보다 많은 영역을 수행해주는 애플리케이션
- 종류
  - Chrome (Google)
  - Safari (Apple)
  - Edge (MS)
  - Firefox (Mozilla)
  - Opera (Opera software)
  - Internet Explorer (MS)
    - 2022 지원 wndeks 예정
  - Whale (Naver)
  - Brave (Brave)
  - Samsung Internet (Samsung, mobile)

### 웹 브라우저 구성

- 브라우저 엔진 (렌더링 엔진)
  - 브라우저가 동작하는 데 필요한 기반 기술을 모두 포함하는 집합체
  - 브라우저 엔진에 따라 동작 방식이 거의 유사
  - 종류
    - Blink Engine (Chrome, Opera, Samsung Internet, MS Edge, Whale, Brave)
    - WebKit Engine (Safari)
    - Servo Engine (Firfox), Gecko Engine (Firefox)
- 자바스크립트 엔진
- 통신 모듈

### iOS

- 모든 브라우저가 WebKit 기반
- Safari 브라우저에 스킨 씌우는 정도
- (검색해보니 blink가 ios에 도입될 수 있도록 구글에서 추가 개발했다고 하는데 나중에 알아보면 좋을 듯)

## 표준화 기구 소개

### 표준화 기구란

- 기술 표준을 만들어, 여러 제조사와 기관들이 해당 표준을 따라 구현하게 함
- 이는 사용자가 해당 표준을 통해 해당 제품을 만들 수 있음
- 표준화 기구 목록
  - W3C
    - WICG
  - WHATWG
  - ECMA International (Javascript Spec.)
    - TC 39 (ECMA 내 조직)
  - IETF
  - ISO

:::note

<details>
<summary>표준화 기구 리스트</summary>

#### W3C

- https://w3.org/
- 가장 큰 웹 표준화 기구
- 1994 ~
- specs
  - CSS
  - MathML, EmotionML
  - Payment
  - Authentication
  - Linked Data
  - 구버전 HTML
  - Accesibility
  - ETC...

#### WICG

- https://wicg.io/
- w3c 산하그룹
- 신규 스펙들을 제안하고 관리하는 그룹
- specs
  - Web-codecs
  - Web components
  - Priority-hints
  - Web package
  - Cookie-store
  - virtual-scroller
  - video-editing

#### WHATWG

- https://whatwg.org/
- 2004 ~
- Apple, Mozilla, Opera 가 모여 만듦
- 표준을 만들고 자주 변경하자는 취지
- 대신 compability를 보여주는 것으로~
- html 위주, web app 관련
- specs
  - HTML Living Standard
  - DOM
  - Encoding
  - Fetch
  - Notification
  - Fullscreen API
  - ETC...

#### ECMA International

- https://ecma-international.org/
- 1961 ~
- specs
  - [ECMA-262] ECMAScript (JavaScript)
  - [ECMA-402] ECMAScript 2020 Internalization API
  - [ECMA-404] JSON
  - [ECMA-408] Dart Programming
  - nfc 등 많음

#### TC 39

- https://tc39.es/
- ecma international 산하 조직
- JavaScript 표준을 정의하고 관리하고 논의
- specs
  - [ECMA-262] ECMAScript (JavaScript)
  - [ECMA-402] ECMAScript 2020 Internalization API
  - [ECMA-404] JSON

#### IETF

- https://www.ietf.org/
- 인터넷 운영, 관리, 개발에 대해 협의 프로토콜을 제작
- specs
  - [RFC 9740] HTTP/2
  - [RFC 2616] HTTP/1.1
  - [RFC 8441] WebSocket
  - [RFC 6265] HTTP State Management Mechanism (Session & Cookie)
  - [RFC 2289] One-time password system (OTP)

#### ISO

- https://www.iso.org/home.html
- 인터넷 뿐만 아니라 다양한 분야의 표준을 정의하고 관리하는 기구
- 1947 ~
- specs
  - [ISO/IEC 10918-6:2013] Application to printing systems
  - [ISO/IEC 15948:2004] Computer graphics and Image processing
  - [ISO/IEC 8859-1] Latin 1 Supplement

</details>

:::

### Recap

- 웹에선 W3C, WHATWG, ECMA International 등이 가장 중요함
- 표준화 기구 내에도 다양한 관심사 그룹이 존재, 관심사 별로 기능

## HTML Living Standard 소개

> https://html.spec.whatwg.org/multipage/  
> multipage version / developer version 을 추천

- 처음엔 어려울 수 있으니 어느정도 적응후에 보는 것을 추천
- Examples이 best practices라 생각하면 됨
- 옆에 MDN 에서 Compatibility 확인 가능

## 기본 HTML 템플릿

```html
<!DOCTYPE html> <!-- HTML 버전 명시 -->
<html lang="ko">
<head>
  <!-- Document Metadata -->
  <!-- 다른 문서나 다른 머신에게 이 문서에 대한 정보를 제공 -->
  <meta charset="UTF-8"> <!-- 별도 명시 안하면 한글 등 깨질 수 있음 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <!-- 문서 핵심 내용, 컨텐츠 -->
  <!-- 눈에 보임 -->
</body>
</html>
```

## `DOCTYPE`

- html, xml, xgbml, svg 같은 마크업 기반 언어에서 사용됨
- 문서 타입과 버전을 명시
- html living standard doctype: `<!DOCTYPE html>`
- 명시하지 않으면, 브라우저는 해당 파일을 읽을 때 Quirks mode 라는 하위 호환성 모드로 읽음

## HTML Content model

- 모든 html 요소는 콘텐츠 모델을 가짐
- WHATWG 스펙에 명시되어 있는 항목을 나열 조금 해보자면
  - `Contexts in which this element can be used`
    - 어디에서 활용하는지 스펙에서 볼 수 있음
  - `Content model`
    - 어떤 컨텐트 타입에 속하는지 표현

### 카테고리

:::note

<details>
<summary>각 타입 정리</summary>

#### Metadata content

- 웹페이지 내에 동작이나 표현을 정의
- 문서간의 관계를 나타냄
- 문서에 대한 정보를 나타냄
- tags: link, meta, script, title, style ....

#### Flow content

- 문서에 body 요소내 들어갈 수 있는 대부분의 요소는 Flow 콘텐츠에 속함

#### Sectioning content

- heading과 footer의 범위를 정하는 콘텐츠
- tags: article, aside, nav, section

#### Heading content

콘텐츠의 섹션 헤더 정의

- tags: h1 ~ h6, hgroup

#### Phrasing content

- 텍스트 표현

#### Embedded content

- 문서에서 외부 콘텐츠를 가져올 때 사용하는 콘텐츠
- 이미지, 비디오, 오디오, 외부 문서 등
- tags: audio, canvas, embed, iframe, img, svg, video, picture, Object, mathML ...

#### Interactive content

- 유저와 상호작용이 발생하는 모든 요소
- 보통 interactive 내에 다른 intreactive 요소를 넣을 수 있음
- tags: a(href), iframe, textarea, input, button, select, details, audio/video(controls), label

#### Palpable content

- 컨텐츠가 자식 노드를 가지지 않는경우
- 숨김 상태인 경우
- Flow와 Phrasing 이 대부분 포함됨

#### Script-supporting content

- 스크립트 지원을 위해 사용
- script
- template

#### Transparent content model

- 어떤 컨텐츠 모델에 포함되어 있는가에 따라 콘텐츠 모델이 달라지는 것을 말함
- a는 Transparent
  - p내에 a가 있다면 a는 phrasing content model 이라 함

#### Paragraphs

- 콘텐츠 모델은 아님

```html
<section>
  <h1>Paragraph 소개</h1>
  첫번째 <!-- 이부분을 Paragraph로 취급하지만 익명(암묵적인) 동작이라 하는데 명시적이 아니라 브라우저에 따라 다르게 나타날 수 있음 -->
  <p>두번째</p>
</section>
```

#### The nothing content model

- 일부 요소는 자식 노드를 전혀 포함하지 않는 경우도 존재
- 이부분이 무엇인지 모름
- tags: template

</details>

:::

## HTML 기본 문법

- 주요 키워드
  - 태그
    - 요소 (Elements)
    - 속성 (Attributes)
      - 속성명, 속성값

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- 생략 -->
</head>
<body>
  <!-- 태그 -->
  <div> <!-- div 요소(elements)의 여는 태그 -->
  </div> <!-- div 요소의 닫는 태그 -->

  <!-- class 속성값에 "section"을 넣어주었다. -->
  <div class="section">

    <!-- 속성명과 속성값이 동일할 경우 생략 가능 -->
    <input readonly="readonly">
    <input readonly> <!-- 위와 같음 -->
  </div>
</body>
</html>
```
