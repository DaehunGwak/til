---
id: 02-destroy-create-object
title: 02. 객체 생성과 파괴
---

## 주요 포인트

- 올바른 객체 생성 시기와 생성 법
- 불필요한 객체 생성을 피하는 법
- 제때 파괴됨을 보장하는 법
- 파괴 전 정리 작업 관리하는 법

## Item 01. 생성자 대신 정적 팩터리 메서드를 고려하라

> Factory Method 패턴과는 다른 이야기임

- 클래스 생성자와는 별도로, 정적 팩터리 메소드 (Static Factory Method)로 객체 생성을 관리할 수 있음
- 정적 팩터리 메소드로 제공하는 것은 장단점이 존재하므로 무조건 사용하라는 것은 아님

### 일반 생성자보다 정적 팩터리 메소드가 좋은 이유

#### 1) 이름을 가질 수 있음

- 정적 팩터리 메소드를 잘지어 생성되는 의미를 더욱 상세하게 묘사할 수 있음
- `BigInteger(int, int, Random)` vs `BigInteger.probablePrime()`
  - 후자가 설명력이 더 강함

#### 2) 호출될때 마다 인스턴스를 새로 생성하지 않아도 됨

- 불변 클래스는 인턴스를 미리 만드는 캐싱 전략으로 재활용 가능
- `Boolean(boolean)` vs `Boolean.valueOf(boolean)`
  - 후자는 구현이 미리 만들어 놓은 객체를 리턴

#### 3) 반환 타입의 하위 타입 객체를 반환할 수 있는 능력을 가짐

> 논의하면 좋을 내용 일 듯, 아래는 나만의 해석

- 코드의 유연성을 제공함
- 하위의 클래스가 어떤건지 상관없이 상위 타입의 인터페이스로 개발이 가능함
  - 하위 타입을 신경쓰지 않아도 되서, 개발자가 해당 API를 통해 알아야할 내용을 줄일 수 있음

#### 4) 입력 매개변수에 따라 다른 클래스의 객체를 반환할 수 있음

- 예시: `EnumSet` 클래스는 정적 팩터리만 제공
  - 원소 수에따라 `RegularEnumSet` 혹은 `JumboEnumSet` 중 하나를 반환

#### 5) 정적 팩터리 메서드를 작성하는 시점에 반환할 객체의 클래스가 존재하지 않아도 됨

> 이게 왜 장점?

- 예시: JDBC
  - JDBC 코드 구성
    - Service Interface: 구현체 동작 정의
    - Provider Registration API: 구현체 등록용
    - Service Access API: 클라이언트 전용
  - 클라이언트가 Service Acess API 를 통해 Provider 조건 명시가능
  - Service Access API가 정적 팩터리 메서드를 이용하여 Provider를 유연하게 심어줄 수 있음

### 정적 팩터리 메소드의 단점

#### 1) 정적 팩터리 메소드만 구성된 클래스는 하위 클래스를 만들 수 없음

- 상속을 하려면 public, protected 생성자가 필요함
- 상속보다 컴포지션을 이용하는 전략으로는 장점으로 전락할 수도 있음

#### 2) 정적 팩터리 메서드는 프로그래머가 찾기 어려움

- API 문서를 잘 써놓고 메서드의 이름도 널리 알려진 규약을 따를 수 밖에 없음

### 정적 팩터리 메소드에 쓰이는 잘알려진 컨벤션

- `from`: 매개 변수 하나를 받아 해당 타입의 인스턴스 반환
- `of`: 매개 변수 여러개를 받아 적합한 타입의 인스턴스 반환
- `valueOf`: from과 of의 더 자세한 버전
- `instance` or `getInstance`: 같은 인스턴스임을 보장하진 않음
- `create` or `newInstance`: 매번 새로운 인스턴스임을 보장
- `getType`: 구현된 클래스 본인이 아닌, 다른 클래스의 인스턴스를 반환
- `newType`: newInstance + getType 특징을 가짐
- `type`: getType, newType 의 간결 버전

### 핵심 정리

- 반드시 쓰라는게 아니고 장단점을 파악해 쓰자
- 무작정 public 생성자 보단 정적 팩터리 메서드를 고려하는 습관을 가져보자

## Item 02. 생성자에 매개변수가 많다면 빌더를 고려하라

- 매개변수가 많으면 정적 팩터리와 생성자가 관리하기 힘듦
- 대안1) 점층적 생성자 패턴 (Telescoping Constructor Pattern)
  - 필수 매개변수, 필수 매개변수 + 선택 매개변수 하나, ... 이런식으로 모든 경우의수 생성자를 만듦
  - 점층적 생성자 패턴을 쓸 수 도 있지만, 그럼 생성자가 너무 많아짐
    - 가독성 저하
- 대안2) JavaBeans Pattern
  - 매개 변수가 없는 생성자로 객체를 만들고, 이후 setter로 매개변수 설정
  - 객체를 불변으로 만들 수 없음
  - 객체가 세팅될 때까지의 일관성(consistency)가 무너진 상태임
    - freeze 하는 방법도 있지만 다루기가 어려워 실전에선 잘 안쓰임
- 고로 매개변수가 많으면 Builder Pattern 을 사용하자

### 빌더 패턴 특징

- 필수 매개 변수를 지정할 수 있음 (생성자 패턴의 장점)
- 선택적 매개 변수를 생성단계에서 지정할 수 있어 일관성(consistency)가 보장 (자바빈즈 패턴 단점 보완)
- 사용자 입장에서 가독성이 점층적 생서자 패턴보다 좋아짐
- 파이썬과 스칼라에 있는 명명된 선택적 매개변수 (named optional parameters)를 흉내낸 것
- 계층적으로 설계된 클래스와 잘 어울림

### 빌더 패턴 단점

- 빌더부터 만들어야하는 코스트가 발생
- 매개변수가 작으면 그냥 점층적 생성자가 나음

### 실습 코드

- [item 2 코드](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item02)

### 핵심 정리 2

- 매개 변수가 많다면 빌더 패턴으로!

## Item 03. private 생성자나 열거 타입으로 싱글턴임을 보증하라

> 이해못함
>
> - 싱글턴이 왜 mock으로 대체하기 어려운 걸까?
> - 정적 팩터리를 제네릭 싱글턴 팩터리로 만들 수 있음 (item 30, 이것도 이해 못함)
> - 정적 팩터리의 메서드 참조를 supplier로 사용할 수 있음 (item 43, 44, 이해 못함 2)

- 싱글턴 패턴
  - 인스턴스를 오직 하나만 생성할 수 있는 클래스
  - 상태가 없는 객체나 시스템 설계상 하나의 객체만 존재해야하는 경우 사용
- 하지만 싱글턴은 이를 사용하는 클래스가 테스트에 애를 먹을 수 있음

### 싱글턴 만드는 방식

- 공통적으로 private으로 생성자를 감춤

#### 1) public static 멤버가 final 필드인 방식

[item 3. public static final field, Elvis 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item03/field)

- 이렇게되면 private 생성자라 public static final인 Elvis 객체 INSTANCE 가 하나임이 보장됨
- 리플렉션(item 65) 으로 우회가능
  - `AccessibleObject.setAccessible` 을 사용해 private 메소드를 접근할 수 있어 우회적으로 새 객체 생성 가능
  - 이땐, 생성자를 수정하여 두번 째 객체에선 생성이 안되도록 예를 던지게 해야함
- 장점
  - 간결
  - 싱글턴임을 API로 바로 알 수 있음

#### 2) 정적 팩터리 메서드를 public static 멤버로 제공

[item 3. static factory method, Elvis 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item03/staticfactory)

- 마찬가지로 리플렉션으로 우회 가능, 생성 시 예외로 방어해야 함
- 장점
  - 변경에 용이
    - 싱글턴으로 사용하고 있지만, getInstance 부분만 수정하면 싱글턴 아닌 다른 무언가로 바꾸기 용이
  - 정적 팩터리를 제네릭 싱글턴 팩터리로 만들 수 있음 (item 30, 이것도 이해 못함)
  - 정적 팩터리의 메서드 참조를 supplier로 사용할 수 있음 (item 43, 44, 이해 못함 2)
- 해당 장점 필요없으면 public static final 방식 권장

### 위의 방식의 직렬화

- `Serializable` 를 구현한다고 위 방식의 싱글턴 클래스를 직렬화 할 수 없음
- 모든 필드를 transient라 선언 후 readResolve 메서드를 제공해야함 (item 89)
  - 이렇게 안하면 역직렬화 시, 새 객체가 만들어짐

### enum으로 싱글턴 만들기

[item 3. enum, Elvis 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item03/enumset)

- 가장 권장되는 방식
- 장점
  - 간결
  - 추가 노력없이 직렬화 가능
  - 리플렉션 공격 방어
- 단점
  - 상속 불가

## Item 04. 인스턴스화를 막으려거든 private 생성자를 사용하라

- 가끔 단순 정적 메서드와 정적 필드만을 만들고 싶을때가 있음
- 기본 라이브러리인 Math, Arrays, Collections는 이를 활용함
- 애초에 인스턴스화 안되는 추상 클래스를 사용하면 되지 않겠냐 생각할 수 있겠지만...
  - 추상 클래스 보면 구현하고 싶어져서 상속받아 구현하면 게임오버
- [item 4. UtilityClass 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item04)
  - 이렇게 private으로 선언하고 밖에서 호출 불가
  - 그리고 생성자 내부에서 Assertion을 던지면 상속해서 인스턴스화 하는 꼼수(?) 도 방지 가능
    - 명시적이든, 묵시적이든 어떻게든 상위 클래스의 생성자를 부르게 되어 있음

## Item 05. 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라

- 맞춤법 검사기 - 사전의 예로 설명하고 있음
  - 맞춤법 검사기는 사전을 의존함
  - 하지만 싱글턴(item 3)이나 정적 유틸리티 클래스(item 4)로 사전을 맞춤법 검사기에 사용하기엔 사전이 여러개인 경우 부적합함
- 어떤 클래스에서 의존하는 다른 클래스가 여러 타입일 경우, 생성자로 넘겨줘서 의존하는 방식

맞춤법 검사기를 의존 객체주입으로 사용한 예

```java
public class SpellChecker {
    private final Lexicon dictionary;

    public SpellChecker(Lexicon dictionary) {
      this.dictionary = Objects.requireNonNull(dictionary);
    }

    public boolean isValid(String world) { ... }
    public List<String> suggestions(String typo) { ... }
}
```

- 이의 변형으로, `Factory Method Pattern`이 있음
  - 팩터리를 생성자로 넘겨줘서 의존하는 방식
  - 팩터리는 호출마다 새로운 인스턴스를 만드는 객체
  - 예제로 Java 8의 `Supplier<T>` 인터페이스 가 있음

```java
// Mosaic 객체 생성을 위해 `Supplier<T>` 를 활용한 tileFactory 주입 예시
Mosaic create(Supplier<? extends Tile> tileFactory) { ... }
```

- 의존 객체 주입의 장점
  - 테스트 용이성
  - 유연성
- 단점
  - 의존성이 많다면 코드가 어지러워짐

### 핵심정리

클래스가 내부적으로 하나 이상 존재하며, 해당 클래스가 다른 동작에 영향을 준다면 의존 객체 주입을 사용하자.

## Item 06. 불필요한 객체 생성을 피하라

> - 어댑터 패턴 추가 공부가 필요

- `성능적으로` 같은 기능의 객체를 여러번 생성하는 것 보단, 하나를 만들어 재사용하는 편이 좋음

```java
// 절대 피하기, 실행 될때마다 객체 생성
String s = new String("bikini");

// 권장 방식, "bikini" 리터럴을 사용하는 코드는 같은 객체를 재사용함을 JVM 레벨에서 보장
String s = "bikini";
```

- `Boolean(String)` 대신 `Boolean.valueOf(String)` 팩터리 메서드 사용
- 생성 비용이 비싼 객체도 캐싱해서 사용
  - [item 6. Pattern 리터럴 캐싱 실행 시간 비교 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item06/RomanNumerals.java)
- 객체가 불변이라면 재사용해도 안정적
  - 어댑터(뷰) 패턴을 사용할 경우.... 이해가안감
- 기본타입 사용을 권하고, 의도치 않은 오토 박싱은 피하자
  - 오토 박싱이란 primitive type을 자동적으로 Wrapper class 로 변환해주는 기술
  - [item 6. 오토박싱 실행 시간 비교 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item06/AutoBoxing.java)

```java
// auto boxing example
List<Integer> list = new ArrayList<>();
list.add(10); // list.add(new Integer(10)); 과 같음
```

- 프로그램의 명확성, 간결성, 기능을 위해 객체를 생성하는 것은 좋음!
- item 50. 방어적 복사와는 대조적인 내용임
  - `방어적 복사가 필요한 상황에서 객체를 재사용 했을때의 피해가 더큼`
  - 해당장은 필요없는 객체를 반복 생성했을 때를 주로 다루고 있음

## Item 07. 다 쓴 객체 참조를 해제하라

- 가비지 컬렉션 (GC) 을 갖춘 Java라도 메모리 관리는 유념해야함
- [item 7. 메모리 누수 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item07/Stack.java)
  - 메모리 누수는 GC 활동과 메모리 사용량이 늘어나 성능저하를 불러 일으킴
    - 심할땐 디스크 페이징이나 OutOfMemoryError (OOM) 를 일으켜 앱이 종료됨
  - 예제에서 문제가 있는 `pop()` 에서 메모리 누수가 발생함
    - elements의 참조를 따로 해제 하지 않아 pop이 되었지만 해당 Object는 GC의 대상이 되지 않음
    - 개선된 pop에서는 null처리를 하여 해결
- 강박적으로 다쓴 객체를 null처리할 필요는 없고, 위 처럼 예외적인 경우에만 null처리 하면됨
- itme 57에 변수 범위를 최소화하는 테크닉으로 스코프 밖으로 변수를 밀어내면 GC의 대상이 자동으로 됨

### 메모리 누수 주의 케이스

- 메모리를 직접 관리하는 경우
  - null 처리
- 캐시
  - WeakHashMap 을 사용 (이러한 상황에서만 유용)
    - key에 해당하는 value 객체가 존재하지 않게 될 경우, 자동으로 key에서 제거 GC 대상이 됨
    - [WeakHashMap 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item07/WeakHashMapTest.java)
- listener or callback
  - 사용자가 콜백을 등록만하고 해제하지 않음...
  - 콜백을 weak reference로 등록!

### 핵심정리 7

- 메모리 누수는 잘 드러나지 않음..
- 철저한 코드리뷰 혹은 힙 프로파일러 같은 디버깅 도구로 예방가능
- 메모리 누수 관리에 대해 예방법을 익혀두는 것이 매우 중요
