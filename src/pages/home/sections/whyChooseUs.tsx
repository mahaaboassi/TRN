import type React from "react"
import shape from "../../../assets/images/shape.png"

type OptionsItem = {
    number: string,
    name: string,
    description: string
}
const data:OptionsItem[] = [{
    number: "01",
    name: "Client-Centric Focus",
    description: "We prioritize clients success above all else, embracing change and tailoring solution to meet specific challenges to keep businesses ahead of the curve. We listen, comprehend, and strive to collaborate to deliver measurable results."
},{
    number: "02",
    name: "Strategic Collaboration",
    description: "We build meaningful partnerships that drive long-term success with our network of industry experts, incubators, and innovators that add value to every project. Success is a shared journey, we grow together with our clients."
},{
    number: "03",
    name: "Measurable Impact",
    description: "We focus on tangible, data-driven results that make a real difference, with success defined by outcomes, not just ideas or recommendations. We help businesses turn strategy into action and ideas into execution."
}]
const WhyChooseUs: React.FC = ()=>{
    return(<div className="container-layout flex flex-col gap-10">
        <div>
            <h2>YOUR SUCCESS IS OUR PRIORITY</h2>
            <p>Success at The Rangrez Network (TRN) is driven by a set of unwavering core values that guide our approach to business, client relationships, and industry impact.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 ">
            {data.map((e,idx)=>(<div className="relative card-choose flex flex-col gap-3 p-10" key={`Why_Choose_Us_${e.name}_${idx}`}>
                <div className="num-choose ">
                    <img src={shape} alt="Shape" />
                    <span>{e.number}</span>
                </div>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
            </div>))}
        </div>

    </div>)
}
export default WhyChooseUs