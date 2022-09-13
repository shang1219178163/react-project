// import styles from './style.module.css'
import classNames from 'classnames';
import { useRef } from 'react';


export default function UseRefDemo() {
  const count = useRef(0);
  
  return (
    <>
      <button onClick={() => count.current++ }>{count.current}</button>
    </>
  )
}
