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

## Item 45. 스트림은 주의해서 사용하라

> 스트림, 반복문 둘다 구성해보고 더 좋은쪽으로 사용하자

- 스트림을 과사용하면 오히려 가독성이 떨어질 수 있음
  - 매개변수 사용 시 이름 잘 짓기 (타입이 거의 명시되지 않으므로)
  - 헬퍼 메서드를 적절히 활용 (static으로 적절히 빼서 해당 헬퍼 메서드 이름으로 가독성을 향상)
- 스트림을 반환하는 메서드는 복수 명사로 네이밍을 권장
- 두 방식중 확신이 서지 않으면 반복문 코드 블럭을 추천
### 반복문 코드 블록으로 할 수 있는 일

- 범위 안의 지역변수를 읽고 수정 가능
- return, break, continue를 통해 빠져나갈 수 있음
### 스트림으로 구성하면 좋은 로직

- 시퀀스를 일관되게 변화한다 `map` (intermediate)
- 시퀀스를 필터링 한다 `filter` (intermediate)
- 시퀀스를 하나의 연산을 사용해 결합한다 `reduce` (termianl)
- 시퀀스를 컬렉션에 모은다 `collect` (terminal)
- 시퀀스에서 특정 조건을 만족하는 원소를 찾는다 `findFirst` `findAny` (terminal)

## Item 46. 스트림에서는 부작용 없는 함수를 사용하라

- 스트림은 함수형 프로그래밍에 기초한 패러다임
- 스트림 패러다임에 핵심은 일련의 변환으로 재구성
- 각 변환 단계는 이전 단계의 결과를 받아 처리하는 순수 함수 (다른 가변 상태를 참조하지 않음)
- `forEach` 연산은 스트림 계산 결과를 보고(로깅) 할 때만 사용 (계산 X)
- Collector Factory 중 알아두면 가장 좋을 5가지
  - `toList` `toSet` `toMap` `groupingBy` `joining` 

## Item 47. 반환 타입으로는 스트림보다 컬렉션이 낫다

- 스트림은 Iterable 인터페이스 정의한 추상메서드를 전부 구현하지만, for-each로 반복할 수 없다
  - Iterable 을 extend 하지 않아서....
  - 추후 자바 버전에서 스트림이 Iterable을 extend 한다면 반환타입으로 스트림을 써도 무방하겠다
- 원소 시퀀스를 반환하는 API의 반환타입으로는 Collection, 혹은 그 하위 타입을 쓰는게 최선이다.
  - Iterable 하위타입 + stream 메서드 지원 이라는 이점
- 단, 덩치 큰 시퀀스를 컬렉션으로 반환하게 된다면 메모리에 문제가 있을 수 있음
  - 멱집합예처럼 전용 컬렉션을 구현할지 고민해보길 바람 (`AbstractList` 활용)

## Item 48. 스트림 병렬화는 주의해서 적용하라

- 스트림을 잘못 병렬화 하면 프로그램을 오동작하게 하거나 성능을 급격하게 떨어뜨림
- 병렬화는 성능 최적화 수단, 필요하지 않으면 X
- 계산도 정확하고 성능도 좋아졌음이 확실해지면, 그럴때 운영코드에 반영
- 데이터 소스가 `Stream.iterate`, 중간 연산이 `limit` 쓰면 파이프라인 병렬화로 성능 개선을 기대할 수 없음
- 스트림 소스가 아래일 때 병렬화의 효과가 가장 좋음
  - `ArrayList`, `HashMap`, `HashSet`, `ConcurrentHashMap`
  - 배열
  - int range, long range
- 나누는 작업은 Spliterator 가 담당 (Stream, Iterable의 spliterator 메서드로 얻을 수 있음)
- 참조 지역성이 좋으면 벌크 연산 병렬화 시 성능이 좋아짐
  - 낮으면 메인 메모리 ->> 캐시메모리로 전송되어 오기를 기다리며 대부분 시간을 멍하게 보내게 됨
- 종단 연산중 reduction이 병렬화에 가장 적합함
  - mutable collect 엔 적합하지 않음
  - 쇼트서킷 연산에도 적합
- 그냥 Random, ThreadLocalRandom XXXXX
  - 병렬화 시 `SplittableRandom` 사용하기
