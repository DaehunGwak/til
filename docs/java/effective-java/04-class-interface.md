---
id: 04-class-interface
title: 04. 클래스와 인터페이스
---

> 클래스와 인터페이스를 쓰기 편하고, 견고하며, 유연하게 만드는 방법 안내

## Item 15. 클래스와 멤버의 접근 권한을 최소화하라

잘 설계된 컴포넌트는 클래스의 내부 데이터와 구현 정보를 외부로 부터 잘 숨겨 놓았음 (정보은닉)

### 정보 은닉의 장점

- 시스템 개발 속도를 높임
  - 여러 컴포넌트 병렬로 개발할 수 있어서
- 시스템 관리 비용을 낮춤
  - 디버깅 및 컴포넌트 교체 비용 감소
- 성능 최적화에 도움을 줌
  - 다른 컴포넌트에 영향을 주지 않고 독립적 테스트가 가능해 짐
- 재사용성 증가
- 큰 시스템 제작 난이도 낮춰줌
  - 시스템 전체가 완성되지 않은 상태로 개별 컴포넌트 동작 검증 가능

### 자바의 정보 은닉 지키는 실천 가이드

- 접근 제한자 활용하여 모든 클래스와 멤버의 접근성을 가능한 좁혀야 함
- 패키지 외부에 클래스가 쓸 일이 없다면 package-private으로 선언

> `package-private`은 class 선언시 앞에 접근제어자를 적지 않아 패키지 내부까지만 사용할 수 있도록 클래스 범위를 제안하는 것.
> 같은 패키지에 포함되는 다른 클래스 까지만 접근이 가능함

- `protected` 는 가급적 줄이기
  - 상속 받은 모든 클래스에서 접근 가능해 의존성이 넓어짐
- `public` 클래스의 인스턴스 필드는 되도록 `public` 이 아니어야 함
  - 예외: `public static fianl` 필드로 상수 공개
    - 이땐 반드시 기본 타입이나 불변 객체를 참조하여야 함
    - `public static final` 에서 가변 객체나 배열은 안됨
    - 굳이 두고 싶다면 다음과 같이 두가지로 가능

```java title="private + public 불변 리스트 반환"
private static final Thing[] PRIVATE_VALUES = {...};

public static final List<Thing> VALUES = 
        Collections.unmodifiableList(Arrays.asList(PRIVATE_VALUES));
```

```java title="private + public 방어적 복사 메서드 추가"
private static final Thing[] PRIVATE_VALUES = {...};

public static final Thing[] values() {
    return PRIVATE_VALUES.clone();
}
```

- Java 9에서 제공하는 모듈단위 접근 수준이 2가지 있는데 아직은 쓰지않는게 좋다고 함

### 핵심 정리

- 요소 접근성은 가능한 최소한
- 클래스, 인터페이스, 멤버가 의도치 않게 API로 공개되는 일은 없도록
- public 클래스는 상수용 public static final 외에는 public 필드를 가져선 안됨
- public static final 필드는 불변인지 확인

## Item 16. public 클래스에서는 public 필드가 아닌 접근자 메서드를 사용하라

- public 클래스는 가변 필드를 직접 노출해선 안됨
- 제목 그대로, 인스턴스 필드를 public으로 하기보단 getter/setter 를 통해 접근하게 하는 것을 말함
- getter/setter 를 통해클래스 내부 표현 방식을 바꿀 수 있는 유연성이 생김
- 예외: 종종 package-pirvate, private 중첩 클래스라면 데이터 필드를 노출해도 괜찮음 (외부로 번지지 않음)

## Item 17. 변경 가능성을 최소화하라

### 불변 클래스

- 인스턴스의 내부값을 수정할 수 없는 클래스
- String, 기본 타입 박싱 클래스, BigInteger, BigDecimal 등이 있음
- 클래스를 불변으로 만드는 5가지 규칙
  - 객체 상태를 변경하는 메서드를 제공하지 않는다
  - 클래스를 확장할 수 없도록 함 (클래스를 final 로 선언한다던지..)
    - 모든 생성자를 private, package-private으로 만들고 정적 팩터리 메소드를 public으로 제공
  - 모든 필드를 final로 선언
  - 모든 필드를 private으로 선언
  - 자신 외에는 내부의 가변 컴포넌트에 접근할 수 없도록 함
    - 생성자, 접근자, readObject 메서드 모두에서 방어적 복사를 수행
- Complex 예시에서 `add` 가 아니라 `plus` 와 같은 전치사를 사용하였는데, 이는 내부 변화가 없다는 것을 의미하기 위해 구분하기 위한 용도
- 객체를 만들 때 다른 불변 객체들을 구성요소로 사용하면 이점이 많음
  - 불변성을 유지하기 쉬워짐
- 값이 다르면 반드시 독립 객체를 만들어야함

### 불변 클래스 특징

- 오류가 생길 여지가 적고, 가변 클래스보다 설계와 사용이 쉬움
- 단순하다
- thread-safety 를 보장하며 동기화 할 필요가 없음
  - 따라서 안심하고 공유 가능함
- 자주 사용하는 객체는 정적 팩터리로 인스턴스를 공유하여 사용 가능
  - 방어적 복사도 필요 없음
- 불변 객체끼리는 내부 데이터를 공유할 수 있음
- 실패 원자성을 제공
  - 예외를 발생시켜도 그 객체는 여전히 메서드 호출전과 같은 유효한 상태여야 한다는 성질

### 불변 클래스 BigInteger negate 예시를 파다보니 궁금한 사항

```java title="BigInteger 내부 일부분"
public class BigInteger extends Number implements Comparable<BigInteger> {

    final int signum;
    final int[] mag;

    BigInteger(int[] magnitude, int signum) {
        this.signum = (magnitude.length == 0 ? 0 : signum);
        this.mag = magnitude;
        if (mag.length >= MAX_MAG_LENGTH) {
            checkRange();
        }
    }

    public BigInteger negate() {
        return new BigInteger(this.mag, -this.signum);
    }
}
```

- 음 이렇게 카피하면 this.mag이 다른데에서 수정되었을때 같은 참조를 가지고 있는 BigInteger 객체에서 수정이 발생하지 않는가?
  - 카피는 참조로 해도, 불변 객체라 연산 시 배열 카피가 일어남 (결과적으로 괜찮음)

```java title="test code"
BigInteger bi = BigInteger.valueOf(100000L);
BigInteger nbi = bi.negate();
System.out.println(bi);  // 100000

bi = bi.divide(BigInteger.valueOf(100L));

System.out.println(bi);  // 1000
System.out.println(nbi);  // -100000
```

### 불변 클래스 주의사항

- BigInteger, BigDecimal은 final 이 아니기 때문에 상속이 가능
  - 상속 되었을 시 불변성은 보장 못하기 때문에 가변 인자라 취급하고, 타입 검사를 하고 방어 적 복사를 해야함

```java
public static BigInteger safeInstance(BigInteger val) {
    return val.getClass() == BigInteger.class ?
          val : new BigInteger(val.toByteArray());
}
```

### 변경 가능 최소화 원리 핵심 정리

- getter가 있다고 setter를 만들지 말자
- 클래스는 꼭 필요한 경우 아니라면 불변이어야 함
- 불변으로 만들 수 없는 클래스는 변경할 수 있는 부분을 최소한으로 줄이자
- 다른 합당한 이유가 없다면 모든 필드는 private final 로 지정하자
- 생성자는 불변식 설정이 모두 완료된, 초기화가 끝난 객체를 생성해야 함
  - 확실한 이유가 없다면 생성자, 정적팩터리 외 다른 초기화 메서드 X

## Item 18. 상속보단 컴포지션 사용

- 다른 패키지의 구현 클래스를 상속하는 것은 위험
- 구현 상속은 캡슐화를 깨트림
  - 구현 클래스에 대한 상세 스펙을 이해해야 상속해서 재구현 가능

### 컴포지션

- 기존 클래스를 확장하는 대신, 새로운 클래스를 만들고 private 필드로 기존 클래스의 인스턴스를 참조하게 하자
- 기존 클래스의 내부 구현 방식을 몰라도 됨
- 새로운 메서드가 기존 클래스에 추가되더라도 영향을 받지 않음
  - 물론 기존 메서드가 수정된다면 영향을 받을 수도 있음
- 기존 클래스를 감싸는 측면에서 `Wrapper 클래스`라고 부름 (InstrumentedSet 예시 참조)
  - 기존 클래스의 기능에서 다른 기능을 덧덴다는 의미에서 Decorator Pattern이라고 부름
  - 단점으론 콜백 프레임워크와 어울리지 않음
- Wrapper 클래스는 `전달(Forwarding) 클래스`를 통해 구현됨 (ForwardingSet 예시 참조)
  - 전달 클래스는 기존 인터페이스를 구현하고 해당 인터페이스를 컴포지션에서 가짐
  - Wrapper 클래스와 역할을 분리
  - 기존 다른 패키지와의 다리 역할을 함

> 만약 상속을 사용해야 한다면, 확장하려는 클래스에 결함이 없는지 반드시 다시 생각해보자.
> 상속하게 되면 기존 클래스의 결함/특징이 모두 따라오게 된다.

### 컴포지션 핵심 정리

- 상속은 강력하지만 캡슐화를 해침
- 상속의 취약점을 피할려면 컴포지션과 전달을 사용하자

## Item 19. 상속을 고려해 설계하고 문서화하라, 그러지 않았다면 상속을 금지하라

- 상속용 클래스는 재정의할 수 있는 메서드들을 내부적으로 어떻게 이용하는지 문서로 남겨야함
  - protected, public 에 해당 (final 제외)
  - API 메서드 설명 중 Implementation Requirements 는 내부 동작 방식을 설명해주는 구간
    - @implSpec 이 Java9 부터 본격적으로 사용 (매개 변수로 화렁화 할 수 있음)
  - 안전한 상속을 사용하려면 어쩔 수 없이 내부 구현 방식을 설명할 수 밖에 없음
- 내부 동작 중 끼어둘 수 있는 hook을 잘 선별하여 protected 로 공개해야 할 수 있음
  - 시험하는 방법은 직접 하위 클래스를 만들어볼 수 밖에 없음
- 상속용 클래스의 생성자는 재정의 가능 메서드를 호출해선 안됨
- clone과 readObject 모두 재정의 가능 메서드를 호출해선 안됨
- `상속용 클래스로 설계되지 않은 클래스는 상속을 금지하는 것` 이 가장 중요
  - 클래스 final 선언
  - 모든 생성자를 private or package-private 으로 선언 + 정적 팩터리 메소드 제공

### 상속 핵심 정리

- 상속용 클래스 설계는 쉽지 않음
- 스스로 어떻게 사용하는지 문서화 되어 있어야함
- 효율 좋은 하위클래스를 만들기 위해 protected로 제공해야 될 수도 있음
- 확장할 명확한 이유가 없다면 상속 금지

## Item 20. 추상 클래스보단 인터페이스를 우선하라
