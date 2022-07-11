import { TimerIcon } from '~/icons';
import classNames from 'classnames/bind';
import styles from './NewsSearch.module.scss';

const cx = classNames.bind(styles);

function NewsSearch({ item }) {
    return (
        <div className={cx('content')}>
            <img alt="image" className={cx('image')} src={item.imageContent} />
            <div className={cx('body-content')}>
                <span className={cx('image-title')}>{item.aria}</span>
                <h4 className={cx('title-news')}>{item.content}</h4>
                <div className={cx('infor')}>
                    <div className={cx('wrapper-infor')}>
                        <span className={cx('title-infor')}>
                            <img className={cx('image-infor')} alt="image-infor" src={item.logo} />
                            {item.local}
                        </span>
                        <span className={cx('time-infor')}>
                            <span className={cx('timer-icon')}>
                                <TimerIcon />
                            </span>
                            14m ago
                        </span>
                    </div>
                    <span className={cx('more-infor')}>...</span>
                </div>
            </div>
        </div>
    );
}

export default NewsSearch;
