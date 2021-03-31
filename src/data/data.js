import yogiyong_gif_1 from '../gif/yogiyong/yogiyong_1.gif';
import yogiyong_gif_2 from '../gif/yogiyong/yogiyong_2.gif';
import yogiyong_gif_3 from '../gif/yogiyong/yogiyong_3.gif';
import class101_creator_gif_1 from '../gif/class101/class101_creator_1.gif';
import class101_creator_gif_2 from '../gif/class101/class101_creator_2.gif';
import class101_user_gif_1 from '../gif/class101/class101_user_1.gif';
import westagram_gif_1 from '../gif/westagram/westagram_gif_1.gif';
import westagram_gif_2 from '../gif/westagram/westagram_gif_2.gif';
import westagram_gif_3 from '../gif/westagram/westagram_gif_3.gif';
import ex_admin_gif_1 from '../gif/ex-admin/ex_admin_gif_1.gif';
import ex_admin_gif_2 from '../gif/ex-admin/ex_admin_gif_2.gif';
import ex_admin_gif_3 from '../gif/ex-admin/ex_admin_gif_3.gif';
import ex_admin_gif_4 from '../gif/ex-admin/ex_admin_gif_4.gif';
import algospot_1 from '../image/algospot_1.PNG';
import algospot_2 from '../image/algospot_2.PNG';
import algospot_3 from '../image/algospot_3.PNG';
import algospot_4 from '../image/algospot_4.PNG';
import codeit_1 from '../image/codeit_1.PNG';
import codeit_2 from '../image/codeit_2.PNG';
import nomadcoder_1 from '../image/nomadcoder_1.PNG';
import nomadcoder_2 from '../image/nomadcoder_2.PNG';

export const projectsData = [
  {
    title: 'EX Admin Dashboard',
    description:
      '클래스101에서 백엔드 개발자로 인턴쉽을 진행하며 EX팀 어드민 대시보드를 개발했습니다. 백엔드 개발자 2명, 프론트엔드 개발자 1명과 협업하여 1개월동안 개발했습니다.',
    additionalDescription:
      '이 대시보드에는 서로 다른 부서의 직원들이 친해질 수 있는 사내 친목조 생성 기능과 사내 비품(노트북, 모니터 등) 관리 기능이 있습니다.',
    whatIHaveDone: [
      '제품 기획단계부터 참여',
      'Scrum 진행(주별 스프린트 미팅, 일별 스탠드업 미팅) with Trello',
      '데이터베이스 스키마 디자인 및 ERD 작성',
      'Nodejs API 설계 및 Restful API 구현',
      '클래스101 사내 친목조 생성 알고리즘 및 API 구현',
      '클래스101 사내 비품 아이템(노트북, 모니터 등) CRUD API 구현',
      '쿼리스트링에 따른 총 비품 아이템 필터링, 정렬, 페이징 구현',
      'AWS EC2 배포, AWS DocumentDB에 DB 구축',
      'API 문서 작성',
    ],
    skills: ['Javascript', 'Node.js', 'MongoDB', 'Mongoose', 'AWS'],
    gifs: [ex_admin_gif_1, ex_admin_gif_2, ex_admin_gif_3, ex_admin_gif_4],
    date: '19.11.25 ~ 19.12.20',
    additionalSources: [
      {
        title: 'EX ADMIN 대시보드 GITHUB REPO',
        link: 'https://github.com/saegeullee/groupmeal',
      },
      {
        title: 'EX ADMIN 대시보드 Full Video',
        link: 'https://www.youtube.com/watch?v=mdrhlrZpZHo&t=205s',
      },
    ],
  },
  {
    title: 'Wecode101',
    description:
      '취미 구매,판매 플랫폼 클래스101 클론 프로젝트입니다. 백엔드 개발자 2명, 프론트엔드 개발자 3명과 협업하여 2주동안 개발했습니다.',
    skills: ['Javascript', 'Node.js', 'MongoDB', 'Mongoose'],
    gifs: [class101_creator_gif_1, class101_creator_gif_2, class101_user_gif_1],
    whatIHaveDoneSummary:
      '이 프로젝트에는 두 개의 클라이언트가 있습니다. 웹(리액트)과 앱(리액트네이티브)입니다. 웹은 크리에이터 관점에서 자신의 클래스를 개설하는 기능을 개발하였고 앱은 일반 사용자 관점에서 클래스101 플랫폼에 등록된 클래스들을 보고 구매하는 기능을 개발하였습니다. 저는 전자의 백엔드를 개발했습니다. ',
    whatIHaveDone: [
      'Scrum 진행(주별 스프린트 미팅, 일별 스탠드업 미팅) with Trello',
      '데이터베이스 스키마 디자인 및 ERD 작성',
      'Nodejs API 설계 및 Restful API 구현',
      'Bcrypt 사용하여 사용자 PW 암호화, JWT를 사용하여 사용자 인증,인가 구현',
      '클래스 CRUD API 구현',
      '크리에이터 프로필 CRUD API 구현',
      'Multer을 사용하여 이미지 저장 구현',
    ],
    date: '19.11.11 ~ 19.11.22',
    additionalSources: [
      {
        title: '위코드101 백엔드 GITHUB REPO',
        link: 'https://github.com/wecode-bootcamp-korea/class101-backend',
      },
      {
        title: '위코드101 프로젝트 후기',
        link:
          'https://saegeullee.github.io/category/project/2nd-group-project-review',
      },
      {
        title: '요기용 프로젝트 Full Video(웹)',
        link: 'https://www.youtube.com/watch?v=4tiTjufaJg8',
      },
      {
        title: '요기용 프로젝트 Full Video(앱)',
        link: 'https://www.youtube.com/watch?v=L7FsHvjPA-c',
      },
    ],
  },
  {
    title: 'Yogiyong',
    description:
      '온라인 음식 배달 서비스 요기요 클론 프로젝트입니다. 백엔드 개발자 2명, 프론트엔드 개발자 3명과 협업하여 2주동안 개발했습니다.',
    skills: [
      'Python',
      'Django',
      'Mysql',
      'React',
      'Redux',
      'AWS',
      'Javascript',
      'Html',
      'Css',
    ],
    gifs: [yogiyong_gif_1, yogiyong_gif_2, yogiyong_gif_3],
    date: '19.10.28 ~ 19.11.8',
    whatIHaveDoneSummary:
      '이 프로젝트에서 저는 백엔드를 위주로 개발하였고 프론트엔드 일부분을 개발했습니다.',
    whatIHaveDoneForBackend: [
      'Scrum 진행(주별 스프린트 미팅, 일별 스탠드업 미팅) with Trello',
      '요기요 모델 설계 및 ERD 작성',
      'RESTFUL API 설계 및 구현',
      '레스토랑 관련 모델 구현',
      '요기요 사이트 크롤링 구현 및 DB 구축',
      '모든 식당 카테고리 정보 GET 엔드포인트 구현',
      '식당 카테고리별 식당 목록 GET 엔드포인트 구현(정렬 및 페이징 포함)',
      '식당 검색 기능 엔드포인트 구현(페이징 포함)',
    ],
    whatIHaveDoneForFrontend: [
      'Google Maps API를 사용하여 구글 지도에 현재 가게목록의 가게위치 보여주기 구현',
      '주문 완료시 나오는 땡큐페이지 UI 구현',
      '사용자의 주문 내역 페이지 UI 구현',
      '리덕스를 사용하여 음식 장바구니 추가,제거,리셋 및 주문 로직 구현',
    ],
    additionalSources: [
      {
        title: '요기용 백엔드 GITHUB REPO',
        link: 'https://github.com/wecode-bootcamp-korea/yogiyong-backend',
      },
      {
        title: '요기용 프론트엔드 GITHUB REPO',
        link: 'https://github.com/wecode-bootcamp-korea/yogiyong-frontend',
      },
      {
        title: '요기용 프로젝트 후기',
        link:
          'https://saegeullee.github.io/category/project/1st-group-project-review',
      },
      {
        title: '요기용 프로젝트 Full Video',
        link: 'https://www.youtube.com/watch?v=ntokAbeasu8',
      },
    ],
  },
  {
    title: 'Instagram',
    description:
      '인스타그램 클론 프로젝트입니다. 프론트엔드 UI를 개발했습니다.',
    skills: ['Javascript', 'React', 'Html', 'Css'],
    gifs: [westagram_gif_1, westagram_gif_2, westagram_gif_3],
    date: '19.10.14 ~ 19.10.24',
    whatIHaveDone: ['프론트엔드 UI를 개발했습니다.'],
    additionalSources: [
      {
        title: 'Instagram GITHUB REPO',
        link: 'https://github.com/saegeullee/Instagram_react',
      },
    ],
  },
];

export const intro_title_1 = '안녕하세요. 저는 정금담입니다.';
export const intro_title_2 = '';

export const intro_details_1 = '';

export const intro_details_2 = '';

export const wecode_url = '';

export const overall_experiences = [
  {
    title: '한국it교육원',
    date: '2020. 10. - 2021. 4.',
    details:
      '백엔드 과정을 수료했습니다. 개인별 게시판 프로젝트를 진행하였습니다.',
  },
  {
    title: '코드잇',
    date: '2020. 3. - 2020. 12.',
    details:
      '온라인 교육 사이트 코드잇에서 컴퓨터 기초 지식을 공부했습니다. 컴퓨터 개론, 파이썬기초, html, css, javacript기초, 알고리즘, 자료 구조, 유닉스 커맨드라인 기초, git, sql 기초 등을 익혔습니다.',
  },
];

export const skills_overview = '알고리즘, 화면구현, 프로그래밍 지식';

export const skills = [
  {
    title: '알고리즘',
    details: [
      '알고리즘에 대한 지식을 넓히기 위해서 algospot에 있는 코딩테스트를 수행했습니다.',
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
      'nomadcoder에서 React, React Hooks, noSql 데이터베이스인 Firebase 등을 익혔습니다.',
    ],
    images: [nomadcoder_1, nomadcoder_2],
  },
];
