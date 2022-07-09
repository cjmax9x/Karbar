import classNames from 'classnames/bind';
import Nav from '~/components/Nav/Nav';
import styles from './NavOnly.module.scss';

const cx = classNames.bind(styles);

function NavOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <Nav />
        </div>
    );
}

export default NavOnly;
