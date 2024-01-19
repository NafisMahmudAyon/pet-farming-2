import React, { useRef } from 'react';
import Image from "./Image";
import "./App.css";


const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    // Adjust the scrollLeft property based on the wheel delta
    containerRef.current.scrollLeft += e.deltaY;
  };
  return (
    <div
id="mz-gallery-container"
      className="horizontal-scroll-container"
      ref={containerRef}
      onWheel={handleScroll}
    >
      <div id="mz-gallery" className="horizontal-scroll-content">{children}</div>
    </div>
  );
};

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
<HorizontalScroll>

					{Image.map((item, index) => {
						return (
							<figure key={index}>
								<img
									src={item}
									alt="Statue of Liberty"
									width="700"
									height="700"
								/>
								{/* <figcaption className=""></figcaption> */}
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</figure>
						);
					})}
</HorizontalScroll>
				{/* </div>
			</div> */}
		</>
	);
}

export default App;

