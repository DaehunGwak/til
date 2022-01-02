---
id: 1-env
title: 1. 쿠버네티스 환경 구성
---

[노션 노트](https://first-diadem-378.notion.site/1-5fcb01d9d68d40b7a9847b5a04326c14)

## 1.1. 쿠버네티스 란

- **컨테이너들을 관리해준다 (container ochestration)**
- 도커가 뭔가요: 컨테이너 환경
- 쿠버네티스를 배우기 위해 도커를 먼저 알아야 하나요
    - 꼭 아님
- 쿠버네티스는 누가 만들었고 관리하나요
    - Google Borg 시스템 → CLOUD NATIVE COMPUTING FOUNDATION (CNC) 에 기부
    - vendor-neutral 특성을 가짐
- 쿠버네티스 배포 종류
    - 관리형 쿠버네티스 (EKS, AKS, GKE 등)
        - 사용자가 특별히 관리할 부분이 없음
    - 설치형 쿠버네티스 (Rancher, Openshift)
        - 온프레미스 환경에서 설치해 쓸수 있는 설치형 쿠버네티스
    - 구성형 쿠버네티스 (kops, kubespray, krib, `kubeadm` → 우리가 사용)
        - 자유롭게 구성하고 싶거나, 교육에 가깝게 알고 싶으면 구성형이 적합

## 1.2. 코드로 쉽게 구성하는 쿠버네티스 랩 환경

- 코드로 설치하는 쿠버네티스 랩 환경
    - 웹에서 제공하는 쿠버네티스 환경: 플레이 쿠버네티스, 쿠버네티스 플레이그라운드
        → 자유로운 사용 X
    - 어떻게 코드로 설치하나요
        - Vagrant → code를 VM 에 전송 → 자동으로 쿠버네티스 노드를 구성해서 띄움

버주얼 박스 환경에 마스터 노드 (m-k8s) 와 워커 노드 3개 (m-k8s) 가 구성됨

- 로컬 필요한 것들
    - VAGRANT
    - Virtual Box (CentOS 관리용)
    - 미리 구성해놓으신 코드

```bash
# 강의 예제 ./ch1/1.2 로 이동 후
vagrant up
```

- m-k8s-1.20 정보 및 커맨드

```bash
id: root
pw: vagrant
kubectl get nodes
```

### trouble- shooting

**첫 오류 NS_ERROR_FAILURE**

[솔루션]

1. virtual box 지우기
    1. [https://nektony.com/how-to/uninstall-virtualbox-on-mac](https://nektony.com/how-to/uninstall-virtualbox-on-mac)
2. virtual box 설치 (이때 버전 6.1.30)
3. 실행 권한 부여

**두번째 The IP address configure for the host-only network is not within the allowed ranges.**

- VirtualBox 6.1.28 부터 네트워크 설정 관련 업데이트가 진행됨

**솔루션**

- 6.1.26 으로 다운 그레이드
    - [https://discourse.roots.io/t/the-ip-address-configured-for-the-host-only-network-is-not-within-the-allowed-ranges/21679](https://discourse.roots.io/t/the-ip-address-configured-for-the-host-only-network-is-not-within-the-allowed-ranges/21679)
    - [https://www.inflearn.com/questions/326139](https://www.inflearn.com/questions/326139)

## 1.3. 쿠버네티스 랩을 쉽게 접근하기 위한 터미널 구성

- termius 로 진행

