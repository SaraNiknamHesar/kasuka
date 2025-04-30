import "./header.css"
import Menu from "../Menu/Menu"

export default function Header() {
    const myImg = "/src/assets/img/hero-bg.jpg";
    return (
        <>
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${myImg})` }}>
                <Menu></Menu>
            </div>

        </>
    )
}