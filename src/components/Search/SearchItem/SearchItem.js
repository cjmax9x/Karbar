import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from '~/components/Search/Search.module.scss';

const cx = classNames.bind(styles);

function SearchItem({ data, className, change, onClickNews, onClickTopics }) {
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
                switch (items.innerText) {
                    case 'Topics':
                        onClickTopics();
                        break;
                    case 'News':
                        onClickNews();
                        break;
                    case 'Author':
                        onClickNews();
                        break;
                    default:
                        throw new Error('Invalid selection');
                }
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
