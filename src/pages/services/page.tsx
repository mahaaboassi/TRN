import { useEffect } from "react"
import HeroSeparate from "../../components/heroSeprarte"
import { servicesData } from "../../data/data"


const Services = ()=>{
    useEffect(()=>window.scrollTo({top:0}),[])
    return(<article>
        <title>Deliverd Services | TRN</title>
        <meta name="description" content={"Discover TRN’s delivered services – comprehensive business solutions covering establishment, strategy, finance, branding, automation, and market intelligence. We help organizations streamline operations, attract investment, boost customer value, and achieve sustainable growth in a data-driven economy."} />
        <meta name="keywords" content={"The Rangrez Network, TRN, delivered services, business solutions, strategy consulting, financial advisory, branding services, business automation, market intelligence, operational excellence, customer value, capital investment, business optimization, sustainable business growth, innovation consulting"} />
        <link rel="canonical" href={"/services"} />
        {/*  Open Graph for Facebook, LinkedIn, etc.  */}
        <meta property="og:title" content={"Deliverd Services | TRN"} />
        <meta property="og:url" content={"/services"} />
        <meta property="og:description" content={"Discover TRN’s delivered services – comprehensive business solutions covering establishment, strategy, finance, branding, automation, and market intelligence. We help organizations streamline operations, attract investment, boost customer value, and achieve sustainable growth in a data-driven economy."} />
        {/* Twitter  */}
        <meta name="twitter:title" content={"Deliverd Services | TRN"} />
        <meta property="twitter:description" content={"Discover TRN’s delivered services – comprehensive business solutions covering establishment, strategy, finance, branding, automation, and market intelligence. We help organizations streamline operations, attract investment, boost customer value, and achieve sustainable growth in a data-driven economy."} />


        <div className="separate-page flex flex-col gap-7 md:gap-10 lg:gap-20">
            <HeroSeparate title="TRN DELIVERED SERVICES"
                description="We deliver end-to-end business solutions, from establishment, strategy, and finance to branding, automation, and market intelligence, empowering companies to optimize operations, attract capital, enhance customer value, and achieve sustainable growth in today’s dynamic, data-driven economy."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 !pb-10 container-layout overflow-hidden ">
                
                {servicesData.map((e,idx)=>(<div key={`Services_${e.name}_${idx}`} style={{
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
export default Services