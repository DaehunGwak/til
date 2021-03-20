---
id: webpack-beginner
title: npm + webpack 빠르게 시작
---

> 웹팩으로 프로젝트를 해보고자 할 때, 빠르게 시작할 수 있도록 도움이 되고자 하는 글입니다.
> 주로 [[인프런] 장기효님의 프론트엔드 개발자를 위한 웹팩 강의](https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9) 를 참고하였습니다.

## npm (Node Package Manager)

> 웹팩을 이해하기 전에 npm 구조부터 이해하는 것이 좋음

- 기본 런타임 환경이 Node
- 자바스크립트 패키지 관리 매니저
- 웹팩을 사용할려면 필수적으로 npm 으로 프로젝트를 관리하게 됨
- 특징
  - `package.json`으로 패키지 버전 의존성 관리가 용이해짐
  - cdn으로 가져오지 않고 필요한 라이브러리를 로컬에 설치해서 사용가능하게 됨

### npm project 생성

```sh
mkdir <projectName>
cd <projectName>
npm init [-y]  # -y 옵션 넣으면 자동으로 만들어 줌, 그냥 하면 수동 프로젝트 정보 입력
```

### 패키지 install, uninstall

install을 하게 되면 해당 패키지가 `package.json` 에 추가되게 됨

#### 지역 패키지 설치

```sh
npm install <packageName>  # npm i <packageName>
npm uninstall <packageName>
```

#### 전역 패키지 설치

- 전역 설치하게 되면 지역 프로젝트의 `pakcage.json` 에 추가하지 않고, 로컬 장비의 전역 Npm 에 설치하게됨

```sh
npm install <packageName> --global
npm uninstall <packageName> --global
```

### `dependencies`, `devDependencies`

- `dependencies`: 일반적으로 설치 or `--save-prod` 로 했을 때 추가됨
  - 앱 로직 직접적으로 관련 (배포용)
- `devDependencies`: `--save-dev` 옵션으로 설치하게 되면 package.json의 `devDependencies`로 추가됨
  - 개발 보조 라이브러리 (개발용)
  - build 후 배포 시, 배포되지 않는 라이브러리

```sh
npm install <packageName> --save-dev
or
npm i <packageName> -D  # 축약형
```

## 일단 webpack 프로젝트 만들어보기

### 실습

> [웹팩 핸드북 - Getting Started](https://joshua1988.github.io/webpack-guide/getting-started.html#%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1) 참고

#### commands

```sh
mkdir getting-started
cd getting-started
npm init -y
npm i webpack webpack-cli -D
npm i lodash

npm run build  # webpack --mode=none
```

### `webpack.config.js`

웹팩 옵션을 커맨드 라인으로 일일이 넣기엔 너무 많아 `webpack.config.js` 로 관리됨

```js
// `webpack` command will pick up this config setup by default
var path = require("path");

module.exports = {
  mode: "none", // 모드 (development, production, none 이 있음)
  entry: "./src/index.js", // 번들링 첫 시작 대상
  output: {
    filename: "main.js", // 결과 파일 이름
    path: path.resolve(__dirname, "dist"), // 번들링 결과 경로
  },
};
```

## webpack

- 모듈 번들러
- 장점
  - 번들링이 되면 파일들이 줄어들어, 페이지 요청을 줄일 수 있음

### 모듈 번들링?

![웹팩 공식 문서의 다이어그램 이미지](/img/docs/webpack/webpack.png)

- 웹 앱을 구성하는 자원(html, css, js, images, font 등) 들을 하나로 합쳐줌
- 여러개로 나눠진 자원, 모듈들을 하나의 파일로 만들어주는 과정

### 웹팩 등장 배경 및 해결하려는 문제

#### 등장 배경

> 웹팩은 기본적으로 필요한 자원은 미리 로딩하는게 아니라, 필요 시점에 요청하자는 철학을 가지고 있음

- 파일 단위의 자바스크립트 모듈 관리의 필요성
  - 바닐라 자바스크립트가 다른 파일 스코프 관리가 되지 않고 있었음
- 웹 개발 작업 자동화 도구 (Web Task Manager)
  - html, css, js 압축
  - 이미지 압축
  - css 전처리기 변환
- 웹 앱의 빠른 로딩 속도와 높은 성능
  - 모듈 레이지 로딩까지 가능

#### 해결하려는 문제

- 자바스크립트 변수 유효 범위
- 브라우저별 HTTP 요청 숫자의 제약
  - 최대 TCP 연결 개수의 제약
- 사용하지 않는 코드 관리
- 모듈 Dynamic Loading & Lazy Loading 미지원 -> 지원할 수 있도록

## Babel

- JavaScript compiler
  - 최대한 많은 브라우저에 지원되는 자바스크립트로 트랜스 파일링 (컴파일) 해줌

### sourcemap

- 빌드 결과물을 로딩했는데 `sourcemap` 기능으로 해당 원본 파일을 브라우저 디버깅창에서 확인할 수 있음

### babel + sroucemap 포함된 `webpack.config.js`

```js
var path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: "source-map", // 디버깅 시 번들링된 파일에서도 브라우저 디버깅이 가능하게 만들어 줌
};
```

## Referecnes

- [[인프런] 장기효님의 프론트엔드 개발자를 위한 웹팩 강의](https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9)
- [강의 예제 github](https://github.com/joshua1988/LearnWebpack)
- [장기효님의 웹팩 핸드북](https://joshua1988.github.io/webpack-guide/)
