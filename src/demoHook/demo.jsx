import React, { memo, useEffect, useMemo, useRef, useState } from "react";

// function component: ko có state, lifecycle
// = > giải pháp : React hook

// công dụng:
// 1. Cho phép FC có thể sử dụng đc state, lifecycle
// 2. cho phép tái sử dụng logic giữa các component với nhau

// danh sách hook
// 1. useState()
// 2. useEffect()
// memo = PureComponent
// 3. useCallback()
// 4. useMemo()
// 5. useRef()
//   5.1. Dom trong component
//   5.2. Chứa giá trị ko bị reset lại qua các lần render
const Demo = (props) => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState("hieu");
  const titleRef = useRef();
  let test1 = useRef(0);

  useEffect(() => {
    console.log("test", count);
    //clean function: chạy trước khi useEffect chạy lại
    return () => {
      console.log("clean 1", count);
    };
  }, [a, count]);

  useEffect(() => {
    console.log("test2222");
    // clean function: chạy khi component unmount
    return () => {
      // same as componentWillUnmount()
    };
  }, []);

  useEffect(() => {
    console.log("test333");
  });

  const sum = useMemo(() => {
    return 10 + 300 + 10000000 + 20 + count;
  }, [count]);

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1 ref={titleRef}>{count}</h1>
      <h1>Sum: {sum}</h1>
      <button onClick={props.testMemo}>Test Memo</button>
      <button
        onClick={() => {
          test1.current = test1.current + 1;
          console.log("test111111", test1.current);
          setCount(count + 100000);
          titleRef.current.style.color = "yellow";
        }}
      >
        Increase count
      </button>
    </div>
  );
};

export default memo(Demo);
