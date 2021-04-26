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
- AutoValue 프레임워크로 equals 구현 및 테스트를 자동으로 할 수 있음

## Item 11. equals를 재정의하려거든 hashCode도 재정의하라

### hashCode 규약

- equals 비교에 사용되는 정보가 변하지 않았다면, 앱이 실행되는 동안 객체의 hashCode 는 일관성을 지녀야 한다
- `equals가 같다고 판단했다면, 두 객체의 hashCode는 똑같은 값을 반환해야 한다`
- equals가 구 객체를 다르다고 판단했더라도, 두 객체의 hashCode가 서로 다른 값을 반환할 필요는 없다
  - 단, 다른 객체에 대해서 다른 해시값을 반환해야 해시 테이블의 성능이 좋아짐

### hashCode 간단 예시

간단 예시

```java
/**
 *  equals에 사용된 핵심필드 3개로 hashcode 구현
 */
@Override
public int hashCode() {
    int result = Short.hashCode(areaCode);
    result = 31 * result + Short.hashCode(prefix);
    result = 31 * result + Short.hashCode(lineNum);
    return result;
}
```

- 해시 충돌이 더 적은 방법을 꼭 써야한다면 구아바의 `com.google.common.hash.Hashing` 을 참고
- 홀수인 소수 (31) 값으로 곱하는건 관례적으로 그랬다고 함 ㅎㅎ

Objects.hash 예시

```java
@Override
public int hashCode() {
    return Objects.hash(lineNum, prefix, areaCode);
}
```

lazy initialization (지연 초기화)

```java
private int hashCode;

@Override
public int hashCode() {
    if (hashCode == 0) {
        hashCode = Objects.hash(lineNum, prefix, areaCode);
    }
    return hashCode
}
```

- 스레드 안정성 고려 해야함
- 해싱 비용이 비쌀 시 지연 초기화를 고려할 수 있음

### hashCode 오버라이딩 주의사항

- 핵심필드는 반드시 hashCode 계산 시 빠트리면 안됨!
- hashCode 생성 규칙을 javaDocs 에 명시하자!
  - 그래야 추후 이해를 돕고 계산 방식을 바꿀 때도 도움이 됨

### hashCode 팁

- 앞서 이야기한 `AutoValue` 프레임워크는 자동으로 equals와 hashCode를 만들어 줌

## Item 12. toString을 항상 재정의하라

- toString 일반 규약
  - 간결하면서 사람이 읽기 쉬운 형태의 유익한 정보
  - 모든 하위 클래스에서 이 메서드를 재정의하라
- toString을 잘 구현한 클래스는 디버깅이 쉬움
- 그 객체가 가진 주요 정보 모두를 반환하는 것을 권장
  - 너무 크다면 요약 정보로...
- 표준화 된 값 클래스라면 문서화하기를 권함
  - 포맷을 명시할 시, 표준화되어 명확해지고, 가독성이 좋아짐
  - 명시한 포맷과 객체를 상호 전환할 수 있는 생성자, 혹은 정적 팩터리를 같이 제공하면 좋음
  - 단점은 해당 포맷에 얽매이게 됨
  - 하든 안하든 `의도` 는 명확히 밝히자
- toString이 표현하는 값들에 대한 접근자는 제공하자
- toString이 필요없는 사례
  - 유틸리티 클래스
  - 열거 타입 (이미 완벽)
- AutoValue 프레임워크로 자동생성된 toString이 기본 toString 보단 나음
  - 표준화된 데이터 (전화번호 등) 을 표현하는 것엔 적합하지 않음

### toString 핵심 요약

- 무조건 재정의
  - 물론 상위 클래스의 정의가 완벽하다면 생략 가능

## Item 13. clone 재정의는 주의해서 진행하라

### Cloneable 인터페이스

- 메소드 하나 없지만, protected인 clone의 동작을 방식을 결정함
- Cleanable 인터페이스를 구현한 객체의 clone을 호출하면 해당 객체의 필드들이 복사된 객체가 반환됨
- 실무에선 Cloenable를 구현한 클래스는 clone 메서드를 public으로 제공함
  - 모순적이지만 이렇게 되면 생성자를 통하지 않고 객체를 생성할 수 있게 됨

### clone 일반 규약

> 밥아저씨는 허술하다고 표현

- `x.clone() != x`
- `x.clone().getClass() == x.getClass()`
- `x.clone().equals(x)` (필수는 아님)

### 예시

가변 상태가 없을 시

```java
@Override
public PhoneNumber clone() {
  try {
    return (PhoneNumber) super.clone();
  } catch (CloneNotSupportedException e) {
    throw new AssertionError();
  }
}
```

가변 상태가 존재 시

```java
@Override
public Stack clone() {
  try {
    Stack result = (Stack) super.clone();
    result.elements = elements.clone();
    return result;
  } catch (CloneNotSupportedException e) {
    throw new AssertionError();
  }
}
```

### clone 구현 시 주의 사항

- 깊은 복사를 할 수 있도록 해야함
  - HashTable.Entry는 clone 메서드가 깊은 복사를 지원함
  - 고수준 레벨의 API로 카피할 순 있지만 그럼 추상화 레벨이 안맞아 권장하지 않음
- 상속용 클래스는 Cloenable을 구현해선 안됨
- Cloenable 인터페이스가 구현된 클래스를 상속해야하는 상황이 어쩔 수 없이 발생한다면, clone을 재정의 해야함
- `하지만 구현되어 있지 않다면, 복사 생성자나 복사 팩터리라는 더 나은 객체 복사 방식으로 나아갈 수 있음`
  - 복사(변환) 생성자: `public Yum(Yum yum)`
  - 복사(변환) 팩터리: `public static Yum newInstance(Yum yum)`

### clone 핵심 정리

- 복제 기능은 새성자와 팩터리를 이용하는게 최고
- 배열은 clone 메서드 방식이 유일하게 잘만듦
- 부모 클래스가 Cloneable 구현체라면 어쩔 수 없이 clone 재정의
