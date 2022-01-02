---
id: 999-more
title: 999. 보강수업
---

바로 필요했던, 혹은 호기심있어서 보게된 수업들을 정리

## 8.004 관리형 쿠버네티스 (EKS, AKS, GKE) 에서 배포하는 경우 차이점

- 관리형 쿠버네티스와 온프레미스를 살펴보기
- EKS, AKS, GKE 에서는?
    - **관리환경에서는 로드밸런서가 내부적으로 미리 준비되어 있음**
    - `k expose deployment chk-hn --type=LoadBalancer --port=80`
    - EKS
        - deployment expose 하고 `k get svc` 로 external-ip 를 얻어냄
        - 그런데 해당 url로 접속이 안되서 확인 중이였음
        - external-ip 가 직접적으로 반영되는데 2분정도 소요되었음
    - AKS
        - 여기서도 external-ip 가 시간이 소요됨
    - GKE
        - 브라우저 캐시 실수 있었음
    - github law 주소를 넣어서 `k apply -f <yaml law url>` 로 적용 가능

## 8.007 숨겨진 기능 및 개선 기능

- 숨겨진 기능 - 커맨드 히스토리 따로 남겨두심
    - `cat ~/_Lecture_k8s_starter.kit/ch4/4.1/.cmd`
- 저장소(Repo) 최근 싱크 맞추기
    - `_Lecture_k8s_starter.kit/ch8/007/rerepo-k8s-starter-builder.sh` 실행

## 8.008 그림으로 배우는 쿠버네티스 랩과 관리형 쿠버네티스(GKE)와 비교

- metric server?
- dashboard?
- storageclass? nfs-provisioner?
- ing? ingress controller?
- 관리형 쿠버네티스는 이미 세팅되어 있는 경우가 많음 (각 서비스가 지향하는 점이 조금식 달라 디테일한 부분이 많이 다를 수 있음)
- 그림으로 배우는 쿠버네티스 랩 환경에서는 이를 구현하거나 지원되는 플러그인을 사용하는 경우가 많음
    - 따라서 이미 많은 것을 제공하는 관리형 쿠버네티스보다 더많은 세팅작업을 진행하게 될 예정

## 8.999 향후 강의 계획 및 CKA 준비 랩 환경 제공

- 쿠버네티스 공홈 스터디
- 컨테이너 인프라 환경 구축을 위한 쿠버네티스/도커 책 정주행
- 인프런 - 공인 쿠버네티스 관리자 (CKA) 과정
    - 멀티컨텍스트를 다루기엔 지금 랩에선 힘듦
    - sysnet4admin/IaC/U 에 환경에 있음 (같은 vagrant)
