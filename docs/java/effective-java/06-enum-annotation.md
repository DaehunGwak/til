---
id: 06-enum-annotation
title: 06. 열거 타입과 애너테이션
---

## Item 34. int 상수 대신 열거 타입을 사용하라

```java title="상수 대신 열거 타입 사용하는 예시
// int enum pattern
public static final int APPLE_FUJI = 0;
public static final int APPLE_PIPPIN = 1;
public static final int APPLE_GRANNY_SMITH = 2;

// enum type
public enum Apple {
  FUJI,
  PIPPIN,
  GRANNY_SMITH
}
```

### 열거 타입 사용 특징

- 상수 하나당 자신의 인스턴스르 하나씩 만들어 `public static final` 필드로 공개한다
- 컴파일타임 타입 안정성 제공
  - 매개 변수로 해당 열거 타입 사용하면, 다른 타입들이 입력되었을 때 컴파일 시 잡아줌
- 네임스페이스 특징을 가짐
- 각 정의별로 `toString`을 가지고 있음
- 일반 클래스처럼 메서드나 필드를 추가할 수도 있음
- 임의의 인터페이스를 구현할 수 있음
  - 책에선 34-3 Planet 코드 예제를 들고 있음
- **열거 타입 상수 각각을 특정 데이터와 연결지으로면 생성자에 데이터를 받아 인스턴스 필드에 저장하면 됨**
- 상수별 메서드 구현(constnat-specific method implementation) 도 가능
  - 주상 메서드를 만들고 각 상수별로 구현하면 됨
  - 코드 34-5 Operation 코드 참고
- 전략 열거 타입
  - 열거타입 내 전략적으로 열거타입을 넣는 경우
  - 코드 34-9 PayrollDay 코드에 PayType 을 inner enum type 으로 정의하는 예시가 있음

### 열거 타입 정리

- 정수 상수보단 열거 타입
- 각 상수마다 특정 데이터와 연결을 지어야하거나 다르게 동작해야할 때는 명시적 생성자나 메서드를 사용
- switch 보단 상수별 메서드 구현
- 상수마다 같은 동작을 공유하는 패턴이 생긴다면 전략 열거 타입 패턴을 사용
- 상수의 개수는 불변일 필요 없음

## Item 35. ordinal 메서드 대신 인스턴스 필드를 사용

- 열거 타입의 상수가 몇번째 위치하는지는 `ordinal()` 로 알 수 있음
- 열거 타입 상수에 연결된 값은 `ordinal()` 메서드로 얻지말고 따로 인스턴스 필드를 추가해서 의존하자
  - ordinal에 의존하게 되는 함수를 만들었을경우 상수 순서만 조금 바껴도 사이드 이펙트가 커질 수 있다

## Item 36. 비트 필드 대신 EnumSet 을 사용하라

```java title="EnumSet 예시"
public class Text {
  // Enum 선언
  public enum Style { BOLD, ITALIC, UNDERLINE, STRIKETHROUGH }

  // 인터페이스로 선언해서 전달하는게 더 좋음 (Item 64)
  public void applyStyles(Set<Style> styles) {...}
}

// EnumSet 활용
text.applyStyles(EnumSet.of(Style.BOLD, style.ITALIC));
```

- EnumSet의 내부는 비트 벡터로 구현되어 있음
- 원소가 64개 이하라면 권장
- 불변 EnumSet은 만들 수가 없다는게 단점 (~ Java 9 까진 그렇다고 함)

## Item 37. oridnal 인덱싱 대신 EnumMap을 사용하라

- 배열의 인덱스를 얻기 위해 ordinal을 쓰는 것은 일반적으로 좋지 않으니, 대신 EnumMap을 사용하자
  - 다차원은 `EnumMap<..., EnumMap<...>>` 으로 표현하자
- 열거 타입을 키로 사용하도록 설계한 `EnumMap`은 성능이 빠르다
  - 코드 37-2 참고
- 기본 스트림에선 고유한 맵 구현체를 사용했기 때문에 EnumMap부분을 따로 추가해줘야 한다
  - 코드 37-4 참고
- 코드 2개를 비교했을때 스트림을 사용하는 쪽의 코드(37-4)는 key를 덜만들 수 있음
  - 37-2의 코드는 모든 Enum 타입들을 만들지만, 37-4는 해당 Enum 타입이 없을경우 키로 생성하지 않는다

## Item 38. 확장할 수 있는 열거 타입이 필요하면 인터페이스를 사용하라

- 열거타입은 확장이 불가
- 열거타입은 인터페이스의 구현체 역할이 가능하므로 이를 이용 가능
  - `Operation` 인터페이스를 구현한 `BasicOperation`, `ExtendedOperation` 열거 타입을 예시로 들고 있음
- 열거타입을 인터페이스의 구현체 역할로 사용시 문제점
  - 열거 타입 끼리 상속 불가
  - 헬퍼를 추가하여 열거 타입 구현체 중복을 줄일 수 있을 것임

```java title="테스트 코드 1. genecric method"
public static void main(String[] args) {
    double x = Double.parseDouble(args[0]);
    double y = Double.parseDouble(args[1]);
    test(ExtendedOperation.class, x, y);
}

// T는 Enum 클래스고 Operation의 하위 타입이어야 함
private static <T extends Enum<T> & Operation> void test(
        Class<T> opEnumType, double x, double y) {
    for (Operation op : opEnumType.getEnumConstants())
        System.out.printf("%f %s %f = %f%n", x, op, y, op.apply(x, y));
}
```

```java title="테스트 코드 2. 한정적 와일드 카드"
public static void main(String[] args) {
    double x = Double.parseDouble(args[0]);
    double y = Double.parseDouble(args[1]);
    test(Arrays.asList(ExtendedOperation.values()), x, y);
}

// 특정 연산에서 EnumSet, EnumMap 사용 불가
private static void test(Collection<? extends Operation> opSet, double x, double y) {
    for (Operation op : opSet)
        System.out.printf("%f %s %f = %f%n", x, op, y, op.apply(x, y));
}
```

## Item 39. 명명 패턴보다 애너테이션을 사용하라

- 명명패턴은 (JUnit3 예시)
  - 오타에 예민하며
  - 기대한대로 동작 안할수도 있고
  - 매개변수로 전달할 마땅한 방법이 없음
- 애너테이션은 이 모든문제를 해결해줌
  - 애너테이션 구현을 예제로 할 예정
  - 해당 챕터는 애너테이션을 구현하면서 애너테이션에 대한 이해를 올려주기 위함
- 애너테이션을 적극 사용하자
  - 애너테이션으로 만들 수 있다면 명명패턴은 사용하지 말자
  - 도구 (프레임워크, 라이브러리) 제작자를 제외하고는 일반 프로그래머가 애너테이션 만들일은 거의 없음
    - 따라서 만들어진 애너테이션을 적극 활용하자
    - 물론 만든는 법도 알아두면 좋음

## Item 40. @Override 애너테이션을 일관되게 사용하라

- `@Override` 를 일관되게 사용하면 여러가지 악명 높은 버그를 예방해줌
- 상위 클래스의 메서드를 재정의하려는 모든 메서드에 `@Overrdie` 애너테이션을 달자
  - 컴파일러가 바로 도와줄 것임
  - 상위클래스의 추상 메서드를 재정의한 경우엔 안달아도 되지만 일관적으로 다는 것도 좋음

## Item 41. 정의하려는 것이 타입이라면 마커 인터페이스를 사용하라

- 마커 인터페이스
  - 아무 메서드도 담고 있지 않고, 자신을 구현하는 클래스가 특정 속성을 가짐을 표시해주기만 하는 인터페이스
- 마커 인퍼페이스가 마커 애너테이션 보다 나은 두가지
  - 마커 인터페이스틑 타입의 역할을 하지만 애너테이션은 그렇지 못하다
  - 적용대상을 더 정밀히 지정 가능
    - 애너테이션을 대상을 클래스, 메서드 이런식으로 밖에 지정 못함
    - 인터페이스는 구현, 상속을 통해 정밀하게 지정 가능
- 마커 애너테이션이 마커 인터페이스보다 나은 점
  - 거대한 애너테이션 시스템의 지원을 받는다
- **마커로 등록할 대상에 매개변수를 받는 메서드를 작성할 일이 있으면 마커 인터페이스로!**
- `ElementType.TYPE` 으로 마커 애너테이션을 작성하고 있다면, 시간을 두고 마커 애너테이션과 인터페이스 중 어느게 옳은지 고민하자

