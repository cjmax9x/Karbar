import { createContext, useState } from 'react';
import classNames from 'classnames/bind';
import Nav from '~/components/Nav/Nav';
import FooterContent from '~/components/FooterContent';
import styles from './NavOnly.module.scss';

export const ChangeLayout = createContext();

const cx = classNames.bind(styles);

function NavOnly({ children }) {
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
      <ChangeLayout.Provider value={value}>{children}</ChangeLayout.Provider>
      {!showLayout && <Nav />}
      {showLayout && <FooterContent />}
    </div>
  );
}

export default NavOnly;
