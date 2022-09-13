import styles from './style.module.css'
import classNames from 'classnames';
import { useReducer } from 'react';


const initailState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error(`不存在的 action type: ${action.type}`);
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initailState);
  
  return (
    <>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <span className={classNames(styles.text)} >{state.count}</span>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}
