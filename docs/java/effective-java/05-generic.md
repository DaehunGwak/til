---
id: 05-generic
title: 05. 클래스와 인터페이스
---

```java
Generic<Hello> generic = new GenericImpl<>();
generic.add(new Hello("Hello Generic"));
```

- 제네릭의 이점을 최대한으로, 단점을 최소한으로 하는 전략을 배울 예정

## Item 26. 로(raw) 타입은 사용하지 말라

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

- 비검사(uncheck) 경고
- javac `-Xlint:unchecked` 옵션을 통해 확인 가능
  - intelliJ가 보통 자동으로 경고해줌
- 모든 경고와 에러가 그렇듯 최대한 해결하자
  - 경고를 제거할 수 없는데 타입 안전하다고 확신할 수 있으면 `@SuppressWarnings("unchecked")` 로 숨길 순 있음
  - 하지만 왠만하면 없애자


