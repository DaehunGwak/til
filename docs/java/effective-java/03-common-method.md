---
id: 03-common-method
title: 03. 모든 객체의 공통 메서드
---

> Object 클래스에서 다루는 오버라이드를 예상하고 만든 공통 메서드를 다룰 예정

## Item 10. equals는 일반 규약을 지켜 재정의하라

### equals를 재정의하지 말아야할 케이스

- 각 인스턴스가 본질적으로 고유하다
- 인스턴스의 논리적 동치성(logical equality)를 검사할 일이 없다
- 상위 클래스에서 재정의한 equals가 하위 클래스에서도 딱 들어 맞는다
- 클래스가 private이거나 package-private이고 equals 메서드를 호출할 일이 없다

### equals를 재정의하는 케이스

- 물리적 동치성이 아니라 논리적 동치성을 활용해야 하지만,
  - 상위 클래스에서 equals의 구현이 논리적 동치성을 비교하지 않도록 구성되어 있을 때.
  - 값 클래스 (Integer, String, Long 등) 이 주로 해당 케이스에 해당

### Object 클래스의 equals 일반 규약

> 의역으로 제 맘대로의 해석입니다.

equals는 동치 관계를 구현하며, 다음 관계를 만족  

:::danger
아래를 지키지 못하면 비교 동작, 컬렉션과 같은 곳에서 이상하게 동작할 수 있으니 주의!
:::

- 반사성(Reflexivity)
  - `x.equals(x)` is true (if x is not null)
- 대칭성(Symmetry)
  - `x.equals(y)` is true => `y.equals(x)` is true (if x, y are not null)
- 추이성(Transivity)
  - `x.equals(y)` is true, `y.equals(z)` is true => `x.equals(z)` is true(if x, y, z are not null)
- 일관성(Consistency)
  - 항상 `x.equals(y)` 의 결과는 같은 결과를 보장한다 (if x, y are not null)
- null-아님
  - `x.equals(null)` is `false` (if x is not null)

### 규약을 잘 지킨 equals 구현법

- `==` 연산자를 사용해 입력이 자기 자신의 참조인지 확인 (early return)
- `instanceof` 연산자로 입력이 올바른 타입인지 확인
  - null-아님 규칙은 null 검사 필요없이 instanceof 로 구현 가능
- 입력을 올바른 타입으로 형변환
- 입력 객체와 자기 자신의 핵심 필드들이 모두 일치하는지 하나씩 검사
  - 기본타입 필드는 `==`
  - 참조타입 필드는 `equals`
  - float와 double은 `Float.compare(float, float)`, `Double.compare(double, double)`
  - 성능을 위해 비교 연산이 가벼운 것부터 진행
- 다 구현 후 일반규약 잘지켰는지 검토
  - 대칭성, 추이성, 일관성 잘 지켜졌나~

### 주의사항

- equals를 재정의할 땐 hashCode도 반드시 재정의 (Item 11)
- 너무 복잡하게 해결 X
- Object 타입외 인자를 가지는 equals 구현 X

### 정리 및 팁

- 꼭 필요한 경우(논리적 동치 같은 케이스)가 아니라면 equals 오버라이딩 X
- 
- AutoValue 프레임워크로 equals 구현 및 테스트를 자동으로 할 수 있음