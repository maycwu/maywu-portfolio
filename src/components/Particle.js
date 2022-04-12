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
            opacity: 0.4,
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
            value: 0.2
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 9
          }
        },
        detectRetina: true
      }}
  />
  );
}
