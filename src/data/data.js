import algospot_1 from '../image/algospot_1.PNG';
import algospot_2 from '../image/algospot_2.PNG';
import algospot_3 from '../image/algospot_3.PNG';
import algospot_4 from '../image/algospot_4.PNG';
import codeit_1 from '../image/codeit_1.PNG';
import codeit_2 from '../image/codeit_2.PNG';
import nomadcoder_1 from '../image/nomadcoder_1.PNG';
import nomadcoder_2 from '../image/nomadcoder_2.PNG';
import nomadcoder_3 from '../image/nomadcoder_3.PNG';
import nomadcoder_4 from '../image/nomadcoder_4.PNG';

export const projectsData = [
  {
    title: '빈티지 옷가게 지도',
    description:
      '대구 지역의 빈티지 옷가게 정보 사이트 프로젝트입니다. 개인 프로젝트입니다.',
    skills: ['Javascript', 'Html', 'Css', 'Java', 'Jsp', 'Oracle', 'MyBatis'],
    whatIHaveDone: [
      '카카오지도 api 활용',
      '지도에 현재 위치 표시',
      '지도에 가게 위치 마커와 오버레이 표시',
      '오버레이에는 가게의 온라인샵과 인스타그램 정보 표시',
      '현재 위치와 db에 저장된 가게 좌표를 비교하여 기준 거리 이내의 가게정보만 db에서 불러옴',
      'instagram image parsing api를 이용하여 해당 가게 색션에 사진 구현',
      '색션의 제목을 누르면 해당 가게의 지도로 이동, 지도의 마커를 누르면 해당 색션으로 이동',
      '가게 정보에 대한 CRUD',
    ],
    date: '21.02. ~ 21.03.',
    additionalSources: [
      {
        title: '빈티지 옷가게 지도 Full Video',
        link: 'https://youtu.be/a6tAnmqupHA',
      },
      {
        title: '빈티지 옷가게 지도 github',
        link: 'https://github.com/jgd0423/secondhandClothingMap',
      },
    ],
  },
  {
    title: '관리자 게시판',
    description:
      '교육기관에서 관리자 게시판을 개발했습니다. 개인 프로젝트입니다.',
    additionalDescription:
      'Java, Jsp, Ajax, MyBatis, Oracle을 이용해서 개발했습니다.',
    whatIHaveDone: [
      '게시판별로 검색, 페이징 구현',
      '회원관리 : 아이디 중복체크, daum address api를 이용한 가입',
      '설문조사 : 기간별 검색, 검색어를 통한 검색, 설문조사 결과를 그래프로 구현',
      '문제은행 : 페이지별로 제출 답안을 한번에 저장',
      '자유게시판 : 공지와 답글이 구현된 계층형 게시판, 게시글 보기 내에 댓글',
      '코딩게시판 : 쿼리스트링과 DB 테이블의 게시판 구분 column을 이용해 같은 형식의 게시판 구현',
      'Mall(상품관리) : 이미지 업로드, 장바구니 테이블과의 조인을 통한 상품별 장바구니 수 확인',
      'Mall(쇼핑몰) : 세션을 이용한 비회원 장바구니',
      'Cart Chart : google chart api를 이용, 회원카트와 비회원카트에 담긴 상품 현황',
      'Email : 회원에게 메일 발송',
      '로그인, 로그아웃, 개인정보 수정, 탈퇴 : 세션을 이용한 개인정보 수정, 탈퇴',
    ],
    skills: ['Java', 'Jsp', 'Ajax', 'Oracle', 'MyBatis'],
    date: '21.01. ~ 21.03.',
    additionalSources: [
      {
        title: '관리자 게시판 Full Video',
        link: 'https://youtu.be/pVTNS6KfFnE',
      },
      {
        title: '관리자 게시판 github',
        link: 'https://github.com/jgd0423/workspace/tree/main/jspMybatis',
      },
    ],
  },
  {
    title: '트위터 클론코딩',
    description: 'React Hooks와 Firebase로 구현한 CRUD페이지입니다.',
    whatIHaveDone: [
      'React Hooks를 이용한 화면 구현',
      'Firebase 제공 api를 이용해 google, github 계정을 이용한 로그인 구현',
      '이미지, 글 업로드',
      '프로필 수정',
      '로그인 계정이 작성한 글 수정, 삭제',
    ],
    skills: ['Javascript', 'React', 'React Hooks', 'Firebase'],
    date: '21.02.19 ~ 21.03.03',
    additionalSources: [
      {
        title: '트위터 클론코딩 배포 페이지',
        link: 'https://jgd0423.github.io/nwitter/#/',
      },
      {
        title: '트위터 클론코딩 github',
        link: 'https://github.com/jgd0423/nwitter',
      },
    ],
  },
];

export const intro_title_1 = '안녕하세요. 저는 정금담입니다.';
export const intro_title_2 = '';

export const intro_details_1 =
  '개발을 하며 작은 성취를 지속적으로 이어가는 것이 즐겁습니다. 배움이 많은 곳에 취직해 즐거움을 이어가고 싶습니다.';

export const intro_details_2 = '';

export const wecode_url = '';

export const overall_experiences = [
  {
    title: '한국it교육원',
    date: '2020. 10. - 2021. 4.',
    details:
      'Java Jsp Spring Oracle 백엔드 과정을 수료했습니다. 개인별 게시판 프로젝트를 진행하였습니다.',
  },
  {
    title: '코드잇',
    date: '2020. 3. - 2020. 12.',
    details:
      '온라인 교육 사이트 코드잇에서 코딩 기초 지식을 공부했습니다. 컴퓨터 개론, 파이썬기초, html, css, javacript기초, 알고리즘, 자료 구조, 유닉스 커맨드라인 기초, git, sql 기초 등을 익혔습니다.',
  },
];

export const skills_overview = '알고리즘, 화면구현, 프로그래밍 지식';

export const skills = [
  {
    title: '알고리즘',
    details: [
      'algospot에 있는 코딩테스트를 수행했습니다.',
      '「프로그래밍 대회에서 배우는 알고리즘 문제 해결 전략」을 공부했습니다.',
    ],
    images: [algospot_1, algospot_2, algospot_3, algospot_4],
  },
  {
    title: '프로그래밍 지식',
    details: ['codeit.kr에서 아래의 과목을 이수했습니다.'],
    images: [codeit_1, codeit_2],
  },
  {
    title: '화면구현',
    details: [
      'nomadcoder에서 Javascript(es6), React, React Hooks, noSql Firebase 등을 익혔습니다.',
    ],
    images: [nomadcoder_1, nomadcoder_2, nomadcoder_3, nomadcoder_4],
  },
];
