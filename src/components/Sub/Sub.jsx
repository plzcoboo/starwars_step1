import NavSlider from "../NavSlider/NavSlider";
import PeopleCon from "../PeopleCon/PeopleCon";
import styles from './sub.module.scss'
import SubMenu from "../SubMenu/SubMenu";
import mainData from "../../assets/api/mainData";
import { useEffect, useState } from "react";

const Sub = () => {
    const [proFileData , setMainData] = useState(mainData)
    const [gallery, setGallery] = useState(mainData[0])
    const [ConCategory, setCategory] = useState('Profile')
    const [subMenu , setSubMenu] = useState('All character')
    const [cnt , setCnt] = useState(0)


    const ProfileChange = (category) => {
        setCategory(category)
    }

    const SubMenuChange = (e) => {
        const character = e.target.textContent
        if(character === subMenu) return
        setSubMenu(character)
        if(character === 'All character'){setMainData(mainData)}else{setMainData(mainData.filter(item=>item.category === character))}
    }

    const galleryChange = (id,idx) => {
        setGallery(mainData.find(item => item.id === id))
        setMainData(proFileData.map(item => item.id === id ? {...item, isShow:true} : {...item, isShow:false}))
        setCnt(idx)
    }

    const galleryNavClick = (item) => {
        setGallery({...gallery, mainImg:item.img})
    }

    const next = () => {
        cnt >= proFileData.length -1 ? setCnt(0) : setCnt(cnt+1)
    }
    const prev = () => {
        cnt <= 0 ? setCnt(proFileData.length-1) : setCnt(cnt-1)
    }

    useEffect(()=>{
       setCnt(0)
       setGallery(proFileData[0])
       if(subMenu === 'Sub character') { setMainData(proFileData.map(item => item.actor === 'Yoda' ? {...item , isShow:true} : item))}
       if(subMenu === 'All character') { setMainData(proFileData.map(item => item.actor === 'Luke Skywalker' ? {...item , isShow:true} : item))}
       if(subMenu === 'Main character') { setMainData(proFileData.map(item => item.actor === 'Luke Skywalker' ? {...item , isShow:true} : item))}
    },[subMenu])

    useEffect(()=>{
        setCategory('Profile')
    },[proFileData])

    useEffect(()=>{
        setGallery(proFileData[cnt])
        setMainData(proFileData.map(item => item.actor === proFileData[cnt].actor ? {...item, isShow:true} : {...item, isShow:false}))
    },[cnt])


    return (
        <div className={styles.sub}>
            <div className={styles.conBox}>
            <SubMenu SubMenuChange={SubMenuChange} subMenu={subMenu}/>
            <NavSlider proFileData={proFileData} galleryChange={galleryChange} next={next} prev={prev}/>
            <PeopleCon gallery={gallery} ConCategory={ConCategory} ProfileChange={ProfileChange} galleryNavClick={galleryNavClick}/>
            </div>
        </div>
    );
};

export default Sub;