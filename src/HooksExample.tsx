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

import React from 'react';

export function MyHooks({ title }: { title: string }) {
  // React.useEffect(() => {
  //   console.log('componentDidMount');
  //   console.log('componentWillUpdate')
  // });

  React.useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);

  // React.useEffect(() => {
  //   console.log('componentWillReceiveProps: ', title);
  // }, [title]);


  return (
    <div>{title}</div>
  )
}
