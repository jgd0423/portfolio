import React from 'react';
import classes from './Link.module.scss';

const link = (props) => {
  let target = '';

  switch (props.target) {
    case 'github':
      target = 'https://github.com/jgd0423';
      break;
    default:
      target = 'https://github.com/jgd0423';
      break;
  }

  return (
    <a target='_blank' className={classes['link-item']} href={target}>
      <span className={classes['link-item__text']}>{props.children}</span>
    </a>
  );
};

export default link;
