import classNames from 'classnames/bind';
import { BackIcon, MoreIcon, TimerIcon } from '~/icons';
import styles from './TrendingLand.module.scss';

const cx = classNames.bind(styles);

function TrendingLand({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} alt="title" src={data.imageContent} />
            <span className={cx('image-title')}>{data.aria}</span>
            <h4 className={cx('title-news')}>{data.content}</h4>
            <div className={cx('infor')}>
                <div className={cx('wrapper-infor')}>
                    <span className={cx('title-infor')}>
                        <img className={cx('image-infor')} alt="image-infor" src={data.logo} />
                        {data.local}
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
    );
}

export default TrendingLand;
