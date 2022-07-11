import { createContext, useState } from 'react';
import classNames from 'classnames/bind';
import Header from '~/components/Header';
import Nav from '~/components/Nav/Nav';
import styles from './DefaultLayout.module.scss';
import FooterContent from '~/components/FooterContent';
export const ChangeLayout = createContext();
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  const [showLayout, setShowLayout] = useState(false);
  const handleShow = () => {
    setShowLayout(true);
  };
  const handleHide = () => {
    setShowLayout(false);
  };
  const value = {
    handleShow,
    handleHide,
  };
  return (
    <div className={cx('wrapper')}>
      {!showLayout && <Header />}
      <ChangeLayout.Provider value={value}>{children}</ChangeLayout.Provider>
      {!showLayout && <Nav />}
      {showLayout && <FooterContent />}
    </div>
  );
}

export default DefaultLayout;
