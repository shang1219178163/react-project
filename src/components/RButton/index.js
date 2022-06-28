
import styles from './style.module.css'
import classNames from 'classnames';

export default function RButton({children, color, isOutline, onClick}) {
  return <button className={
    classNames(styles.button, {
      [styles.red]: color === 'red',
      [styles.blue]: color === 'blue',
      [styles.green]: color === 'green',
      [styles.outline]: isOutline,
    },

  )} onClick={onClick} >{children}</button>
}


// export default function RButton({children, color, isOutline, onClick}) {
//   let list = [styles.button, styles.green
//     // isOutline && color === 'red' ? 'styles.red-outline' : 'styles.red',
//     // isOutline && color === 'blue' ? 'styles.blue-outline' : 'styles.blue',
//     // isOutline && color === 'green' ? 'styles.green-outline' : 'styles.green',

//     // color === 'red' ? 'styles.red' + (isOutline ? '-outline' : '') : '',
//     // color === 'blue' ? 'styles.blue' + (isOutline ? '-outline' : '') : '',
//     // color === 'green' ? 'styles.green' + (isOutline ? '-outline' : '') : '',
    
//     // color === 'red' ? 'styles.red' + (isOutline ? '-outline' : '') : '',
//     // color === 'blue' ? 'styles.blue' + (isOutline ? '-outline' : '') : '',
//     // color === 'green' ? 'styles.green' + (isOutline ? '-outline' : '') : '',

//     // color === 'red' ? styles.green : '',
//     // type === 'blue' ? styles.blue : '',
//     // type === 'green' ? styles.green : '',
//   ];

//   console.log(list);
//   return <button style={list.join('')} onClick={onClick} >{children}</button>
// }
