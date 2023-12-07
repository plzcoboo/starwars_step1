import React from 'react';
import styles from './SubMenu.module.scss'

const SubMenu = ({SubMenuChange,subMenu}) => {
    return (
        <ul className={styles.SubMenu}>
            <li className={subMenu === 'All character' ? `${styles.on}`:``} onClick={SubMenuChange}>All character</li>
            <li className={subMenu === 'Main character' ? `${styles.on}`:``} onClick={SubMenuChange}>Main character</li>
            <li className={subMenu === 'Sub character' ? `${styles.on}`:``} onClick={SubMenuChange}>Sub character</li>
        </ul>
    );
};

export default SubMenu;