---
id: 5-web-mvc
title: 5. 회원 관리 예제 - 웹 MVC 개발
---

## 홈 화면

- http://localhost:8080/ 요청 시
  - 톰캣이 받아 스프링 컨테이너에게 건내줌
  - 스프링 컨테이너에게 맵핑되어있는지 확인해봄
  - `없으면` /resources/static/index.html 을 렌더링

## 등록

- `@PostMapping` 을 사용하여 html form-data 입력 받기 (HTTP POST)

```java
@PostMapping("/members/new")
public String create(MemberForm form) { // MemberForm에 <input> 의 name 속성에 매칭되는 값들을 스프링이 파싱해줌
    Member member = new Member();
    member.setName(form.getName());

    memberService.join(member);

    return "redirect:/";  // 302 redirect로 변환해줌
}
```

## 조회

thymeleaf 문법으로 조회

```html
...
<table>
    <thead>
    <tr>
        <th>#</th>
        <th>이름</th>
    </tr>
    </thead>
    <tbody>
    <tr th:each="member : ${members}">  <!--model.addAttribute("members", members); 로 주입된 값들-->
        <td th:text="${member.id}"></td> <!--member.getId() 를 이용해서 가져옴-->
        <td th:text="${member.name}"></td> 
    </tr>
    </tbody>
</table>
...
```
