import classNames from 'classnames/bind';
import { BackIcon, MoreIcon } from '~/icons';
import TrendingLand from '~/layouts/DefaultLayout/components/TrendingLand';
import styles from './TrendingPage.module.scss';

const cx = classNames.bind(styles);

function TrendingPage({ className, onClick }) {
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
        <div className={className}>
            <div className={cx('header')}>
                <BackIcon onClick={onClick} />
                <h3 className={cx('title')}>Trending</h3>
                <MoreIcon />
            </div>
            {dataLocal.map((item, index) => (
                <TrendingLand key={index} data={item} onClick={onClick} />
            ))}
        </div>
    );
}

export default TrendingPage;
