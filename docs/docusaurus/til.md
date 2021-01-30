---
id: til
title: docusaurus를 til로 쓰기
---

몇 만번째 til을 다시 만드는 건진 모르겠지만, 새해 다짐에 til을 다시 시도해보는 것을 목표로 하고 있어, docusaurus로 진행해보려 한다.

## docusaurus를 선택한 이유

검색 기능이랑 다크테마, 사이트 맵 등을 직접 만들기 싫었고 이런 기능이 다 담겨있는 종합적인 프레임워크를 고민하였다. 이때까지 써본 것 중 가장 기능 마음에 든 gatsby, gridsome, docusaurus가 있었는데 그 중 다음과 같은 이유로 선택하였다.

- 다크테마 지원
- 코드 copy, 검색 (algolia) 플러그인 존재
- google gtag, sitemap 플러그인 존재
- 이때까지 써본 것 중 가장 편했음 (주관적, 이게 가장 큼 사실)

## command history

### settings

```sh
npx @docusaurus/init@latest init til classic
```

### run on local

```sh
npm start
```

### deploy

github pages를 활용해 배포할 예정인데, 하기 전 환경 변수들을 수정해야한다. [docs: Deploying to Github Pages](https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages) 문서를 보고 참고하자.

난 매번 GIT_USER를 배포할때마다 앞에 달기 귀찮어, 로컬 맥에 환경변수를 export 하였다.

```sh
export "GIT_USER=DaehunGwak"
npm run deploy
```

## refs

- [Docusarus v2 docs](https://v2.docusaurus.io/docs/)
- [docs: Deploying to Github Pages](https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages)
