---
id: mac-jenv
title: mac에 jenv으로 여러 jdk 설치
---

## history

### install jenv

```sh
# install jenv
brew install jenv

# zsh을 안쓰시면 ~/.bash_profile
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc

# re-activate profile
source ~/.zshrc
```

### intall openjdk11

```sh
brew tap AdoptOpenJDK/openjdk
brew install --cask adoptopenjdk11
java --version  # for checking
```

### add openjdk11 on jenv

```sh
jenv add /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home/
jenv global 11

```

### checking

```sh
which java  
```

위를 통해 `/Users/<userId>/.jenv/shims/java` 가 나온다면 성공  
안된다면 `source ~/.zshrc` 다시 활성화 시키고 재확인

## References

- [official jenv site](https://www.jenv.be/)
- [github - homebrew-openjdk](https://github.com/AdoptOpenJDK/homebrew-openjdk)
- [이상민의 블로그 - [jEnv] Mac에 jEnv로 여러 버전의 Java 사용하기](https://carpfish.tistory.com/entry/jEnv-Mac%EC%97%90-jEnv%EB%A1%9C-%EC%97%AC%EB%9F%AC-%EB%B2%84%EC%A0%84%EC%9D%98-Java-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
