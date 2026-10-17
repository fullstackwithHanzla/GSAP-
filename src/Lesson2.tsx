import { useRef } from "react";
import gsap from "gsap";

const Lesson2 = () => {

    // * Understanding GSAP's Three main methods

    // Animates towards the values you specify
    // * gsap.to(box , { x : 200 , duration : 1 })
    // ===========================================
    
    // animate from the values you specify to the orignal/current values
    // * gsap.from(box , { opacity : 0 , duration : 1 })
    // Starts transparent and fades to orignal/current opacity
    // ===========================================

        // Specify both the starting values and the ending values.

        /*  gsap.fromTo(
           box,
           { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 }
        ); */


        // Starts small and transparent, then grows to full size and opacity.

  const boxRef = useRef<HTMLDivElement>(null);


  function fadeIn() {
    if (!boxRef.current) return;

    gsap.fromTo(boxRef.current, 
        {scale : 0.86 , opacity : 0 },
        {scale : 1 , opacity : 1 , duration :  1}
    );
  }

  return (
    <>
      <div ref={boxRef} className="border flex items-center justify-center bg-blue-700 text-white rounded-sm h-40 w-40 m-5 text-[14px]">
        Animate ME
      </div>

      

      <button 
      onClick={fadeIn}
      className="border py-2 m-2 px-4 text-white bg-yellow-600">
        Fade in
      </button>

      
    </>
  );
};


export default Lesson2