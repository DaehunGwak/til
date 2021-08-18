---
id: 03-app-design
title: 03. 애플리케이션 구현 준비
---

## 구현 요구사항

- 회원
  - 회우너 등록
  - 회원 조회
- 상품
  - 상품 등록
  - 상품 수정
  - 상품 조회
- 주문
  - 상품 주문
  - 주문 내역 조회
  - 주문 취소

### 안함

- 로그인 권한관리 안다룸
- 파라미터 검증과 예외 처리 단순화 최소화
- 상품은 도서만 이용
- 카테고리는 사용 안함
- 배송 정보 사용 안함

## 애플리케이션 아키텍처

### 계층형 구조 사용

- controller -> service -> repository -> DB
- domain 공통

### 패키지 구조

- jpabook.jpashop
  - domain
  - exception
  - repository
  - service
  - web

### 개발 순서

- service, repository 먼저 작성
- TC 작성 및 검증
- 웹 계층 작성
