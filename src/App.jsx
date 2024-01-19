import React from "react";
import Image from "./Image";
// import "./App.css";
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard, Parallax, EffectFade, Thumbs } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// const HorizontalScroll = ({ children }) => {
//   const containerRef = useRef(null);

//   const handleScroll = (e) => {
//     // Adjust the scrollLeft property based on the wheel delta
//     containerRef.current.scrollLeft += e.deltaY;
//   };
//   return (
//     <div
// id="mz-gallery-container"
//       className="horizontal-scroll-container"
//       ref={containerRef}
//       onWheel={handleScroll}
//     >
//       <div id="mz-gallery" className="horizontal-scroll-content">{children}</div>
//     </div>
//   );
// };

function App() {
	// const containerRef = useRef(null);

	//   const handleScroll = (e) => {
	//     // Adjust the scrollLeft property based on the wheel delta
	//     containerRef.current.scrollLeft += e.deltaY;
	//   };
	return (
		<>
			{/* <div id="mz-gallery-container" ref={containerRef} onWheel={handleScroll}>
				<div id="mz-gallery"> */}
			{/* <HorizontalScroll>

					{Image.map((item, index) => {
						return (
							<figure key={index}>
								<img
									src={item}
									alt="Statue of Liberty"
									width="700"
									height="700"
								/>
								<figcaption className=""></figcaption>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</figure>
						);
					})}
</HorizontalScroll> */}
			{/* </div>
			</div> */}
{/* <div className="wrapper"> */}

			<Swiper
				effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
    className="swiper_container"
>
				{Image.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							{/* <figure> */}
								<img
									src={item}
								/>
								{/* <figcaption className=""></figcaption>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</figure> */}
						</SwiperSlide>
					);
				})}

				<div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            ←
          </div>
          <div className="swiper-button-next slider-arrow">
            →
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
			</Swiper>
{/* </div> */}

		</>
	);
}

export default App;

