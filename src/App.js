import { useEffect, useState } from 'react';
import './styles/App.css';

function App() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]);
  const [toggleApp, setToggleApp] = useState(false);

  const onClick = ()=>{
    setToggleApp(!toggleApp)
    let copy = category;
    copy.push(title)
    setCategory(copy)
  }
  const onInput = (e)=>{
    setTitle(e.target.value);
  }
  
  return (
    <div className="App">
      <header>
        <nav>
          <input onInput={onInput}></input>
          <button onClick={onClick}>세팅</button>
        </nav>
      </header>
      <div className='content'>
        <div className='application-area'>
          <div className='application-container'>
            {
              category &&
              category.map((data, i)=>{
                return(
                  <div className='application-icon' key={i}>
                    <h1>{data}</h1>
                    <p>하이</p>
                  </div>
                )
              })
            }
            {/* <div className='application-icon'>
              <h1>운동목록</h1>
              <p>하이</p>
            </div> */}
            {/* <div className='application-icon'>
              <h1>운동목록</h1>
              <p>하이</p>
            </div>
            <div className='application-icon'>
              <h1>운동목록</h1>
              <p>하이</p>
            </div>
            <div className='application-icon'>
              <h1>운동목록</h1>
              <p>하이</p>
            </div> */}
          </div>
        </div>
        <div className='specification-area'>
          <div className='specification-container'>
            <div className='specification-icon'>
              <h3>운동목록</h3>
              <p>하이1</p>
            </div>
            <div className='specification-icon'>
              <h3>운동목록</h3>
              <p>하이1</p>
            </div>
            <div className='specification-icon'>
              <h3>운동목록</h3>
              <p>하이1</p>
            </div>
            <div className='specification-icon'>
              <h3>운동목록</h3>
              <p>하이1</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='project-info'>
          <p>이 프로젝트는 오직 개인적인 목적을 위해 진행되었습니다. 자유롭게 수정, 배포해도 상관이 없으며 깃허브 주소만 남겨주세요.</p>
          <p>This project was carried out for personal purposes only. It doesn't matter if you modify or distribute it freely, just leave the address of GitHub.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
