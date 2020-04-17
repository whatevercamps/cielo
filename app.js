/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
// $("#estrellaModal").modal({ show: true });

var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
  $("#iframeAudio").remove();
} else {
  $("#playAudio").remove(); // just to make sure that it will not have 2x audio in the background
}

estrellas &&
  frases &&
  (() => {
    const frase = frases[Math.floor(Math.random() * frases.length)].frase;
    const fraD = document.createElement("span");
    fraD.innerHTML = frase;
    document.getElementById("hidder").appendChild(fraD);

    setTimeout(() => {
      setTimeout(() => {
        document.getElementById("ti").classList.add("appear1");
        setTimeout(() => {
          document.getElementById("subti").classList.add("appear1");
          setTimeout(() => {
            document.getElementById("ti").className = "title disappear5";
            document.getElementById("subti").className = "subtitle disappear5";
          }, 3000);
          document.getElementById("hidder").remove();

          document.getElementById("particles-js").classList.add("appear3");
        }, 1500);
      }, 6000);

      particlesJS(
        "particles-js",

        {
          particles: {
            number: {
              value: estrellas.length,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: true,
                speed: 5,
                opacity_min: 0.8,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: false,
              anim: {
                enable: true,
                speed: 3,
                size_min: 1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.1,
              direction: "top",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 0,
                rotateY: 0,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 0.1,
              },
              push: {
                particles_nb: 0,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          config_demo: {
            hide_card: false,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
          },
        }
      );

      document.getElementById("hidder").className = "hidder2";
    }, 6000);
  })();
