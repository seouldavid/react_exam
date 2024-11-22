import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NumberCounter from './components/step01/NumberCounter';
import NumberCounter2 from './components/step01/NumberCounter2';
import InputExam from './components/step02/InputExam';
import CountEx from './components/step03/CountEx';
import CheckEx from './components/step03/CheckEx';
import TodoList from './components/step04/TodoList';
import ProfileEx from './components/step05/ProfileEx';
import TempEx from './components/step06/TempEx';
import FormEx from './components/step07/FormEx';
import Currency from './components/homework01/currency';
import EffectTest01 from './components/step08/EffectTest01';
import EffectTest02 from './components/step08/EffectTest02';
import EffectTest03 from './components/step08/EffectTest03';
import EffectTest04 from './components/step08/EffectTest04';
import MemoTest01 from './components/step09/MemoTest01';
import MemoTest02 from './components/step09/MemoTest02';
import MemoTest03 from './components/step09/MemoTest03';
import MemoTest04 from './components/step09/MemoTest04';
import CallBackTest01 from './components/step10/CallBackTest01';
import CallBackTest02 from './components/step10/CallBackTest02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NumberCounter/> */}
    {/* <NumberCounter2/> */}
    {/* <InputExam/> */}
    {/* <CountEx/> */}
    {/* <CheckEx/> */}
    {/* <TodoList/> */}
    {/* <ProfileEx/> */}
    {/* <TempEx/> */}
    {/* <FormEx/> */}
    {/* <Currency/> */}
    {/* <EffectTest02/> */}
    {/* <EffectTest03/> */}
    {/* <EffectTest04/> */}
    {/* <MemoTest01/> */}
    {/* <MemoTest02/> */}
    {/* <MemoTest03/> */}
    <MemoTest04/>
    {/* <CallBackTest01/> */}
    {/* <CallBackTest02/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
