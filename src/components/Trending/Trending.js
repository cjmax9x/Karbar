/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { TimerIcon } from '~/icons';
import styles from './Trending.module.scss';
import { useContext, useEffect, useRef } from 'react';
import { ChangeLayout } from '~/layouts/DefaultLayout/DefaultLayout';
const cx = classNames.bind(styles);

function Trending({ data, onClick = () => {} }, handle1 = () => {}) {
    const value = useContext(ChangeLayout);
    const handle = (index) => {
        value && value.handleShow();
        onClick(index);
    };
    useEffect(() => {
        let timer = setInterval(() => {
            switch (ref.current.classList.value) {
                case cx('wrapper-body'):
                    ref.current.classList.add(cx('tranform-1'));
                    break;
                case cx('wrapper-body') + ' ' + cx('tranform-1'):
                    ref.current.classList.remove(cx('tranform-1'));
                    ref.current.classList.add(cx('tranform-2'));
                    break;
                case cx('wrapper-body') + ' ' + cx('tranform-2'):
                    ref.current.classList.remove(cx('tranform-2'));
                    ref.current.classList.add(cx('tranform-3'));
                    break;
                case cx('wrapper-body') + ' ' + cx('tranform-3'):
                    ref.current.classList.remove(cx('tranform-3'));
                    ref.current.classList.add(cx('tranform-4'));
                    break;
                case cx('wrapper-body') + ' ' + cx('tranform-4'):
                    ref.current.classList.remove(cx('tranform-4'));
                    break;
                default:
                    throw new Error('Something Wrong');
            }
        }, 2000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const ref = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Trending</h3>
                <Link to="/home/trending" className={cx('more')}>
                    See all
                </Link>
            </div>
            <div ref={ref} className={cx('wrapper-body')}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={cx('wrapper-content')}
                        onClick={() => {
                            handle(index);
                        }}
                    >
                        <img className={cx('image')} alt="title" src={item.imageTrending} />
                        <span className={cx('image-title')}>{item.aria}</span>
                        <h4 className={cx('title-news')}>{item.content}</h4>
                        <div className={cx('infor')}>
                            <div className={cx('wrapper-infor')}>
                                <span className={cx('title-infor')}>
                                    <img className={cx('image-infor')} alt="image-infor" src={item.logo} />
                                    BBC News
                                </span>
                                <span className={cx('time-infor')}>
                                    <span className={cx('timer-icon')}>
                                        <TimerIcon />
                                    </span>
                                    4h ago
                                </span>
                            </div>
                            <span className={cx('more-infor')}>...</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trending;
