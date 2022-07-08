import classNames from 'classnames/bind';
import { AddIcon } from '~/icons';
import styles from '~/layouts/DefaultLayout/components/Notifi/Notifi.module.scss';
const cx = classNames.bind(styles);

function NotifiItem() {
    return (
        <div className={cx('item')}>
            <img alt="image" className={cx('image')} src={require('~/assets/bbc-logo.jpg')} />
            <div className={cx('content')}>
                <span className={cx('text-1')}>BBC News</span>
                <span className={cx('text-2')}>has posted new europe news “Ukraine's President Zele...”</span>
                <span className={cx('text-3')}>15m ago</span>
            </div>
            {/* <span className={cx('follow')}>
                <AddIcon />
                <span className={cx('follow-text')}>Follow</span>
            </span> */}
        </div>
    );
}

export default NotifiItem;
