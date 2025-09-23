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
            <ul className="flex gap-4">
                {data.map((e,idx)=><li key={`Menu_${e.name}_${idx}`}>
                    <NavLink to={e.link} >{e.name}</NavLink>
                </li>)}
            </ul>
        </div>
    </nav>)
}
export default Navbar