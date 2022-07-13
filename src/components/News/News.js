/* eslint-disable jsx-a11y/img-redundant-alt */
import { TimerIcon } from '~/icons';
import classNames from 'classnames/bind';
import styles from './News.module.scss';
import { useContext } from 'react';

import { ChangeLayout } from '~/layouts/DefaultLayout/DefaultLayout';

const cx = classNames.bind(styles);

function News({ data, onClick = () => {} }) {
    const value = useContext(ChangeLayout);

    const handle = () => {
        value && value.handleShow();
        onClick();
    };
    return (
        <div onClick={handle} className={cx('content')}>
            <img alt="image" className={cx('image')} src={data.imageContent} />
            <div className={cx('body-content')}>
                <span className={cx('image-title')}>{data.aria}</span>
                <h4 className={cx('title-news')}>{data.content}</h4>
                <div className={cx('infor')}>
                    <div className={cx('wrapper-infor')}>
                        <span className={cx('title-infor')}>
                            <img className={cx('image-infor')} alt="image-infor" src={data.logo} />
                            {data.local}
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
    );
}

export default News;
