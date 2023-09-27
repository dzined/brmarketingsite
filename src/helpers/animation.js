import { animate,inView,stagger,spring } from "motion"

export const fadeInStagger=(section,elementName,duration=1,easing="spring")=>{
  const box = document.querySelector(section)

  return inView(elementName, (info) => {
    animate(
      elementName,
      { opacity: [0,1], y: [-20,0]},
      { delay: stagger(0.10) },
      {duration:duration},
      {easing:easing=='spring' ?  spring() : null},
    )
    return (leaveInfo) => {
      animate(elementName,
      { opacity: 0},
      )
    }
  })
}

export const fadeInDown=(elementName,duration=1,delay=0)=>{
  const box = document.getElementById(elementName)

  return inView(box, (info) => {
    animate(
      info.target,
      { opacity: [0,1], y: [-20,0]},
      {
        duration: duration,
        delay:delay
        // offset: [0, 0.25, 0.75]
      }
    )
  })
}
export const fadeIn=(elementName,duration=1)=>{
  const box = document.getElementById(elementName)

  return inView(box, (info) => {
    animate(
      info.target,
      { opacity: [0,1]},
      {
        duration: duration,
        // offset: [0, 0.25, 0.75]
      }
    )
    return (leaveInfo) => {
      animate(box,
      { opacity: 0},
      )
    }
  })
}
export const fadeInUp=(elementName,duration=1)=>{
  const box = document.getElementById(elementName)

  return inView(box, (info) => {
    animate(
      info.target,
      { opacity: [0,1], y: [20,0]},
      {
        duration: duration,
        // offset: [0, 0.25, 0.75]
      }
    )
  })
}