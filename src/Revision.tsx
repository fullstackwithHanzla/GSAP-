import { useRef } from "react";
import useRevisionAnimation from "./useRevisionAnimation";

const Revision = () => {
  type CardItem = {
    id: number;
    heading: string;
    subheading: string;
  };

  const cards: CardItem[] = [
    {
      id: 1,
      heading: "Performance",
      subheading: "Lightning-fast animations powered by GSAP.",
    },
    {
      id: 2,
      heading: "Customizability",
      subheading: "Easily tweak easing, duration, and effects.",
    },
    {
      id: 3,
      heading: "Responsiveness",
      subheading: "Adapts seamlessly across all screen sizes.",
    },
    {
      id: 4,
      heading: "Scalability",
      subheading: "Clean component architecture with React hooks.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useRevisionAnimation({ container: containerRef });

  return (
    <div
      ref={containerRef}
      className="bg-black text-white min-h-screen flex flex-col gap-4 items-center justify-center"
    >
      <h1 className="hero-heading text-4xl font-semibold ">Welcome to GSAP</h1>

      <div className="hero-box border-white rounded-lg py-2 px-6 bg-blue-700">
        ANIMATION OF OPACITY AND SCALE
      </div>

      <div className="flex gap-3 items-center">
        {cards.map((card) => (
          <div className="card bg-blue-800 rounded-lg p-3 my-2 " key={card.id}>
            <h1 className="text-xl">
              {card.id}. {card.heading}
            </h1>
            <p>{card.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Revision;
