// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export const MediaCarousel = ({ media }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="w-full">
//       <Slider {...settings}>
//         {media.map((item, index) => (
//           <div key={index} className="p-2">
//             {item.type === "image" ? (
//               <img src={item.src} alt={`media-${index}`} className="rounded-xl w-full h-60 object-cover" />
//             ) : (
//               <video controls className="rounded-xl w-full h-60 object-cover">
//                 <source src={item.src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
