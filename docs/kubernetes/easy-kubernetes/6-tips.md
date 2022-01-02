---
id: 6-tips
title: 6. 쿠버네티스 tips
---

## 6.1 kubectl 쉽게 쓰는 법

- bash-completion
    - vagrant 를 통해 `~/.bashrc` 가 `etc/bash_completion.d/kubectl` 을 로딩하도록 설정 되어 있음
    - alias 로 지정할 수 있음

```bash
# master node
cat ~/_Lecture_k8s_starter.kit/ch1/1.2/k8s-min-5GiB/master_node.sh

#########
# 자동 설정 그 일부
# install bash-completion for kubectl 
yum install bash-completion -y 

# kubectl completion on bash-completion dir
kubectl completion bash >/etc/bash_completion.d/kubectl

# alias kubectl to k 
echo 'alias k=kubectl' >> ~/.bashrc
echo 'complete -F __start_kubectl k' >> ~/.bashrc
#########
```

## 6.2 쿠버네티스 버전 업그레이드

- 업그레이드 순서 (랩환경, 실제 X)
    1. 업그레이드 계획 수립
    2. kubeadm 업그레이드
    3. kubelet 업그레이드
    4. 업그레이드 완료 확인

```bash
kubectl get nodes # 각 노드의 버전 확인
kubeadm upgrade plan # 업그레이드 계획 수립 (가능한지 확인)
yum list kubeadm --showduplicates # 업그레이드 할 수 있는 패키지 확인

# kubeadm 업그레이드 - only 마스터 노드
yum upgrade -y kubeadm-1.20.13
kubeadm upgrade apply 1.20.13

# version 확인
kubeadm version
kubectl version
kubelet --version # 안바뀌어 있음

# kubelet 업그레이드 - 마스터/워커 노드 전부
yum upgrade kubelet-1.20.13 -y
systemctl restart kubelet
systemctl daemon-reload

# 마스터 노드
k get nodes # 버전 업그레이드 확인 가능
```

## 6.3 오브젝트 예약 단축어

- pod, deployment 등 에 단축어가 있음
- 파드 예약 단축어
    - pod
    - pods
    - **po**
- 디플로이먼트 예약 단축어
    - deployment
    - deployments
    - **deploy**
- 그밖에
    - nodes → **no**
    - namespaces → **ns**
    - services → **svc**
