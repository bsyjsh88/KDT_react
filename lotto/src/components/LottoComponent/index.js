import React from "react";

// 이 컴포넌트는 로또 번호를 보여주는 역할을 해요.
const LottoComponent = ({ number }) => {
    return (
        <div>
            {/* "로또 번호"라는 제목을 보여줘요 */}
            <h2>추첨 번호:</h2>
            {/* 아래 div는 번호들을 가로로 줄 세워서 보여주는 곳이에요 */}
            <div style={{ display: 'left-flex', justifyContent: 'center' }}>
                {/* 번호들을 쉼표로 구분해서 하나의 줄로 보여줘요 */}
                <div>{number.join(', ')}</div>
            </div>
        </div>
    );
};

export default LottoComponent;
