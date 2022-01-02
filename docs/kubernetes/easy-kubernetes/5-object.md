---
id: 5-object
title: 5. 쿠버네티스 오브젝트
---

[노션 노트](https://first-diadem-378.notion.site/5-de2d28fb0e6a4df8968c79de1ac744ee)

## 5.1 쿠버네티스에서 오브젝트란

- 상태를 가지고 있는 것을 오브젝트라 부름

### 선언적인 시스템

- 오브젝트가 추구하는 상태를 기술해 둔 것
    - 추구하는 상태: spec
    - 현재 상태: status

```bash title="spec, status 확인"
kubectl edit deployment del-deploy # 오브젝트 yaml 확인 가능
# spec.replicas = 6 으로 변경 후 저장
kubectl get pod # 6개의 파드 확인
```

## 5.2 쿠버네티스 기본 오브젝트

- 쿠버네티스 오브젝트가 기본단위
    - 파드 오브젝트
    - 서비스 오브젝트 등등
- 기본 오브젝트
    - pod (언제든 죽고 살아날 수 있음)
    - service (nodeport, loadbalancer:metallb)
    - namespace (default, kube-system ...)
        - 필요에따라 더 생성 가능
    - volume (영속적인 데이터 보전)
        - pod의 언제든 죽는 특징을 가지고 있어 volume 을 붙임

```bash
# 마스터 노드
## nfs 시스템 만들기
~/_Lecture_k8s_starter.kit/ch5/5.2/nfs-exporter.sh log # 미리 만들어둔 스크립트 이용
cat /etc/exports # nfs ip/port 확인

cat ~/_Lecture_k8s_starter.kit/ch5/5.2/dpy-chk-log.yaml
kubectl apply -f ~/_Lecture_k8s_starter.kit/ch5/5.2/dpy-chk-log.yaml

curl 172.16.132.10
kubectl exec dpy-chk-log-658658f78c-5gzdc -it -- /bin/bash

## pod 내부 command log
root@dpy-chk-log-658658f78c-5gzdc:/# ls
audit  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@dpy-chk-log-658658f78c-5gzdc:/# cd audit/
root@dpy-chk-log-658658f78c-5gzdc:/audit# ll
bash: ll: command not found
root@dpy-chk-log-658658f78c-5gzdc:/audit# ls
audit_dpy-chk-log-658658f78c-5gzdc.log
root@dpy-chk-log-658658f78c-5gzdc:/audit# cat audit_dpy-chk-log-658658f78c-5gzdc.log 
28/Dec/2021:12:44:41 +0900  172.16.132.10  GET

# 마스터노드
kubectl delete -f ~/_Lecture_k8s_starter.kit/ch5/5.2/dpy-chk-log.yaml
ls /nfs_shared/log/
# 파드를 생성해도 다시 해당로그가 그대로임을 확인할 수 있음
```
