import gsap from "gsap";
import { useRef } from "react";

const Lesson1 = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  function moveBox() {
    if(!boxRef.current) return;

    gsap.to(boxRef.current , {
      x : 180,
      rotation : 360,
      duration : 1,
      ease : "circ.inOut"
    })
  }
  function resetBox() {
    if(!boxRef.current) return;

    gsap.to(boxRef.current , {
      x : 0,
      rotation : 0,
      duration : 1,
      ease : "circ.inOut"
    })
  }

  return (
    <>
      <div ref={boxRef} className="border flex items-center justify-center bg-blue-700 text-white rounded-sm h-40 w-40 m-5 text-[14px]">
        Animate ME
      </div>

      <button 
      onClick={moveBox}
      className="border py-2 m-2 px-4 text-white bg-yellow-600">
        Move the BOX
      </button>
      <button
      onClick={resetBox}
      className="border py-2 m-2 px-4 text-white bg-yellow-600">
        Reset
      </button>
    </>
  );
};

export default Lesson1;
