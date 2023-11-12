
import './content.css';
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
function Aboutus(){
    const swiper = useSwiper();
    return(
        <>(
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
        </>
    )
}

export default Aboutus;