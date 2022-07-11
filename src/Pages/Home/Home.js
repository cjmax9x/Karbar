import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Content from '~/components/Content';
import News from '~/components/News';
import Search from '~/components/Search';
import Trending from '~/components/Trending';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    const list = ['All', 'Sports', 'Politics', 'Business', 'Health', 'Travel', 'Health', 'Health', 'Health', 'Health'];
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

    const dataLocal1 = {
        aria: 'Europe',
        content: 'Russian warship: Moskva sinks in',
        imageContent: require('~/assets/trending/trending-1.jpg'),
        logo: require('~/assets/bbc-logo.jpg'),
        local: 'BBC News',
    };
    const [showContent, setShowContent] = useState(false);
    const [data, setData] = useState(dataLocal);
    const [contentData, setContentData] = useState(dataLocal1);

    const handleContent = () => {
        setShowContent(true);
    };
    const handleoOnBack = () => {
        setShowContent(false);
    };
    const handleSearchContent = (index) => {
        setContentData(data[index]);
        handleContent();
    };
    useEffect(() => {
        if (document.querySelector('[name="lastest"]')) {
            const liElement = document.querySelectorAll('[name="lastest"]');
            liElement[0].classList.add(cx('active'));
            liElement.forEach((item) => {
                item.onclick = () => {
                    switch (item.innerText) {
                        case 'All':
                            setData(dataLocal);
                            break;
                        case 'Sports':
                            setData(dataLocal.filter((item) => item.aria === 'Europe'));
                            break;

                        case 'Politics':
                            setData(dataLocal.filter((item) => item.aria === 'Life'));
                            break;

                        case 'Business':
                            setData(dataLocal.filter((item) => item.aria === 'Money'));
                            break;

                        case 'Health':
                            setData(dataLocal.filter((item) => item.aria === 'Travel'));
                            break;
                    }
                    liElement.forEach((item) => {
                        if (item.classList.contains(cx('active'))) {
                            item.classList.remove(cx('active'));
                        }
                    });
                    item.classList.add(cx('active'));
                };
            });
        }
    }, [showContent]);
    return (
        <div className={cx('wrapper')}>
            {!showContent && (
                <>
                    <Search />
                    <Trending onClick={handleContent} />
                    <div className={cx('wrapper-Lastest')}>
                        <div className={cx('wrapper-selection')}>
                            <div className={cx('header')}>
                                <h3 className={cx('title')}>Latest</h3>
                                <span className={cx('more')}>See all</span>
                            </div>
                        </div>
                        <ul className={cx('list-item')}>
                            {list.map((item, index) => (
                                <li name="lastest" key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        {data.map((item, index) => (
                            <News
                                onClick={() => {
                                    handleSearchContent(index);
                                }}
                                key={index}
                                item={item}
                            />
                        ))}
                    </div>
                </>
            )}
            {showContent && <Content onClick={handleoOnBack} data={contentData} />}
        </div>
    );
}

export default Home;
