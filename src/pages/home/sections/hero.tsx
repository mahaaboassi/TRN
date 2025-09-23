import { servicesData } from "../../../data/data"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import video from "../../../assets/videos/Dubai_1.mp4"

const Hero = () => {
    const lastSlider = ()=>{
        const btn = document.querySelector(".hero .swiper-button-prev") as HTMLElement | null;
        btn?.click();
    }
    const nextSlider = ()=> {
        const btn = document.querySelector(".hero .swiper-button-next") as HTMLElement | null;
        btn?.click();
    }
    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 8 12" fill="none">
        <path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" fill="white"/>
        </svg>
    return(<div className="hero flex flex-col ">   
            <video autoPlay muted loop playsInline style={{ width: "100%", height: "auto" }}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="content-hero  container-layout ">
                <div className="flex mt-55 xs:mt-70 flex-col gap-2 justify-center ">
                    <h1>FUTURE-READY GROWTH ADVISORY</h1>
                    <p className="desc">Guided by a bold vision to empower businesses we turn challenges into opportunities and transform ambition into reality.</p>
                    <div>
                        <button>Get Starting</button>
                    </div>
                </div>
                
                <div className="">
                    <div className="flex gap-2 justify-center mb-3 items-center">
                        <div onClick={lastSlider} className="arrow-hero last">{arrow}</div>
                        {[...Array(4)].map((_,idx)=>(<div key={`Between_Arrow_${idx}`} className="h-2 rounded-full bg-zinc-100 opacity-[0.5] w-2"></div>))}
                        <div onClick={nextSlider} className="arrow-hero next">{arrow}</div>
                    </div>
                    <Swiper
                        className="h-full"
                        modules={[Navigation]}
                        navigation
                        autoplay={{
                            delay: 3000,       // Slide every 3 seconds
                            disableOnInteraction: false, // Keep autoplay after user interaction
                        }}
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            200: {
                            slidesPerView: 1,
                            },
                            400: {
                            slidesPerView: 2,
                            },
                            640: {
                            slidesPerView: 2,
                            },
                            1024: {
                            slidesPerView: 3,
                            
                            },
                        }}>   
                        {servicesData.map((e,idx)=>(<SwiperSlide className="h-full " key={`Services_${e.name}_${idx}`}>
                            <div className="card-hero min-h-50 flex-col justify-center p-4 flex flex-col gap-1" >
                                <div>{e.icon}</div>
                                <h2>{e.name}</h2>
                                <p>{e.description}</p>
                            </div>
                        </SwiperSlide>))} 
                    </Swiper>
                </div>
            </div>

    </div>
    )
}
export default Hero