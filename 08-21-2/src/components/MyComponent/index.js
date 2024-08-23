import { useEffect, useState } from "react";


const MyComponent = (props) => {
    const { number } = props;
    const [text, setText] =useState('');

    //Mount 시점에 실행 (생성)
    useEffect(() => {
        console.log('컴포넌트 실행 |  O mount!');
        
    //unMount 시점에 실행 (사라짐)
    return () => {
        console.log('컴포넌트 실행 | X unmount'); 
    };
    }, []);

    //Mount & Update 시점에 실행
    useEffect(() => {
        console.log('컴포넌트 실행 | update!');  
    });

    useEffect(() => {
        console.log('컴포넌트 실행 | text update!');
    }, [text]);

    return (
        <>
            <p>MyComponent {number}</p>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </>
    );
};

export default MyComponent;