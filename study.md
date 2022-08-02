# nextjs 교육용 프로젝트
> 설명 계획 

### 1. next.js를 사용해야하는이유
   - seo,ssr,typeScript까지 기능을 제공해주는 react용 프레임워크
   - 리액트 공식문서에서도 next.js 권유 [https://ko.reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains](https://ko.reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains)
   - 제작사 [vercel](https://vercel.com/)에서 개발 가이드 문서 제공, ci/cd 제공, github와 연동 되어 쉽게 운영 배포 가능.
   - node.js와 병합되어져 있으므로 FullStack 개발을 가능하게 한다.

### 2. next.js 프로젝트 생성하기.
```
npx create-next-app@latest [프로젝트명]
```

### 3. next.js 구조 설명.
- node_modules : 모듈들 lib 폴더
- pages : 페이지를 담당하는 컴포넌트들(폴더구조로 url결정)
  - router가 필요없습니다. nextjs에서 자체적으로 pages 아래 파일들을 인식하여 적용해줍니다.
  - 예 
  ``` 
  pages/index.js -> https://yourdomain/
  pages/test/index.js -> https://yourdomain/test
  pages/test/subtest.js -> https://yourdomain/test/subtest
  pages/test/[noticeId].js -> https://yourdomain/test/1 //id라는 변수에 1을 넘겨줌 pathvariable

  ``` 
  - pages/_app.js 최초 실행되는 파일
  - pages/_document.js meta Tag의 정의 및 모든페이지의 구조를 만듬.
  - pages/_error.js 에러 관리
  - pages/404.js 404에러 발생시 표시
  - pages/500.js 500에러 발생시 표시
- pages/api : backend영역으로 사용됨.
- public : 이미지, 다국어용파일, 파피콘, robots.txt, 등 정적 파일들을 관리합니다.
- components : 기본 폴더는 없지만 보편적으로 컴포넌트를 모아두는 폴더.
- .next : 빌드결과 파일들 출력
- next.config.js : next에 대한 설정  
  - router 관리(예 : 특정 url에 대해 redirect가 필요한경우 )
  - headers,proxy 관리 : cors 대응등등
  - 다국어 설정
  - 더 많은 기능들이 있음
- styles : 스타일 관련 파일모음


### 4. HelloWolrd찍기

### 5. nextjs의 랜더링들 [Vercel공식문서 DataFetching](https://nextjs.org/docs/basic-features/data-fetching/overview)
- getServerSideProps[요청시] : 해당 페이지가 요청될 때 마다 재요청, 느리지만 동적 구성.
- getStaticProps[빌드시] : 페이지콘텐츠가 외부 데이터와 연동될 경우, preRendering
- getStaticPaths : 페이지 경로가 외부 데이터로 연동 pages/posts/[noticeId].js 같은 id값마다 랜더링

### 6. 리스트형식으로 출력해보기
- 목록 : http://b-tour.kr/block-tour-front/api/cmmn/noticelist
- 상세 : http://b-tour.kr/block-tour-front/api/cmmn/noticeview?noticeId=N12

### 기타
> 경우에 따라 react와 운영 방법이 다름.
> backend를 지원해야하는 nextjs 프로젝트는 백엔드처럼 실시간 구동되고있어야하므로 정적파일들로만 배포가 어렵다.
> react의 경우는 정적파일들로만 배포가 가능하여 aws s3에서 구동이 가능하다.
> backend 지원을 위해 배포방법은 다양하나 vercel에서 배포하는게 손쉽다.
> 다른방법으로는 pm2이용하여 서버 구성하여 사용합니다. 다른방법도 존재하나 사용해보지 못함.


### 주의사항
> nextjs는 dev환경에서는 정상동작을하나 실제 build 단계에서 오류가 날수있으니. 항상 push전 build를 해봐야한다.