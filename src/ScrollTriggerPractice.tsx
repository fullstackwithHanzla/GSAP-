import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerPractice = () => {
  type listItemsStructure = {
    id: number;
    title: string;
  };

  const listItems: listItemsStructure[] = [
    { id: 1, title: "Welcome to GSAP Practice" },
    { id: 2, title: "Getting Started with ScrollTrigger" },
    { id: 3, title: "Understanding Scrub and Markers" },
    { id: 4, title: "Timeline Animations in React" },
    { id: 5, title: "Pinning Elements on Scroll" },
    { id: 6, title: "Parallax Scrolling Effects" },
    { id: 7, title: "Creating Staggered Animations" },
    { id: 8, title: "Responsive GSAP Breakpoints" },
    { id: 9, title: "Performance Tips for Smooth Scrolling" },
    { id: 10, title: "Building Portfolio Sections with GSAP" },
  ];

  useGSAP(() => {
    // Heading animation
    gsap.utils.toArray(".projects-heading").forEach((heading: any) => {
      gsap.from(heading, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: heading,
          start: "bottom 100%",
          end: "bottom 85%",
          scrub: true,
          markers: true,
        },
      });
    });

    // List items individual scrub animation (prevents batching glitches)
    gsap.utils.toArray(".list-item").forEach((item: any) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.95,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: item,
          start: "bottom 100%",
          end: "bottom 85%",
          scrub: true,
        },
      });
    });
  });

  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        Welcome to GSAP Practice
      </div>
      <div className="bg-black flex flex-col gap-8 min-h-screen items-center justify-center text-white py-20">
        <h1 className="projects-heading text-3xl">
          Welcome to GSAP Project Sections
        </h1>
        <ul className="flex flex-col gap-4 list-none">
          {listItems.map((item) => (
            <li className="list-item text-xl text-gray-300" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
        <div className="min-h-screen"></div>
      </div>
    </>
  );
};

export default ScrollTriggerPractice;
