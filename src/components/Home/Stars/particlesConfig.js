const ParticlesConfig = {

  autoplay: true,

  particles: {
    number: {
      value: 100
    },
    stroke: {
      width: 1,
      color: {
        value: "#fff"
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3
      }
    },

    move: {
      random: true,
      speed: 10,
      out_mode: "out"
    }
  }

};
export default ParticlesConfig;