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

- 클래스 생성자와는 별도로, 정적 팩터리 메소드로 객체 생성을 관리 가능

### 일반 생성자보다 정적 팩터리 메소드가 좋은 이유

#### 1) 이름을 가질 수 있음

- 생성되는 의미를 더욱 상세하게 묘사할 수 있음
- `BigInteger(int, int, Random)` vs `BigInteger.probablePrime()`
  - 후자가 설명력이 더 강함

#### 2) 호출될때 마다 인스턴스를 새로 생성하지 않아도 됨

- 불변 클래스는 인턴스를 미리 만드는 캐싱 전략으로 재활용 가능
- `Boolean(boolean)` vs `Boolean.valueOf(boolean)`
  - 후자는 구현이 미리 만들어 놓은 객체를 리턴

#### 3) 반환 타입의 하위 타입 객체를 반환할 수 있는 능력을 가짐

- 개발자가 해당 API를 통해 하위 타입이 무엇인지에 대해 알아야 할 내용을 줄일 수 있음

#### 4) 입력 매개변수에 따라 다른 클래스의 객체를 반환할 수 있음

- 예시: `EnumSet` 클래스는 정적 팩터리만 제공
  - 원소 수에따라 `RegularEnumSet` 혹은 `JumboEnumSet` 중 하나를 반환

#### 5) 정적 팩터리 메서드를 작성하는 시점에 반환할 객체의 클래스가 존재하지 않아도 됨

- 클라이언트를 구현체 관리로 부터 분리
- 지원 가능한 구현체만 반환이 가능해짐

### 정적 팩터리 메소드의 단점

#### 1) 정적 팩터리 메소드만 구성된 클래스는 하위 클래스를 만들 수 없음

- 상속을 하려면 public, protected 생성자가 필요함

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

### 01 핵심정리

- 반드시 쓰라는게 아니고 장단점을 파악해 쓰자
- 무작정 public 생성자 보단 정적 팩터리 메서드를 고려하는 습관을 가져보자

## Item 02. 생성자에 매개변수가 많다면 빌더를 고려하라

- 매개변수가 많으면 정적 팩터리와 생성자가 관리하기 힘듦
- 대안1) 점층적 생성자 패턴 (Telescoping Constructor Pattern)
  - 필수 매개변수, 필수 매개변수 + 선택 매개변수 하나, ... 이런식으로 모든 경우의수 생성자를 만듦
  - 생성자가 너무 많아짐 -> 가독성 저하
- 대안2) JavaBeans Pattern
  - 매개 변수가 없는 생성자로 객체를 만들고, 이후 setter로 매개변수 설정
  - 객체를 불변으로 만들 수 없음
  - 객체가 세팅될 때까지의 일관성(consistency)가 무너진 상태임
- 고로 매개변수가 많으면 Builder Pattern 을 사용하자

### 빌더 패턴 특징

- 필수 매개 변수를 지정할 수 있음 (생성자 패턴의 장점)
- 선택적 매개 변수를 생성단계에서 지정할 수 있어 일관성(consistency)가 보장 (자바빈즈 패턴 단점 보완)
- 사용자 입장에서 가독성이 점층적 생서자 패턴보다 좋아짐
- 계층적으로 설계된 클래스와 잘 어울림

### 빌더 패턴 단점

- 빌더부터 만들어야하는 코스트가 발생 (lombok `@Builder` 로 보완 가능)
- 매개변수가 작으면 그냥 점층적 생성자가 나음

### 02 핵심정리

- 매개 변수가 많다면 빌더 패턴을 권장

## Item 03. private 생성자나 열거 타입으로 싱글턴임을 보증하라

- 싱글턴 패턴
  - 인스턴스를 오직 하나만 생성할 수 있는 클래스
  - 상태가 없는 객체나 시스템 설계상 하나의 객체만 존재해야하는 경우 사용
- 하지만 싱글턴은 이를 사용하는 클래스가 테스트에 애를 먹을 수 있음

### 싱글턴 만드는 방식

- 공통적으로 private으로 생성자를 감춤

#### 1) public static 멤버가 final 필드인 방식

```java
public class Elvis {
    public static final Elvis INSTANCE = new Elvis();

    private Elvis() {}
    ...
}
```

- private 생성자라 public static final인 Elvis 객체 INSTANCE 가 하나임이 보장됨
- 장점
  - 간결
  - 싱글턴임을 API로 바로 알 수 있음
- 단점
  - 리플렉션 가능, 생성 시 예외로 방어해야 함
  - 직렬화 시 추가 구현

#### 2) 정적 팩터리 메서드를 public static 멤버로 제공

```java
public class Elvis {
    private static final Elvis INSTANCE = new Elvis();

    private Elvis() { }
    
    public static Elvis getInstance() {
        return INSTANCE;
    }
    ...
}
```

- 장점
  - 변경에 용이
    - 싱글턴으로 사용하고 있지만, getInstance 부분만 수정하면 싱글턴 아닌 다른 무언가로 바꾸기 용이
  - 정적 팩터리를 제네릭 싱글턴 팩터리로 만들 수 있음 (item 30)
  - 정적 팩터리의 메서드 참조를 supplier로 사용할 수 있음 (item 43, 44)
- 단점
  - 리플렉션 가능, 생성 시 예외로 방어해야 함
  - 직렬화 시 추가 구현

#### 위의 방식의 직렬화

- 위 방식의 싱글턴 클래스는 `Serializable` 구현 선언만으로는 직렬화 할 수 없음
- 모든 필드를 transient라 선언 후 readResolve 메서드를 제공해야함 (item 89)
  - 이렇게 안하면 역직렬화 시, 새 객체가 만들어짐

#### 3) enum으로 싱글턴 만들기

```java
public enum Elvis {
    INSTANCE;
    ...
}
```

- 가장 권장되는 방식
- 장점
  - 간결
  - 추가 노력없이 직렬화 가능
  - 리플렉션 공격 방어
- 단점
  - 상속 불가

## Item 04. 인스턴스화를 막으려거든 private 생성자를 사용하라

```java
public class UtilityClass {
    // 인스턴스 화 방지용
    private UtilityClass() {
        throw new AssertionError();
    }
```

- private으로 선언하고 밖에서 호출 불가
- 그리고 생성자 내부에서 Assertion을 던지면 클래스 내부에서 인스턴스화도 방지

## Item 05. 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라

- 맞춤법 검사기 - 사전의 예로 설명하고 있음
  - 맞춤법 검사기는 사전을 의존함
  - 하지만 싱글턴(item 3)이나 정적 유틸리티 클래스(item 4)로 사전을 맞춤법 검사기에 사용하기엔 사전이 여러개인 경우 부적합함
- 클래스에서 의존하는 다른 클래스가 여러 타입일 경우, 생성자로 넘겨줘서 의존하는 방식

맞춤법 검사기를 의존 객체주입으로 사용한 예

```java
public class SpellChecker {
    private final Lexicon dictionary;

    public SpellChecker(Lexicon dictionary) {
      this.dictionary = Objects.requireNonNull(dictionary);
    }
    ...
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

### 05 핵심정리

클래스가 내부적으로 하나 이상 존재하며, 해당 클래스가 다른 동작에 영향을 준다면 의존 객체 주입을 사용하자.

## Item 06. 불필요한 객체 생성을 피하라

- `성능적으로` 같은 기능의 객체를 여러번 생성하는 것 보단, 하나를 만들어 재사용하는 편이 좋음

```java
// 절대 피하기, 실행 될때마다 객체 생성
String s = new String("bikini");

// 권장 방식, "bikini" 리터럴을 사용하는 코드는 같은 객체를 재사용함을 JVM 레벨에서 보장
String s = "bikini";
```

- `Boolean(String)` 대신 `Boolean.valueOf(String)` 팩터리 메서드 사용
- 생성 비용이 비싼 객체도 캐싱해서 사용
- 객체가 불변이라면 재사용해도 안정적
- 기본타입 사용을 권하고, 의도치 않은 오토 박싱은 피하자
  - 오토 박싱이란 primitive type을 자동적으로 Wrapper class 로 변환해주는 것

```java
// auto boxing example
List<Integer> list = new ArrayList<>();
list.add(10); // list.add(new Integer(10)); 과 같음
```

- 객체 생성은 비싸니 피해야 한다는 게 아니다
- item 50. 방어적 복사와는 대조적인 내용임

## Item 07. 다 쓴 객체 참조를 해제하라

- 가비지 컬렉션 (GC) 을 갖춘 Java라도 메모리 관리는 유념해야함
- 메모리 누수는 GC 활동과 메모리 사용량이 늘어나 성능저하를 불러 일으킴
  - 심할땐 디스크 페이징이나 OutOfMemoryError (OOM) 를 일으켜 앱이 종료됨

```java
public class Stack {
    ...

    /**
     * 문제가 있는 부분
     * elements에서 참조를 해제하지 않아 GC의 대상이 되지 않음
     */
    public Object pop() {
        if (size == 0)
            throw new EmptyStackException();
        return elements[--size];
    }
}
```

- 예제에서 문제가 있는 `pop()` 에서 메모리 누수가 발생함
  - elements의 참조를 따로 해제 하지 않아 pop이 되었지만 해당 Object는 GC의 대상이 되지 않음
  - 개선된 pop에서는 null처리를 하여 해결
- 강박적으로 다쓴 객체를 null처리할 필요는 없고, 위 처럼 예외적인 경우에만 null처리 하면됨

### 메모리 누수 주의 케이스

- 메모리를 직접 관리하는 경우
  - null 처리
- 캐시
  - WeakHashMap 을 사용
    - key에 해당하는 value 객체가 존재하지 않게 될 경우, 자동으로 key에서 제거 GC 대상이 됨
- listener or callback
  - 사용자가 콜백을 등록만하고 해제하지 않음
  - 콜백을 weak reference로 등록

### 07 핵심정리

- 철저한 코드리뷰 혹은 힙 프로파일러 같은 디버깅 도구로 예방가능
- 메모리 누수 관리에 대해 예방법을 익혀두는 것이 매우 중요

## Item 08. finalizer 와 cleaner 사용을 피하라

- 자바에서 제공하는 객체 소멸자, finalizer 와 cleaner
- finalizer 는 예측할 수 없고 상황에 따라 위험할 수 있어 일반적으로 불필요
  - 기본적으로 쓰지말기
- cleaner 도 finalizer 대안으로 java 9 에 나왔지만 예측할 수 없고, 느리고, 불필요
- c++ 의 destructor(파괴자) 와는 다른 개념으로
  - 자원 해제를 활용하려면 try-with-resources 로 해결하자 (Item 09)
- finalizer, cleaner 둘다 언제 제때 실행해야하는지 보장할 수 없음
- AutoCloseable 를 구현 + try-with-resources 활용으로 자원 해제를 보장해줄 수 있음

### 08 핵심정리

- clenaer, finalizer는 안정망 역할 or 중요하지 않은 네이티브 자원 회수 용도로만 활용하자~
- 물론 그냥 안쓰는게 최고

## Item 09. try-finally 보단 try-with-resources를 사용하라

- 기존 자원해제는 try-finally로 활용하는 추세였지만 Java 7에서 try-with-resources 를 사용할 수 있음
- try-finally에서는 finally 에서 예외가 발생하면 기존 예외를 잡아먹는 문제가 있음
- AutoCloseable 을 통한 try-with-resources 구현은 try의 예외 부분을 잡아먹지 않는다
