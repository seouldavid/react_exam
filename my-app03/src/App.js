import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      {/* 라우터의 영항을 받지 않고 고정된 컴포넌트 */}
      <Header/>
      <Routes>
          {/* path='/' 는 첫페이지를 의미한다.(홈페이지) */}
          <Route path='/' element={<DayList/>} />
          {/* 동적 라우팅 */}
          <Route path='/day/:day' element={<Day/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
