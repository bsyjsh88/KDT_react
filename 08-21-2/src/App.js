import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Select } from 'antd';
import MyComponent from './components/MyComponent';

const App = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };

  const changeVisibleState = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number}/>} 
    </>
  );

  // const [name, setName] = useState('코딩온');
  // const [email, setEmail] = useState('coding@On.com');
  // const option = [
  //   { value: '키딩온', label: '키딩' },
  //   { value: '코딩온', label: '코딩' },
  // ];
  // const emailOption = [
  //   { value: 'ex@dads.csa', label: 'email1' },
  //   { value: 'condig@dasd.cas', label: 'email2' },
  // ];
  // useEffect(() => {
  //   console.log('이름 바뀔때만 실행');
  // }, [name]);

  // useEffect(() => {
  //   console.log('이메일 바뀔때만 실행');
  // }, [email]);
  // return (
  //   <div>
  //     <div>
  //       이름 :{' '}
  //       <Select
  //         style={{ width: 150 }}
  //         defaultValue={option[0]}
  //         onChange={(value) => {
  //           setName(value);
  //         }}
  //         options={option}
  //       />
  //     </div>
  //     <div>
  //       이메일 :{' '}
  //       <Select
  //         style={{ width: 150 }}
  //         defaultValue={emailOption[0]}
  //         onChange={(value) => {
  //           setEmail(value);
  //         }}
  //         options={emailOption}
  //       />
  //     </div>
  //   </div>
  // );
};
export default App;