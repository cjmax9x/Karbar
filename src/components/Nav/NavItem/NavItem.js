import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '~/components/Nav/Nav.module.scss';

const cx = classNames.bind(styles);
function NavItem({ iconActive, title, icon, to }) {
    return (
        <NavLink to={to} className={(nav) => cx('item', { active: nav.isActive })}>
            <span className={cx('icon-active')}>{iconActive}</span>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default NavItem;
