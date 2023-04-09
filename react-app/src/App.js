import logo from './logo.svg';
import './App.css';

/*
//방법1.
function App() {
  return (
    <div>
      <header>
        <h1><a href='/'>WEB</a></h1>
      </header>
      <nav>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
          <li><a href='/read/3'>js</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        hello, WEB
      </article>
    </div>
  );
}
*/

//방법2.
//컴포넌트 만들기 (사용자 정의 태그)
//=>규칙1 : 반드시 함수명의 첫문자는 대문자로 작성
//=>규칙2 : 컴포넌트 내 props(사용자 정의 속성값)는 object 객체로 전달되므로 매개변수로 받아 사용 가능
function Header(props) {
  //console.log('props', props, props.title); //props {title: 'REACT'} REACT
  return <header>
    <h1><a href='/'>{props.title}</a></h1>
  </header>;
}

/*
function Nav() {
  return <nav>
    <ol>
      <li><a href='/read/1'>html</a></li>
      <li><a href='/read/2'>css</a></li>
      <li><a href='/read/3'>js</a></li>
    </ol>
  </nav>;
}
*/
/*
function Nav(props) {
  const lis = [
    <li><a href='/read/1'>html</a></li>,
    <li><a href='/read/2'>css</a></li>,
    <li><a href='/read/3'>js</a></li>
  ]
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>;
}
*/
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    //태그를 자동으로 생성할 시 리액트가 추적할 근거가 필요하므로 근거로서 각 태그르 구분지을 key prop을 부여해야함
    lis.push(<li key={t.id}><a href={'/read' + t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>;
}

function Article(props) {
  //console.log('props', props, props.title, props.body); //props {title: 'welcome', body: 'hello,WEB'} welcome hello,WEB
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ];

  //"topics"로 작성하지 않고, {topics}로 작성하면 문자열이 아닌 변수 자체가 전달됨 - 즉 배열객체로 사용 가능
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="welcome" body="hello,WEB"></Article>
      <Article title="Hi" body="Hi,React"></Article>
    </div>
  );
}
export default App;
