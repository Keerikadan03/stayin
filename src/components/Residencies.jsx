import React, { useState } from 'react' ; 
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react' ; 
import "swiper/css" ;
import '../styles/Residencies.css' ;
import data from '../utils/slider.json' ;
import {sliderSettings} from '../utils/common' ;

const Residencies = () => {

    // const [page, setPage] = useState(1)
    // const [blogData, setBlogData] = useState(data)
    // const pageData = blogData.slice(4*page - 4, 4*page)

    // function leftPage(){
    //     if(page != 1)
    //         setPage(prevPage => prevPage -1)
    // }

    // function rightPage(){
    //     if(page != )
    // }

  return (
    <div>
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    {
                        data.map((card,i)=> (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className="secondaryText r-price">
                                        <span style={{color : "orange"}}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Residencies