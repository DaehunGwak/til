---
id: 10-exception
title: 10. 예외
---

## Item 69. 예외는 진짜 예외 상황에만 사용하라

```java title="버그 숨기는 코드 (따라하지 마세요)"
try {
    int i = 0;
    while (true)
        range[i++].climb();
} catch (ArrayIndexOutOfBoundsException e) {
}
```

- try-catch는 최적화가 제한됨
- 반복문 안에 버그가 숨어 있다면 오히려 디버깅이 어려움
- 일상적 제어 흐름에 사용하지말고, 정말 예외상황일 때만 사용

## Item 70. 복구할 수 있는 상황에는 검사 예외를, 프로그래밍 오류에는 런타임 예외를 사용하라

> [예외 종류 참고 블로그](https://live-everyday.tistory.com/203)

> 검사 예외, 런타임 예외, 에러 중 어떤걸 던져야하는지에 대한 기준

- 호출하는 쪽이 복구할거라 여겨지는 상황이면 검사 예외 사용 (의도적)
- 프로그래밍 오류를 나타날 때는 런타임 예외를 사용 (의도X)
  - 직접 구현하는 throwable은 `RuntimeException` 하위 타입으로 구현
- 에러는 JVM 자원부족, 불변식 깨짐 등 더 이상 수행할 수 없는 상태 (시스템적 오류)
  - 에러를 상속해서 구현은 X

## Item 71. 필요 없는 검사 예외 사용은 피하라

- 검사예외를 과하게 사용하면 쓰기 불편한 API
- 검사예외 핸들링: 상위로 예외 전파, 로깅하고 시스템을 종료하는 방법
- 적절한 결과를 옵셔널로 반환하여 검사 예외를 피할 수 있음
- 하지만 옵셔널로 충분한 정보를 전달 못한다면 검사 예외를 던지자

## Item 72. 표준 예외를 사용하라

- 표준 예외를 사용하며 얻는 이점: 다른 사람이 사용하고 익히기 쉬워짐
- Exception, RuntimeException, Throwable, Error 직접 사용 X

### 자주 사용하는 익셉션

|exception|use|
|---|---|
|`IllegalArgumentException`|아규먼트가 이상함|
|`IllegalStateException`|대상객체의 상태가 이상함|
|`NullPointerException`|널을 받음, 근데 메소드에서 허용하지 않음|
|`IndexOutOfBoundsException`|인덱스 범위 넘음|
|`ConcurrentModificationException`|동시 수정이 안됨|
|`UnsupportedOperationException`|호출한 메서드 지원하지 않음 (인터페이스 구현체에서 서포트 X)|


## Item 73. 추상화 수준에 맞는 예외를 던져라

- 상위 수준에서선 저수준의 예외를 잡아 자신의 수준의 예외로 바꿔 던져야함 (예외 번역)
  - 더 상위 수준에서 저수준의 예외를 받으면 파악하기 힘듦
- 무턱대고 예외 번역을 하는 것도 곤란
- 차선책, 중간 계층에서 예외를 잡고 로깅하는 방법도 있음
- 예외 연쇄로 하위 예외를 실어 보낼 수 있음

```java title="예외 연쇄 예시"
// middle service
try {
  ...
} catch (LowerLevelException cause) {
  throw new HigherLevelException(cause); // 실어 보내기
}

// exception implementation
class HigherLevelException extends Exception {
    HigherLevelException(Throwable cause) {
        super(cause);
    }
}
```

## Item 74. 메서드가 던지는 모든 예외를 문서화하라

- Javadoc `@throws` 활용 (클래스 설명에도 가능)
- 비검사 예외는 문서화하여 사용자가 피하게 하되, 함수 선언 시 throws에 넣지 말자
  - throws에 넣는다는 건, 상위에서 핸들링 하라는 뜻, 즉 검사 예외 라는 뜻

## Item 75. 예외의 상세 메시지에 실패 관련 정보를 담으라

- 예외를 추가로 구현한다면 toString 메서드에 실패 원인에 관한 정보를 커스텀해서 담을 수 있음
- 실패 순간을 로그로 보고 싶다면 `throw new NullPointerException("첫번째 인자에 null 입력")` 처럼 메시지 넣어 볼 수 있음
- 문서와 소스코드에서 정보를 확인할 수 있다면, 굳이 그 정보까지 장황하게 적을 필요 없음
- 예외에 실패와 관련된 정보를 얻을 수 있는 접근자 메서드를 제공하는 방법도 있음

## Item 76. 가능한 한 실패 원자적으로 만들라

- failure-atomic: 호출 메서드가 실패하더라도 실패 대상 객체는 메서드 호출 전 상태를 유지
- failure-atomic 구현 방법
  - 불변 객체로 설계
  - 얼리 체크 패턴: 작업 수행에 앞서 유효성 검사
  - 실패할 가능성이 있는 코드를 상태 변화 전 앞에 배치
  - 임시 복사본에 작업 수행 후 완료되면 원래 객체와 교체
  - 실패를 가로채는 복구 코드 작성 (현실적으로 오래걸릴 듯)
- 현식적으로 완전한 failure-atomic 을 구현하는 건 어려울 수 있으나 지키려 노력해보자

## Item 77. 예외를 무시하지 말라

- catch해서 빈칸으로 남겨두고 무시하지 말기..
- 혹시나 무시해야 한다면, catch 블럭안에 주석으로 남기고, 예외 변수를 ignored로 남기기
