
//React useReducer优化方案
import { useMemo, useReducer } from 'react';


// const initailState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// export default function Counter() {

//   const [state, dispatch] = useReducer(reducer, initailState);
//   return (
//     <>
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       {state.count}
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   )
// }

// 改成使用key value的方式匹配,把case里的逻辑都抽离成一个function
// const reducerMap = {
//   increment(state, payload) {
//     return {count: state.count + 1};
//   },
//   decrement(state, payload) {
//     return {count: state.count - 1};
//   },
// };

// function makeReducer(state, action) {
//   if (reducerMap[action.type]) {
//     reducerMap[action.type](state.payload);
//   }
//   return state;
// }

// function makeReducer(reducerMap) {
//   return (state, action) => {
//     return reducerMap[action.type] ? reducerMap[action.type](state.payload) : 
//       new Error(`不存在的 action type: ${action.type}`);
//   }
// };

function makeActions(dispatch, reducerMap,) {
  const types = Object.keys(reducerMap);
  return types.reduce((actions, type) => {
    if (!actions[type]) {
      actions[type] = (payload) => {
        const action = {type, payload };
        dispatch(action);
      }
    }
    return actions;
  }, {});
}

// 上面的代码的作用就是如下图，action方法内部调用了dispatch。
// const reducers = {
//   increment: (state, action) => {
//     return {counter: state.count + 1};
//   },
//   decrement: (state, action) => {
//     return {counter: state.count - 1};
//   },
// };

// const actionMap = {
//   increment: (payload) => {
//     dispatch({
//       type: "increment",
//       payload: payload,
//     })
//   },
//   decrement: (payload) => {
//     dispatch({
//       type: "decrement",
//       payload: payload,
//     })
//   },
// }

// 最后将makeActions 和makeReducer整合一下
function useModel({state1, reducerMap}) {
  // const [state2, dispatch] = useReducer(makeReducer(reducerMap), state1);
  const [state2, dispatch] = useReducer((state, action) => {
    console.log(`${state} ${action}`);
    return reducerMap[action.type] ? reducerMap[action.type](state.payload) : 
    new Error(`不存在的 action type: ${action.type}`);
  }, state1);

  const actions = useMemo(() => makeActions(dispatch, reducerMap), [
    reducerMap
  ]);
  return [state2, actions];
};


export {
  useModel,
}