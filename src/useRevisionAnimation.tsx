import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import type React from "react";

gsap.registerPlugin(useGSAP);

type AnimationProps = {
  container: React.RefObject<HTMLElement | null>
};

const useRevisionAnimation = ({ container }: AnimationProps) => {
    useGSAP(
        () => {
        const t1 = gsap.timeline()
      t1.from(".hero-heading", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      });
      t1.fromTo(
        ".hero-box",
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger : 0.2,
          ease: "power3.inOut",
        },">",
      );

      t1.fromTo(
        ".card",
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger : 0.2,
          ease: "power3.inOut",
        },
      );
    },
    { scope: container },
  );
};

export default useRevisionAnimation;
