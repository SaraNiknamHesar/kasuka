import { useRef } from "react";

export default function Menu() {
    const logoImg = "/src/assets/img/logo.png";
    const menuListItems = ["Home", "AboutUs", "Services", "Templates", "DropDown", "ContactUs"];
    const divRef = useRef(null);
    return (
        <div className="container mx-auto">
            <menu className="flex justify-around pt-5 items-center">
                <div className="flex justify-center items-center">
                    <img src={logoImg} alt="" className="w-12 h-12" />
                    <span className="text-white text-3xl flex-shrink-0 font-bold">KASUKA</span>
                </div>
                <div className="">
                    <ul className="flex justify-between">
                        {menuListItems.map((li, index) => (
                            <li key={index} className={`px-2 text-[22px] font-medium ${index == 0 ? "text-yellow-400" : "text-white"} `}>
                                {li}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-white">
                    <p>Hello world</p>
                </div>
            </menu >
        </div >


    )
}