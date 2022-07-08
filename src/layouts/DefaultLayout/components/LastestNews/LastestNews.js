import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { TimerIcon } from '~/icons';
import styles from './LastestNews.module.scss';

const cx = classNames.bind(styles);

function LastestNews() {
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
    const [data, setData] = useState(dataLocal);
    useEffect(() => {
        const liElement = document.querySelectorAll('li');
        liElement[0].classList.add(cx('active'));
        liElement.forEach((item) => {
            item.onclick = () => {
                if (item.innerText === 'All') {
                    setData(dataLocal);
                } else if (item.innerText === 'Sports') {
                    setData(dataLocal.filter((item) => item.aria === 'Europe'));
                } else if (item.innerText === 'Politics') {
                    setData(dataLocal.filter((item) => item.aria === 'Life'));
                } else if (item.innerText === 'Business') {
                    setData(dataLocal.filter((item) => item.aria === 'Money'));
                } else if (item.innerText === 'Health') {
                    setData(dataLocal.filter((item) => item.aria === 'Travel'));
                }
                liElement.forEach((item) => {
                    if (item.classList.contains(cx('active'))) {
                        item.classList.remove(cx('active'));
                    }
                });
                item.classList.add(cx('active'));
            };
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-selection')}>
                <div className={cx('header')}>
                    <h3 className={cx('title')}>Latest</h3>
                    <span className={cx('more')}>See all</span>
                </div>
            </div>
            <ul className={cx('list-item')}>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {data.map((item, index) => (
                <div key={index} className={cx('content')}>
                    <img alt="image" className={cx('image')} src={item.imageContent} />
                    <div className={cx('body-content')}>
                        <span className={cx('image-title')}>{item.aria}</span>
                        <h4 className={cx('title-news')}>{item.content}</h4>
                        <div className={cx('infor')}>
                            <div className={cx('wrapper-infor')}>
                                <span className={cx('title-infor')}>
                                    <img className={cx('image-infor')} alt="image-infor" src={item.logo} />
                                    {item.local}
                                </span>
                                <span className={cx('time-infor')}>
                                    <span className={cx('timer-icon')}>
                                        <TimerIcon />
                                    </span>
                                    14m ago
                                </span>
                            </div>
                            <span className={cx('more-infor')}>...</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LastestNews;
