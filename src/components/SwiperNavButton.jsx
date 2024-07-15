import { useSwiper } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SwiperNavButton() {
  const swiper = useSwiper();
  return (
    <div className='order-first mb-4 flex items-center gap-8 justify-end ' >
      <button className=' text-white bg-secondary px-4 py-[6px] ' onClick={() => swiper.slidePrev()} ><ArrowBackIcon /> </button>
      <button className=' text-white bg-secondary px-4 py-[6px] ' onClick={() => swiper.slideNext()} ><ArrowForwardIcon /> </button>
    </div>
  )
}

export default SwiperNavButton