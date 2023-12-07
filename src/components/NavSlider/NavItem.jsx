import styles from './NavSlider.module.scss'

const NavItem = ({item,galleryChange,idx}) => {
    const {thumImg,actor,id,isShow} = item
    return (
        <li onClick={()=>galleryChange(id,idx)} className={isShow ? `${styles.on}` : ''}>
            <img src={thumImg} alt="" />
            <p>{actor}</p>
        </li>
    );
};

export default NavItem;