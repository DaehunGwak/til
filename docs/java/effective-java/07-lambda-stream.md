---
id: 07-lambda-stream
title: 07. 람다와 스트림
---

## Item 42. 익명 클래스보다는 람다를 사용하라

- Java 8 이전에는 함수 객체(함수를 일급 객체로 만드는 것)를 만드는 주요 수단이 익명 클래스였다
- Java 8 이후는 람다가 생겨 익명 클래스보다 간결하게 함수를 임수 객체로 전달할 수 있음
- 소팅 예제에선 `(s1, s2) -> ...` 와 같이 따로 타입을 명시하지 않고 있다.
  - **타입을 명시해야 코드가 더 명확해질 때만 제외하고는, 람다의 모든 매개변수 타입은 생략하자**
  - 알아서 컴파일러가 타입 추론을 넣어준다
- **람다는 이름이 없고 문서화도 못 한다.**
  - 따라서 코드 자체로 동작이 명확히 설명되지 않거나 코드 줄 수가 많아지면 람다를 쓰지 말아야 한다.
- 람다가 익명클래스를 대체할 수 없는 곳이 있음
  - 람다는 함수형 인터페이스 에서만 쓰임
  - 람다는 자신을 참조할 수 없음
- 람다를 직렬화하는 일은 극히 삼가

### 익명 클래스보단 람다 핵심 정리

- 익명 클래스는 함수형 인터페이스가 아닌 타입의 인스턴스를 만들 때만 사용하라

## Item 43. 람다보다는 메서드 참조를 사용하라

- 람다의 가장 큰 특징은 간결함
- **람다보다 더좋은 간결함을 제공해주는 메서드 참조**
- 예제
  - lambda: `map.merge(key, 1, (count, incr) -> count + incr)`
  - method reference: `map.merge(key, 1, Integer::sum)`
- 람다로 할 수 없는 일이라면 메서드 참조로도 할 수 없다
- IDE는 메서드 참조로 변경을 권장하지만, 항상 좋은 것은 아님
  - 예제: 이건 람다 사용이 더 가독성이 높다
    - lambda: `service.execute(() -> action());`
    - mr: `service.execute(GoshThisClassNameIsHumongous::action)`

### 메서드 참조 유형

- 정적
  - 예: `Integer::parseInt`
  - 같은 기능 람다: `str -> Integer.parseInt(str)`
- 한정적 인스턴스
  - 예: `Instant.now()::isAfter`
  - 같은 기능 람다: `Instant then = Instant.now(); t -> then.isAfter(t)`
- 비한정적 인스턴스
  - 예: `String::toLowerCase`
  - 같은 기능 람다: `str -> str.toLowerCase()`
- 클래스 생성자
  - 예: `TreeMap<K,V>::new`
  - 같은 기능 람다: `() -> new TreeMap<K,V>()`
- 배열 생성자
  - 예: `int[]::new`
  - 같은 기능 람다: `len -> new int[len]`

### 람다보단 메서드 참조 정리

- 메서드 참조 쪽이 짧고 명확하다면 메서드 참조를 쓰고, 그렇지 않을 때만 람다를 사용하자

## Item 44. 표준 함수형 인터페이스를 사용하라

> 예시 참고

- 함수 객체를 매개변수로 받는 생성자와 메서드를 더 많이 만들어야 한다
  - 템플릿 메서드 패턴과 같은 효과의 함수 객체를 받는 정적 팩터리나 생성자를 제공하는 것
- 필요한 용도에 맞는게 있다면, 직접 구현하지말고 표준 함수형 인터페이스를 화용하라.
- 기본 함수형 인터페이스에 박싱된 기본 타입을 넣어 사용하지는 말자

### 기본적인 6개의 함수형 인터페이스

> `java.util.function` 패키지의 6개의 함수형 인터페이스를 알아보자

|인터페이스|함수 시그니처|의미|예|
|---|---|---|---|
|`UnaryOperator<T>`|`T apply(T t)`|단항 연산|`String::toLowerCase`|
|`BinaryOperator<T>`|`T apply(T t1, T t2)`|이항 연산|`BigInteger::add`|
|`Predicate<T>`|`boolean test(T t)`|단항 boolean|`Collection::isEmpty`|
|`Function<T,R>`|`R apply(T t)`|인수와 반환 타입이 다름|`Arrays::asList`|
|`Supplier<T>`|`T get()`|인수 없이 값 반환|`Instant::now`|
|`Consumer<T>`|`void accept(T t)`|반환 없이 인수 소비|`System.out::println`|

### 전용 함수형 인터페이스

- 전용 함수형 인터페이스는 표준을 제외한 직접 커스텀하게 구현한 함수형 타입을 일컫는다
- 전용 함수형 인터페이스를 구현해야할 때
  - 자주 쓰이며, 이름 자체가 용도를 명확히 설명해야할 때
  - 반드시 따라야 하는 규약이 있을 때
  - 유용한 디폴트 메서드를 제공할 수 있을 때
- 직접 만든 함수형 인터페이스는 `@FunctionalInterface` 를 달아야 함
- 다중정의는 왠만하면 하지말자

### 표준 함수형 인터페이스 정리

- 입력값과 반환값에 함수형 인터페이스 타입을 활용하자
- `java.util.function` 패키지의 표준 함수형 인터페이스를 적극 활용하자
- 흔치 않지만 새로운 전용 함수형 인터페이스를 만드는게 나을 때도 있다