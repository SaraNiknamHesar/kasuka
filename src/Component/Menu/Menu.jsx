
import logo from "/src/assets/img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Menu({ onToggleSlider, menuArray }) {
    const dropDownItems = ["dropdown1", "dropdown2", "dropdown3", "dropdown4"];
    const subMenuItems = ["item1", "item2", "items3"];

    return (
        <div className="container mx-auto">

            <nav className="flex justify-between lg:justify-around pt-5 items-center">
                <div className="text-white block lg:hidden">
                    <div className="group">
                        <FontAwesomeIcon icon="fa-solid fa-bars" className=" text-3xl" id="clicker" onClick={onToggleSlider} />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={logo} alt="" className="w-12 h-12" />
                    <span className="text-white text-3xl flex-shrink-0 font-bold">KASUKA</span>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex justify-between">
                        {menuArray.map((item, index) => (
                            item === "DropDown" ? (
                                <li
                                    key={index}
                                    className="relative group px-2 text-[21px] font-medium text-white hover:text-yelloMain transition-colors duration-200 ease-in-out"
                                >
                                    {item}<FontAwesomeIcon icon={['fa', 'fa-chevron-down']} className="pl-1 " />
                                    <ul
                                        className="absolute top-full left-0 mt-1 w-59 bg-white text-black
                                    rounded shadow-lg z-10
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    translate-y-2 group-hover:translate-y-0
                                    transition-all duration-300 ease-out
                                  "
                                    >
                                        {dropDownItems.map((dropdown, index) =>
                                            index === 1 ? (
                                                <li
                                                    key={index}
                                                    className="relative group/submenu px-2 py-2 cursor-pointer hover:bg-yelloMain transition-all duration-300 ease-out"
                                                >
                                                    {dropdown}
                                                    <FontAwesomeIcon icon={['fa', 'chevron-right']} className="absolute right-2 top-3" />
                                                    <ul
                                                        className="absolute top-0 left-full  w-50 bg-white text-black rounded shadow-lg z-20
                                                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible
                                                    transition-all duration-300 ease-in-out -translate-x-2 group-hover/submenu:-translate-x-0"
                                                    >
                                                        {subMenuItems.map((submenu, index) => <li key={index} className="px-2 py-2 hover:bg-yelloMain cursor-pointer">{submenu}</li>)}
                                                    </ul>
                                                </li>

                                            ) : (
                                                <li key={index} className="font-normal mt-2 px-2 py-2 cursor-pointer
                                             hover:bg-yelloMain transition-all duration-300 ease-out">{item}</li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            ) : (
                                <li key={index} className={`hover:text-yelloMain transition-colors delay-200 ease-in-out px-2 text-[21px] font-medium
                                    ${index == 0 ? "text-yelloMain" : "text-white"} `}>
                                    {item}
                                </li>
                            )
                        ))}
                    </ul>
                </div>
                <div className="text-white">
                    <div className=" border-2 border-yelloMain px-6 py-1.5 rounded cursor-pointer transition transition-300
                    hover:bg-yelloMain ease-in
                    hover:text-grey-btn">Start</div>

                </div>
            </nav >
        </div >


    )
}