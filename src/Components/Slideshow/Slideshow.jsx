
import { useState, useEffect } from "react";
import { sliderData } from "./Sildeshow";
import "./Slideshow.css";

function Slideshow() {
        const[currentSlide, setCurrentSlide]=useState(0);
        const slideLength=sliderData.length;

        let intervalSlide;
        let intervalTime=4000;

        const nextSlide = () => {
            setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
        };

        const prevSlide = () => {
            setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1);
        };        
        
        function auto() {
            intervalSlide=setInterval(nextSlide,intervalTime);
        }

        useEffect(()=>{
            setCurrentSlide(0)
        },[]);

        useEffect(()=>{
            if(true){
                auto();
            }
            return () => clearInterval(intervalSlide);
        }, [currentSlide]);
    return (
        <div className="slider">
            <div className="arrow prev" onClick={prevSlide}>&#10094;</div>
            <div className="arrow next" onClick={nextSlide}>&#10095;</div>
            {sliderData.map((slide,index)=> {
                return(
                    <div className={index === currentSlide ? "slide current":"slide"} key={index}>
                        {index === currentSlide && (
                            <img src={slide.image} alt="banner" />
                        )}

                    </div>
                )
            })}
        </div>
    );
}

export default Slideshow;

