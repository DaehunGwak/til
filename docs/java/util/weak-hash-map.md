---
id: weak-hash-map
title: WeakHashMap 알아보기
---

- [WeakHashMap 예제](https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item07/WeakHashMapTest.java)
- weak reference를 기반으로 함
- 만약 weak reference 변수 로 지정된 대상 객체에 대해서
  - 다른 변수들이 더이상 객체에 도달 하지 못하면
  - weak reference 변수도 null이 됨 (weak reference 는 mark and sweep 의 대상이 되지 않음)

## 예시

```java
package ch02.item07;

import java.util.Map;
import java.util.WeakHashMap;

public class WeakHashMapTest {

    public static void main(String[] args) {
        // setup
        Map<Integer, Stack> weakMap = new WeakHashMap<>();

        // 스택은 자체적으로 짠 스택을 활용해서 실제 예제코드를 참고바람
        Stack s1 = new Stack();
        Stack s2 = new Stack();
        weakMap.put(20, s1);
        weakMap.put(450, s2);

        // 정상적으로 2개 출력
        for (Map.Entry<Integer, Stack> elem : weakMap.entrySet()) {
            System.out.printf("%d: %s\n", elem.getKey(), elem.getValue());
        }

        // 강제 GC
        s2 = null;
        System.gc();

        // WeakHashMap 에서 450 키가 자동으로 사라진 것을 확인할 수 있음
        for (Map.Entry<Integer, Stack> elem : weakMap.entrySet()) {
            System.out.printf("%d: %s\n", elem.getKey(), elem.getValue());
        }
    }
}
```

## 참고자료

- [Java - Collection - Map - WeakHashMap (약한 참조 해시맵) - 조금 늦은, IT 관습 넘기 (JS.Kim)](http://blog.breakingthat.com/2018/08/26/java-collection-map-weakhashmap/)
- 이펙티브 자바
