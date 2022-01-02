---
id: 4-problem
title: 4. 문제를 통해 배우는 쿠버네티스
---

[노션 노트](https://first-diadem-378.notion.site/4-2faa51baf64447ccaacc23f8b9e23cdb)

## 4.1 파드에 문제가 생겼다면

- 파드를 실수로 지웠다면?
    - 파드만 배포된 경우 → 난감
    - 디플로이먼트 형태로 배포된 파드 → 다시 살려냄
- 쿠버네티스가 파드를 대하는 자세
    - 죽을수도 있지
- 삭제 실습

```bash
# 마스터 노드
kubectl apply -f ~/_Lecture_k8s_starter.kit/ch4/4.1 # 아래의 파일 두개 읽어 생성
kubectl delete pod del-pod # 복구 안됨
kubectl delete pod del-deploy-57f68b56f7-54djs # 해당 파드는 지워지고 새로운게 생성됨
# deployment 가 파드 3개를 유지하라는 설정으로 지정되어 있음
kubectl delete deployment del-deploy # deployment 단위 삭제
```

## 4.2 워커 노드의 구성 요소에 문제가 생겼다면

- Kubelet 은 선언적이 아니라 문제가 생기는 경우 바로 복구되지 않음

**kubelet 중단 실습**

```bash
# 워커노드 #1
systemctl stop kubelet 
systemctl status kubelet

# 마스터노드
kubectl apply -f ~/_Lecture_k8s_starter.kit/ch4/4.1/del-deploy.yaml
kubectl get pod -o wide

# 워커노드 #1
systemctl start kubelet

# 마스터노드
kubectl get pod -o wide
```

**container runtime (docker) 중단 실습**

```bash
# 워커노드 #1
systemctl stop docker
systemctl status docker

# 마스터노드
kubectl scale deployment del-deploy --replicas=6
kubectl get pod -o wide
# 도커 런타임이 종료된 워커노드은 아예 파드가 배포되지 않음
```

- container runtime 문제는 kubelet이 인식해서 api 서버에 전달
    - 이후 스케줄러가 문제되는 container runtime을 가지는 워커노드를 인식해서 해당 노드로 스케줄링하지 않음

**추가 배포를 통해 스케줄러 역할 확인**

- conatiner runtime 을 살린 다음 scale-out 하면?
    - 균형있게 배포해줄까?

```bash
# 워커노드 #1
systemctl start docker
systemctl status docker

# 마스터노드
kubectl scale deployment del-deploy --replicas=9
kubectl get pod -o wide
# 도커 런타임이 종료된 워커노드은 아예 파드가 배포되지 않음
```

## 4.3 마스터 노드의 구성요소에 문제가 생겼다면

**스케줄러는 한번 삭제해본다면?**

```bash
# 마스터노드
kubectl get pods -n kube-system -o wide # `kube-scheduler-m-k8s` 있는지 확인
kubectl delete pod kube-scheduler-m-k8s -n kube-system # 삭제
# 문제가 생겨도 다시 생성됨을 확인
```

마스터노드의 kubelet이 종료된다면?

```bash
### 마스터노드
systemctl stop kubelet
kubectl delete pod kube-scheduler-m-k8s -n kube-system # 삭제
# Terminating 상태, 실제로 삭제되지는 안됨
# 실제 파드 생성 삭제에 이상이 없음
# 응? 시스템이 안정적으로 돌아가긴 함
```

**container runtime 을 삭제한다면?**

```bash
### 마스터노드
systemctl stop docker
kubectl get pod # 안됨
curl <서비스 되고 있던 ip> # 안됨
# 마스터노드의 container runtime이 엄청 중요한 사실을 알 수 있음
# 그래서 마스터노드도 하나가 아니라 여러개로 스케일 아웃되어 실제로 운영됨
```
