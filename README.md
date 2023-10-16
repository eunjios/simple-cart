# 🛒 장바구니 만들기

![React](https://img.shields.io/badge/React-424242?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-424242?style=flat-square&logo=JavaScript&logoColor=)
![CSS](https://img.shields.io/badge/👩‍🎤%20Emotion-424242?style=flat-square)

## 👀 About

> context와 useState를 적절히 활용하여 state를 관리하는 프로젝트

<img width="512" alt="preview" src="https://github.com/eunjios/simple-cart/assets/77034159/117ae09f-bd4b-457f-940d-faeb864bb524">
<img width="512" alt="preview" src="https://github.com/eunjios/simple-cart/assets/77034159/f69ebb46-ebef-4201-a21b-5bf558e6b6a3">
<img width="512" alt="preview" src="https://github.com/eunjios/simple-cart/assets/77034159/dcb279ea-90dc-4e79-8229-5342a79b01c9">

### Goals

1. useState, useEffect, useContext 등 다양한 훅을 사용한 상태 관리
2. 이해하기 쉬운 디렉토리 구조 설계
3. 스타일링과 렌더링 로직 적절히 분리하기
4. 재사용성을 고려한 코드

### Built with

- React
- JavaScript
- Emotion
- React Icons
- yarn

## 🔍 Features

## 🚀 Troubleshooting

### 1. 이벤트 중복 발생 이슈

**문제 상황**

- submit button이 아님에도 submitHandler가 작동하는 문제 발생

**문제 해결**

- props로 받은 함수의 포인터를 그대로 사용하는 것이 아닌 컴포넌트에 새로운 핸들러 함수를 정의하고 event를 인자로 받아서 해결

### 2. 다음 주소 API 관련 이슈

**문제 상황**

- `<DaumPostcode />`를 조건부 렌더링 할 때 state가 false로 바뀔 때마다 다음 오류 발생

  > Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.

**문제 해결**

- `<DaumPostcode />`를 `<div>`로 감싸서 해결

## 👩🏻‍💻 Todos

- [x] 컴포넌트 구현
- [x] 컨텍스트 및 리듀서 구현
- [x] 상품 장바구니에 추가하는 기능
- [ ] 상품 장바구니 비우는 기능
- [x] 상품 장바구니에서 수정하는 기능
- [x] input 값 amount로 설정
- [x] 배송지 form 추가
- [x] 주문 정보 HTTP로 보내기
- [x] 다음 주소 API 사용
- [ ] 유효성 검사 UI/UX 개선
- [ ] badge 스타일 개선
