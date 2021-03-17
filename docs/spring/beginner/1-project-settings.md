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

- Welcome Page 만들기
  - `src/main/resources/static` 에서 `index.html` 을 작성하면, base path로 해당 파일이 로딩됨

- 스프링은 너무 커서 다 외운다는 것이 불가능
  - spring.io 에서 docs 뒤적뒤적 잘하기

### controller 작성

`resources/templates/hello.html`

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org/">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <p th:text="'안녕하세요 ' + ${data}">안녕하세요</p>
</body>
</html>
```

`java/hello/hellospring/controller/HelloController.java`

```java
package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "hello!!!!!?!");
        return "hello"; // resources/templates/hello.html 을 실행시켜라는
    }

    /*
    웹 브라우저에서 `localhost:8080/hello` 를 검색하면 스프링 서버에서 일어나는 일

    1. tomcat이 받음
    2. spring 컨테이너에 hello 맵핑되어있는 친구를 찾음
    3. GetMapping("hello") 인 HelloController.hello() 를 실행
        - 이때, 스프링에서 model을 주입
    4. model에 data: "hello!!!!?!" 를 입력
    5. return "hello"
    6. viewResolver가 "hello" 리턴값을 받아 resoureces/templates/hello.html을 렌더링
        - 렌더링 시 model에 담겨져 있던 data 값을 th 문법에 맞게 렌더링
     */
    
}
```

> 참고로, `spring-boot-devtools` 를 이용하면 껏켯할 필요없이 html 수정 시 live-reloading 이 됨

## 빌드하고 실행하기

> mac 에서는..

```sh
./gradlew build
cd build/libs
java -jar hello-spring-0.0.1-SNAPSHOT.jar
```
