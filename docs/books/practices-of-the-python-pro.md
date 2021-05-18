---
id: practices-of-the-python-pro
title: 프로그래머를 위한 파이썬
---

## 1. 더 큰 그림

- 전문가처럼 코딩한다는 것은 장기간에 걸쳐 대규모 소프트웨어를 개발하고 유지하는 데 도움이 되는 개념과 전략을 배운다는 의미이다.

### 요약

- 이 책은 파이썬으로 복잡한 소프트웨어를 짜기위해 어떤식으로 하면 좋을지 안내하는 서적이다
- 파이썬은 엔터프라이즈 언어로도 좋고, 교육에도 적합하다
- 설계는 필수적이다. 설계를 하지 않는 개발은 후에 다른 작업에 영향을 끼칠 수 있다

### 기대효과

파이썬을 기준으로

- 복잡한 소프트웨어 시스템이 어떻게 동작하는지에 대해 적응
- 전문 지식을 사용한 시스템 개선
- 발생할 수 있는 위험 요소들을 최소화하기 위해 개발 전에 구상하는 방법

### 파이썬이 왜 좋은 언어인가

- 엔터프라이즈 언어
  - 프로토타이핑이 빠름
  - 소프트웨어를 견고하고 유지보수할 수 있는 코드로 만들어 주는 능력을 제공
- 교육용 언어

### 설계

- 설계의 진정한 가치는 어떤 결과에 도달하는 과정에 있음
- 소프트웨어 분야에선 최대한 효과적으로 수행하는 시스템을 위한 계획을 그리는 과정
- 개발 과정에서 이런 순간을 의도적으로, 개발 초기에 갖게되면 장단기적 이점을 얻게 될 것임
- 설계를 위한 고려사항
  - 일반적 사용자 관점: 속도, 무결성, 자원, 보안
  - 개발자 사용자 관점: 느슨한 결합, 직관성, 유연성, 확장성
- 프레임워크
- 하지만 평생 한두 번 사용하는 코드를 개선하기 위해 몇 주를 소비하는 것은 경제적이지 않음
- 어떤 작업을 수행하는 방법이 한 가지뿐인 경우는 거의 없다
  - 그래서 만약 협업시 상충되는 의견이 있다면, 먼저 어떤 이유로 서로 생각이 다른지 살펴보자

## 2. 관심사 분리

> 코드를 별개의 조각으로 분리하는 기능 / 방법 / 시점 / 기준 에 대해 배우게 됨

- 명확한 코드
  - 어느 시점에 쉽게 이해되는 코드
  - 여러 기능을 관리할 수 있도록 작은 코드 조각으로 나누는 것
  - 하지만 `임의의 기준 X`
  - `관심사에 따라 나누는 것이 효과적` (관심사 분리)

### 네임스페이스

- 필요성
  - 동일 한 이름들이 여러곳에 발생할 수 있어 이를 구분 해줄 수 있음
  - 코드가 어디있는지 추적이 용이
  - 코드 추가 시 어떤 위치에 넣을지 안내 가능 -> 헷갈릴 경우 네임스페이스 새로 추가의 냄새가 남
- 파이썬에선 명시적으로 네임스페이스를 만들 수 없음
- 각 모듈(파일)은 그 모듈에 있는 코드를 자유롭게 접근 가능하도록 전역(global) 스페이스를 가짐
- `import`를 통해 다른 모듈(파일)의 함수, 클래스, 변수를 해당 파일의 전역 스페이스로 등록할 수 있다
- 파이썬은 다음과 같은 네임스페이스 구조를 가진다
  - 파이썬 내장 (최상단)
  - 모듈 전역
  - 클래스
  - 메서드 (최하단)
- 상단과 하단의 이름이 겹치면 하단의 이름으로 기능이 오버라이드 된다
- `항상 명시적으로 import 하자`

```py
from calculator import add_number  # add_number() 만 import 할 경우

from calculator import (
  add_number,
  subract_number,
  divide_number,
  multiply_number
)  # 여러 기능을 import 할 경우

import calculator  # calculator의 많은 기능을 이용할 경우
# 위와 같이 import 할 경우 코드단에서 `calculator.add_number` 와 같이 사용한다.
# 이는 어떤 모듈의 기능을 사용하는지 추적하지않고 확인이 가능하여
# 코드 가독성이 높아질 수 있다.
# (추가적으로 네임스페이스 간 동일 이름의 함수도 충돌 방지 가능)
```

### 관심사 분리의 계층구조

> 관심사 분리를 잘하는 한가지 방법: 하나의 작업을 하되 그것을 잘하는 프로그램을 만들어라 (유닉스 철학)

- 관심사 분리의 목표
  - 비슷한 동작은 묶고
  - 다른 동작은 독립적으로 격리

- 함수 분해(decomposition) 방법
  - 코드에 실행되는 고유한 작업을 다른 함수로 구별
  - 무슨일을 하는지 알수있도록 함수 이름을 만들고, 입력되는 인자 이름도 그 의도와 데이터 타입을 알도록 명명
- 