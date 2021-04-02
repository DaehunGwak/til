---
id: clean-coder
title: 클린코더
---

> 프로 프로그래머에 대한 가이드를 제시한 책.  
> 태도, 원칙, 행동에 에 초점을 두고 있음  
> [클린코더 책 링크](http://www.yes24.com/Product/Goods/29241448)

## 느낀점

- 해당 책은 로버트 마틴이 현업에서 겪으며 `프로 개발자란 무엇인가?` 를 고민하고 정리한 책이다.
- 모든 책이 그렇듯이 해당 글들을 곧이 곧대로 받아들이지 않고, 자신의 해석으로 바꾸는 것이 중요하다고 생각한다.
- 이 책 또한, 로버트 마틴의 생각이므로 모든 것을 그대로 받아들이지 않고, 자신의 것으로 다시 전환하며 읽는게 좋다고 해석하였고, 그래서 해당 책을 읽으며 어떻게 프로 개발자가 될 것인지 나만의 해석으로 정리하고자 한다.

## 1. 프로의 마음가짐

- 책임이 전부라 해도 과언이 아님
- 직업 윤리
  - 회사가 자신의 경력을 책임져 주지 않는다.
  - 한 주에 60시간 계획을 짜고 20 시간을 자신을 위해 쓰는 것을 권장
- 끊임없이 배우고 연습하라
- 함께 일하고 멘토링하라
- 프로는 때때로 실패한다는 사실과 계산이 틀릴지도 모른다는 것, 그리고 언젠가 자신의 능력이 부족해지는 날이 온다는 사실을 안다. 당당하되 겸손한 마음을 가지는 것을 잊지말자.

### 소프트웨어적으로 해를 끼치지 않으려면 어떻게 해야할까?

- 기능의 해
  - 오류 X, but 오류는 있을 수 밖에 없음
  - 그 완벽하지 않다는 사실에 책임을 져야 함
  - 오류에 책임을 지자
  - 테스트 자동화 `TDD` 를 강조
- 구조의 해
  - 구조가 좋아야 코드가 유연해 짐
  - 바꾸기 쉬운지 증명하는 길은 실제로 바꾸어 보는 것
  - `보이 스카웃 규칙`: 모듈에 체크아웃 시, 체크인 했을 때 보다 더 깨끗해야 한다는 규칙

### 최소한의 권장 기술 리스트

- 디자인 패턴 (GOF, POSA)
- 설계 원칙 (SOLID 객체지향 원칙 , Component 개념)
- 방법론 (XP, Scrum, lean, kanban, waterfall, 구조적 분석, 주조적 설계 개념 등)
- 원칙 (TDD, 객체지향 설계, 구조적 프로그래밍, 지속적 통합, 짝 프로그래밍 실천)
- 도구 (UML, 데이터 흐름도, Structure Chart, Petri Net, State Transition Diagram and Table, Flow chart, Decision Table)

## 2. 아니라고 말하기

> 프로라면 권위에 맞써 진실을 말해야 한다. 프로는 관리자에게 아니라고 말하는 용기를 가져야 한다.

- 해당 기간까지 완성하는 일이 아니라는 사실을 충분히 알고 있다면 "좋아요 한번 해볼께요" 보단,
  - `아니요, 불가능 합니다`라고 해야한다.
- 이유도 좋지만, 해당 사실이 어떤지가 훨씬 중요하다.
- 팀 플레이어는 항상 "네넵"이라고 하지않는다.
- '노력' 해도 원하는 결과를 만들지 못하면 실패다.

> 우리 모두 명심해야 할 일은 예라는 대답은 프로로서 가져야 할 원칙을 포기할 뿐 아니라, 문제 해결에도 도움이 안 된다는 사실이다.  

## 3. 예라고 말하기

- 약속의 정의
  - 하겠다고 말하고, 진심을 담고, 실제로 실행한다.
  - 즉, `나는 언제까지 할 것이다.` 를 뜻한다.
- 진심을 담지 못하거나, 완수하지 못하게 되는 이유 및 해결책
  - 자신이 모든 상황을 제어할 수 있을 때만 약속
  - 어떻게 할지 몰라도, 방법을 찾아내겠다고 약속을 하는 길도 있음
  - 예상치 못한 일이 발생되면, 바로 공유하고 예상치를 바꾸어야 함

> 문제가 될지도 모르는 사실을 다른 사람에게 즉시 알리지 않으면, 약속을 완수하는 데 필요한 도움을 얻을 기회를 스스로 뺏게 된다.

- 예라고 말하는 법
  - `노력` 이란 단어를 회피 (불확실성을 숨기면 오히려 후에 감당하기 힘듦)
  - 모든 요청에 예라고 말할 필요는 없지만, `예` 라고 말할 수 있는 창의적인 방법을 찾는데 고심해야 한다.

## 4. 코딩

> 코딩에 대해 개인적인 `행동`, `기분`, `태도` 에 관한 규칙과 원칙을 소개하는 챕터

- 코드에 대해 다뤄야 할 여러 요소
  - 코드는 반드시 동작해야 한다
  - 코드는 고객이 제시한 문제를 반드시 풀어야 한다
  - 코드는 기존 시스템에 잘 녹아들어야 한다
  - 코드는 다른 프로그래머가 읽기 쉬워야 한다

### 행동, 기분, 태도

- 지치거나 주의력이 흩어졌다면 코드를 만들지 말라
  - 새벽에짠 코드 X
- 근심이 있을땐 해당 문제를 먼저 해결하거나 우선순위를 낮추어 계속 방해거리가 되지 않게 해야함
  - 이상적으로는 개인 문제에 힘쓴느 일은 개인 시간에 해야함
- 몰입에 빠지지 마라
  - 큰그림을 놓쳐, 되돌려야 할 확률이 높아짐
  - `페어 프로그래밍`으로 이를 방지할 수 있음
- 프로다운 태도로 예의 바르게 기꺼이 도울줄 알아야 함
- 어떤 때는 코드가 안나오기도 함
  - 주요 원인으로 수면, 걱정, 불안, 우울을 꼽음
  - 여기서도 짝 프로그래밍을 추천
- 창의력이 창의력을 낳는다
  - 다른 창의적인 활동을 하는 것도 좋고, 여러 분야의 책을 읽는 것도 좋음
- 디비겅 시간도 개발 시간
  - `TDD`로 이를 많이 줄일 수 있음
- 소프트웨어 개발은 마라톤
- 피곤하면 창의성과 총명함이 사라짐
  - 곤경에 빠졌을 때나 피곤할 때는 잠시 자리를 떠나라
  - 운전이나 샤워도 도움이 됨
- 질주하라는 부추김에 넘어가면 안됨
  - 이는 소프트웨어 품질저하로 이어질 수 있음
  - 초과근무도 이에 해당
- 타인을 돕기 위해 약간의 시간도 마련하지 못할 만큼 중요한 업무는 없다.
  - 프로라면 명예를 걸고 어떤 때든 도움을 줘야 함
  - 도움을 받을땐 항상 감사하기
  - 쉽게 도움을 받을 수 있는 데도 게속 막힌 상태를 유지하는 일은 프로답지 않음

### 마감을 못지키는 날이 온다

- 이런 일정 지연을 관리하는 요령은 `이른 감지`와 `투명성`
  - 최선, 최악, 성공 가능성이 가장 높은 날, 이렇게 세가지를 짜는 습관을 들이자 (두가지라도..)
- 무슨일이 있어도 fall-back plan (실패 계획) 을 세워 놓자

### `완료`의 정의

- 독자적인 `완료`의 정의를 만들어 생기는 가짜 출시 문제를 피해야 함