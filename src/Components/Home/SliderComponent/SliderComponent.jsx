// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';


// // import Swiper core and required modules
// import SwiperCore, {
//   Navigation,
//   Autoplay // Import Autoplay module
// } from 'swiper/core';

// // install Swiper modules
// SwiperCore.use([Navigation, Autoplay]); // Add Autoplay module to SwiperCore

// export default function App() {
//   return (
//     <Box className="App" padding={2}>
//       <Typography
//         variant={'h4'}
//         align={'center'}
//         fontWeight={700}
//       >
//         Swiper + Material-UI example
//       </Typography>
//       {/** Slider main container */}
//       <Box marginTop={4}>
//         <Swiper 
//           navigation={true} 
//           autoplay={{ delay: 3000 }} // Specify autoplay delay in milliseconds
//           className="mySwiper"
//         >
//           {/** Slides */}
//           {['Slide 1', 'Slide 2', 'Slide 3'].map((item, i) => (
//             <SwiperSlide key={i}>
//               <Typography
//                 variant={'h6'}
//                 align={'center'}
//               >
//                 {item}
//               </Typography>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Box>
//     </Box>
//   );
// }
