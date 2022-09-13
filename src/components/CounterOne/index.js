// import styles from './style.module.css'
// import classNames from 'classnames';
// import { useMemo, useReducer } from 'react';
// import useModel from './views/customHook/useModel'
import { useState } from 'react';
import { useModel } from '../../hooks/useModel'
// import Counter from '@/components/Counter';


const initailState = {count: 0};

// 来看一下最后的使用效果
const reducerMap = {
  increment(state, payload = 1) {
    return {count: state.count + payload};
  },
  decrement(state, payload = -1) {
    return {count: state.count + payload};
  },
};

// export default function CounterOne() {
//   const [state, actions] = useModel({
//     state1: initailState,
//     reducerMap: reducerMap,
//   });

//   return (
//     <>
//       <button onClick={() => actions.decrement()}>-</button>
//       {state.count}
//       <button onClick={() => actions.increment()}>+</button>
//     </>
//   );
// }

export default function CounterOne() {
  const [state, setState] = useState(initailState);
  
  return (
    <>
      <button onClick={() =>reducerMap.decrement()}>-</button>
      {state.count}
      <button onClick={() => reducerMap.increment()}>+</button>
    </>
  )
}
