import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";


gsap.registerPlugin(useGSAP)

function Lesson4() {
    const [visible, setvisible] = useState<boolean>(true)
  const container = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    const t1 = gsap.timeline()
    t1.from(".hero-heading" , {
        y : 60,
        duration : 1,
        opacity : 0,
        ease : "power3.inOut"
    })

    t1.from(".hero-subtitle" , {
        y : 30,
        duration : 0.8,
        opacity : 0,
        ease : "power2.inOut"
    })

    t1.from(".hero-button" , {
        y : 20,
        duration : 0.6,
        opacity : 0,
        ease : "power1.inOut"
    })

  },{scope : container,
    dependencies : [visible],
    revertOnUpdate : true
  })

  return (
    <div
      ref={container}
      className="flex min-h-screen flex-col gap-4 items-center - justify-center bg-blue-950 text-white"
    >
      {visible && (
        <>
          <h1 className="hero-heading text-5xl font-bold">Welcome to GSAP</h1>
          <p className="hero-subtitle">The GSAP Is an animation library!</p>
          <button className="hero-button border py-2 px-4 bg-amber-600 rounded-lg">
            Explore
          </button>
        </>
      )}

      <button
        onClick={() => setvisible(!visible)}
        className=" border py-2 px-4 bg-amber-600 rounded-lg"
      >
        {visible ? "Unmount" : "Mount"}
      </button>
    </div>
  );
}

export default Lesson4;
