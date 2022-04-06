// Все хуки:

// 1. useState
// 2. useEffect
// 3. useRef
// 4. useReducer
// 5. useMemo
// 6. useContext
// 7. useCallBack
// 8. useImperativeHandle
// 9. useLayoutEffect
// 10. useDebugValue

// хуки только в функциях, нельзя менять их порядок
// (оборачивать в if, например)

import React from 'react';

export function MyHooks({ title, id }: { title: string, id?: string }) {
  // React.useEffect(() => {
  //   console.log('componentWillUpdate')
  // });

  // React.useEffect(() => {
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   }
  // }, [isMounted]);

  // React.useEffect(() => {
  //   console.log('componentWillReceiveProps: ', title);
  // }, [title]);


  // const [isMounted] = useIsMounted();
  // console.log('isMounted', isMounted);
  // React.useEffect(() => {
  //   console.log('isMounted', isMounted);
  // }, [isMounted]);

  const items = 10;
  const multiplier = 5;
  const result = React.useMemo(
    () => {
      console.log('CALC')
      calculate(items, multiplier)
    },
    [items, multiplier]
  )

  return (
    <div style={{ width: window.innerWidth }}>{title} {id} {result}</div>
  )
}

export function useIsMounted () {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true)
  }, []);

  return [isMounted]
}

function calculate(items: number, multiplier: number) {
  return new Array(items).fill(1).reduce((a,v) => a * multiplier);
}

