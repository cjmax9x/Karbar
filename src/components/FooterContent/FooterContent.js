import classNames from 'classnames/bind';
import { CommnentIcon, FlagIcon, HeartIcon } from '~/icons';

import styles from './FooterContent.module.scss';

const cx = classNames.bind(styles);

function FooterContent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div style={{ marginRight: '20px' }}>
          <span className={cx('heart')}>
            <HeartIcon />
            <span style={{ marginLeft: '3px', color: '#000000' }}>24.5K</span>
          </span>
        </div>
        <div>
          <span className={cx('comment')}>
            <CommnentIcon />
            <span style={{ marginLeft: '3px' }}>1K</span>
          </span>
        </div>
      </div>
      <div className={cx('right')}>
        <span className={cx('flag')}>
          <FlagIcon />
        </span>
      </div>
    </div>
  );
}

export default FooterContent;
