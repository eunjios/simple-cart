# 🛒 장바구니 만들기

![React](https://img.shields.io/badge/React-424242?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-424242?style=flat-square&logo=JavaScript&logoColor=)
![CSS](https://img.shields.io/badge/👩‍🎤%20Emotion-424242?style=flat-square)

## 👀 About

> context와 useState를 적절히 활용하여 state를 관리하는 프로젝트

<img width="512" alt="preview" src="https://github.com/eunjios/simple-cart/assets/77034159/117ae09f-bd4b-457f-940d-faeb864bb524">
<img width="512" alt="preview" src="https://github.com/eunjios/simple-cart/assets/77034159/9ca728a4-a6cc-4885-915f-a5365d7670a5">

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

## 👩🏻‍💻 Todos

- [x] 컴포넌트 구현
- [x] 컨텍스트 및 리듀서 구현
- [x] 상품 장바구니에 추가하는 기능
- [ ] 상품 장바구니에서 삭제하는 기능
- [ ] 상품 장바구니에서 수정하는 기능
- [ ] alert 창 추가
