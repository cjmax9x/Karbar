import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './LastNews.module.scss';
import News from '~/components/News/News';
const cx = classNames.bind(styles);
function LastNews({ onClick, data }) {
    const list = ['All', 'Sports', 'Politics', 'Business', 'Health', 'Travel', 'Politics'];
    const [dataLocal, setDataLocal] = useState(data);

    useEffect(() => {
        if (ref.current) {
            const liElement = Array.from(ref.current.children);
            liElement[0].classList.add(cx('active'));
            liElement.forEach((item) => {
                item.onclick = () => {
                    switch (item.innerText) {
                        case 'All':
                            setDataLocal(dataLocal);
                            break;
                        case 'Sports':
                            setDataLocal(dataLocal.filter((item) => item.aria === 'Europe'));
                            break;

                        case 'Politics':
                            setDataLocal(dataLocal.filter((item) => item.aria === 'Life'));
                            break;

                        case 'Business':
                            setDataLocal(dataLocal.filter((item) => item.aria === 'Money'));
                            break;

                        case 'Health':
                            setDataLocal(dataLocal.filter((item) => item.aria === 'Travel'));
                            break;
                        default:
                            throw new Error('Invalid selection');
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const ref = useRef();
    return (
        data && (
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-selection')}>
                    <div className={cx('header')}>
                        <h3 className={cx('title')}>Latest</h3>
                        <span className={cx('more')}>See all</span>
                    </div>
                </div>
                <ul ref={ref} className={cx('list-item')}>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                {dataLocal.map((item, index) => (
                    <News
                        onClick={() => {
                            onClick(index);
                        }}
                        key={index}
                        data={item}
                    />
                ))}
            </div>
        )
    );
}

export default LastNews;
