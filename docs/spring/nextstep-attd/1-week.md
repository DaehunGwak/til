---
id: 1-week
title: 1주차. 인수테스트 후기
---

1주차 과제를 2주 만에 늦게 마무리 했다. 그래도 배운게 있으니 정리해보자. 남은 주 동안 성실히 해야지 ㅎㅎ

## 인수 테스트의 가장 중요한 점

- 인수 테스트는 인수 조건과 명확한 목적에 맞는 테스트가 중요함을 느꼈다
  - 명확한 목적은 테스트를 작성할 때 스텝을 분리하며 목적을 명시하여, 테스트를 읽는 사람에게 더욱 분명하게 의도를 파악하기에 편리하도록 하는 것이 리뷰하는 사람 입장에서도 좋았다.
- 내부에 데이터 테스트를 ATDD에서 하기는 무리다. 따라서 정확한 데이터를 테스트하려면 유닛테스트, 통합테스트를 적절히 섞어 해야함을 배웠다.

## 일급 컬렉션을 JPA에 활용하기

피드백으로 엔티티의 리스트를 일급 컬렉션으로 리팩터링 하도록 요구받았다. 역할 분리를 하여 해당 컬렉션 만의 메소드들을 만들 수 있으므로 납득이 되어 리팩터링을 하였다. 아래의 코드와 같이 활용할 수 있다.

```java
@Entity
public class Line {
    ...
    @Embedded
    private Sections sections = new Sections();
    ...
}

@Embeddable
public class Sections {
    @OneToMany(mappedBy = "line",
            fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            orphanRemoval = true)
    private List<Section> sections = new ArrayList<>();
    ...
}
```

## CascadeType

- 영속성 전이: 부모의 연관관계를 가지 자식을 함께 저장하고 싶을 때 사용
- 내가 사용하는 Section은 이미 Line을 주체로 작성 된 상태
- 따라서, Section에서는 자식 엔티티들을 관리하고 있는 상태가 아니므로 CascadeType를 사용할 필요가 없음
- 언제 쓰지?
  - 단일 엔티티에서 종속적일 때 (단일 소유자일 때)
  - 부모와 자식의 라이프 사이클이 똑같을 때
- CascadeType 과 영속성 컨텍스트 메소드들의 역할을 한번 정리해야 할 필요를 느꼈다. 언젠가 한번 정리하기를...

## 참고 자료

- 엔티티 일급 컬렉션 참고: [https://wbluke.tistory.com/23](https://wbluke.tistory.com/23)
- 인프런 - 김영한님의 자바 ORM 표준 JPA 프로그래밍 - 기본편 - 영속선 전이와 고아 객체 강의 참고
