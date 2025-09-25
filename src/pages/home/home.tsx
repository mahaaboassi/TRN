import { useEffect } from "react"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import Hero from "./sections/hero"
import Industries from "./sections/industries"
import WhyChooseUs from "./sections/whyChooseUs"

const Home = () => {
    useEffect(()=>window.scrollTo({top:0}),[])
    return(<div>
        <Navbar />
        <div className="home flex flex-col gap-7 md:gap-10 lg:gap-20">
            <Hero/>
            <WhyChooseUs/>
            <Industries/>
        </div>
        <Footer/>
    </div>)
}

export default Home