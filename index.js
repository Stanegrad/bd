// const tl = gsap.timeline({default: {duration: 0.55}})

// tl.fromTo('.one' , {y:200, duration: 5, opacity: 0}, {y: 0, opacity: 1});


const tl = new TimelineMax();

tl
.to(".container", 0.1, {
    visibility: "visible"
  })

.from(".one", 0.7, {
    opacity: 0,
    y: 100
  })

  .to(
    ".one",
    0.7,
    {
      opacity: 0,
      y: 10
    },
    "+=2"
  )

  .from(".two", 0.4, {
    opacity: 0,
    y: 10
  })

  .to(
    ".two",
    0.7,
    {
      opacity: 0,
      y: 10
    },
    "+=2"
  )

  .staggerFrom(
    ".threee span",
    0.8,
    {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: Expo.easeOut
    },
    0.2
  )
  .staggerTo(
    ".threee span",
    0.8,
    {
      scale: 3,
      opacity: 0,
      rotation: -15,
      ease: Expo.easeOut
    },
    0.2,
    "+=1"
  )

  .from(
    ".four",
    0.5,
    {
        opacity: 0,
        y: 10
    }
  )

  .to(
    ".four",
    0.9,
    {
        opacity: 0,
        y: 10
    },
    "+=2"
  )

  .staggerFromTo(
    ".baloons img",
    2.5,
    {
      opacity: 0.9,
      y: 1400
    },
    {
      opacity: 1,
      y: -1000
    },
    0.2
  )

  .from(
    ".six-pic",
    0.5,
    {
      scale: 3.5,
      opacity: 0,
      x: 25,
      y: -25,
      rotationZ: -45
    },
    "-=2"
  )

  .to(
    ".six-pic",
    0.9,
    {
        opacity: 0,
        y: 10
    },
    "+=2"
  )
  
  .from(
    ".seven",
    0.5,
    {
        opacity: 0,
        y: 10
    }
  )

  .to(
    ".seven",
    0.9,
    {
        opacity: 0,
        y: 10
    },
    "+=200"
  )