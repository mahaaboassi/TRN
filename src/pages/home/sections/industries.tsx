import { industriesData } from "../../../data/data"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Autoplay } from 'swiper/modules';



const Industries = ()=>{
    const lastSlider = ()=>{
        const btn = document.querySelector(".industry .swiper-button-prev") as HTMLElement | null;
        btn?.click();
    }
    const nextSlider = ()=> {
        const btn = document.querySelector(".industry .swiper-button-next") as HTMLElement | null;
        btn?.click();
    }
           
    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
        <path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" fill="white"/>
        </svg>
    return(<div className="container-layout industry flex flex-col gap-5 md:gap-10">
        <div>
            <h2>INDUSTRIES</h2>
            <p>We deliver industry-specific growth strategies across real estate, manufacturing, tech, education, healthcare, retail, hospitality, and entertainment, empowering businesses to innovate, scale, and thrive through smart solutions, operational excellence, and market-driven transformation.</p>
            
        </div>
        <div className="">
            <div className="flex gap-2 justify-end mb-3">
                <div onClick={lastSlider} className="arrow last">{arrow}</div>
                <div onClick={nextSlider} className="arrow next">{arrow}</div>
            </div>
            <Swiper
                className="h-full"
                modules={[Navigation,Autoplay]}
                navigation
                autoplay={{
                    delay: 3000,       // Slide every 3 seconds
                    disableOnInteraction: false, // Keep autoplay after user interaction
                  }}
                spaceBetween={20}
                slidesPerView={4}
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
                      slidesPerView: 4,
                      
                    },
                  }}>   
                  {industriesData.map((e,idx)=>(<SwiperSlide className="py-3 h-full" key={`Why_Choose_Us_${e.name}_${idx}`}>
                    <div className="flex flex-col gap-3 card-industry h-full">
                            <div className="container-icon flex justify-center p-4">
                                {e.icon}
                            </div>
                            <div className="p-4 flex justify-center items-center  flex-col text-center">
                                <h3>{e.name}</h3>
                                <p>{e.description}</p>
                            </div>
                        </div>
                  </SwiperSlide>))}  
            </Swiper>
        </div>

    </div>)
}
export default Industries