---
id: 01-jvm
title: mac에 jenv으로 여러 jdk 설치
---

[백기선님의 java 기초 live-study 1주차](https://github.com/whiteship/live-study/issues/1) 뒷북 정리

## JVM이란 무엇인가

- Java Virtual Machine
- Java Runtime (java 실행기)
- command line 으로 `java ~` 하면서 실행하는 것이 JVM 을 사용하는 것임
- JVM에는 컴파일된 java 바이트 코드가 제공되야함 제공되야함
  - 각 .java 파일은 컴파일 후 .class 파일이 됨
- JVM이 추구하는 방향성
  - 어플리케이션 코드를 실행할 수 있는 컨테이너
  - c/c++ 보다 보안과 신뢰성이 있는 실행환경 제공
  - 개발자 손으로 메모리관리 하지 않게하기
  - 크로스 플랫폼 실행환경 제공

## 컴파일, 실행, 바이트코드

### 컴파일 하는 방법

- javac 를 통해 컴파일이 가능
- command: `javac <.java file> -d <output directory>`
- 이때 .class 바이트코드 파일이 나오는데 아직 완전한 기계어는 아니라 JVM에 올려서 실행해야 함
  - 해당 과정을 `classloading` 이라고 함

### 실행하는 방법

- javac로 컴파일한 .class 코드는 java 실행파일로 jvm을 이용해 실행할 수 있다.
- command: `java <.class file>`
- 실행되면 JVM이 메모리에 올라가고
  - .class 바이트 코드를 JVM에 올려
  - intepreter가 이를 해석한다

### 바이트코드란 무엇인가

- java에서 바이트 코드는 javac로 컴파일해서 나오는 .class 코드
- 해당 코드는 JVM의 Interpreter가 해석하기 용이할 뿐, 기계어와는 다르다
- 소스코드와 기계어 사이라고 많이 봄

## JIT 컴파일러란 무엇이며 어떻게 동작하는지

## JVM 구성요소

## JDK와 JRE의 차이

## 보충 설명

### 정리에 대해서

- 가급적 그림의 출처는 바로 아래에 남기기
- 그림도 왠만하면 다시 직접 그려보기
- 자신만의 표현으로 재해석 하기 (그대로 카피하면 그냥 타이핑 밖에 안됨)

## References

- [백기선님의 java 기초 live-study 1주차](https://github.com/whiteship/live-study/issues/1)
- [Java in a Nutshell, 7th edition](https://learning.oreilly.com/library/view/java-in-a/9781492037248/)
- [D2: JVM Internal](https://d2.naver.com/helloworld/1230)