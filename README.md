# yplabs-todoapp
React Native로 만드는 Todo App
# 사용 예시
https://github.com/herekim/yp-todo-rn/assets/76519867/400d1854-808c-4b0d-a57b-0d20f8c22bf9
# 앱 실행 방법
1. ios, android 모두 Expo Go앱을 설치합니다.
2. https://expo.dev/@herekim/yp-todo 에서 QR코드를 확인합니다.
3. QR코드 인식
    - ios의 경우 기본 카메라로 QR코드를 인식합니다.
    - android의 경우 Expo Go앱의 'Scan QR code'로 QR코드를 인식합니다.
## 위 방법으로 앱이 실행되지 않을 경우
1. ios, android 모두 Expo Go앱을 설치합니다.
2. 해당 레포지토리를 clone합니다.
    ```
    git clone https://github.com/herekim/yp-todo-rn
    ```
3. 해당 폴더로 이동 후 실행합니다.
    ```
    // 폴더 이동
    cd yp-todo-rn
    
    // 패키지 설치
    yarn install
    
    // 앱 실행
    yarn start
    ```
4. 터미널에 나온 QR코드 인식
    - ios의 경우 기본 카메라로 QR코드를 인식합니다.
    - android의 경우 Expo Go앱의 'Scan QR code'로 QR코드를 인식합니다.

# 아키텍처에 구현 방법
## 주요 폴더 구조
<img width="612" alt="스크린샷 2023-06-17 05 17 19" src="https://github.com/herekim/yp-todo-rn/assets/76519867/8fa6591b-9e91-4730-b9a4-b4f005d57302">

## VAC 패턴의 적용
- 컴포넌트 폴더에 대해서 Component.tsx, VConponent.tsx로 비즈니스 로직 컴포넌트와 뷰 컴포넌트를 분리했습니다.
- 공통 컴포넌트를 components폴더에 넣어서 관리했습니다.

## 완료 토글과 노트 상태 기억
- AsyncStorage와 Redux의 전역 상태로 Todo의 Id 기반으로 완료 토글을 기억하도록 했습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/store/slices/todoSlice.ts)
- useCompleted 커스텀 훅 내부에서 dispatch를 이용해 토글을 기억하도록 했고, 이를 통해 상세 페이지와 메인 페이지에서 각자 Todo 완료 토글을 클릭해도 정상적으로 반영되었습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/domains/hooks/useCompleted.ts)
- 추가로 같은 방식으로 useNote 커스텀 훅을 만들어 Todo Id 별 노트 기능을 구현했습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/domains/hooks/useNote.ts)

## Redux를 이용한 전역 상태 관리
- Todo에 대한 비동기 처리, 완료 토글, 노트를 todoSlice에 reducer로 담아 전역 상태 관리했습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/store/slices/todoSlice.ts)
- todoModal, optionModal을 modalslice에 reducer로 담아 전역 상태 관리했습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/store/slices/modalSlice.ts)

## Redux Saga를 이용한 비동기 처리
- services/api/api에서 API_ROOT를 변수화하고, 요청에 따른 API Path를 객체로 묶어서 제공했습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/services/api/api.ts)
- services/api/axios에서 API_ROOT를 import해서 baseURL을 제공하도록 axios 인스턴스를 만들었습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/services/api/axios.ts)
- services/api/todo에서 todo에 대한 CRUD 함수를 만들었습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/services/api/todo.ts)
- todoSlice에서 정의된 reducer를 통해 상태를 관리하고, Redux Saga를 사용하여 비동기 작업을 처리하도록 구성하였습니다. [자세히](https://github.com/herekim/yp-todo-rn/blob/main/app/store/sagas/todoSaga.ts)

# 기능 구현
- [x] Todo Item 작성하기
  - [x] Item 내용이 공백일 경우, Todo 작성 불가능
  - [x] Todo를 작성하는 부분은 모달로 구현
- [x] Todo Item 삭제하기
- [x] Todo Item 수정하기
  - [x] 수정된 Item 내용이 공백일 경우, 수정 완료가 불가능
  - [x] Todo Item 수정과 작성의 모달은 UI 통일성
- [x] Todo Item 토글 방식으로 완료 & 완료 취소
  - [x] 토글된 값 저장, 앱 닫았다가 열어도 토글 상태 저장
  - [x] 완료된 Todo는 수정 불가능
- [x] Todo Item 클릭 시 상세 보기 페이지로 전환
  - [x] 상세 보기 페이지에서 완료 & 완료 수정
  - [x] 상세 보기 페이지에서 수정 가능
- [x] Todo Item의 내용이 5줄 이상 넘어갈 시 ellipsis 표시
- [x] 화면 아래로 당겨 새로 고침
  - [x] 새로 고침 사용 시 최신 10개의 Todo Item 보이도록 구현
- [x] 새로운 Todo Item 생성할 때마다, 만들어진 Todo Item은 가장 상단에 위치
- [x] 무한 스크롤 구현
  - [x] 화면 진입 시 10개의 Todo Item 호출, 화면 하단 도달 시 10개의 추가 Todo Item 호출

# Challenging
## RN & Redux Saga & VAC 패턴을 처음 접하면서 생긴 낯섦
### 문제
- 여러가지 새로운 기술과 개념들을 접하면서 익숙하지 않은 환경에 대한 적응기간이 필요했습니다.
- 특히 React Native의 태그 중 키보드를 제어하는 태그를 사용하면서 어려움을 겪었습니다.
### 해결
- RN, Redux Saga의 경우 필요할 때마다 공식 문서를 통해 선별적으로 개념을 학습하면서 빠르게 구현하는 것에 집중했습니다.
- VAC 패턴의 경우 유즈케이스 학습을 몇 가지 한 뒤, '왜 사용하는가', '장단점이 무엇인가', '어떻게 사용하는가' 세 가지만 빠르게 얻어낸 뒤에 구현에 집중했습니다.
- 적응하는 데에 1.5일 가량 소요됐고, 나머지는 구현에 집중할 수 있었습니다.

## 완료 토글 후 페이지 이동 문제
### 문제
- 처음에 완료 토글에 대해 커스텀 훅만 만들어서 AsyncStorage를 활용해 TodoItem 컴포넌트에서 지역 상태로 가지고 있도록 했습니다.
- 하지만 상세 페이지를 작업하면서 페이지 이동 시 완료 토글을 기억하지 못하는 문제가 있었습니다.
### 해결
- 완료 토글을 Redux를 사용해 전역 상태 관리하도록 수정했습니다.
- 이 개념을 바탕으로 상세 페이지에서 노트를 작성할 수 있도록 기능을 추가했습니다.

## 무한 스크롤 추가 후 Todo의 CRUD가 정상 작동하지 않았던 문제
### 문제
- 무한 스크롤 기능을 추가하면서 TodoList 컴포넌트의 지역 상태로 todos 데이터를 10개씩 자르도록 구현했습니다.
- 이렇게 하니까 Todo에 대한 CRUD가 바로 반영되지 않는 문제가 발생했습니다.
### 해결
- 문제의 원인은 todos를 지역 상태에서 10개씩 자르니까 리렌더링이 필요하지만 발생하지 않아서 생기는 문제였습니다.
- 그래서 무한 스크롤을 위해 10개씩 잘린 todo 데이터를 전역 상태로 관리하도록 수정했습니다.

# 시간이 더 있었다면 진행할 것들
- Jest를 이용한 Saga 테스트 https://github.com/herekim/yp-todo-rn/issues/10#issue-1762304830
- 코드 중복 제거 https://github.com/herekim/yp-todo-rn/issues/11
- 에러 처리 https://github.com/herekim/yp-todo-rn/issues/12
- useCompleted, useNote 코드를 Saga로 이전 https://github.com/herekim/yp-todo-rn/issues/9
- UI/UX 개선 https://github.com/herekim/yp-todo-rn/issues/5 https://github.com/herekim/yp-todo-rn/issues/7 https://github.com/herekim/yp-todo-rn/issues/8
