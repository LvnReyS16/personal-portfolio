export const particle = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      enable: true,
      opacity: 0.03,
      distance: 200,
    },
    move: {
      enable: true,
      direction: "bottom",
      speed: 1,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },

  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.02,
        },
      },
    },
  },
  retina_detect: true,
};
