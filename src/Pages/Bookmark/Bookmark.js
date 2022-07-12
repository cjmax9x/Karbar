import classNames from 'classnames/bind';
import News from '~/components/News';
import Search from '~/components/Search';

import styles from './Bookmark.module.scss';

const cx = classNames.bind(styles);

function Bookmark() {
    const dataLocal = [
        {
            aria: 'Europe',
            content: "Ukraine's President Zelensky to BBC: Blood money being paid...",
            imageContent: require('~/assets/content/content-1.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Travel',
            content: 'Her train broke down. Her phone died. And then she met her..',
            imageContent: require('~/assets/content/content-2.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Travel',
            content: 'Her train broke down. Her phone died. And then she met her..',
            imageContent: require('~/assets/content/content-2.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Travel',
            content: 'Her train broke down. Her phone died. And then she met her..',
            imageContent: require('~/assets/content/content-2.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Travel',
            content: 'Her train broke down. Her phone died. And then she met her..',
            imageContent: require('~/assets/content/content-2.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Europe',
            content: 'Russian warship: Moskva sinks in Black Sea',
            imageContent: require('~/assets/content/content-3.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Money',
            content: 'Wind power produced more electricity than coal and nucle...',
            imageContent: require('~/assets/content/content-4.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
        {
            aria: 'Money',
            content: 'Wind power produced more electricity than coal and nucle...',
            imageContent: require('~/assets/content/content-4.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
        {
            aria: 'Money',
            content: 'Wind power produced more electricity than coal and nucle...',
            imageContent: require('~/assets/content/content-4.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
        {
            aria: 'Money',
            content: 'Wind power produced more electricity than coal and nucle...',
            imageContent: require('~/assets/content/content-4.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
        {
            aria: 'Life',
            content: "'We keep rising to new challenges:' For churches hit by",
            imageContent: require('~/assets/content/content-5.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
        {
            aria: 'Life',
            content: "'We keep rising to new challenges:' For churches hit by",
            imageContent: require('~/assets/content/content-5.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
        {
            aria: 'Life',
            content: "'We keep rising to new challenges:' For churches hit by",
            imageContent: require('~/assets/content/content-5.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
        {
            aria: 'Life',
            content: "'We keep rising to new challenges:' For churches hit by",
            imageContent: require('~/assets/content/content-5.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
        {
            aria: 'Europe',
            content: 'Russian warship: Moskva sinks in Black Sea',
            imageContent: require('~/assets/content/content-3.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Europe',
            content: 'Russian warship: Moskva sinks in Black Sea',
            imageContent: require('~/assets/content/content-3.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Europe',
            content: 'Russian warship: Moskva sinks in Black Sea',
            imageContent: require('~/assets/content/content-3.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Europe',
            content: 'Russian warship: Moskva sinks in Black Sea',
            imageContent: require('~/assets/content/content-3.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Explore</h3>
            <Search className={cx('search')} />
            {dataLocal.map((item, index) => (
                <News data={item} key={index} />
            ))}
        </div>
    );
}

export default Bookmark;
