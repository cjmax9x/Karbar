import classNames from 'classnames/bind';
import Header from './components/Header';
import Nav from './components/Nav/Nav';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Nav />
        </div>
    );
}

export default DefaultLayout;
