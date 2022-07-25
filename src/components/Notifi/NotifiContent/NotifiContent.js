import classNames from 'classnames/bind';
import styles from '~/components/Notifi/Notifi.module.scss';
import NotifiItem from './NotifiItem';

const cx = classNames.bind(styles);

function NotifiContent({ data }) {
    return (
        <div className={cx('content-wrapper')}>
            <h3 className={cx('date')}>{data.date}</h3>
            {data.notifi.map((item, index) => (
                <NotifiItem key={index} data={item} />
            ))}
        </div>
    );
}

export default NotifiContent;
