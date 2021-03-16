---
id: 1-project-settings
title: 1. 프로젝트 환경설정
---

## 프로젝트 생성

### 사전 준비물

- Java 11
- IntelliJ or Eclipse

### 프로젝트 선택

- Project Envs
  - Gradle
  - Spring Boot: 2.3.x
  - Java 11
  - packaging: Jar
- Project Metadata
  - groupId
  - artifactId
- Dependencies
  - Spring Web
  - Thymeleaf

### 추가적으로

- intelliJ 에서 Gradle 실행 옵션은 Gradle 말고 intelliJ로 설정해주면 더욱 빠름

## 라이브러리 살펴보기

- Gradle, Maven 은 의존관계를 정리해준다
- 우린 spring-boot-starter-web 과 thymeleaf 만 넣었는데?
  - externals library 보니 엄청많음 패키지들이 다운됨
  - spring-boot-starter-web 이친구는 엄청많은 패키지 의존성이 있어서 다른것도 다같이 받아서 써야함
- spring-boot-starter-web
  - spring-boot-starter-tomcat
    - spring boot 에 내장 tomcat 웹서버가 있어서 이친구가 8080으로 웹서버를 띄움
  - spring-webmvc

### 로깅에 대해서

- `system.out.println` 을 쓰지말고 `logging` 을 써야함
  - 로깅 레벨 나누어 파일로 뺄때 레벨링을 할 수 있어서
- spring-boot-starter-logging
  - slf4j (interface)
    - logback (implements slf4j)

### 테스트

- spring-boot-starter-test
  - junit 5 (최신)
    - 4를 오래동안 쓰고 있었음
  - mockito, assertj
  - spring-test: Spring integration test 지원

## View 환경설정

## 빌드하고 실행하기
