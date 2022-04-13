import React from "react";
import Particles from "react-tsparticles";

export default function Particle() {
  return (
    <Particles
    style={{
        minHeight: '100vh'
      }}
      options={{
        fpsLimit: 40,
        backgroundMode: {
          enable: false,
          zIndex: 1
        },
        background: {
          color: "#000"
        },
        particles: {
          // canvas borders bounce factors
          bounce: {
            horizontal: {
              value: 1.01
            },
            vertical: {
              value: 1.01
            }
          },
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1
          },
          collisions: {
            enable: false,
            // collisions bounce factors
            bounce: {
              horizontal: {
                value: 1.5
              },
              vertical: {
                value: 1.5
              }
            }
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 450
            },
            value: 80
          },
          opacity: {
            value: 0.1
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 9
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          }
        },
        detectRetina: true,
        // bubble: {
        //   distance: 400,
        //   size: 40,
        //   duration: 2,
        //   opacity: 8,
        //   speed: 3
        // }
        
      }}
  />
  );
}
