import classNames from 'classnames/bind';
import LastestNews from '~/layouts/DefaultLayout/components/LastestNews';
import Search from '~/layouts/DefaultLayout/components/Search';
import Trending from '~/layouts/DefaultLayout/components/Trending';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Search />
            <Trending />
            <LastestNews />
        </div>
    );
}

export default Home;
