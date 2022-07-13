import classNames from 'classnames/bind';
import News from '~/components/News';
import { InforIcon } from '~/icons';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    const dataLocal = [
        {
            aria: 'NFTs',
            content: 'Minting Your First NFT: A Beginner’s Guide to Creating...',
            imageContent: require('~/assets/profile/1.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'Wilson Franci',
        },
        {
            aria: 'Business',
            content: '5 things to know before the stock market opens Monday',
            imageContent: require('~/assets/profile/2.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'Wilson Franci',
        },

        {
            aria: 'Travel',
            content: 'Bali plans to reopen to international tourists in Septe...',
            imageContent: require('~/assets/profile/3.jpg'),
            logo: require('~/assets/bbc-logo.jpg'),
            local: 'Wilson Franci',
        },
        {
            aria: 'Health',
            content: 'Healthy Living: Diet and Exercise Tips & Tools for Success.',
            imageContent: require('~/assets/profile/4.jpg'),
            logo: require('~/assets/usa-logo.jpg'),
            local: 'USE Today',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title-header')}>Profile</h3>
                <InforIcon />
            </div>
            <div className={cx('infor')}>
                <img alt="image" className={cx('image-profile')} src={require('~/assets/profile.jpg')} />
                <span className={cx('follow')}>
                    <h3 className={cx('number')}>2156</h3>
                    <span className={cx('description-infor')}>Followers</span>
                </span>
                <span className={cx('follow')}>
                    <h3 className={cx('number')}>597</h3>
                    <span className={cx('description-infor')}>Following</span>
                </span>
                <span className={cx('follow')}>
                    <h3 className={cx('number')}>19</h3>
                    <span className={cx('description-infor')}>News</span>
                </span>
            </div>
            <div className={cx('description')}>
                <h3 className={cx('title-description')}>Tung Bui</h3>
                <p className={cx('description-description')}>Front-End developer: InternShip / Fresher level</p>
            </div>
            <div className={cx('selection')}>
                <button className={cx('selection-button')}>Edit profile</button>
                <button className={cx('selection-button')}>Website</button>
            </div>
            <div className={cx('selection-2')}>
                <button className={cx('selection-button-2')}>News</button>
                <button className={cx('selection-button-2', cx('active'))}>Recent</button>
            </div>
            {dataLocal.map((item, index) => (
                <News key={index} data={item} />
            ))}
        </div>
    );
}

export default Profile;
