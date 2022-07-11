import classNames from 'classnames/bind';
import { BackIcon, MoreIcon } from '~/icons';
import { useContext } from 'react';
import { ChangeLayout } from '~/layouts/NavOnly/NavOnly';
import styles from './ContentTrending.module.scss';

const cx = classNames.bind(styles);
function ContentTrending({ data, onClick }) {
  let value = useContext(ChangeLayout);
  const handle = () => {
    onClick();
    value.handleHide();
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <BackIcon onClick={handle} />
        <h3 className={cx('title')}></h3>
        <MoreIcon />
      </div>
      <div className={cx('header-content')}>
        <div className={cx('header-left')}>
          <img alt="image" className={cx('image-header')} src={data.logo} />
          <span className={cx('title-box')}>
            <span className={cx('title')}>BBC News</span>
            <span className={cx('time')}>14m ago</span>
          </span>
        </div>
        <span className={cx('following')}>Following</span>
      </div>
      <div className={cx('body')}>
        <img alt="image" className={cx('image-body')} src={data.imageContent}></img>
        <span className={cx('land')}>Europe</span>
        <h3 className={cx('title-content')}>
          Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil
        </h3>
        <br />
        <p className={cx('description')}>
          Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of
          "earning their money in other people's blood".
          <br />
          <br />
          In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking
          efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.
        </p>
      </div>
    </div>
  );
}

export default ContentTrending;
