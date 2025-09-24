type data = {
    title: string,
    description: string
}
const HeroSeparate = ({title,description}:data) =>{
    return(<div className="hero-separate container-layout !pt-45 md:!pt-60 flex flex-col gap-2 ">
        <h1>{title}</h1>
        <div className="desc-separate">{description}</div>
    </div>)
}
export default HeroSeparate