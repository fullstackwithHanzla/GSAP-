import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

function TimelineControls() {
  const container = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.from(".control-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(".control-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
      .from(".control-box", {
        scale: 0.7,
        opacity: 0,
        duration: 0.6,
      });

    timeline.current = tl;
    tl.play();
  }, { scope: container });

  return (
    <div
      ref={container}
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 p-8 text-white"
    >
      <h1 className="control-title text-4xl font-bold">
        Timeline Controls
      </h1>

      <p className="control-subtitle text-slate-300">
        Learn to control animations.
      </p>

      <div className="control-box rounded-xl bg-indigo-600 p-8">
        GSAP in action
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button onClick={() => timeline.current?.play()}>
          Play
        </button>
        <button onClick={() => timeline.current?.pause()}>
          Pause
        </button>
        <button onClick={() => timeline.current?.reverse()}>
          Reverse
        </button>
        <button onClick={() => timeline.current?.restart()}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default TimelineControls;