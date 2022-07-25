import classNames from 'classnames/bind';
import NotifiItem from '~/components/Notifi/NotifiContent/NotifiItem';
import TrendingLand from '~/components/TrendingLand';

import styles from './Explore.module.scss';

const cx = classNames.bind(styles);

function Explore() {
    const dataLocal = [
        {
            logo: require('~/assets/notifi/notifi-1.jpg'),
            title: 'BBC News',
            content: "has posted new europe news “Ukraine's President Zele...”",
            time: '15m ago',
        },
        {
            logo: require('~/assets/notifi/notifi-2.jpg'),
            title: 'Modelyn Saris',
            content: 'is now following you',
            time: '1h ago',
            follow: true,
        },
        {
            logo: require('~/assets/notifi/notifi-3.jpg'),
            title: 'Omar Merditz',
            content: 'comment to your news “Minting Your First NFT: A... “',
            time: '1h ago',
        },
    ];
    const dataLocalTrending = [
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
            <h3 className={cx('title')}>Explore</h3>
            <div className={cx('header')}>
                <span className={cx('topic')}>Topics</span>
                <span className={cx('see-all')}>See all</span>
            </div>
            {dataLocal.map((item, index) => (
                <NotifiItem className={cx('background')} key={index} data={item} />
            ))}
            <div className={cx('header')}>
                <span className={cx('topic')}>Popular Topic</span>
            </div>
            {dataLocalTrending.map((item, index) => (
                <TrendingLand context={false} key={index} data={item} />
            ))}
        </div>
    );
}

export default Explore;
