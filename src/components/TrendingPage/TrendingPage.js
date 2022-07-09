import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { BackIcon, MoreIcon } from '~/icons';
import TrendingLand from '~/components/TrendingLand';
import styles from './TrendingPage.module.scss';

const cx = classNames.bind(styles);

function TrendingPage() {
    const dataLocal = [
        {
            aria: 'Europe',
            content: 'Russian warship: Moskva sinks in',
            imageContent: require('~/assets/trending/trending-1.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Europe',
            content: "Ukraine's President Zelensky to BBC: Blood money being paid...",
            imageContent: require('~/assets/trending/trending-2.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Travel',
            content: 'Her train broke down. Her phone died. And then she met her..',
            imageContent: require('~/assets/trending/trending-3.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to="/home">
                    <BackIcon />
                </Link>
                <h3 className={cx('title')}>Trending</h3>
                <MoreIcon />
            </div>
            {dataLocal.map((item, index) => (
                <TrendingLand key={index} data={item} />
            ))}
        </div>
    );
}

export default TrendingPage;
