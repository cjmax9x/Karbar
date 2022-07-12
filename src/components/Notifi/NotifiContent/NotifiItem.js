/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import { AddIcon } from '~/icons';
import styles from '~/components/Notifi/Notifi.module.scss';
const cx = classNames.bind(styles);

function NotifiItem({ data, className }) {
    return (
        <div className={cx('item', className)}>
            <img alt="image" className={cx('image')} src={data.logo} />
            <div className={cx('content')}>
                <span className={cx('text-1')}>{data.title}</span>
                <span className={cx('text-2')}>{data.content}</span>
                <span className={cx('text-3')}>{data.time}</span>
            </div>
            {data.follow && (
                <span className={cx('follow')}>
                    <AddIcon />
                    <span className={cx('follow-text')}>Follow</span>
                </span>
            )}
        </div>
    );
}

export default NotifiItem;
