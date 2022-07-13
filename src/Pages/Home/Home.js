/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useState } from 'react';
import Content from '~/components/Content';
import LastNews from '~/components/LastNews/LastNews';
import Search from '~/components/Search';
import Trending from '~/components/Trending';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    const dataLocal = [
        {
            aria: 'Europe',
            content: "Ukraine's President Zelensky to BBC: Blood money being paid...",
            imageContent: require('~/assets/content/content-1.jpg'),
            imageTrending: require('~/assets/trending/trending-1.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Travel',
            content: 'Her train broke down. Her phone died. And then she met her..',
            imageContent: require('~/assets/content/content-2.jpg'),
            imageTrending: require('~/assets/trending/trending-2.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },

        {
            aria: 'Europe',
            content: 'Russian warship: Moskva sinks in Black Sea',
            imageContent: require('~/assets/content/content-3.jpg'),
            imageTrending: require('~/assets/trending/trending-3.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'BBC News',
        },
        {
            aria: 'Money',
            content: 'Wind power produced more electricity than coal and nucle...',
            imageContent: require('~/assets/content/content-4.jpg'),
            imageTrending: require('~/assets/trending/trending-3.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },

        {
            aria: 'Life',
            content: "'We keep rising to new challenges:' For churches hit by",
            imageContent: require('~/assets/content/content-5.jpg'),
            imageTrending: require('~/assets/trending/trending-3.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
    ];
    const [dataContent, setDataContent] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const handleShowContent = (index) => {
        setShowContent(true);
        setDataContent(dataLocal[index]);
    };
    const handleHideContent = () => {
        setShowContent(false);
        setDataContent([]);
    };
    return (
        <div className={cx('wrapper')}>
            {!showContent && (
                <>
                    <Search />
                    <Trending onClick={handleShowContent} data={dataLocal} />
                    <LastNews onClick={handleShowContent} data={dataLocal} />
                </>
            )}

            {showContent && <Content onClick={handleHideContent} data={dataContent} />}
        </div>
    );
}

export default Home;
