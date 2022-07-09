import classNames from 'classnames/bind';
import LastestNews from '~/components/LastestNews';
import Search from '~/components/Search';
import Trending from '~/components/Trending';
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
