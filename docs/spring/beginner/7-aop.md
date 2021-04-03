---
id: 7-aop
title: 7. AOP
---

## AOP가 필요한 상황

- 모든 메소드의 호출 시간을 측정하고싶다면?
  - 사실 이건 핵심 비즈니스로직은 아니고, 공통 로직임
  - 이런걸 `공통 관심사항 (cross-cutting concern)` 이라 부름
  - 일반 비즈니스 로직은 `핵심 관심사항 (core concern)` 이라 부름

## AOP란

- AOP: Aspect Oriented Programming
  - 공통 관심사항과 핵심 관심사항을 분리하는 것
- AOP 를 적용하면 핵심 관심사항을 변경할 피하고 공통 관심사항 로직을 작성하여,
  - 필요한 곳에서만 적용가능

## 스프링에서 AOP 동작 방식

proxy 방식의 AOP 라고 부름

- AOP 적용 전
  - helloController -> memberService
- AOP 적용 후
  - helloController -> `memberService (proxy)` --(joinPoint.proceed())--> memberService

> 다른 강의에서 자세히 다룰 예정



