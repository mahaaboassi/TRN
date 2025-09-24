import type React from "react"
import { logo } from "../data/data"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

type NavbarItem = {
    name: string,
    link: string
}
const data: NavbarItem[] = [{
    name: "Home",
    link: "/"
},{
    name: "About",
    link: "/"
},{
    name: "Services",
    link: "/"
},{
    name: "Industries",
    link: "/"
},{
    name: "Contact",
    link: "/"
}]

const Navbar: React.FC = () => {
    const [ isScrolled, setIsScrolled ] = useState<boolean>(false)
    const [ isOpenMenu, setIsOpenMenu ] = useState<boolean>(false)
    useEffect(()=>{
         const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])
    return(<nav className={`flex justify-between container-layout items-center ${isScrolled ? "scrolled" : ""}`}>
        <div>
            { logo }
        </div>
        <div>
             <div onClick={()=>setIsOpenMenu(!isOpenMenu)} className={`container-menu-lines px-3 ${isOpenMenu?"close-icon-menu":""}`}>
                    <div className="line-menu-1"></div>
                    <div className="line-menu-2"></div>
                    <div className="line-menu-3"></div>
                </div>
            <ul className={`flex gap-4 ${isOpenMenu ? "open" : ""}`}>
                {data.map((e,idx)=><li onClick={()=>setIsOpenMenu(false)} key={`Menu_${e.name}_${idx}`}>
                    <NavLink to={e.link} >{e.name}</NavLink>
                </li>)} 
            </ul>
        </div>
    </nav>)
}
export default Navbar