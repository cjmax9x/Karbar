import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { BackIcon, MoreIcon } from '~/icons';
import styles from './Notifi.module.scss';
import NotifiContent from './NotifiContent/NotifiContent';

const cx = classNames.bind(styles);

function Notifi() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to="/home">
                    <BackIcon />
                </Link>
                <h3 className={cx('title')}>Notification</h3>
                <MoreIcon />
            </div>
            <NotifiContent />
        </div>
    );
}

export default Notifi;
