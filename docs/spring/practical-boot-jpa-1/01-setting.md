---
id: 01-setting
title: 01. 프로젝트 세팅
---


## 프로젝트 생성하

- [start.spring.io](https://start.spring.io/) 에서 프로젝트 생성 가능
- 추가할 Dependencies
  - spring web
  - spring data jpa
  - h2 database
  - lombok
  - thymeleaf


### lombok + intellij 세팅

- intellij에서
  1. Preferences > Plugins > lombok 검색 후 설치
    - 요즘은 기본적으로 번들되어 있음
  2. Preferecnes > Annotation Proccessors 검색 > Enable annotation processing 활성화


## 라이브러리 살펴보기

- 핵심
  - spring mvc
  - spring orm
  - JPA, hibernate
  - spring data jpa
- 기타
  - h2 db client
  - connection pool: HikariCP (spring default)
  - WEB (thymeleaf)
  - 로깅: slf4j & logback
  - test

### main

- `build.gradle` 에서 확인 가능
- `./gradlew dependencies` 로 의존관계를 커맨드 라인에서 확인가능
- 아니면 intellij 오른쪽에 붙어있는 바에 gradle 이 있음
- spring-boot-stater-web
  - spring-webmvc
  - spring-boot-starter-tomcat (서버를 띄어주는 역할)
- spring-boot-starter-data-jpa
  - spring-boot-starter-aop
    - spring-boot-starter-logging
      - logback 을 많이 씀
        - slf4j 는 인터페이스의 모음
          - 여기에 logback, log4j 를 볼 수 있음
  - springboot-stater-jdbc
    - HikariCP
      - 커넥션 풀 관리
  - hibernate-core
  - spring-boot-jpa
- thymeleaf
- spring-boot-core는 spring-boot-stater-*를 쓴다면 왠만하면 다 들어있음

### test

- junit
- mockito
- assertj


## View 환경설정

- thymeleaf 템플릿 엔진을 사용
  - 장점
    - Natural templates
      - 마크업을 깨지 않고 그대로 씀
  - 단점
    - 성능 이슈도 조금 있음
    - 매뉴얼을 조금 봐야함..

> spring 공식 사이트에 guide 에 getting-started 해보면 좋음

- 세팅은 dependencies 에 있기만 하면 세팅 완료
- 문제
  - 서버 리스타트를 계속 반복적으로 하면 짜증날 수 있음
  - `spring-boot-devtools` 디펜던시를 추가하면 좋은 개발 도구들을 제공해줌
    - 대표적으로 리스타트
    - log 에 `[  restartedMain]` 가 보이면 성공
    - html 수정 후
      - Build > Recompile '*.html' 를 누르면 spring이 devtools 기능을 이용하여 리로드함
