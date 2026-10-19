import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import type React from "react"

gsap.registerPlugin(useGSAP)

type AnimationProps = {
    container : React.RefObject<HTMLElement | null>
}

const useAnimation = ({container} : AnimationProps) => {

    useGSAP(()=>{
        gsap.from(".navLogo",{
            xPercent : -100,
            opacity : 0,
            duration : 1.45,
            ease : "power3.out"
        })
        gsap.from(".connect-letsTalk",{
            xPercent : 100,
            opacity : 0,
            duration : 1.45,
            ease : "power3.out"
        })
        gsap.from(".navItem", {
          y : -100,
          opacity: 0,
          duration: 0.75,
          stagger : 0.05,
          ease: "power3.out",
        }),"-=0.6";
    },{scope : container})
}

export default useAnimation