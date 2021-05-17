---
id: 05-generic
title: 05. 제네릭
---

```java
Generic<Hello> generic = new GenericImpl<>();
generic.add(new Hello("Hello Generic"));
```

- 제네릭의 이점을 최대한으로, 단점을 최소한으로 하는 전략을 배울 예정

## Item 26. 로(raw) 타입은 사용하지 말라

> [example code](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item26)

- 제네릭 타입 (generic type): `List<E>`
- 매개변수화 타입 (parameterized type): `List<String>`
- 로 타입(raw type): `List`
- 로 타입을 사용하면 컴파일 타임에서 잡을 수 있는 에러를 런타임에 잡아야하는 상황이 발생함

### `List<Object>` 는 괜찮다

- `List<Object>` 는 `List` 와는 달리 Object와 같은 최상위 타입을 허용한다는 의도를 공유할 수 있음
- `List` 와 같은 로 타입은 타입 안정성이 없음
  - `List rawList = new ArrayList<String>();` 가능
  - `List<Object> objects = new ArrayList<String>();` 불가

### 비한정적 와일드 카드

- 로 타입 보단 비한정적 와일드 카드 사용하자!
- 비한정적 와일드 카드 (unbounded wildcard type): `Set<?>`
- 로 타입은 타입 불변식을 보장 못함 (아무거나 집어넣을 수 있음)
- `Collection<?>` 에서는 null 외에 어떤 것도 넣을 수 없다
  - 타입 불변식 보장

### 예외 사항

- class 리터럴에는 로타입 사용
  - `List.class` 는 가능하나 `List<String>.class`, `List<?>.class` 는 불가능
- instanceof 연산시 로타입 사용
  - 런타임시 제네릭 타입정보가 지워짐

```java title="instanceof 예시"
if (o instanceof Set) {
  Set<?> s = (Set<?>) o;
  ...
}
```

### 로 타입 정리

- 로 타입 X
- `Set<Object>` 와 `Set<?>` 를 적재적소에 사용하자

## Item 27. 비검사 경고를 제거하라

> [example code](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item27)

- 비검사(uncheck) 경고
- javac `-Xlint:unchecked` 옵션을 통해 확인 가능
  - intelliJ가 보통 자동으로 경고해줌
- 모든 경고와 에러가 그렇듯 최대한 해결하자
  - 경고를 제거할 수 없는데 타입 안전하다고 확신할 수 있으면 `@SuppressWarnings("unchecked")` 로 숨길 순 있음
  - 하지만 왠만하면 없애자

## Item 28. 배열보다는 리스트를 사용하라

> [example code](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item28)

### 배열과 리스트 차이

#### 배열은 공변, 제네릭은 불공변

- 배열은 공변 (covarient)
  - 즉 하위 타입의 배열 선언 가능
  - [array: covariant example code](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item28/ArrayCovariantTest.java)
  - `Object[] arr = new Long[1];` 가능
- 제네릭은 불공변 (invarient)
  - 즉 `List<Object>`와 `List<Long>` 는 하위 타입 관계가 아니라 그 어떤 관계도 없음 
  - `List<Object> ol = new ArrayList<Long>();` 시 컴파일 에러

#### 배열은 실체화가 됨

- 배열은 런타임에 데이터 할당에 대한 타입을 인지하고 확인
- 제네릭은 컴파일 타임에만 검사하고, 런타임 코드엔 타입이 소거되어 있음
  - 고로 제네릭 배열 (`new List<String>[]`) 는 만들지 못함
  - 런타임시 타입이 소거되어, 타입 안정성을 보장할 수 없음

### 배열보다 리스트 정리

- 배열은 공변이고 실체화됨 -> 런타임에서 타입 안정성 보장
- 제네릭은 불공변이고 타입정보가 소거됨 -> 컴파일 시 타입 안정성 보장
- 배열과 리스트를 섞어쓰다 곤란해지면 배열을 리스트로 전환해보자

## Item 29. 이왕이면 제네릭 타입으로 만들라

제네릭 타입을 새로 만드는 일은 조금 어려움, 이를 실습하며 배워보자

> [example code](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item29)

### 배열을 사용하는 코드를 제네릭으로 만들 때 해결방법

E와 같은 실체화 불가 타입으로는 배열을 만들 수 없음, 따라서 아래의 해결책으로 해결 가능

#### 1. 제네릭 배열 생성을 금지하는 제약을 대놓고 우회하기

- 스택 예제에선 private 인 elements가 push를 통해 E 타입 말고는 다른것이 들어올 수 있는 경로가 없음을 보장함
- 따라서 `elements = (E[]) new Object[DEFAULT_INITIAL_CAPACITY];` 로 사용 가능
- 장점
  - 코드가 후자에 비해 깔끔
  - 형 변한을 생성자에서 한번만 함
- 단점
  - 런타임 타입과 컴파일타임 타입이 다른 힙 오염 (item 32) 일으킴

#### 2. elements 를 E[] 타입에서 Object[] 타입으로 변환

- GenericStack2 예제 참고
- 장점
  - 힙오염 염려가 없음
- 단점
  - 형변환을 pop 시 매번 함

> 위의 예제게 Item 28과 조금 모순되어 보일 수 있으나 JDK 컬렉션 구현체들 입장에선 List는
> 기본 타입이 아니므로 배열을 사용하여 구현해야하는 상황임

### 제네릭 정리

- 직접 형변환 보단 제네릭 타입이 더 안전하고 쓰기 편함
- 새로운 타입 설계시 형변환 없이 사용할 수 있도록
  - 그러면 자주 제네릭을 사용하게 됨

## Item 30. 이왕이면 제네릭 메서드로 만들라

### 제네릭 메서드

> [union method example code](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item30/UnionTest.java)

- 제네릭 메서드는 타입 일관적인 함수를 만들 수 있음

### 제네릭 싱글턴 팩터리

> [identity function(항등 함수) class example](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item30/GenericSingletonFactory.java)

- 각 타입에 대한 팩터리 메서드를 작성하지 않아도 됨

### 재귀적 한정 타입

- 재귀적 타입 한정 (Recursive Type Bound)
  - 한정을 지은 타입 내에서만 해당 타입을 허용한다는 의미
- [재귀적 타입 한정을 통해 collection max 연산 구현](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item30/ComparableTest.java)

### 제네릭 메서드 정리

- 로 타입을 사용하는 메서드보다 제네릭 메서드가 더 안전하며 사용하기도 쉬움
- 형변환 해야하는 메서드가 발생하면 제네릭 메서드로 만들자

## Item 31. 한정적 와일드카드를 사용해 API 유연성을 높여라

- 매개 변수화 타입은 불공변임 (invarient)
  - `List<String>` 은 `List<Object>` 의 하위 타입이 아님
- 그런데 이런 매개 변수화 타입의 불공변 특성을 넘어 유연성을 제공해야 한다면?

### 한정적 와일드 카드를 사용한 유연성 극대화

- 유연성 극대화를 위해선 원소의 생산자(producer)나 소비자(comsumer) 입력 매개변수에 와일드 카드 타입을 사용하라
- [WildCardStack 예시 코드](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item31/stack)
- 입력 매개변수가 생산자, 소비자 둘다 역할을 한다면
  - 이 경우엔 와일드 카드가 무소용..
- PECS: producer-extends, consumer-super 전략 기억
- 반환 타입엔 와일드 카드를 사용 X

### 파라미터로 타입 매개변수 vs 와일드 카드

- 둘 중 어느 것을 사용해도 괜찮을 때가 많음
- public API 라면 와일드 카드로 범용성 제공
  - [swap 예시 코드](https://github.com/DaehunGwak/study-java/tree/main/effectivejava/src/ch05/item31/swap)
  - 룰: 메서드 선언에 타입 매개변수가 한 번만 나오면 와일드 카드로 대체
  - 예제에서는 와일드 카드 대신 타입 매개변수로 해도 범용성을 제공할 것 같지만
    - 클래스가 제네릭으로 선언되어 있다면 해당 타입을 따라 갈 수 있으므로 범용성 측면에선 와일드 카드가 더 낫다

### 한정적 와일드 카드 정리

- 와일드 카드 타입을 적용하면 API가 훨씬 유연해진다
- PECS: producer-extends, consumer-super 전략 기억
  - Comparalbe, Comparator 모두 consumer
