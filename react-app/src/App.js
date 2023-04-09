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
//컴포넌트 만들어 사용하기 (사용자 정의 태그)
//=>규칙 : 반드시 함수명의 첫문자는 대문자로 작성
function Header() {
  return <header>
    <h1><a href='/'>WEB</a></h1>
  </header>;
}
function Nav() {
  return <nav>
    <ol>
      <li><a href='/read/1'>html</a></li>
      <li><a href='/read/2'>css</a></li>
      <li><a href='/read/3'>js</a></li>
    </ol>
  </nav>;
}
function Article() {
  return <article>
    <h2>Welcome</h2>
    hello, WEB
  </article>;
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
export default App;
