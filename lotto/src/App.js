import './App.css';
import { useState, useEffect } from 'react';
import LottoComponent from './components/LottoComponent';

const App = () => {
  // 번호를 담을 그릇을 준비해요. 처음엔 비어 있어요.
  const [number, setNumber] = useState([]);
  // 화면에 보여줄지 말지를 정하는 스위치를 준비해요. 처음엔 켜져 있어요.
  const [visible, setVisible] = useState(true);

  // 로또 번호를 만듦.
  const generateLottoNumbers = () => {
    const numbers = new Set(); // 번호를 담음
    while (numbers.size < 6) { // 상자에 6개의 번호가 들어갈 때까지 반복
      const randomNum = Math.floor(Math.random() * 45) + 1; // 1부터 45까지의 숫자 중 하나를 뽑아요.
      numbers.add(randomNum); // 뽑은 번호를 상자에 넣어요.
    }
    return Array.from(numbers).sort((a, b) => a - b); // 상자에 있는 번호들을 작은 순서대로 정리해요.
  };

  // 'Start' 버튼을 누르면 새로운 로또 번호를 만들어요.
  const changeNumberState = () => {
    setNumber(generateLottoNumbers()); // 만들어진 번호들을 저장해요.
  };

  // 'Stop' 버튼을 누르면 로또 번호를 보여주거나 숨겨요.
  const changeVisibleState = () => {
    setVisible(!visible); // 스위치를 반대로 바꿔요. (보이면 숨기고, 숨겨지면 보여줘요)
  };

  // useEffect(() => {
  //   // 번호가 바뀔 때마다 번호가 바뀌었다고 알려줘요.
  //   console.log('로또 번호가 변경되었습니다:', number);
  // }, [number]);

  return (
    <>
      {/* 버튼을 눌러서 번호를 바꿔요 */}
      <button onClick={changeNumberState}>Start</button>
      {/* 버튼을 눌러서 번호를 보여주거나 숨겨요 */}
      <button onClick={changeVisibleState}>Stop</button>
      {/* 스위치가 켜져 있으면 로또 번호를 보여줘요 */}
      {visible && <LottoComponent number={number} />}
    </>
  );
}

export default App;
