import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SliderComponent() {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []); // Empty dependency array to run the effect only once on mount

    // Convert seconds to minutes and seconds for display
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

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

    const images2 = [
        'https://kalamandir.online/static/media/c2.52cd5e20a74c625da15b.webp',
        'https://kalamandir.online/static/media/c3.11ad8ccc8fe1435b0757.webp',
        'https://kalamandir.online/static/media/c6.1602de9aa0bd8b43657a.webp',
        'https://kalamandir.online/static/media/c7.80b4cda9bf6e766fa099.webp',
        'https://kalamandir.online/static/media/c8.cab07317ed5bf663e4c5.webp',
        'https://kalamandir.online/static/media/c9.05a357ab1a826f082d82.webp',
    ];

    const swiperStyle2 = {
        width: '100%',
        height: '100%',
    };

    const imageStyle2 = {
        marginLeft: "50px",
        marginRight: '30px',
        borderRadius: "50%"
    };

    return (
        <div>
            <section style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 1rem", backgroundColor: 'rgb(241 245 249)' }}>
                <div style={{ display: "flex", flexDirection: 'column', gap: '0.3rem' }}>
                    <p style={{ fontSize: "1rem", marginBottom: '2px', color: "#334155" }}>Deals of the day</p>
                    <p style={{ display: "flex", gap: '0.3rem', color: "#334155" }}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                        </svg>
                        {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
                    </p>
                </div>
                <div style={{
                    backgroundColor: 'white',
                    color: "red",
                    padding: "4px 8px",
                    fontSize: "1rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    Sale is Live
                </div>
            </section>
            <section style={{ paddingBottom: '0.5rem', paddingTop: '0.5rem', margin: "10px", background: "white" }}>
                <Swiper
                    style={swiperStyle2}
                    spaceBetween={1}
                    slidesPerView={5}
                    autoplay={{ delay: 100 }}
                >
                    {images2.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img style={imageStyle2} src={image} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
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
        </div>
    );
};
