---
id: docker-mysql
title: docker로 mysql local 세팅
---

## Environments

- Mac
- mysql:8

## Commands

```sh
docker pull mysql:8
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234abcd --name mysql-test-8 mysql:8 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

# connect mysql shell on docker
docker exec -it mysql-test-8 bash

# in mysql-test-8 container
mysql -u root -p

# create local user
create user 'localtest'@'%' identified by '1234abcd';
grant all privileges on *.* to 'localtest'@'%';
# or specific db privilieges
grant all privileges on <DB_name>.* to 'localtest'@'%';

# create database
create database test
```

## References

- [hub.docker.com: mysql](https://hub.docker.com/_/mysql)
- [poiemaweb.com: docker-mysql](https://poiemaweb.com/docker-mysql)
- [cjh5414.github: mysql-create-user](https://cjh5414.github.io/mysql-create-user/)
- [futurists.tistory: mysql 1장 시작하기](https://futurists.tistory.com/11)
