import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { BackIcon, MoreIcon } from '~/icons';
import styles from './Notifi.module.scss';
import NotifiContent from './NotifiContent/NotifiContent';

const cx = classNames.bind(styles);

function Notifi() {
    const dataLocal = [
        {
            date: 'Today, 9 July',
            notifi: [
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
            ],
        },
        {
            date: 'Yesterday, 8 July',
            notifi: [
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
            ],
        },
        {
            date: '7 July',
            notifi: [
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
            ],
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to="/home">
                    <BackIcon />
                </Link>
                <h3 className={cx('title')}>Notification</h3>
                <MoreIcon />
            </div>
            {dataLocal.map((item, index) => (
                <NotifiContent key={index} data={item} />
            ))}
        </div>
    );
}

export default Notifi;
