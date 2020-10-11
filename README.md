# Assignment 2: Async Programming

2020 KWEB 가을학기 준회원 스터디

과제 2는 Chapter 2에서 스터디한 내용을 이용하여 GitHub의 [nodejs/node 저장소](https://github.com/nodejs/node)의 데이터를 가져와, 분석하여 응답하는 웹 애플리케이션을 제작하는 과제입니다.

### Guidelines

- 프로젝트 폴더를 새로 생성하고, 쉘에서 다음 명령어를 입력하여 새 Node.js 프로젝트를 생성합니다.

```bash
$ npm init -y
```

- npm을 이용하여 `axios` 모듈을 설치합니다.
- [gitignore 생성 사이트](https://www.toptal.com/developers/gitignore)를 이용하여 .gitignore 파일을 생성합니다.
- index.js를 생성하고, 다음 코드를 작성합니다. 그리고 `axios` 모듈을 import합니다.

```jsx
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

- `http.createServer`의 인자로 들어가는 콜백 함수를 수정하여 과제를 수행합니다.
- nodejs/node 저장소의 정보는 다음 링크에 요청을 보내면 응답으로 받을 수 있습니다.
    - [https://api.github.com/repos/nodejs/node](https://api.github.com/repos/nodejs/node)
- `axios`는 JS 애플리케이션에서 비동기적으로 HTTP 요청을 보내고 받을 수 있는 모듈입니다. `axios` 모듈을 이용하여 받은 데이터를 분석하여, 다음의 세 값을 추출합니다.
    - `stargazers_count`
    - `forks_count`
    - `open_issues_count`
- 데이터를 정리하여 다음과 같은 형태로 response 합니다.
    - 과제 수행 시점에 따라 값이 달라질 수 있습니다.

```
Stargazers: 73621
Forks: 18209
Open Issues: 1222
```

- 위의 로직을 처리하는 과정에서 에러가 발생하면 다음과 같은 응답을 하도록 합니다.
    - 상태 코드: 500
    - 응답 내용: Internal error issued.
- Template literal, Destructing Assignment, try...catch 문을 적어도 한번 사용해야 합니다.

### Tip

- `axios` 모듈의 사용 방법은 [API 문서](https://www.npmjs.com/package/axios)를 참고하세요.
- `axios`를 통해 받은 값의 형태를 잘 모를 때나, 디버깅을 해야할 때 `console.log`를 적극적으로 이용하세요.

### Submission

- 제출 기한은 10/18 (일)입니다. 지각 제출 기한은 10/21 (수)입니다.
- 각 분반 오픈채팅방의 톡 게시판에 2주차 과제 제출 게시글에 깃헙 저장소의 링크를 댓글로 남겨주시면 됩니다.
- 깃헙 저장소가 Private이면 열람이 불가능하니 반드시 Public으로 설정해주세요.
- 모르거나 궁금한 것이 있으면 구글에 검색해보는 것도 좋고, 스터디장에게 질문해보시는 것도 좋습니다!
