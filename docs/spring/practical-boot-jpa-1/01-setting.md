---
id: 01-setting
title: 01. 프로젝트 세팅
---

> 다 따라해보기

## 프로젝트 생성과정

- [start.spring.io](https://start.spring.io/) 에서 프로젝트 생성 가능
- 추가할 Dependencies
  - spring web
  - spring data jpa
  - h2 database
  - lombok
  - thymeleaf

### gradle 구성

- plugins: spring 관련 플러그인 들이 dependencies의 버전을 알아서 관리해줌
- dependencies: 라이브러리 들
  - 관련 있는 의존 관계 라이브러리를 다같이 불러 옴

### lombok + intellij 세팅

- intellij에서
  1. Preferences > Plugins > lombok 검색 후 설치
    - 요즘은 기본적으로 번들되어 있음
  2. Preferecnes > Annotation Proccessors 검색 > Enable annotation processing 활성화

## 라이브러리 살펴보기

- `build.gradle` 에서 확인 가능
- 핵심
  - spring web
    - mvc, tomcat
    - core
  - spring data jpa
    - db connection pool: HikariCP (spring-boot-start-jdbc default)
    - JPA, hibernate (JPA 구현체)
  - 로깅: slf4j (인터페이스) & logback (구현체)
  - WEB (thymeleaf)
  - 테스트: junit, mockito, assertj
- `./gradlew dependencies` 로 의존관계를 커맨드 라인에서 확인가능

## View 환경설정

- thymeleaf 템플릿 엔진을 사용
  - 장점
    - Natural templates: 마크업을 깨지 않고 그대로 씀 (웹 브라우저에서 그냥 열림)
  - 단점
    - 성능 이슈도 조금 있음
    - 매뉴얼을 조금 봐야함..
- 세팅은 dependencies 에 있기만 하면 세팅 완료
- 문제: 서버 리스타트를 계속 반복적으로 하면 짜증날 수 있음
- 해결: `spring-boot-devtools` 디펜던시를 추가하면 좋은 개발 도구들을 제공해줌
  - 대표적으로 리스타트
  - log 에 `[  restartedMain]` 가 보이면 성공
  - html 수정 후
    - Build > Recompile '*.html' 를 누르면 spring이 devtools 기능을 이용하여 리로드함

## H2 데이터베이스 설치

- h2?
  - 테스트용 인 메모리 관계형 디비
- 혹시 오류나면 gradle h2 패키지 버전과 설치 버전이 동일한지 확인
- 처음 `./bin/h2.sh` 을 실행하면 디비가 실행되고, 웹 콘솔이 뜸
- 웹 콘솔에서 jdbc url 을 `jdbc:h2:~/jpashop` 로 설정하여 jpashop db 파일 생성
- 그 다음 부턴 tcp 커넥션 `jdbc:h2:tcp://localhost/~/jpashop` 으로 연결

## JPA와 DB 설정, 동작확인

- 설정파일은 `resources/application.yml` 파일로 설정

```yml title="resources/application.yml"
spring:
  ...
  jpa:
    ...
    properties:
      hibernate:
        show_sql: true # System.out
        format_sql: true

logging.level:
    org.hibernate.SQL: debug # logger (show_sql 보다 logger를 사용하는 것을 권장)
```

- h2 연결 url 작성 시, `MVCC` 세팅은 최신 버전에서 사라짐
- TC 에 붙은 어노테이션
  - `@Transactional`: TC에 붙으면 실행 이후 rollback 함
  - `@Rollback(false)`: 롤백 무시는 이렇게 가능

```sh title="jar 로 실행 해보기"
./gradlew clean build
cd build/libs
java -jar jpashop-0.0.1-SNAPSHOT.jar
```

- spring boot는 설정이 자동화되어 있음
- 패키지를 추가할 땐 성능 테스트 꼭 해보기
