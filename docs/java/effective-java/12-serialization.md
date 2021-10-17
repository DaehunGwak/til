---
id: 12-serialization
title: 12. serialization
---

## Item 85. 자바 직렬화의 대안을 찾으라

- ObjectInputStream의 `readObject`로 모든 타입의 객체를 만들어 낼 수 있어, 해당 코드가 공격범위에 들어가게됨
- 아무것도 역직렬화 하지 말자
- JSON, protobuf 같은 cross-platform structured-data representation을 이용
- 그래도 써야한다면, 신뢰할 수 없는 데이터는 절대 역직렬화하지 않는다
- 역직렬화 필터링 `java.io.ObjectInputFilter` 를 이용하며, 화이트 리스트로 관리하자

## Item 86. Serializable을 구현할지는 신중히 결정하라

- Serializable을 구현한다면, 릴리즈한 뒤에는 수정하기 어려움
  - 그래도 만들고자 한다면, 길게 보고 고품질의 직렬화 헝태도 주의해서 함께 설계해야함 (Item 87, 90 참고)
- Serializable을 구현한다면, 버그와 보안 구멍이 생길 위험이 높음
- Serializable을 구현한다면, 해당 클래스의 신버전을 릴리즈할 때 테스트할 것이 늘어남
- 상속용 class와 interface는 Serializable 확장 X

## Item 87. 커스텀 직렬화 형태를 고려해보라

- 직접 설계하더라도 기본 직렬화 형태 사용과 다를게 없다면 기본 직렬화를 사용하라
  - 객체의 물리적, 논리적 표현이 같다면 기본 직렬화 형태다
- 기본 직렬화 형태가 적합하더라도 불변식 보장과 보안을 위해 `readObject` 메서드 제공을 따로 해야할 때가 많음
- 객체의 물리적 표현과 논리적 표현이 다를 때 기본 직렬화 형태를 사용하면 생기는 문제점
  - 공개 API가 현재의 내부 표현 방식에 영구히 묶임
  - 너무 많은 공간을 차지할 수 있음
  - 시간이 너무 많이 걸릴 수 있음
  - 스택 오버플로 가능
- `transient` 한정자로 기본 직렬화 형태에 포함하지 않을 수 있음
- 해당 객체의 논리적 상태와 무관한 필드라고 확신할 때만 `transient` 생략
- 동기화가 반영된 클래스라면 직렬화 메서드에도 동기화 (`synchronized`) 반영
- **직렬화 가능 클래스 모두에 직렬 버전 UID 를 명시적으로 부여**
  - `private static final long serialVersionUID = <random long value>`
  - 구버전과의 호환성을 끊고 싶지 않다면 `serialVersionUID` 는 수정 X

## Item 88. readObject 메서드는 방어적으로 작성하라

- `readObject` 는 public 생성자를 만드는 것 처럼 다루어야 함
- `readObject` 메서드는 `defaultReadObject` 호출 이후 역직렬화된 객체가 유효한지 검사

### 안전한 readObject 작성법

1. 역직렬화 시, 클라이언트가 소유해서는 안되는 객체 참조를 갖는 필드를 모두 방어적 복사
1. 모든 불변식을 검사하여 어긋난게 있으면 `InvalidObjectException` 던지기
1. 역직렬화 후, 객체 그래프 전체 유효성 검사 필요 시, `ObjectInputValidation` 인터페이스 사용
1. 재정의할 수 있는 메서드 호출 X

## Item 89. 인스턴스 수를 통제해야 한다면 readResolve 보다는 열거타입 사용

- 불변식을 지키기 위해 인스턴스를 통제해야 한다면, 가능한 열거타입 사용하자

```java
public enum Elvis {
    INSTANCE;
    private String[] favoriteSongs = { "Hound Dog", "Heartbreak Hotel" };
    public void printFavorites() {
        System.out.println(Arrays.toString(favoriteSongs));
    }
}
```

- 직렬화와 인스턴스 통제 둘 다가 필요하다면 readResolve 이용
  - 대신 모든 참조 타입 필드는 transient 로 선언

## Item 90. 직렬화된 인스턴스 대신 직렬화 프록시 사용을 검토하라

- 제 3자가 확장할 수 없는 클래스라면 가능한 직렬화 프록시패턴 이용
- 불변식을 안정적으로 직렬화해주는 가장 쉬운 방법
- 조금의 성능저하는 있음 (14% ?)

### 직렬화 프록시 패턴

```java title="Period 용 직렬화 프록시"
private static class SerializationProxy implements Serializable {
    
    private static final long serialVersionUID = 123991248176023L;

    private final Date start;
    private final Date end;

    SerializationProxy(Period p) {
        this.start = p.start;
        this.end = p.end;
    }

    private Object readResolve() {
        return new Period(start, end);
    }
}

public class Period implements Serializable {
    private Date start;
    private Date end;

    ...

    private Object writeReplace() {
        return new SerializationProxy(this);
    }

    private void readObject(ObjectInputStream stream) 
            throws InvalidObjectExcpetion {
        throw new InvalidObjectException("프록시 필요");
    }
}
```



