import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./header.css"
import Menu from "../Menu/Menu"

export default function Header() {
    const [isClicked, toggleClicked] = useState(true);
    const [isOverlayVisible, SetOverlayVisible] = useState(false);
    const menuListItems = ["Home", "AboutUs", "Services", "Templates", "DropDown", "ContactUs"];
    const myImg = "/src/assets/img/hero-bg.jpg";
    const MenuSliderVisibility = () => {
        toggleClicked(prev => !prev);
        SetOverlayVisible(false)

    }
    const changeOverlayVisibility = () => {
        SetOverlayVisible(prev => !prev);
        toggleClicked(prev => !prev);
    }
    return (
        <>

            <div className={`transition-all duration-300 ease-in-out ${isClicked ? 'hidden' : 'absolute top-0 left-0 w-full sm:w-80 h-full bg-white z-120'} `}>
                <FontAwesomeIcon icon={["fa-solid", "fa-xmark"]} className="text-yelloMain text-4xl px-5 pt-4" onClick={MenuSliderVisibility} />
                <ul className='p-5'>
                    {menuListItems.map((item, index) => (
                        <li key={index} className={index === 0 ? `bg-yelloMain p-3 my-1` : `bg-transparent p-3 my-1`}>{item}</li>
                    ))}
                </ul>
            </div >

            <div onClick={changeOverlayVisibility} className={` fixed top-0 left-0 w-full h-full bg-gray-500 z-20 
            trnaision-opacity duration-300  ${isOverlayVisible ? 'opacity-50 visible' : 'opacity-0 invisible'}
            `}></div>
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${myImg})` }}>
                <Menu onToggleSlider={changeOverlayVisibility} menuArray={menuListItems}></Menu>
            </div >

        </>
    )
}