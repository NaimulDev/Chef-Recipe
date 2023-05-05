import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import cover2 from "../../assets/images/banner/banner-2.jpg";
import cover1 from "../../assets/images/banner/banner-1.jpg";

const Banner = () => {
  const [sliderRef] = useKeenSlider();
  return (
    <div className="relative h-screen">
      <div ref={sliderRef} className="keen-slider">
        <div
          className="keen-slider__slide number-slide1"
          style={{
            backgroundImage: `url(${cover2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="md:w-8/12 w-full mx-auto">
            <div className="py-8 md:py-5 md:px-8 bg-banner relative md:top-1/2 md:translate-y-1/4">
              <h2 className="text-3xl text-center md:text-6xl font-bold text-white pb-5">
                Master Chef
              </h2>
              <p className="text-white text-center text-lg">
                The height quality, Fresh Products paired with excellent
                craftsmanship in cooking. Le Chef was established in 1988 and
                has received the highly acclaimed michelin star in 2001.
                programma non presenta conduttori: le puntate sono introdotte e
                chiuse dalla voce fuori campo di Simone DAndrea e commentate da
                una voce femminile Luisa Ziliotto per le prime cinque edizioni,
                Stefania Nali per la sesta e la settima e Ilaria Egitto
                dallottava!
              </p>
              <div className="text-center">
                <button className="visit">Visit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
