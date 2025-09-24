import HeroSeparate from "../../components/heroSeprarte"
import { aboutData } from "../../data/data"
// image
import shape from "../../assets/images/shape.png"

const About = ()=>{
    return(<article>
        <title>About | TRN</title>
        <meta name="description" content={"Discover The Rangrez Network (TRN) – empowering businesses with tailored growth strategies, operational excellence, and innovative solutions. We help organizations navigate change, scale sustainably, and achieve lasting impact"} />
        <meta name="keywords" content={"The Rangrez Network, TRN, business growth strategies, operational excellence, innovation consulting, sustainable scaling, busines"} />
        <link rel="canonical" href={"/about"} />
        {/*  Open Graph for Facebook, LinkedIn, etc.  */}
        <meta property="og:title" content={"About | TRN"} />
        <meta property="og:url" content={"/about"} />
        <meta property="og:description" content={"Discover The Rangrez Network (TRN) – empowering businesses with tailored growth strategies, operational excellence, and innovative solutions. We help organizations navigate change, scale sustainably, and achieve lasting impact"} />
        {/* Twitter  */}
        <meta name="twitter:title" content={"About | TRN"} />
        <meta property="twitter:description" content={"Discover The Rangrez Network (TRN) – empowering businesses with tailored growth strategies, operational excellence, and innovative solutions. We help organizations navigate change, scale sustainably, and achieve lasting impact"} />


        <div className="separate-page flex flex-col gap-7 md:gap-10 lg:gap-20">
        <HeroSeparate title="About"
            description="At The Rangrez Network (TRN), we empower businesses to thrive through tailored growth strategies, operational excellence, and innovation. As catalysts for transformation, we turn ambition into action, helping organizations navigate change, scale sustainably, and achieve lasting impact in dynamic markets."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 container-layout overflow-hidden ">
            {aboutData.map((e,idx)=>{
                return <div style={{
                    animationDelay: `${(idx+1)/10 + 0.1}s`
                }} className="relative cards card-choose flex flex-col gap-3 p-10" key={`Why_Choose_Us_${e.title}_${idx}`}>
                <div className="num-choose ">
                    <img src={shape} alt="Shape" />
                    <span>{e.number}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
            </div>
            })}
        </div>
        <div   className=" container-layout home">
            <h2>OUR APPROACH</h2>
            <p>We combine collaboration, innovation, and deep industry insights to deliver tailored, actionable strategies. By understanding your unique goals, we provide hands-on support from consultation to execution, driving efficiency, growth, and measurable results with your long-term success as our top priority.</p>
            <button>Read More</button>
        </div>

    </div>
    </article>)
}
export default About