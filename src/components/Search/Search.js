import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FilterIcon, SearchIcon } from '~/icons';
import styles from './Search.module.scss';
import SearchItem from './SearchItem';
import { useState } from 'react';
import NotifiItem from '~/components/Notifi/NotifiContent/NotifiItem';
import NewsSearch from '~/components/NewsSearch/NewsSearch';

const cx = classNames.bind(styles);

function Search({ className }) {
    const dataLocal = ['News', 'Topics', 'Author'];
    const dataLocalNews = [
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
    const dataLocalTopics = [
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
        {
            logo: require('~/assets/notifi/notifi-4.jpg'),
            title: 'Marley Botosh',
            content: 'is now following you',
            time: '1 Day ago',
            follow: true,
        },
        {
            logo: require('~/assets/notifi/notifi-2.jpg'),
            title: 'Modelyn Saris',
            content: 'likes your news “Minting Your First NFT: A... “',
            time: '1 Day ago',
        },
        {
            logo: require('~/assets/notifi/notifi-5.jpg'),
            title: 'CNN',
            content: 'has posted new travel news “Her train broke down. Her pho...”',
            time: '1 Day ago',
        },
    ];
    const [showTippy, setShowTippy] = useState(false);
    const [showNews, setShowNews] = useState(true);
    const [showTopics, setShowTopics] = useState(false);
    const [data, setData] = useState(dataLocalNews);
    const handleDataChangeNews = () => {
        setData(dataLocalNews);
        setShowNews(true);
        setShowTopics(false);
    };

    const handleDataChangeTopics = () => {
        setData(dataLocalTopics);
        setShowNews(false);
        setShowTopics(true);
    };
    return (
        <div className={cx('wrapper')}>
            <Tippy
                getReferenceClientRect={null}
                placement="bottom"
                visible={showTippy}
                onClickOutside={() => {
                    setShowTippy(false);
                }}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result', className)} tabIndex="-1" {...attrs}>
                        <div className={cx('search-type')}>
                            <SearchItem
                                onClickTopics={handleDataChangeTopics}
                                onClickNews={handleDataChangeNews}
                                change={showTippy}
                                className={cx('type')}
                                data={dataLocal}
                            />
                        </div>
                        {data.map((item, index) => (
                            <div key={index}>
                                {showNews && <NewsSearch key={index} item={item} />}
                                {showTopics && <NotifiItem key={index} data={item} />}
                            </div>
                        ))}
                    </div>
                )}
            >
                <div className={cx('search-input')}>
                    <input
                        onClick={() => {
                            setShowTippy(true);
                        }}
                        className={cx('input')}
                        placeholder="Search"
                    />
                    <span className={cx('search-icon')}>
                        <SearchIcon />
                    </span>
                    <span className={cx('filter-icon')}>
                        <FilterIcon />
                    </span>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
