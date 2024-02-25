import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const sliederComponent = () => {

    const images = [
        'https://kalamandir.online/static/media/banner2.4a2dc8f1d7e54e393e66.webp',
        'https://kalamandir.online/static/media/banner4.f04dcbd764616e16886f.webp',
        'https://kalamandir.online/static/media/banner3.c244679043edcc839c9e.webp',
        'https://kalamandir.online/static/media/banner5.1f1f8819d9a998d2ec63.webp',
    ];

    const swiperStyle = {
        width: '100%',
        height: '100%',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <Swiper
            style={swiperStyle}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 1000 }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img style={imageStyle} src={image} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default sliederComponent