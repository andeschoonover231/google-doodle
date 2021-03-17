console.log("OK");

gsap
  .timeline()
  .to("#rightForearm", {
    svgOrigin: "303px 277px",
    rotation: 25,
    duration: 1,
    delay: 2
  })
  .to("#rightForearm", {
    rotation: -35,
    duration: 2
  });

gsap
  .timeline({ repeat: 1 })
  .to("#rightForearm", {
    rotation: 25,
    svgOrigin: "303px 277px",
    duration: 0.5
  })
  .to("#rightForearm", {
    rotation: -35,
    duration: 0.75
  })
  .to("#rightForearm", {
    rotation: 25,
    duration: 0.5
  });
