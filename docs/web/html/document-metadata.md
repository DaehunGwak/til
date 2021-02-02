---
id: document-metadata
title: HTML 요소 - Document metadata
---

> 해당 글은 inflearn [초보자를 위한 HTML 기초](https://www.inflearn.com/course/html-%ED%91%9C%EC%A4%80-%EA%B8%B0%EC%B4%88/) 를 보고 정리한 것입니다.
> 문제가 될 시 삭제하겠습니다.

## Document metadata

- 메타 요소, 해당 문서 or 앱의 metadata (문서 설명) 를 담는 요소
- 실제 보여지는 컨텐츠 영역이 아님
- 주로 `<head>` 요소 사이에 위치

### Character Encoding

문자 인코딩
  
- 해당 html 문서를 어떤 문자 인코딩으로 해석할지 결정
- UTF-8, EUC-KR 등이 있음
- DB charset과 동일한 인코딩을 권장

```html
<meta charset="UTF-8">
```

### Viewport

- 모바일 브라우저(태블릿 PC)에서 화면을 어떻게 노출시킬 지 결정
- 기입하지 않는 경우 기본 화면렌더링이 이상하게 동작함

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### SEO에 도움 주는 메타데이터

- description
  - 검색 결과에 대한 상세 설명란

```html
<meta name="description" content="해당 영역에 자세한 설명 기입">
```

### Social Metadata

#### Facebook - Open Graph

- 일명 OG Tag
- 해당 웹을 페이스북, 카카오톡에 붙여넣었을 때 생성되는 카드(?)의 정보 들
- (개인의견) 페이스북, 카카오톡 등 회사 별로 캐싱이 되고 있으니 각 회사의 캐시 비우는 방법을 알아두면 좋음
- spec: https://ogp.me/ 
- debugger: https://developers.facebook.com/tools/debug/

```html
<meta property="og:title" content="Ordi's Blog">
<meta property="og:url" content="https://daehungwak.github.io">
<meta property="og:description" content="Ordi(Daehun Gwak) logs about dev experiences">
<meta property="og:image" content="https://daehungwak.github.io/media/image/og.png">
```

#### Twitter Card

- 트위터는 OG를 안쓰고 자체적 메타 프로토콜을 사용
- spec: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards

```html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@ordi">
<meta name="twitter:title" content="metadata element">
<meta name="twitter:description" content="메타데이터 요소에 대한 설명을 다루는 웹페이지">
<meta name="twitter:image" content="https://techhtml.dev/image/og.png">
```

### Title

- 제목
- 매우 중요우웆우중ㅈ욪웅
- 브라우저 상단에 보이기도 하고, 검색 결과 제목 문구에 보이기도 함
- 저어어얼때 빠트리지 않을 것

```html
<title>Ordi의 개발 블로그</title>
```

### Link

- 해당 문서와, 다른 문서 or 다른 콘텐츠를 연결해주는 요소
- 대표적으로 `css` stylesheet 연결이 있음

```html
<link rel="stylesheet" href="./style.css">
```

### Style

- 문서 내에 css를 삽입할 수 있는 요소
- 성능 개선용으로 주로 쓰임
- 문서에 꼭 필요한 스타일은 헤더 style태그로 다루고,
- 컴포넌트 별 css를 관리해야할 경우는 따로 파일을 분리 시켜 다루는 것을 권장함

> 네트워크는 성능을 저하시키는 주요 부분, 따라서 http 리퀘스트는 되도록 줄이는 방향을 진행하는 것이 좋다

```html
<style>
body {
  font-size: 16px;
}
</style>
```
