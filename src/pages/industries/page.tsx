import HeroSeparate from "../../components/heroSeprarte"
import { industriesData } from "../../data/data"

const Industires = ()=>{
    return(<article>
        <title> Serviced Industries | TRN</title>
        <meta name="description" content={"Explore TRN’s serviced industries – from real estate, manufacturing, and technology to healthcare, education, retail, hospitality, and entertainment. We drive innovation, operational excellence, and sustainable growth through tailored strategies and market-driven transformation."} />
        <meta name="keywords" content={"The Rangrez Network, TRN, serviced industries, business growth strategies, industry solutions, real estate consulting, manufacturing growth, technology innovation, education solutions, healthcare strategies, retail transformation, hospitality growth, entertainment industry solutions, operational excellence, sustainable scaling, business transformation"} />
        <link rel="canonical" href={"/industries"} />
        {/*  Open Graph for Facebook, LinkedIn, etc.  */}
        <meta property="og:title" content={"Serviced Industries | TRN"} />
        <meta property="og:url" content={"/industries"} />
        <meta property="og:description" content={"Explore TRN’s serviced industries – from real estate, manufacturing, and technology to healthcare, education, retail, hospitality, and entertainment. We drive innovation, operational excellence, and sustainable growth through tailored strategies and market-driven transformation."} />
        {/* Twitter  */}
        <meta name="twitter:title" content={"Serviced Industries | TRN"} />
        <meta property="twitter:description" content={"Explore TRN’s serviced industries – from real estate, manufacturing, and technology to healthcare, education, retail, hospitality, and entertainment. We drive innovation, operational excellence, and sustainable growth through tailored strategies and market-driven transformation."} />


        <div className="separate-page flex flex-col gap-7 md:gap-10 lg:gap-20">
            <HeroSeparate title="TRN SERVICED INDUSTRIES"
                description="We deliver industry-specific growth strategies across real estate, manufacturing, tech, education, healthcare, retail, hospitality, and entertainment, empowering businesses to innovate, scale, and thrive through smart solutions, operational excellence, and market-driven transformation."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 !pb-10 container-layout overflow-hidden ">
                {industriesData.map((e,idx)=>(<div key={`Industry_Page_${e.name}_${idx}`} style={{
                            animationDelay: `${(idx+1)/10 + 0.1}s`
                        }}  className="card-hero cards shadow-xl h-full justify-center p-4 flex flex-col gap-1" >
                        <div>{e.icon}</div>
                        <h2>{e.name}</h2>
                        <p>{e.description}</p>
                    </div>))} 
            </div>

        </div>
    </article>)
}
export default Industires