import classNames from 'classnames/bind';
import styles from '~/layouts/DefaultLayout/components/Notifi/Notifi.module.scss';
import NotifiItem from './NotifiItem';

const cx = classNames.bind(styles);

function NotifiContent() {
    return (
        <div className={cx('content-wrapper')}>
            <h3 className={cx('date')}>Today, April 22</h3>
            <NotifiItem />
            <NotifiItem />
            <NotifiItem />
            <NotifiItem />
            <NotifiItem />
        </div>
    );
}

export default NotifiContent;
