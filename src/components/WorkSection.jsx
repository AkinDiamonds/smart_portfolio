import React from "react"

const works = [
  { title: "Finance Dashboard", img: "https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/66164a50fb49143f9d0ca0d0_homepage-student-work-4-p-500.webp", tech: "React, D3.js" },
  { title: "E-Commerce Platform", img: "https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/66164a50fb49143f9d0ca0d0_homepage-student-work-4-p-500.webp", tech: "Next.js, Stripe" },
  { title: "Portfolio 2024", img: "https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/66164a50fb49143f9d0ca0d0_homepage-student-work-4-p-500.webp", tech: "React, Framer Motion" },
  { title: "SaaS Landing Page", img: "https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/66164a50fb49143f9d0ca0d0_homepage-student-work-4-p-500.webp", tech: "React, GSAP" },
  { title: "Health App", img: "https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/66164a50fb49143f9d0ca0d0_homepage-student-work-4-p-500.webp", tech: "React Native" },
  { title: "Design System", img: "https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/66164a50fb49143f9d0ca0d0_homepage-student-work-4-p-500.webp", tech: "Storybook, CSS Modules" },
];

export default function WorkSection({ worksRef }) {
  return (
    <section id="works" ref={worksRef} className="relative bg-accent-black text-white py-16 overflow-hidden">




      <p className="text-support font-body font-bold text-center text-2xl">See the difference</p>
      <h2 className="relative text-6xl font-display font-bold mb-8 text-accent-white text-center ">
        Designs I Created
      </h2>

      <div className="max-w-7xl mx-auto px-4">


        <div className="grid grid-cols-3 gap-8">

          <div className="relative h-[150vh] overflow-hidden">
            <div className="animate-scroll-up flex flex-col space-y-6">
              {works.concat(works).map((work, i) => (
                <div key={`col1-${i}`} className="w-full">
                  <img src={work.img} alt={work.title} className="w-full object-cover rounded-lg" />
                  <p className="mt-2 text-sm opacity-80">{`Tech stack: ${work.tech}`}</p>
                </div>
              ))}
            </div>
          </div>


          <div className="relative h-[150vh] overflow-hidden">
            <div className="animate-scroll-down flex flex-col space-y-6">
              {works.concat(works).map((work, i) => (
                <div key={`col2-${i}`} className="w-full">
                  <img src={work.img} alt={work.title} className="w-full object-cover rounded-lg" />
                  <p className="mt-2 text-sm opacity-80">{`Tech stack: ${work.tech}`}</p>
                </div>
              ))}
            </div>
          </div>


          <div className="relative h-[150vh] overflow-hidden">
            <div className="animate-scroll-up flex flex-col space-y-6">
              {works.concat(works).map((work, i) => (
                <div key={`col3-${i}`} className="w-full">
                  <img src={work.img} alt={work.title} className="w-full object-cover rounded-lg" />
                  <p className="mt-2 text-sm opacity-80">{`Tech stack: ${work.tech}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <style>
        {`
          @keyframes scroll-up {
            0%   { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            0%   { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          .animate-scroll-up {
            animation: scroll-up 60s linear infinite;
          }
          .animate-scroll-down {
            animation: scroll-down 60s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

