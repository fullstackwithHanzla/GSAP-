import gsap from "gsap"


const Lesson3 = () => {

    function animateCards(){

        gsap.fromTo(
          ".card",
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            y: -50,
            stagger: 0.5,
            ease: "power2.inOut",
          },
        );
    }

    function resetCards(){
        gsap.to(".card" , {
            y : 0 , 
            duration : 1 ,
            stagger : 0.5,
            scale : 1,
            opacity : 1,
            ease : "power2.inOut"
        })
    }

  return (
    <div className="m-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
      <div className="card rounded-xl bg-pink-500 p-8 font-bold">CARD ONE</div>

      <div className="card rounded-xl bg-cyan-500 p-8 font-bold">CARD TWO</div>

      <div className="card rounded-xl bg-amber-500 p-8 font-bold text-slate-950">
        CARD THREE
      </div>

      <button 
      onClick={animateCards}
       className="border py-2 px-4 bg-blue-800 text-white rounded-lg m-2">Animate Cards</button>
      <button 
      onClick={resetCards}
       className="border py-2 px-4 bg-blue-800 text-white rounded-lg m-2">Reset Cards</button>
    </div>
    
  );
}

export default Lesson3