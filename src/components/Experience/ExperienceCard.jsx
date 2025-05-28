// import React from "react";
// import { MediaCarousel } from "../components/MediaCarousel";
// import { TechBadge } from "../components/TechBadge";
// import FaUnity from "../assets/icons/skills/unity.svg";
// import FaDatabase from "../assets/icons/skills/mongodb.svg";

// export const ProjectCard = () => {
//   const media = [
//     { type: "image", src: "/media/image1.jpg" },
//     { type: "video", src: "/media/video1.mp4" },
//   ];

//   return (
//     <div className="flex bg-white rounded-xl shadow-md p-6 max-w-5xl mx-auto">
//       {/* Left: Media */}
//       <div className="w-1/2 pr-4">
//         <MediaCarousel media={media} />
//       </div>

//       {/* Right: Info */}
//       <div className="w-1/2 pl-4">
//         <h2 className="text-xl font-bold mb-1">Project Name 1</h2>
//         <p className="text-gray-500 mb-3">2/2025 - 3/2025</p>
//         <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
//           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//           <li>Aliquam ac massa cursus, dictum ante ut, pharetra eros.</li>
//           <li>Fusce ullamcorper nulla non eros venenatis.</li>
//         </ul>

//         <p className="font-medium mb-2">Technologies Used:</p>
//         <div className="flex gap-2 flex-wrap">
//           <TechBadge icon={<FaUnity />} label="Unity 3D" />
//           <TechBadge icon={<FaDatabase />} label="MongoDB" />
//           <TechBadge icon={null} label="Shader Graph" />
//         </div>
//       </div>
//     </div>
//   );
// };
