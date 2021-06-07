---
id: docker-mongodb
title: docker로 MongoDB 로컬환경 세팅
---

> 하나 하나 설치는 어려울 것 같아, 도커에도 적응할겸 mongodb 로컬환경 docker-compose로 구성하기

## 1. docker-compose.yml

```yml
version: "3.6"

services:
  mongodb:
    image: "mongo:3.6"
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: qwe123!@#
    volumes:
      - type: bind
        source: ./data/db
        target: /data/db
    container_name: "mongodb_local"
    ports:
      - "27017:27017"
```

## 2. how to run

```bash
# run
docker-compose up -d

# 실행 유무 확인
docker ps

# mongodb docker 컨테이너 접속
docker exec -it mongodb_local bash
```

## 3. how to connect db shell

```sh
$ mongo -u "root" -p
MongoDB shell version v3.6.23
Enter password: # docker-compose.yml 에서 설정한 비밀번호 입력

# 접속 후 다음과 같이 뜸
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("dc4a3e2a-9124-41ac-88e5-5d29e1e8bb42") }
MongoDB server version: 3.6.23
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
>
```

## + datagrip 세팅

![datagrip 01 설정 이미지](/img/docs/mongodb/docker-mongodb/datagrip-1.png)

![datagrip 02 설정 이미지](/img/docs/mongodb/docker-mongodb/datagrip-2.png)


## 레퍼런스

- http://junil-hwang.com/blog/docker-mongodb/
