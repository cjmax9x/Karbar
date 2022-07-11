import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { TimerIcon } from '~/icons';
import styles from './Trending.module.scss';
import { useContext } from 'react';
import { ChangeLayout } from '~/layouts/DefaultLayout/DefaultLayout';
const cx = classNames.bind(styles);

function Trending({ onClick }) {
  const value = useContext(ChangeLayout);
  const handle = () => {
    value.handleShow();
    onClick();
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h3 className={cx('title')}>Trending</h3>
        <Link to="/home/trending" className={cx('more')}>
          See all
        </Link>
      </div>
      <div className={cx('wrapper-content')} onClick={handle}>
        <img className={cx('image')} alt="title" src={require('~/assets/trending/trending-1.jpg')} />
        <span className={cx('image-title')}>Europe</span>
        <h4 className={cx('title-news')}>Russian warship: Moskva sinks in</h4>
        <div className={cx('infor')}>
          <div className={cx('wrapper-infor')}>
            <span className={cx('title-infor')}>
              <img className={cx('image-infor')} alt="image-infor" src={require('~/assets/bbc-logo.jpg')} />
              BBC News
            </span>
            <span className={cx('time-infor')}>
              <span className={cx('timer-icon')}>
                <TimerIcon />
              </span>
              4h ago
            </span>
          </div>
          <span className={cx('more-infor')}>...</span>
        </div>
      </div>
    </div>
  );
}

export default Trending;
