---
id: 2-handson
title: 2. 배포를 통한 쿠버네티스 체험
---

[노션 노트](https://first-diadem-378.notion.site/2-a824cf21a6324563873800a2bb4ad4e3)

## 2.1 배포를 통해 확인하는 Pod

- Pod란? Container의 집합
    - 대부분은 하나의 컨테이너가 하나의 Pod으로 이루어진 경우가 많음

```bash
# master node (m-k8s)
kubectl run nginx --image=nginx
kubectl get pod
kubectl get pod -o wide # ip도 같이 보여줌
curl 172.16.221.129
```

## 2.2 Pod를 외부에서도 접속하게 하는 Service

- 해결 방법 1번: 쿠버네티스 클러스터 통로를 없애버림 (보안취약)
- 해결 방법 2번: Service영역에 배포한 Pod을 연결
    - **NodePort** 에 접속을 통해 Pod를 찾아가는 구조 (Service → Pod이 직접적으로 연결된 구조는 아님)

```bash
kubectl expose pod nginx --type=NodePort --port=80 # 서비스 생성
kubectl get service
kubectl get nodes -o wide
```

- Pod 이 죽게되면?
    - 파드의 한계를 극복하는 Deployment

## 2.3 Pod와 Deployment 차이

- Pod는 죽으면 다시 살릴 수 없었음
- 파드를 여러개 사용하려면 → Deployment 를 사용

- deployment는 pod을 여러개 생성하고 관리하는 단위
- `kubectl run` : pod O, deployment X (test 목적)
- `kubectl create`: pod O, deployment O
- `kubectl apply` + file: pod O, deployment O

```bash
kubectl create deployment deploy-nginx --image=nginx
kubectl get pods -o wide
kubectl scale deployment deploy-nginx --replicas=3
```

- 여러 팟을 생성하려면
    - kubectl create를 통해선 여러번 실행해줘야함
    - kubectl apply + file 을통해 한꺼번에 가능

## 2.4 외부로 노출하는 더 좋은 방법인 LoadBalaner

- Deployment를 외부로 노출하는 방법
    - 기존에 배운 NodePort 사용가능
        - ip를 직접알아서 호출하는데
    - LoadBalancer(service) 가 제일 좋음
        - MetalLB 를 이용
        - 노드포트보다 로드밸런서가 좋은 점
            - 고유의 IP를 만들어 외부로 공개가능
            - 가야될 최적의 경로를 알아서 포워딩함

```bash
kubectl apply -f ~/_Lecture_k8s_starter.kit/ch2/2.4/metallb.yaml
kubectl create deployment chk-hn --image=sysnet4admin/chk-hn
kubectl scale deployment chk-hn --replicas=3
kubectl expose deployment chk-hn --type=LoadBalancer --port=80
kubectl get services # external ip가 타있는 것을 확인

# NodePort
kubectl expose deployment deploy-nginx --type=NodePort --port=80
kubectl get service

```

## 2.5 배포한 것들 삭제하기

### 리뷰

- 컨테이너(애플리케이션)를 모아놓은 것은?
    - Pod
- 파드를 모아 놓은 것은?
    - Deployment
- 쿠버네티스에서 서비스란
    - 외부로 노출하는 문의 역할
    - NodePort, LoadBalancer 타입을 사용함
    - Deployment - LoadBalancer 조합이 좋음

### 삭제

```bash
36  kubectl delete service chk-hn
37  kubectl get service
38  kubectl get pod
39  kubectl delete service deploy-nginx
40  kubectl delete service nginx
41  kubectl get pod
42  kubectl get service
43  kubectl delete deployment chk-hn
44  kubectl delete deployment deploy-nginx
45  kubectl delete pod nginx
kubectl delete -f ~/_Lecture_k8s_starter.kit/ch2/2.4/metallb.yaml
```