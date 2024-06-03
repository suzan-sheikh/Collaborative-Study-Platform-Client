
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import { Autoplay, Pagination} from 'swiper/modules'
import Slide from './Slide'

const bgimg1 = 'https://eduma.thimpress.com/demo-ecommerce/wp-content/uploads/sites/100/2023/10/banner-slider5-3.png'
const bgimg2 = 'https://eduma.thimpress.com/demo-ecommerce/wp-content/uploads/sites/100/2023/10/bannerslider1-1.png'
const bgimg3 = 'https://eduma.thimpress.com/demo-ecommerce/wp-content/uploads/sites/100/2023/10/bannerslider2-1.png'

export default function Banner() {
  return (
    <div data-aos="zoom-in" className='mx-auto'>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            heading='Join Forces for Smarter Learning'
            subheading='Experience the power of collaboration with BrainBond...'
            bg='bg-[#00776e]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            heading='Join Forces for Smarter Learning'
            subheading='Experience the power of collaboration with BrainBond...'
            bg='bg-[#1A4D2E]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            heading='Join Forces for Smarter Learning'
            subheading='Experience the power of collaboration with BrainBond...'
            bg='bg-[#254336]'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
