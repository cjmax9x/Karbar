import classNames from 'classnames/bind';
import { FilterIcon, SearchIcon } from '~/icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('input')} placeholder="Search" />
            <span className={cx('search-icon')}>
                <SearchIcon />
            </span>
            <span className={cx('filter-icon')}>
                <FilterIcon />
            </span>
        </div>
    );
}

export default Search;
