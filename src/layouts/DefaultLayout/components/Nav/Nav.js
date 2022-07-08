import classNames from 'classnames/bind';
import { Bookmark, Explore, Home, Profile } from '~/icons';
import styles from './Nav.module.scss';
import NavItem from './NavItem';

const cx = classNames.bind(styles);
function Nav() {
    return (
        <div className={cx('wrapper')}>
            <NavItem icon={<Home />} title="Home" to="/home" />
            <NavItem icon={<Explore />} title="Explore" to="/explore" />
            <NavItem icon={<Bookmark />} title="Bookmark" to="/bookmark" />
            <NavItem icon={<Profile />} title="Profile" to="/profile" />
        </div>
    );
}

export default Nav;
