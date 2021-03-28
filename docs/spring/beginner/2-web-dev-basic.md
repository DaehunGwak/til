---
id: 2-web-dev-basic
title: 2. 스프링 웹 개발 기초
---

## 웹 개발 종류

### 정적 컨텐츠

- 서버에서 html, css, js 같은것을 내려줌
- spring 에서 기본적으로 정적 컨텐츠 기능을 가지고 있음
- `main/resrouces/static` 경로에 파일을 추가하면 자동 맵핑

#### spring에서 정적컨텐츠 요청이 들어왔을 때 처리 순서

1. html을 브라우저에서 요청
2. 내장 톰캣이 요청을 받음
3. 스프링 컨테이너에서 컨트롤러 맵핑을 찾지만 없음
4. resources 경로에 파일 유무 확인 후, 있으면 브라우저에 해당 리스소 전송

### MVC + template 엔진

- MVC: Model, View, Controller

#### mvc 샘플 코드

```java
@GetMapping("hello-mvc")
public String helloMvc(@RequestParam(value = "name", required = false) String name, Model model) {
    model.addAttribute("name", name);
    return "hello-template";
}
```

#### HTTP GET `/hello-mvc?name=123` 이 요청되었을 때 일어나는 일

1. 톰캣이 해당요청을 받아 스프링 컨테이너에 넘겨준다
2. 스프링 컨테이너가 `helloController`에 `GetMapping("hello-mvc")` 되어 있는 곳에 라우팅 함
3. 로직을 처리하고 `viewResolver` 로 model과 hello-template 이란 정보를 넘김
4. `viewResolver`에서 받은 정보로 Thymeleaf 템플릿 엔진을 사용하여 html 변환 함
5. 변환된 html을 브라우저로 전송

### API

- HTTP method를 이용하여 데이터만 전송하는 방식 (not html, css, js)
  - 데이터 형식으로 string, xml, json 등이 있음

#### api 샘플 코드

```java
@GetMapping("hello-string")
@ResponseBody
public String helloString(@RequestParam(value = "name", required = false, defaultValue = "default") String name) {
    return "hello, " + name; // string 으로 반환
}

@GetMapping("hello-api")
@ResponseBody
public Hello helloApi(@RequestParam(value = "name", required = false, defaultValue = "default") String name) {
    Hello hello = new Hello();
    hello.setName(name);
    return hello; // json 으로 반환
}

static class Hello {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

#### `@ResponseBody` 동작 방식

- HTTP의 body를 직접 반환
- viewResolver 대신 `HttpMessageConverter` 동작
  - string 을 전달 받으면 `StringHttpMessageConverter`가 동작 (string type body 생성)
  - 객체가 반환되면 `MappingJackson2HttpMessageConverter`가 동작 (json type body 생성)
    - json converter는 spring에서 크게 `jackson` (기본) 과 `gson` (google) 이 있음
  - byte 처리 등등 기타 여러 HttpMessageConverter가 기본적으로 등록되어 있음
