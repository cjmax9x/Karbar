import { Logo, NotifiIcon } from '~/icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [showTippy, setShowTippy] = useState(false);
    const handleShow = () => {
        setShowTippy(true);
    };
    const handleHide = () => {
        setShowTippy(false);
    };
    return (
        <div className={cx('wrapper')}>
            <span className={cx('logo')}>
                <Logo />
            </span>

            <Tippy
                interactive
                onClickOutside={handleHide}
                visible={showTippy}
                render={(attrs) => (
                    <div
                        style={{ textAlign: 'center', cursor: 'pointer' }}
                        onClick={handleHide}
                        className={cx('tippy')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        Nitofication on the development
                        <br></br>
                        <br></br>
                        <br></br>
                        Click here to Back
                    </div>
                )}
            >
                <span className={cx('notifi')}>
                    <NotifiIcon onClick={handleShow} />
                </span>
            </Tippy>
        </div>
    );
}

export default Header;
