---
id: 3-dev-backend
title: 3. 회원 관리예제 - 백엔드 개발
---

> - 실제 코드를 풀로 적진 않을 예정  
> - 모르는 원리, 구조에 대해 정리

## 비즈니스 요구사항 정리

- 데이터: 회원 ID, 이름
- 기능: 회원 등록, 조회
- 아직 데이터 저장소가 정해지지 않음 (가상의 시나리오)

### 일반적인 웹 앱 구조

Controller -> Service -> Repository -> DB 의 구조  
Domain은 어디에서든 접근 가능

- Controller
  - MVC의 contorller 역할
  - 백엔드 첫 진입점
- Service
  - 핵심 비즈니스
- Repository
  - DB와 연결되는 부분
  - 도메인 객체를 DB 에 저장하고 관리
- Domain
  - 비즈니스 도메인 객체
  - 어떤 곳에서도 접근 가능

### 클래스 의존관계

- MemberService -> MemberRepository (interface)
- MemoryMemberRepository 는 MemberRespotiory 구현체
  - 아직 구체적은 DB 타입이 지정되어있지 않으므로 memory만 가지고 CRUD 할 예정

## 테스트 작성

### 테스트 작성 시 유의사항

- 메소드를 각각 테스트 할 때, 클래스에 어떤 순서로 실행될지 모르기 때문에  `각 테스트 메소드가 독립적으로 실행 수 있도록 구성해야 함`
- 해당 예제에선 `@AfterEach`로 매 테스트 메소드 실행시마다 메모리를 비워줌
- 테스트 케이스 없이 개발은 거의 불가능이라고 하심
- 전체 테스트는 패키지에 오른쪽 클릭하고 런
- 테스트 규칙 `given`, `when`, `then` (주석 권장)
  - given: 테스트에 다룰 데이터
  - when: 실행
  - then: 검증
