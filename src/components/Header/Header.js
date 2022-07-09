import { Logo, NotifiIcon } from '~/icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/home">
                <span className={cx('logo')}>
                    <Logo />
                </span>
            </Link>

            <Link to="notification">
                <span className={cx('notifi')}>
                    <NotifiIcon />
                </span>
            </Link>
        </div>
    );
}

export default Header;
