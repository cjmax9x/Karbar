import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from '~/components/Search/Search.module.scss';

const cx = classNames.bind(styles);

function SearchItem({ data, className, change }) {
    useEffect(() => {
        const typeElement = document.querySelectorAll(`.${className}`);
        if (typeElement.length > 0) {
            typeElement[0].classList.add(cx('active'));
        }
        typeElement.forEach((items) => {
            items.onclick = () => {
                typeElement.forEach((item) => {
                    item.classList.remove(cx('active'));
                });
                items.classList.add(cx('active'));
            };
        });
        return () => {
            typeElement.forEach((item) => {
                item.classList.remove(cx('active'));
            });
        };
    }, [change]);
    return data.map((item, index) => (
        <span key={index} className={className}>
            {item}
        </span>
    ));
}

export default SearchItem;
