### node.js가 설치 되어 있다는 가정하에 시작합니다.

##### 빠른 시작을 위해 Transpiler ModuleBundler 등 의 설명은 생략합니다.

#### npx create-react-app [project-name]

    현재 위치에 project-name을 가진 프로젝트를 생성합니다.
    최신버전의 create-react-app을 설치해 프로젝트를 생성하고 제거됩니다.
    글로벌로 설치해 주기적으로 최신버전을 유지 할 필요도 없고 더이상 사용하지 않는 모듈을 남겨 둘 이유도 없습니다.
    `$which create-react-app`을 실행해보면 `which: no create-react-app in`이라며 찾을 수 없다고 나타납니다.
    (npm@5.2.0이상이라면 npx가 포함 되어 있습니다.)

#### 생성 된 프로젝트 둘러보기

    현재 (create-react-app@3.2.0 기준) 생성된 프로젝트를 보면 이렇게 되어 있습니다.
    ⋅⋅⋅project
    ⋅⋅⋅⋅node_modules -프로젝트의 모듈폴더
    ⋅⋅⋅⋅public -페이지 템플릿
    ⋅⋅⋅⋅src
    ⋅⋅⋅⋅⋅⋅⋅⋅index.js -진입점
    ⋅⋅⋅⋅.gitignore
    ⋅⋅⋅⋅package.json -의존성관리 파일
    ⋅⋅⋅⋅README.md
    ⋅⋅⋅⋅yarn.lock

#### build

    `npm run-script build or yarn build`를 실행하세요
    ⋅⋅⋅project
    ⋅⋅⋅⋅build
    프로젝트내에 build라는 새로운 폴더가 생겼습니다.
    이 폴더에는 빌드된 결과물이 들어가게됩니다.

    `yarn global add serve`
    `serve build`
    build폴더의 결과물을 확인해 볼 수 있습니다.

#### 파일 정리

    프로젝트를 생성했으니 필요없는 파일을 정리해봅시다.
    ⋅⋅⋅src
    ⋅⋅⋅*⋅App.css
    ⋅⋅⋅⋅App.js
    ⋅⋅⋅⋅*App.test.js
    ⋅⋅⋅⋅*index.css
    ⋅⋅⋅⋅index.js
    ⋅⋅⋅⋅*logo.svg
    ⋅⋅⋅⋅*serviceWorker.js

    *표시가 된 파일을 모두 삭제해주세요.
