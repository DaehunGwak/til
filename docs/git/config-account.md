---
id: config-account
title: git 해당 프로젝트에만 계정 설정
---

> 회사 컴퓨터로 깃헙 레포에 커밋하고 싶은데 글로벌 계정이 회사꺼라 바꾸고싶어 정리함

```sh
cd <projectPath>
git config user.name <name>
git config user.email <email>
git config --list
```

이렇게 마지막 커맨드로 확인하면 계정이 추가된 것을 확인할 수 있음
