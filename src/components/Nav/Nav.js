import classNames from 'classnames/bind';
import { Bookmark, BookmarkSolid, Explore, ExploreSolid, Home, HomeSolid, Profile, ProfileSolid } from '~/icons';
import styles from './Nav.module.scss';
import NavItem from './NavItem';

const cx = classNames.bind(styles);
function Nav() {
    return (
        <div className={cx('wrapper')}>
            <NavItem iconActive={<HomeSolid />} icon={<Home />} title="Home" to="/home" />
            <NavItem iconActive={<ExploreSolid />} icon={<Explore />} title="Explore" to="/explore" />
            <NavItem iconActive={<BookmarkSolid />} icon={<Bookmark />} title="Bookmark" to="/bookmark" />
            <NavItem iconActive={<ProfileSolid />} icon={<Profile />} title="Profile" to="/profile" />
        </div>
    );
}

export default Nav;
