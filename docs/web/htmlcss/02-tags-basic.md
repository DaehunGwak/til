---
id: 02-tags-basic
title: HTML 기초 - tags
---

## 태그 Tag

- `<p>내용</p>` : 마크업 하고자하는 내용을 태그로 감싼다
- `<tag attribute="value">`
  - attribute, 속성
  - 태그에 추가적인 정보
- 목표: 다양한 태그와 `웹 표준`에 맞는 올바른 사용법을 익힌다.

## 제목과 문단 Headings & Paragraph

- headings
  - 제목
  - `<h1>` ~ `<h6>` 총 6단계
- paragraph
  - 문단
  - `<p>`

## 강조 Emphasis

> 중요한건 의미적으로 브라우저에게 해당 부분을 강조하고 있다는 의미를 전달하는 태그라는 것이다. 기본 스타일은 css로 바꿀 수 있다.

- `<strong>`: 굵게, 의미론적 강조의 의미
- `<em>`: 기울이기, 의미론적 강조의 의미
- 그 외의 비슷한 용도 태그
  - `<b>`: 굵게, 비주얼 용도
  - `<i>`: 기울이기, 비주얼 용도

## 링크 Anchor

- 현위치에서 다른 위치로 이동하는 태그
- `<a href>링크</a>`
  - href 속성 (attribute) 이 꼭 필요하다
  - href
    - hypertext reference
      - 링크 참조
- href 넣는 방법
  1. 웹 URL
     - `<a href="https://naver.com/">네이버</a>`
     - 절대, 상대 가능
  2. 페이지 내 이동: 문서 내 태그 id
     - `<a href="#div-id">div 영역 아이디로 가기</a>`
  3. 메일 주소
     - `<a href="mailto:xxxxxx@naver.com">메일 보내기</a>`
  4. 전화 걸기
     - `<a href="tel:010-xxxx-xxxx">xx 전화걸기</a>`
- `target` attribute
  - 링크를 눌렀을 때 페이지 행동을 정하는 속성
  - `target="_blank"`: 새 탭이 열림

## 이미지 Image

- `<img src="" alt=" />`
- attributes (속성)
  - src
    - 이미지 경로 url
  - alt
    - 대체 텍스트
      - 이미지가 안뜨고 있을 때, 대체 텍스트가 나옴
      - 스크린리더가 해당 이미지의 alt영역을 읽어줌 (웹 접근성)

## 목록 List

- `ul`: unordered list (순서가 중요하지 않음)
- `ol`: ordered list (순서가 중요)
- `ul`, `ol` 직계 자식 요소들은 `li`로만 쌓을 수 있음
  - `li`: list item

```html
<ul>
  <li>항목1</li>
  <li>항목2</li>
</ul>
```

### 정의 목록 Decription List

- 두가지 용도
  - 용어를 정의할 때 (ex. 사전)
  - key-value로 정보를 제공할 때
- `<dl>` (description list) > `<dt>` (description term), `<dd>` (description data)
  - dt, dd 는 dl 내 여러개일 수 있음
  - dl > div*n > dt*n, dd*n 구조 가능
  - dt의 위치는 묶어놓기, dt -> dd -> dt 이런식의 나열 X
  - dl 직계자손은 dt, dd, div 만가능
  - dt, dd 는 단독적인 사용 불가

```html
<dl>
  <dt>
    학습
  </dt> <!--key-->
  <dd>
    noun 배워서 익힘.
  </dd>
  <dd>
    noun 심리 경험의 결과로 나타나는, 비교적 지속적인 행동의 변화나 그 잠재력의 변화. 또는 지식을 습득하는 과정
  </dd>
</dl>
```

## 인용 Quotations

- `<blockquote>`
  - 문단 전체
- `<q>`
  - 문장 단위