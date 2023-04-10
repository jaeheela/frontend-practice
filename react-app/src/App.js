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
//컴포넌트 만들기 (사용자 정의 태그) - 반드시 함수명의 첫문자는 대문자로 작성
//props 객체: 컴포넌트(사용자 정의 태그)의 속성값을 가진 객체(Object) - 함수의 매개변수로 받아 사용 가능
//=> 역할 : props 객체의 값이 변경되면 새로운 UI를 만들어 return 해줌
//=> 컴포넌트를 사용하는 외부자를 위한 데이타
//=> props.onChangeMode(); , {props.title}
function Header(props) {
  //console.log('props', props) //props {title: 'WEB', onChangeMode: ƒ}
  //console.log('props', props.title); //props WEB
  //console.log('props', props.onChangeMode); //props () => {alert('Header');}

  //event 객체: 이벤트 상황을 제어할 수 있는 여러가지 정보 및 기능을 가진 객체
  //event.preventDefault() : 해당 태그(a)가 가진 기본 이벤트 동작을 멈추는 메소드 - 클릭이벤트 발생해도 reload되지 않음
  return <header>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
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
  //console.log('props', props) //props {topics: Array(3), onChangeMode: ƒ}
  //console.log('props', props.topics) //props (3) [{…}, {…}, {…}]
  //console.log('props', props.onChangeMode) //props id => {alert(id);}

  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    //태그를 자동으로 생성할 시 리액트가 추적할 근거가 필요하므로 근거로서 각 태그르 구분지을 key prop을 부여해야함
    //event.target : 이벤트를 발생시킨 태그 - <a>
    //event.target.id : 이벤트를 발생시킨 태그의 id 속성값
    lis.push(<li key={t.id}><a id={t.id} href={'/read' + t.id} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>;
}

//state 객체
//=> 역할 : 객체의 값이 변경되면 새로운 UI를 만들어 return 해줌
//=> 컴포넌트를 만드는 내부자를 위한 데이타
function Article(props) {
  //console.log('props', props) //props {title: 'welcome', body: 'hello,WEB'}
  //console.log('props', props.title)
  //console.log('props', props.body)
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}

function App() {

  const mode = "WELCOME"
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ];
  let content = null;

  if (mode === "WELCOME") {
    content = <Article title="welcome" body="hello,WEB"></Article>
  } else if (mode === "READ") {
    content = <Article title="Read" body="hello,Read"></Article>
  }


  //"topics"로 작성하지 않고, {topics}로 작성하면 문자열이 아닌 변수 자체가 전달됨 - 즉 배열객체로 사용 가능
  return (
    <div>
      <Header title="WEB" onChangeMode={() => { alert('Header') }}></Header>
      <Nav topics={topics} onChangeMode={(id) => { alert(id) }}></Nav>
      {/* <Article title="welcome" body="hello,WEB"></Article> */}
      {content}
    </div>
  );
}
export default App;
