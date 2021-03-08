---
id: python-algo-interview
title: 파이썬 알고리즘 인터뷰
---

## 이 책을 통해 기대하는 것

- 알고리즘 코딩 인터뷰 풀이
- 알고리즘 원리
- 파이썬 고급 활용
- 취업, 이직, 채용 가이드

> [풀이 링크](https://github.com/onlybooks/algorithm-interview)

## 01. 코딩 인터뷰

- 문제 풀이 원칙
  - 스스로 문제당 제한 시간을 정해두고 풀기
  - input 예외처리 잊지 말기
- 풀이시간 초과했을 때 포기?
  - 다 풀 수있고, 면접관의 메일을 알고 있는 경우라면
  - **초과 이후에 풀이 더 해보고, 메일 보내보기**
- IDE, REPL 적극 이용

## 02. 프로그래밍 언어 선택

- 3.7+ 이후로 `@dataclass` 를 지원
- 그 밖에 내용은 언어 별로 비교하는 내용이므로, 책을 참고

## 03. 파이썬

- 귀도 반 로썸 파이썬 만들 때 생각
  - 읽기 쉽고
  - 중괄호 보단 인덴트로
  - 사용자가 원하는 모듈 패키지를 만들 수 있어야 했으며
  - 다른 프로그램에 사용할 수 있게 하는 것
    - 후에 easy_install을 거쳐 pip 로 성장
- 파이썬 이해
  - PS 만다루는 게 아니라 파이썬에 대한 이해도 같이 다룰 예정
  - 3.7+ 다룸
  - CPython 인터프리터를 사용
  - PEP (Python Enhancement Proposals) 도 같이 볼 예정

### 파이썬 문법

- 인덴트 (PEP 8)
  - PEP 8, 4칸 공백
- 네이밍 컨벤션 (PEP 8)
  - snake_case (_) 를 따름

> 다른 네이밍 컨벤션 들
> - camelCase
> - PascalCase

- 타입 힌트 (PEP 484)
  - 3.5+
  - `def fn(a: int) -> bool:` 과 같이 작성 가능
  - 가독성의 의미로 생각하면 됨
  - 힌트이므로 c++, java 처럼 컴파일 시 오류를 잡진 않음
  - `mypy` 를 pip 로 설치하면 타입 힌트를 해결할 수 있음
- List Comprehension
  - `[n * 2 for n in range(1, 10 + 1) if n % 2 == 1]` -> `[2, 6, 10, 14, 19]`

> map, filter 같은 functional features 도 지원  
> `list(map(lambda x: x + 10, [1, 2, 3]))` -> `[11, 12, 13]`
>  
> effective python 파이썬 코딩의 기술 (길벗, 2016) 도 추후 보는 것을 추천

- Generator
  - 100 만개를 미리 만들어 놓고 쓰기보단, 필요할때마다 만들어 쓰는게 더 효율적이다.
  - 그래서 리스트 컴프리헨션으로 먼저 만들어 메모리를 점유해 사용하기 보단,
  - 제너레이터로 표현하여 필요할때마다 생성해서 사용할 수 있음
  - `range()` 가 대표적으로 많이 사용되는 제너레이터 랩핑 python 내장 class

```py
# generator sample
def get_natural_number():
    n = 0
    while Ture:
        n += 1
        yield n  # next() return point

g = get_natural_number()
for _ in range(0, 100):
    print(next(g))
```

- enumerate
  - 순회 가능한 자료형 (list, set, tuple 등)을 인덱스를 포함한 enumerate 객체로 리턴함

```py
# enumerate sample
for i, v in enumerate(a):
    print(i ,v)
```

- f-string (3.6+)

```py
# format string
>>> print("{}: {}".format(idx, fruit))
2: apple

# f-string
>>> print(f"{idx}: {fruit}")
2: apple
```

- pass
  - 전체 골격을 잡아놓고 구현을 나중에 할 때, pass 키워드로 구현 생략 가능
  - null operation

- locals()
  - 로컬 심볼 테이블 딕셔너리를 반환

```py
from pprint import pprint
a = 100
pprint(locals())
'''
{'__annotations__': {},
 '__builtins__': <module 'builtins' (built-in)>,
 '__doc__': None,
 '__loader__': <class '_frozen_importlib.BuiltinImporter'>,
 '__name__': '__main__',
 '__package__': None,
 '__spec__': None,
 'a': 100,
 'b': {'c': 'asdkfasdkfadf'},
 'pprint': <function pprint at 0x7fb59de1baf0>}
'''
```

### 스타일가이드

- 변수, 메소드(함수) 명
- 리스트 컴프리헨션
- [구글 파이썬 스타일 가이드](https://google.github.io/styleguide/pyguide.html)
  - 함수 기본값으로 가변 객체 달지 않기
    - [], {} 를 달면 이후 해당 객체를 수정했을 때 기본값이 계속 수정되어 있는 채로 들어오게 됨
    - 명시적으로 None을 넣고 `if parameter is None` 으로 검사하여 기본값을 설정하는 것을 지향
  - falsey value를 if 검사할 때 굳이 긍정문으로 바꿀 필요는 없음 like `if somthing_list !== []:`
  - 해당 자료는 꼭 나중에 정독을 해보는 것이 좋을 것 같다

## 4. 빅오, 자료형

### 빅오

- 자료형 크기에 따른 수학적 속도 표기법 (시간복잡도)
- 주어진 자료의 최선/평균/최악의 경우에서 수행시간 상한선을 의미
- 분활 상환 분석법
  - 빅오는 너무 비관적이라서 등장
- 병렬화로 성능 개선도 가능
  - 대표적으로 딥러닝, GPU

### 자료형

- 자료형 계층구조
  - `None`
  - 숫자
    - `float`
    - 정수형
      - `int`
      - `bool`
  - 집합형 `set`
  - 매핑 `dict`
  - 시퀸스
    - 불변
      - `str`
      - `tuple`
      - `bytes`
    - 가변
      - `list`

